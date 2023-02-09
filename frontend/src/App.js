import   { BrowserRouter,Route, Routes } from 'react-router-dom';

import './App.css';
import { Create } from './components/volunteer/create.js';
import { View } from './components/volunteer/view.js';
import { Volunteer } from './components/volunteer/volunteer.js';

function App() {
  return (
    <BrowserRouter> 
     <Routes> 
      <Route path='/' element = {<Volunteer/>} />
      <Route path='/create' element = { <Create/>}/>
      <Route path='/view' element= { <View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
