import { handleEvent } from 'pigeon';

addEventListener('fetch', event => {
  try {
    const context = require.context('./posts/', false, /\.md$/);
    event.respondWith(handleEvent(event, context));
  } catch (e) {
    event.respondWith(
      new Response(e.message, {
        status: 500,
        headers: { 'content-type': 'text/html' }
      })
    );
  }
});
