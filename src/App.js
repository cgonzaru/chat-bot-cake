import React from 'react';
import ChatBot from './components/ChatBot';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="title">Pastelería Cristina</h1>
        </header>

        <main className="app-main">
          <ChatBot />
        </main>
        
      </div>
    );
  }
}

export default App;
