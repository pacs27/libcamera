import { Execute } from './utils/types';
import { PiCameraOutput, PiCameraConfig, Commands } from './types';

export default function buildMakeLibCamera({
  execute,
  jpegCommands,
  stillCommands,
  vidCommands,
  rawCommands,
}: {
  execute: Execute;
  jpegCommands: Commands;
  stillCommands: Commands;
  vidCommands: Commands;
  rawCommands: Commands;
}) {
  return function makeLibCamera(): PiCameraOutput {
    return Object.freeze({
      jpeg: ({ config }: { config: PiCameraConfig }) => {
        config = configShouldBeAnObject({ config });
        return makeJpeg({
          Flags: jpegCommands.Flags,
          Options: jpegCommands.Options,
          execute,
          config,
        });
      },
      still: ({ config }: { config: PiCameraConfig }) => {
        config = configShouldBeAnObject({ config });
        return makeStill({
          Flags: stillCommands.Flags,
          Options: stillCommands.Options,
          execute,
          config,
        });
      },
      vid: ({ config }: { config: PiCameraConfig }) => {
        config = configShouldBeAnObject({ config });
        return makeVid({
          Flags: vidCommands.Flags,
          Options: vidCommands.Options,
          execute,
          config,
        });
      },
      raw: ({ config }: { config: PiCameraConfig }) => {
        config = configShouldBeAnObject({ config });
        return makeRaw({
          Flags: rawCommands.Flags,
          Options: rawCommands.Options,
          execute,
          config,
        });
      },
    });
  };
}

function runCommand({
  execute,
  cmdCommand,
}: {
  execute: Execute;
  cmdCommand: string;
}) {
  try {
    return execute.runCommand({ cmdCommand }).catch((err: unknown) => {
      if (err instanceof Error) {
        throw new Error(`Things exploded (${err.message})`);
      } else if (typeof err === 'string') {
        throw new Error(err);
      } else {
        throw new Error('Unknown error in run command');
      }
    });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Things exploded (${err.message})`);
    } else {
      throw new Error('Unknown error');
    }
  }
}

function makeJpeg({
  Flags,
  Options,
  execute,
  config,
}: {
  Flags: Commands['Flags'];
  Options: Commands['Options'];
  execute: Execute;
  config: PiCameraConfig;
}) {
  const cmdCommand = createTakePictureCommand({
    baseType: 'libcamera-jpeg',
    Flags,
    Options,
    execute,
    config,
  });

  if (process.env.NODE_ENV === 'test') {
    console.log('cmdCommand = ', cmdCommand);
    return cmdCommand;
  }
  return runCommand({ execute, cmdCommand });
}

function makeStill({
  Flags,
  Options,
  execute,
  config,
}: {
  Flags: Commands['Flags'];
  Options: Commands['Options'];
  execute: Execute;
  config: PiCameraConfig;
}) {
  try {
    const cmdCommand = createTakePictureCommand({
      baseType: 'libcamera-still',
      Flags,
      Options,
      execute,
      config,
    });

    if (process.env.NODE_ENV === 'test') {
      console.log('cmdCommand = ', cmdCommand);
      return cmdCommand;
    }
    return runCommand({ execute, cmdCommand });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Things exploded (${err.message})`);
    } else {
      throw new Error('Unknown error');
    }
  }
}

function makeVid({
  Flags,
  Options,
  execute,
  config,
}: {
  Flags: Commands['Flags'];
  Options: Commands['Options'];
  execute: Execute;
  config: PiCameraConfig;
}) {
  try {
    const cmdCommand = createTakePictureCommand({
      baseType: 'libcamera-vid',
      Flags,
      Options,
      execute,
      config,
    });

    if (process.env.NODE_ENV === 'test') {
      console.log('cmdCommand = ', cmdCommand);
      return cmdCommand;
    }
    return runCommand({ execute, cmdCommand });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Things exploded (${err.message})`);
    } else {
      throw new Error('Unknown error in tale Picture');
    }
  }
}

function makeRaw({
  Flags,
  Options,
  execute,
  config,
}: {
  Flags: Commands['Flags'];
  Options: Commands['Options'];
  execute: Execute;
  config: PiCameraConfig;
}) {
  try {
    const cmdCommand = createTakePictureCommand({
      baseType: 'libcamera-raw',
      Flags,
      Options,
      execute,
      config,
    });

    if (process.env.NODE_ENV === 'test') {
      console.log('cmdCommand = ', cmdCommand);
      return cmdCommand;
    }
    return runCommand({ execute, cmdCommand });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Things exploded (${err.message})`);
    } else {
      throw new Error('Unknown error in tale Picture');
    }
  }
}

function createTakePictureCommand({
  baseType,
  Flags,
  Options,
  execute,
  config,
}: {
  baseType:
    | 'libcamera-jpeg'
    | 'libcamera-still'
    | 'libcamera-vid'
    | 'libcamera-raw';
  Flags: Commands['Flags'];
  Options: Commands['Options'];
  execute: Execute;
  config: PiCameraConfig;
}) {
  const cmdCommand = execute.cmdCommand({
    base: baseType,
    params: prepareConfigOptsAndFlags(config, { Flags, Options }),
  });

  return cmdCommand;
}

function configShouldBeAnObject({ config }: { config: any }) {
  if (config) {
    return config;
  } else {
    return {};
  }
}

function prepareConfigOptsAndFlags(
  config: any,
  { Flags, Options }: { Flags: Commands['Flags']; Options: Commands['Options'] }
): Array<string> {
  const configArray: any = [];
  Object.keys(config).forEach(key => {
    // Only include flags if they're set to true
    if (Flags.includes(key) && config[key]) {
      configArray.push(`--${key}`);
    } else if (Options.includes(key)) {
      configArray.push(`--${key}`, config[key]);
    }
  });

  return configArray;
}
