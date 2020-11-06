import { handleRequest as handleOriginRequest } from './router';
import { Config, Response } from './types';

declare const CACHED_RESPONSE: KVNamespace;

/**
 * Use Cloudflare Workers KV Namespace.
 */
const handleRequest = async (uri: string, config: Config): Promise<Response> => {
  const cache: Response | null = await CACHED_RESPONSE.get(uri, 'json');
  if (cache) {
    return cache; // use cache
  }
  const response = await handleOriginRequest(uri, config);
  // put cache
  await CACHED_RESPONSE.put(uri, JSON.stringify(response));

  return response;
};

export { handleRequest };
