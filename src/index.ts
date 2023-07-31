import { handleRequest } from './proxy';
import { Config, Env } from './types';

const getConfig = (): Config => {
  console.log(process.env);
  const lastBuildDate = process.env.BUILD_DATE;
  if (!lastBuildDate) {
    throw new Error('BUILD_DATE must be required.');
  }
  const accessToken = process.env.GH_ACCESS_TOKEN;
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

const getResponse = async (request: Request): Promise<Response> => {
  try {
    const config = getConfig();
    const {
      contentType,
      response,
      status
    } = await handleRequest(request.url, config);
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
  async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    console.log('Hi');
    return getResponse(request);
  }
}