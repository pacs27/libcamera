import { ChildProcessWithoutNullStreams } from 'child_process';

export interface PiCameraOutput {
  jpeg: ({
    config,
  }: {
    config: PiCameraConfig;
  }) => string | Promise<ChildProcessWithoutNullStreams | string>;
  still: ({
    config,
  }: {
    config: PiCameraConfig;
  }) => string | Promise<ChildProcessWithoutNullStreams | string>;
  vid: ({
    config,
  }: {
    config: PiCameraConfig;
  }) => string | Promise<ChildProcessWithoutNullStreams | string>;
  raw: ({
    config,
  }: {
    config: PiCameraConfig;
  }) => string | Promise<ChildProcessWithoutNullStreams | string>;
}

export interface PiCameraConfig {
  [key: string]: string | number | boolean;
}

export interface Commands {
  Flags: Array<string>;
  Options: Array<string>;
}
