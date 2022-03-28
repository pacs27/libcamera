# LIBCAMERA FOR RASPBERRY-PI

A node js library to access the libcamera API on the raspberry pi

![npm](https://img.shields.io/npm/v/node-libcamera)
![npm bundle size](https://img.shields.io/bundlephobia/min/node-libcamera)
![node-current](https://img.shields.io/node/v/node-libcamera)
![NPM](https://img.shields.io/npm/l/node-libcamera)
![checks](https://badgen.net/github/checks/superhussain/node-libcamera)


```js
import {libcamera} from "libcamera"
// For CommonJs modules:
// const {libcamera} = require('libcamera') 


libcamera.jpeg({config:{ output: 'test.jpg' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))
```

## Installation

```console
$ npm install libcamera
```
## Docs

### libcamera-jpeg

```js
import {libcamera} from "libcamera"


libcamera.jpeg({config:{ output: 'test.jpg' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))
```

## Errors

In some raspberry pi 3+ there is an error when the libcamera preview is used. In otder to fix the error you have two options:

1. Disable HW acceleration: `libcamera-still --qt-preview`
2. Enable glamor HW: 

    * Run sudo raspi-config
    * Navigate to Advanced Options
    * Enable Glamor graphic acceleration
    * Reboot

