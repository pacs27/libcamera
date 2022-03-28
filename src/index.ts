import {
  jpegCommands,
  stillCommands,
  vidCommands,
  rawCommands,
} from './libCamera.config';
import { execute } from './utils';

import buildMakeLibCamera from './libCamera';
const makeLibCamera = buildMakeLibCamera({
  execute,
  jpegCommands,
  stillCommands,
  vidCommands,
  rawCommands,
});

export const libcamera = makeLibCamera();
export default libcamera;
