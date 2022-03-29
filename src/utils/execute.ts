import {
  ChildProcessWithoutNullStreams,
  ExecException,
  ExecOptions,
} from 'child_process';
import { Execute } from './types';

export default function makeExecute({ exec }: { exec: any }): Execute {
  return Object.freeze({
    runCommand,
    cmdCommand,
  });

  function runCommand({
    cmdCommand,
    options,
  }: {
    cmdCommand: string;
    options?: ExecOptions;
  }): Promise<ChildProcessWithoutNullStreams | string> {
    try {
      return new Promise((resolve, reject) => {
        exec(
          cmdCommand,
          options,
          (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
              if (stderr) {
                reject(stderr.trim());
              }
              reject(error);
            }
            if (stdout) {
              resolve(stdout.trim());
            }
            if (stderr) {
              resolve(stderr.trim());
            }
          }
        );
      });
    } catch (err) {
      console.log('Run command error = ', err);
      throw new Error('Error in execute run command');
    }
  }

  function cmdCommand({
    base,
    params,
  }: {
    base: string;
    params: Array<string>;
  }) {
    if (!params && base) {
      return base;
    }

    if (!Array.isArray(params)) {
      throw new Error('params must be an Array');
    }

    return base + ' ' + params.join(' ');
  }
}
