# in-own
[![Build Status](https://travis-ci.org/QingWei-Li/in-own.svg?branch=master)](https://travis-ci.org/QingWei-Li/in-own)
[![Coverage Status](https://coveralls.io/repos/github/QingWei-Li/in-own/badge.svg?branch=master)](https://coveralls.io/github/QingWei-Li/in-own?branch=master)
[![npm](https://img.shields.io/npm/v/in-own.svg)](https://www.npmjs.com/package/in-own)

> A safer hasOwnProperty wrapper

## Installation
```shell
npm i in-own -S
```

## Usage
```javascript
import inOwn from 'in-own'
var obj = { key: 'value', age: 18 }
var inObj = inOwn(obj)

inObj('key') // => true
inObj('gender') // => false
```

## License
MIT
