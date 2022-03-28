import { execute } from '.';

describe('execute', () => {
  it('run command is correct', async () => {
    const commandResponse = await execute.runCommand({
      cmdCommand: "echo 'test'",
    });
    expect(commandResponse).toContain('test');
  });

  it('cmd command is correct', () => {
    const params = ['--option1', 'optionResponse', '-flags1', 'flagsResponse'];
    expect(execute.cmdCommand({ base: 'cmdCommand', params })).toEqual(
      'cmdCommand --option1 optionResponse -flags1 flagsResponse'
    );
  });
});
