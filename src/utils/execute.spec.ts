import { execute } from '.';

describe('execute', () => {
  it('run command is correct', async () => {
    const commandResponse = await execute.runCommand({
      cmdCommand: "echo 'test'",
    });
    expect(commandResponse).toContain('test');
  });
  it('Node work but there is an stderr', async () => {
    const commandResponse = await execute.runCommand({
      cmdCommand: ">&2 echo 'error'",
    });

    console.log("commandResponse = ",commandResponse )
    expect(commandResponse).toContain('error');
  });

  it('Node exception. Command not found', async () => {

    await expect(execute.runCommand({
      cmdCommand: "noCommand",
    })).rejects.toEqual('/bin/sh: 1: noCommand: not found');
  });


  it('cmd command is correct', () => {
    const params = ['--option1', 'optionResponse', '-flags1', 'flagsResponse'];
    expect(execute.cmdCommand({ base: 'cmdCommand', params })).toEqual(
      'cmdCommand --option1 optionResponse -flags1 flagsResponse'
    );
  });
});
