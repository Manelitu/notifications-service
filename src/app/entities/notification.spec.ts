import { Content } from './content';
import { Notification } from './notification';

describe('Notification entity', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('any content'),
      category: 'any category',
      recipientId: 'any recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
