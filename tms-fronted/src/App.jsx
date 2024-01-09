import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListTaskComponent from './components/ListTaskComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TaskComponent from './components/TaskComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListTaskComponent/>}></Route>
      <Route path='/add-task' element={<TaskComponent/>}></Route>
      <Route path='/edit-task/:id' element={<TaskComponent/>}></Route>
    </Routes>
    
    
    </BrowserRouter>


     
     
    </>
  )
}

export default App
