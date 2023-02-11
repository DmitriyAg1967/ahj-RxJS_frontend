import Widget from './Widget';

const widget = new Widget(
  document.getElementById('root'),
  'https://ahj-rxjs-backend.onrender.com/messages/unread',
);

widget.subscribeToUpdate();
