<h1>Terminus stylelint Frontend Configuration</h1>

[![CircleCI][circle-badge]][circle-link]
[![DavidDM][david-badge]][david-link]
[![DavidDM Dev][david-dev-badge]][david-link]
<br>
[![semantic-release][semantic-release-badge]][semantic-release]
[![MIT License][license-image]][license-url]
<br>
[![NPM version][npm-version-image]][npm-url]
[![Github release][gh-release-badge]][gh-releases]


A collection of SCSS lint rules for Terminus frontend codebases.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation


```
$ yarn add stylelint @terminus/stylelint-config-frontend -D
```

## Set up

#### 1. Create the file and extend our ruleset

Create a stylelint config file at the root level named `stylelint.config.js` and extend our base ruleset:

```javascript
module.exports = {
  extends: '@terminus/stylelint-config-frontend',
}
```


#### 2. Add a linting command to `package.json`

- The `--project` flag reference should point to the primary app `tsconfig` file.
- The `--config` flag reference should point to the ci `tslint` file.

```json
{
  "name": "My Project",
  "scripts": {
    "lint:scss": "npx stylelint 'your/path/to/styles/**/*.scss'"
  }
}
```




<!--
  LINKS
-->

<!-- BADGES -->
[circle-badge]:           https://circleci.com/gh/GetTerminus/stylelint-config-frontend/tree/release.svg?style=shield
[npm-version-image]:      http://img.shields.io/npm/v/@terminus/stylelint-config-frontend.svg
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[license-image]:          http://img.shields.io/badge/license-MIT-blue.svg
[gh-release-badge]:       https://img.shields.io/github/release/GetTerminus/stylelint-config-frontend.svg
[gh-releases]:            https://github.com/GetTerminus/stylelint-config-frontend/releases/
[circle-link]:            https://circleci.com/gh/GetTerminus/stylelint-config-frontend/tree/release
[semantic-release]:       https://github.com/semantic-release/semantic-release
[npm-url]:                https://npmjs.org/package/@terminus/stylelint-config-frontend
[license-url]:            https://github.com/GetTerminus/stylelint-config-frontend/blob/release/LICENSE
[greenkeeper-badge]:      https://badges.greenkeeper.io/GetTerminus/stylelint-config-frontend.svg
[greenkeeper-url]:        https://greenkeeper.io/
[david-dev-badge]:        https://david-dm.org/GetTerminus/stylelint-config-frontend/dev-status.svg
[david-badge]:            https://david-dm.org/GetTerminus/stylelint-config-frontend.svg
[david-link]:             https://david-dm.org/GetTerminus/stylelint-config-frontend?view=list
