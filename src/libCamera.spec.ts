import libCamera from '.';

describe('lib-camera', () => {
  it('Should retrun the libcamera-still command', async () => {
    expect(await libCamera.still({ config: { output: 'test.jpg' } })).toEqual(
      'libcamera-still --output test.jpg'
    );
  });
  it('Should return the libcamera-still command without not exist properties', async () => {
    expect(
      await libCamera.still({
        config: {
          output: 'test.jpg',
          notExistOption: 'noExist',
          notExistFlags: true,
        },
      })
    ).toEqual('libcamera-still --output test.jpg');
  });
  it('Should retrun the libcamera-jpeg command', async () => {
    expect(await libCamera.jpeg({ config: { output: 'test.jpg' } })).toEqual(
      'libcamera-jpeg --output test.jpg'
    );
  });
  it('Should retrun the libcamera-vid command', async () => {
    expect(await libCamera.vid({ config: { output: 'test.jpg' } })).toEqual(
      'libcamera-vid --output test.jpg'
    );
  });
  it('Should retrun the libcamera-raw command', async () => {
    expect(await libCamera.raw({ config: { output: 'test.jpg' } })).toEqual(
      'libcamera-raw --output test.jpg'
    );
  });
});
