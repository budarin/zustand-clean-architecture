#!/bin/sh

set -e

NODE_ENV=production webpack -c ./configs/webpack/prod.webpack.config.js;