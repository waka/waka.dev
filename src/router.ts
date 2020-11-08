import path from 'path';
import { NotFoundError } from './errors';
import {
  renderIndex,
  renderArchive,
  renderShow,
  renderFeed,
  renderRobots,
  renderNotFound
} from './renderer';
import { Config, Response } from './types';

type RenderType = 'index'
  | 'archive'
  | 'show'
  | 'feed'
  | 'robots'
  | '';

/**
 * Return text and status for response.
 */
const handleRequest = async (uri: string, config: Config): Promise<Response> => {
  const url = new URL(uri);
  let contentType = '';
  let response = '';

  try {
    switch (getRenderType(url.pathname)) {
      case 'index':
        contentType = 'text/html';
        response = await renderIndex(uri, config);
        break;
      case 'archive':
        contentType = 'text/html';
        response = await renderArchive(uri, config);
        break;
      case 'show':
        contentType = 'text/html';
        const title = decodeURIComponent(path.basename(url.pathname));
        response = await renderShow(uri, title, config);
        break;
      case 'feed':
        contentType = 'application/xml';
        response = await renderFeed(config);
        break;
      case 'robots':
        contentType = 'text/plain';
        response = renderRobots();
        break;
      default:
        throw new NotFoundError();
    }
    return { contentType, response, status: 200 };
  } catch (e) {
    if (e instanceof NotFoundError) {
      return { contentType: 'text/html', response: renderNotFound(config), status: 404 };
    }
    return { contentType: 'text/html', response: e.message, status: 500 };
  }
};

const getRenderType = (pathname: string): RenderType => {
  if (pathname === '/') {
    return 'index';
  }
  if (pathname === '/archive') {
    return 'archive';
  }
  if (pathname === '/feed' || pathname === '/feed.xml') {
    return 'feed';
  }
  if (pathname === '/robots.txt') {
    return 'robots';
  }
  if (pathname.startsWith('/entry')) {
    return 'show';
  }
  return '';
};

export { handleRequest };
