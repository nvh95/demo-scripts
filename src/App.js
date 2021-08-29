import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GiphySticker from './GiphySticker';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/giphy" component={GiphySticker} />
        <Route path="/" component={GiphySticker} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
