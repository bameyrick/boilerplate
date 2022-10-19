import { helloWorld } from '../src';

describe(`Boilerplate`, () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeEach(() => {});

  it(`Should log`, () => {
    jest.spyOn(console, 'log');

    helloWorld();

    expect(console.log).toHaveBeenCalledWith('Hello world');
  });
});
