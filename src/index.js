import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Webpack and React are working!</div>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
