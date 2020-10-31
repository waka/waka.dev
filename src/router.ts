import path from 'path';
import { NotFoundError } from './errors';
import { renderIndex, renderArchive, renderShow, renderFeed, renderNotFound } from './renderer';
import { Config } from './types';

type Response = { response: string, status: number };
type RenderType = 'index'
  | 'archive'
  | 'show'
  | 'feed'
  | '';

/**
 * Return text and status for response.
 */
const handleEvent = async (uri: string, config: Config): Promise<Response> => {
  const url = new URL(uri);

  try {
    switch (getRenderType(url.pathname)) {
      case 'index':
        return { response: await renderIndex(config), status: 200 };
      case 'archive':
        return { response: await renderArchive(config), status: 200 };
      case 'show':
        const title = decodeURIComponent(path.basename(url.pathname));
        return { response: await renderShow(title, config), status: 200 };
      case 'feed':
        return { response: await renderFeed(config), status: 200 };
      default:
        throw new NotFoundError();
    }
  } catch (e) {
    if (e instanceof NotFoundError) {
      return { response: renderNotFound(config), status: 404 };
    }
    throw e;
  }
};

const getRenderType = (pathname: string): RenderType => {
  if (pathname === '/') {
    return 'index';
  }
  if (pathname === '/archive') {
    return 'archive';
  }
  if (pathname === '/feed') {
    return 'feed';
  }
  if (pathname.startsWith('/entry')) {
    return 'show';
  }
  return '';
};

export { handleEvent };
