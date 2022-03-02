import React from 'react';

import { ChatEngine } from 'react-chat-engine';
import './App.css';

import { ChatFeed, Login } from './components';

const PROJECT_ID = '4a428137-b80a-44c0-b0c1-e5784e5d6a7c';

function App() {
  if (!localStorage.getItem('username')) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID={PROJECT_ID}
      userName={localStorage.getItem('username')}
      renderChatFedd={(chatAppPros) => <ChatFeed {...chatAppPros} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
      userSecret={localStorage.getItem('password')}
    />
  );
}

export default App;
