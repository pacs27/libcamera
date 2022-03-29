# LIBCAMERA FOR RASPBERRY-PI

A node js library to access the libcamera API on the raspberry pi

![npm](https://img.shields.io/npm/v/libcamera)
![npm bundle size](https://img.shields.io/bundlephobia/min/libcamera)
![node-current](https://img.shields.io/node/v/libcamera)
![NPM](https://img.shields.io/npm/l/libcamera)
![checks](https://badgen.net/github/checks/pacs27/libcamera)
![](https://badgen.net/github/release/pacs27/libcamera)
![last-commit](https://badgen.net/github/last-commit/pacs27/libcamera)


```js
import { libcamera } from 'libcamera';
// For CommonJs modules:
// const {libcamera} = require('libcamera')

libcamera
  .jpeg({ config: { output: 'test.jpg' } })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

## Installation

```console
$ npm install libcamera
```

## Quick Start

The library has 4 main methods (jpeg, still, vid and raw). In this section you can see a simple example of how to use these methods.

For more information go to the Docs section, next to this one, or visit the [libcamera API documentation.](https://www.raspberrypi.com/documentation/accessories/camera.html#libcamera-raw)

### libcamera-jpeg

libcamera-jpeg is a simple still image capture application. It deliberately avoids some of the additional features of libcamera-still which attempts to emulate raspistill more fully.

```js
import { libcamera } from 'libcamera';

libcamera
  .jpeg({ config: { output: 'test.jpg' } })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

### libcamera-still

libcamera-still is very similar to libcamera-jpeg but supports more of the legacy raspistill options. Single image can be captured with:

```js
import { libcamera } from 'libcamera';

libcamera
  .still({ config: { output: 'test.jpg' } })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

### libcamera-vid

libcamera-vid is the video capture application. By default it uses the Raspberry Pi’s hardware H.264 encoder. It will display a preview window and write the encoded bitstream to the specified output.

```js
import { libcamera } from 'libcamera';

libcamera
  .vid({ config: { output: 'test.h264' } })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

### libcamera-raw

libcamera-raw is like a video recording application except that it records raw Bayer frames directly from the sensor. It does not show a preview window.

```js
import { libcamera } from 'libcamera';

libcamera
  .raw({ config: { output: 'test.raw' } })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

## Docs

For more information visit the following link: [libcamera](https://www.raspberrypi.com/documentation/accessories/camera.html#libcamera-raw).

**libcamera** is a new software library aimed at supporting complex camera systems directly from the Linux operating system. In the case of the Raspberry Pi it enables us to drive the camera system directly from open source code running on ARM processors. The proprietary code running on the Broadcom GPU, and to which users have no access at all, is almost completely by-passed.

The Raspberry Foundation has developed a series of libcamera applications that aim to replace the old Raspistill API while maintaining most of the options it offered.

This four applications are:

- **jpeg**: simple still image capture application. It deliberately avoids some of the additional features of libcamera-still which attempts to emulate raspistill more fully.
- **still**: Is very similar to libcamera-jpeg but supports more of the legacy raspistill options.
- **vid**: Is very similar to libcamera-jpeg but supports more of the legacy raspistill options.By default it uses the Raspberry Pi’s hardware H.264 encoder. It will display a preview window and write the encoded bitstream to the specified output.
- **raw**: Is like a video recording application except that it records raw Bayer frames directly from the sensor. It does not show a preview window.

To use this method, the library exposes an object called libcamera that can be called using this syntax:

```js
// For ES modules
import { libcamera } from 'libcamera';
```

```js
// For CommonJs modules:
const { libcamera } = require('libcamera');
```

This object has four methods that call each raspberry libcamera application

The methods have the same structure. Each of them has a config object as a parameter that will be in charge of specifying the camera configuration options.

```js
libcamera.still({
  config: {
    //  add here all the application options
  },
});
```

### Options
***Info**: This section details all the options available in the different applications. They may not all be there, feel free to contribute if you find any missing.*

The options can be divided in two group:

- Flags: It has no value. It can only be true or false. An example is the nopreview flag:

```js
import { libcamera } from 'libcamera';

libcamera
  .still({
    config: {
      output: 'test.jpg',
      nopreview: true,
    },
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

- Options: It has a value that can be a string or a number, depending on the option. An example is the output option:

```js
import { libcamera } from 'libcamera';

libcamera
  .still({
    config: {
      output: 'test.jpg',
    },
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

Each app has its on options avaliable. These options are:

#### COMMON OPTIONS

Common options are available in all 4 apps

**Flags**

- help: Print help information for the application
- version: Print out a software version number
- list-cameras: List the cameras available for use
- fullscreen: Fullscreen preview mode
- qt-preview: Use Qt-based preview window
- nopreview: Do not display a preview window
- rawfull: Force sensor to capture in full resolution mode
- hflip: Read out with horizontal mirror
- vflip: Read out with vertical flip
- flush: Flush output files immediately

**Options**

- camera: Selects which camera to use `<index>`
- config: Read options from the given file `<filename>`
- timeout: Delay before application stops automatically `<milliseconds>`
- preview: Preview window settings `<x,y,w,h>`
- info-text: Set window title bar text `<string>`
- width: Capture image width `<width>`
- height: Capture image height `<height>`
- viewfinder-width: Capture image width `<width>`(preview)
- viewfinder-height: Capture image height `<height>`(preview)
- mode: Specify sensor mode, given as `<width>:<height>:<bit-depth>:<packing>`
- viewfinder-mode: Specify sensor mode, given as `<width>:<height>:<bit-depth>:<packing>`
- lores-width: Low resolution image width `<width>`
- lores-height: Low resolution image height `<height>`
- rotation: Use hflip and vflip to create the given rotation `<angle>`
- roi: Select a crop (region of interest) from the camera `<x,y,w,h>`
- sharpness: Set image sharpness `<number>`
- contrast: Set image contrast `<number>`
- brightness: Set image brightness `<number>`
- saturation: Set image colour saturation `<number>`
- ev: Set EV compensation `<number>`
- shutter: Set the exposure time in microseconds `<number>`
- gain: Sets the combined analogue and digital gains `<number>`
- analoggain: Synonym for --gain
- metering: Set the metering mode `<string>`
- exposure: Set the exposure profile `<string>`
- awb: Set the AWB mode `<string>`
- awbgains: Set fixed colour gains `<number,number>`
- denoise: Set the denoising mode `<string>`
- tuning-file: Specify the camera tuning to use `<string>`
- output: Output file name `<string>`
- wrap: Wrap output file counter at `<number>`

#### JPEG

No additional options

#### STILL

Has additional options that attempt to emulate the raspistill API.

**Flags**

- datetime: Use date format for the output file names
- timestamp: Use system timestamps for the output file names
- keypress: Capture image when Enter pressed
- signal: Capture image when SIGUSR1 received
- raw: Save raw file

**Options**

- quality: JPEG quality ```<number>```
- exif: Add extra EXIF tags `<string>`
- timelapse: Time interval between timelapse captures `<milliseconds>`
- framestart: The starting value for the frame counter `<number>`
- restart: Set the JPEG restart interval `<number>`
- thumb: Set thumbnail parameters `<w:h:q>` or none
- encoding: Set the still image codec `<string>` (jpg, png, bmp, rgb, yuv420)
- latest: Make symbolic link to latest file saved `<string>`

#### VID

Has additional options.

**Flags**
 - keypress: Capture image when Enter pressed
  -  signal: Capture image when SIGUSR1 received
  -  split: Split multiple recordings into separate files
   - inline: Write sequence header in every I frame (H.264 only)
  -  listen: Wait for an incoming TCP connection

  **Options**

  - quality: JPEG quality `<number>`
  - bitrate: H.264 bitrate `<number>`
  - 'intra: Intra-frame period (H.264 only) `<number>`
  - profile: H.264 profile `<string>`
  - level: H.264 level `<string>`
  - codec: Encoder to be used `<string>` h264 mjpeg yuv420
  - initial: Start the application in the recording or paused state `<string>`
  - segment: Write the video recording into multiple segments `<number>`
  - circular: Write the video recording into a circular buffer of the given `<size>`
  - frames: Record exactly this many frames `<number>`
  
  #### RAW

Has additional options.

 **Options**

  - segment: direct each to a separate file `<segment size (given in milliseconds)>`


  ## Errors

In some raspberry pi 3+ there is an error when the libcamera preview is used. In otder to fix the error you have two options:

1. Disable HW acceleration: `libcamera-still --qt-preview`
2. Enable glamor HW:

   - Run sudo raspi-config
   - Navigate to Advanced Options
   - Enable Glamor graphic acceleration
   - Reboot
