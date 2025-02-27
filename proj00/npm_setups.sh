#!/bin/sh

npm install --save-dev @babel/core@latest @babel/cli@latest @babel/preset-flow@latest babel-plugin-syntax-hermes-parser@latest
touch .babelrc
npm install --save-dev flow-bin
