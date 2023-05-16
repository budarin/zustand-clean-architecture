#!/bin/sh

set -e

NODE_ENV=production webpack -c ./configs/prod.webpack.config.js;