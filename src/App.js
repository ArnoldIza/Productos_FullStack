import './App.css';
import Main from './Views/Main'
import Detail from './Views/Detail'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Update from './Components/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path='product' element={<Main/>}/>
        <Route exact path=':id' element={<Detail/>}/>
        <Route exact path='/:id/edit' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
