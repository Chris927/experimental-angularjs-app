#!/bin/bash -x

grunt clean
rm -rf dist/.git
grunt build
grunt buildcontrol:pages
