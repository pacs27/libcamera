import { exec } from 'child_process';
import makeExecute from './execute';

const execute = makeExecute({ exec });

export { execute };
