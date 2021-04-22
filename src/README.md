# @modusbox/ts-utils

A collection of Typescript utilities for the frontend apps.

### Installation

To install the module simply run `yarn add @modusbox/ts-utils`.

### Usage

```ts
// import everything
import * as utils from '@modusbox/ts-utils';
// await utils.async.sleep(10);

// import all from module
import * as async from '@modusbox/ts-utils/lib/async';
// await async.sleep(10);

// import from module as named export 
import { sleep } from '@modusbox/ts-utils/lib/async';
// await sleep(10);

// import a single utility
import sleep from '@modusbox/ts-utils/lib/async/sleep';
// await sleep(10);

// import a type
import { TextFileContent } from '@modusbox/ts-utils/lib/file';
```