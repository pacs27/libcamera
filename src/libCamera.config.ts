import { Commands } from './types';

export const commonCommands: Commands = {
  Flags: [
    'help', // Print help information for the application
    'version', // Print out a software version number
    'list-cameras', // List the cameras available for use
    'fullscreen', // Fullscreen preview mode
    'qt-preview', // Use Qt-based preview window
    'nopreview', // Do not display a preview window
    'rawfull', // Force sensor to capture in full resolution mode
    'hflip', // Read out with horizontal mirror
    'vflip', // Read out with vertical flip
    'flush', // Flush output files immediately
  ],
  Options: [
    'lens-position', // Set lens position <number>
    'camera', // Selects which camera to use <index>
    'config', // Read options from the given file <filename>
    'timeout', // Delay before application stops automatically <milliseconds>
    'preview', // Preview window settings <x,y,w,h>
    'info-text', // Set window title bar text <string>
    'width', // Capture image width <width>
    'height', // Capture image height <height>
    'viewfinder-width', // Capture image width <width> (preview)
    'viewfinder-height', // Capture image height <height> (preview)
    'mode', // Specify sensor mode, given as <width>:<height>:<bit-depth>:<packing>
    'viewfinder-mode', // Specify sensor mode, given as <width>:<height>:<bit-depth>:<packing>
    'lores-width', // Low resolution image width <width>
    'lores-height', // Low resolution image height <height>
    'rotation', // Use hflip and vflip to create the given rotation <angle>
    'roi', // Select a crop (region of interest) from the camera <x,y,w,h>
    'sharpness', // Set image sharpness <number>
    'contrast', // Set image contrast <number>
    'brightness', // Set image brightness <number>
    'saturation', // Set image colour saturation <number>
    'ev', // Set EV compensation <number>
    'shutter', // Set the exposure time in microseconds <number>
    'gain', // Sets the combined analogue and digital gains <number>
    'analoggain', // Synonym for --gain
    'metering', // Set the metering mode <string>
    'exposure', // Set the exposure profile <string>
    'awb', // Set the AWB mode <string>
    'awbgains', // Set fixed colour gains <number,number>
    'denoise', // Set the denoising mode <string>
    'tuning-file', //	Specify the camera tuning to use <string>"
    'output', // Output file name <string>
    'wrap', // Wrap output file counter at <number>
  ],
};

export const jpegCommands: Commands = {
  Flags: [...commonCommands.Flags],
  Options: [...commonCommands.Options],
};

export const stillCommands: Commands = {
  Flags: [
    ...commonCommands.Flags,
    'datetime', // Use date format for the output file names
    'timestamp', // Use system timestamps for the output file names
    'keypress', // Capture image when Enter pressed
    'signal', // Capture image when SIGUSR1 received
    'raw', // Save raw file
  ],
  Options: [
    ...commonCommands.Options,
    'quality', // JPEG quality <number>
    'exif', // Add extra EXIF tags <string>
    'timelapse', // Time interval between timelapse captures <milliseconds>
    'framestart', // The starting value for the frame counter <number>
    'restart', // Set the JPEG restart interval <number>
    'thumb', // Set thumbnail parameters <w:h:q> or none
    'encoding', // Set the still image codec <string> (jpg, png, bmp, rgb, yuv420)
    'latest', // Make symbolic link to latest file saved <string>
  ],
};

export const vidCommands: Commands = {
  Flags: [
    ...commonCommands.Flags,
    'keypress', // Capture image when Enter pressed
    'signal', // Capture image when SIGUSR1 received
    'split', // Split multiple recordings into separate files
    'inline', // Write sequence header in every I frame (H.264 only)
    'listen', // Wait for an incoming TCP connection
  ],
  Options: [
    ...commonCommands.Options,
    'quality', // JPEG quality <number>
    'bitrate', // H.264 bitrate <number>
    'intra', // Intra-frame period (H.264 only) <number>
    'profile', // H.264 profile <string>
    'level', // H.264 level <string>
    'codec', // Encoder to be used <string> h264 mjpeg yuv420
    'initial', // Start the application in the recording or paused state <string>
    'segment', // Write the video recording into multiple segments <number>
    'circular', // Write the video recording into a circular buffer of the given <size>
    'frames', // Record exactly this many frames <number>
  ],
};

export const rawCommands: Commands = {
  Flags: [...commonCommands.Flags],
  Options: [
    ...commonCommands.Options,
    'segment', // direct each to a separate file.
  ],
};
