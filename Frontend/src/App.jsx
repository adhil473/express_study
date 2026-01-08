import { useState } from 'react'
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';
import Tablee from './components/Tablee';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GerUsrById from './components/GerUsrById';
import EditUserPage from './components/EditUserPage';
import Form2 from './components/Form2';
import Table2 from './components/Table2';
import Action from './components/Action';
import Demo from './components/Demo';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
       <BrowserRouter>
        <Routes>
          {/* <Route  path='/' element={<Forms/>}/>
          <Route path='/table' element={<Tablee/>}/>
          <Route path='/view/:userId' element={<GerUsrById/>}/>
          <Route path='/edit/:userId' element={<EditUserPage/>} /> */}
          <Route path='/' element={<Form2/>}/>
          <Route path='/table' element={<Table2/>}/>
          <Route path='/action/:id' element={<Action/>}/>
          <Route path='/demoo' element={<Demo/>}/>
          
        </Routes>
       </BrowserRouter>
       
       
    </>
  )
}

export default App
