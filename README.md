# Freestyle

Freestyle is an open source framework created to optimize the websites developed by Formaweb.

## Instalação

This application requires `node`...

  $ brew install node

...and `npm`:

  $ curl -L https://npmjs.com/install.sh | sh

Now install `gulp` in the global scope and then in the development folder.

  $ npm install --global gulp
  $ npm install --save-dev gulp

To install all dependencies, run the following command:

  $ npm install --save-dev gulp-autoprefixer gulp-minify-html gulp-sass


## Utilização

The application can work in two ways: creating a build or listening the files.

**Create a build** is simple, just run the main command:

  $ gulp

And for **development** is recommended the use of `watch` command that identifies real-time modições the files, snapshot build.

  $ gulp watch