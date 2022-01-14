import React from 'react';
import TeeterTotter from './containers/teeterTotter/index';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1 className='sr-only'>Teeter Totter Game</h1>
      <main className='App-body'>
        <TeeterTotter />
      </main>
    </div>
  );
}

export default App;
