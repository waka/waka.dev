import { handleRequest as handleOriginRequest } from './router';
import { Config, Response } from './types';

declare const CACHED_RESPONSE: KVNamespace;

/**
 * Use Cloudflare Workers KV Namespace.
 */
const handleRequest = async (uri: string, config: Config): Promise<Response> => {
  const cacheKey = (new URL(uri)).pathname;
  const cache: Response | null = await CACHED_RESPONSE.get(cacheKey, 'json');
  if (cache) {
    return cache; // use cache
  }

  const response = await handleOriginRequest(uri, config);
  // put cache if contents exists
  if (response.status === 200) {
    await CACHED_RESPONSE.put(cacheKey, JSON.stringify(response));
  }

  return response;
};

export { handleRequest };
