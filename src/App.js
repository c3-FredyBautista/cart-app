import React from 'react';
import StoreProvider from './Context/StoreProvider';
import Plants from './Components/Plants';
import Cart from './Components/Cart';

const App = () => (
  <StoreProvider>
    <h1>Plants!</h1>
    <Plants />
    <Cart />
  </StoreProvider>
);

export default App;