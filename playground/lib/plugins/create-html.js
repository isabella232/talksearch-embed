/* eslint-disable no-param-reassign, valid-jsdoc */
import _ from 'lodash';
import metalsmithMarkdown from 'metalsmith-markdown';
import metalsmithLayouts from 'metalsmith-layouts';
import pify from 'pify';

const markdown = pify(metalsmithMarkdown());
const layouts = pify(
  metalsmithLayouts({
    directory: './playground/layouts',
    default: 'search.pug',
    pattern: '**/*.html',
    engineOptions: {
      pretty: true,
    },
  })
);

function addMissingLayoutSuffix(files) {
  _.each(files, (data, path) => {
    const layout = _.get(data, 'layout');
    if (!layout) {
      return;
    }

    if (!_.endsWith(layout, '.pug')) {
      files[path].layout = `${layout}.pug`;
    }
  });
}

/**
 * Transforms all markdown files into HTML with wrapping layout
 **/
function plugin() {
  return async function createHtml(files, pipeline, next) {
    await markdown(files, pipeline);
    addMissingLayoutSuffix(files);
    await layouts(files, pipeline);
    next();
  };
}

export default plugin;
