import { FirstFewPipe } from './first-few.pipe';

describe('FirstFewPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstFewPipe();
    expect(pipe).toBeTruthy();
  });
});
