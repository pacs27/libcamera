# LIBCAMERA FOR RASPBERRY-PI

A node js library to access the libcamera API on the raspberry pi

![npm](https://img.shields.io/npm/v/libcamera)
![node-current](https://img.shields.io/node/v/libcamera)
![NPM](https://img.shields.io/npm/l/libcamera)


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

For more information visit the following link: [libcamera](https://www.raspberrypi.com/documentation/accessories/camera.html#libcamera-raw).

### libcamera-jpeg

libcamera-jpeg is a simple still image capture application. It deliberately avoids some of the additional features of libcamera-still which attempts to emulate raspistill more fully.

```js
import {libcamera} from "libcamera"


libcamera.jpeg({config:{ output: 'test.jpg' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))
```

### libcamera-still
libcamera-still is very similar to libcamera-jpeg but supports more of the legacy raspistill options. Single image can be captured with:
```js
import {libcamera} from "libcamera"


libcamera.still({config:{ output: 'test.jpg' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))
```

### libcamera-vid

libcamera-vid is the video capture application. By default it uses the Raspberry Pi’s hardware H.264 encoder. It will display a preview window and write the encoded bitstream to the specified output.

```js
import {libcamera} from "libcamera"


libcamera.vid({config:{ output: 'test.h264' }})
.then((result)=> console.log(result))
.catch((err)=>console.log(err))
```

### libcamera-raw
libcamera-raw is like a video recording application except that it records raw Bayer frames directly from the sensor. It does not show a preview window.

```js
import {libcamera} from "libcamera"


libcamera.raw({config:{ output: 'test.raw' }})
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

