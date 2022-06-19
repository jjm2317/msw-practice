import { Routes, Route } from 'react-router-dom';

import Main from 'Main';

const App = () => (
  <Routes>
    <Route element={<Main />} path="/" />
  </Routes>
);
export default App;
