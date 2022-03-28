# LIBCAMERA-JS FOR RASPBERRY-PI

A node js library to access the libcamera API on the raspberry pi

![npm](https://img.shields.io/npm/v/node-libcamera)
![npm bundle size](https://img.shields.io/bundlephobia/min/node-libcamera)
![node-current](https://img.shields.io/node/v/node-libcamera)
![NPM](https://img.shields.io/npm/l/node-libcamera)
![checks](https://badgen.net/github/checks/superhussain/node-libcamera)


```js
import libcamera from "libcamera-js"

libCamera.jpeg({config:{ output: 'test.jpg' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))

const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)
```

## Installation

```console
$ npm install libcamera-js
```
## Docs

### libcamera-jpeg

```js
import libcamera from "libcamera-js"

libCamera.jpeg({config:{ output: 'test.jpg' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))

const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)
```

## Errors

In some raspberry pi 3+ there is an error when the libcamera preview is used. In otder to fix the error you have two options:

1. Disable HW acceleration: `libcamera-still --qt-preview`
2. Enable glamor HW: 

    * Run sudo raspi-config
    * Navigate to Advanced Options
    * Enable Glamor graphic acceleration
    * Reboot

