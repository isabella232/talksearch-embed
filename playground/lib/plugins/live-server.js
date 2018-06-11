/* eslint-disable no-param-reassign, valid-jsdoc */
import metalsmithBrowserSync from 'metalsmith-browser-sync';
import pify from 'pify';

const browserSync = pify(
  metalsmithBrowserSync({
    server: 'playground/dist',
    files: ['playground/src/**/*.md', 'playground/layouts/*.pug'],
  })
);

function plugin() {
  return async function liveServer(files, pipeline, next) {
    await browserSync(files, pipeline);
    next();
  };
}

export default plugin;
