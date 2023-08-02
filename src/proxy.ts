import { handleRequest as handleOriginRequest } from './router';
import { Config, Env, Response } from './types';

/**
 * Use Cloudflare Workers KV Namespace.
 */
const handleRequest = async (uri: string, config: Config, env: Env): Promise<Response> => {
  const cacheKey = (new URL(uri)).pathname;
  const cache: Response | null = await env.CACHED_RESPONSE.get(cacheKey, 'json');
  if (cache) {
    return cache; // use cache
  }

  const response = await handleOriginRequest(uri, config);
  // put cache if contents exists
  if (response.status === 200) {
    await env.CACHED_RESPONSE.put(cacheKey, JSON.stringify(response));
  }

  return response;
};

export { handleRequest };
