import { handleEvent } from './router';
import { Config } from './types';

const getConfig = (): Config => {
  const accessToken = process.env.GH_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('GH_ACCESS_TOKEN must be required.');
  }
  return {
    site: {
      title: 'waka.dev',
      author: '@yo_waka',
      faviconURL: 'https://raw.githubusercontent.com/waka/waka.dev/master/assets/favicon.ico',
      iconURL: 'https://raw.githubusercontent.com/waka/waka.dev/master/assets/waka.png'
    },
    github: {
      accessToken,
      repository: 'waka/waka.dev',
      author: 'waka',
      label: 'public'
    }
  };
};

const getResponse = async (request: Request): Promise<Response> => {
  try {
    const config = getConfig();
    // TODO cache response
    const { response, status } = await handleEvent(request.url, config);
    return new Response(response, {
      status,
      headers: { 'content-type': 'text/html' }
    });
  } catch (e) {
    return new Response(e.message, {
      status: 500,
      headers: { 'content-type': 'text/html' }
    })
  }
};

addEventListener(
  'fetch',
  (event: FetchEvent) => event.respondWith(getResponse(event.request))
);
