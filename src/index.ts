import { handleRequest } from './proxy';
import { Config, Env } from './types';

const getConfig = (env: Env): Config => {
  const lastBuildDate = env.BUILD_DATE;
  if (!lastBuildDate) {
    throw new Error('BUILD_DATE must be required.');
  }
  const accessToken = env.GH_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('GH_ACCESS_TOKEN must be required.');
  }

  return {
    site: {
      title: 'waka.dev',
      description: '日々のこと、技術。',
      author: '@yo_waka',
      lastBuildDate,
      siteURL: 'https://waka.dev',
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

const getResponse = async (request: Request, env: Env): Promise<Response> => {
  try {
    const config = getConfig(env);
    const {
      contentType,
      response,
      status
    } = await handleRequest(request.url, config, env);
    return new Response(response, {
      status,
      headers: { 'content-type': contentType }
    });
  } catch (e) {
    return new Response(e.message, {
      status: 500,
      headers: { 'content-type': 'text/html' }
    });
  }
};

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    return getResponse(request, env);
  }
}