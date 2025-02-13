# @pm4ml/ts-utils

A collection of Typescript utilities for the frontend apps.

### Installation

To install the module simply run `yarn add @pm4ml/ts-utils`.

### Usage

```ts
// import everything
import * as utils from '@pm4ml/ts-utils';
await utils.async.sleep(10);

// import all from module
import * as async from '@pm4ml/ts-utils/lib/async';
await async.sleep(10);

// import from module as named export
import { sleep } from '@pm4ml/ts-utils/lib/async';
await sleep(10);

// import a single utility
import sleep from '@pm4ml/ts-utils/lib/async/sleep';
await sleep(10);

// import a type
import { TextFileContent } from '@pm4ml/ts-utils/lib/file';
```

Modules available:

- [async](./async/README.md)
