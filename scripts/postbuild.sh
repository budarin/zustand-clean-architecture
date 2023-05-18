#!/bin/sh

set -e

if [ -n "$CI" ]; then
    rm -rf docs
    cp -R dist/. docs/
fi