/* eslint-disable no-param-reassign, valid-jsdoc */
import pug from 'pug';
import fs from 'fs';
import path from 'path';
import pMap from 'p-map';
import pify from 'pify';
import _ from 'lodash';
import $glob from 'glob';
const readFile = pify(fs.readFile);
const glob = pify($glob);

// Find a file matching a specific pattern that is in the same folder and
// returns its relative path
async function findSiblingFile(inputFile, pattern) {
  const dirname = _.get(inputFile, 'path.dir');
  const basedir = `./playground/src/${dirname}`;

  const matches = await glob(`${basedir}/${pattern}`);
  if (_.isEmpty(matches)) {
    return null;
  }
  const basename = path.basename(_.first(matches));
  return `./${basename}`;
}

// Set all default metadata of the file, avoiding boilerplate
async function setDefaultMetadata(inputFile) {
  // Add default metadata
  const defaultMetadata = {
    layout: 'search.pug',
    apiKey: 'YOUR_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
  };
  const newFile = _.merge(defaultMetadata, inputFile);

  // Find the path to the logos
  defaultMetadata.logoPath = await findSiblingFile(inputFile, 'logo.*');
  defaultMetadata.logoSmallPath = await findSiblingFile(inputFile, 'logo-small.*');

  // Add .pug layout
  const layout = newFile.layout;
  if (!_.endsWith(layout, '.pug')) {
    newFile.layout = `${layout}.pug`;
  }

  return newFile;
}

async function convertToHtml(inputFile) {
  const layoutPath = `./playground/layouts/${inputFile.layout}`;
  const layoutContent = await readFile(layoutPath);

  const pugOptions = {
    basedir: './playground/',
    ...inputFile,
  };

  const content = pug.render(layoutContent, pugOptions);

  const newFile = inputFile;
  newFile.contents = new Buffer(content);

  return newFile;
}

/**
 * Transforms all pug files into HTML with wrapping layout
 **/
function plugin() {
  return async function compileHtml(files, pipeline, next) {
    const pugFiles = _.filter(_.keys(files), filePath =>
      _.endsWith(filePath, '.pug')
    );

    if (_.isEmpty(pugFiles)) {
      next();
      return;
    }

    await pMap(pugFiles, async filePath => {
      let file = files[filePath];

      // We first set all the default metadata
      file = await setDefaultMetadata(file, filePath);

      // We convert to html
      file = await convertToHtml(file);

      // Set it as html version
      delete files[filePath];
      const htmlPath = filePath.replace('.pug', '.html');
      files[htmlPath] = file;
    });

    next();
  };
}

export default plugin;

