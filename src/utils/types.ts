import { ChildProcessWithoutNullStreams } from 'child_process';

export interface Execute {
  runCommand: ({
    cmdCommand,
    options,
  }: {
    cmdCommand: string;
    options?: any;
  }) => Promise<ChildProcessWithoutNullStreams | string>;

  cmdCommand: ({
    base,
    params,
  }: {
    base: string;
    params: Array<string>;
  }) => string;
}
