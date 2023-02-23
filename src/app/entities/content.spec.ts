import { Content } from './content';

describe('Content entity', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('any content');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('any')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characteres', () => {
    expect(() => new Content('.'.repeat(241))).toThrow();
  });
});
