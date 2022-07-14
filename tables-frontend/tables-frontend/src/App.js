import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/Header/Header'
import Table from './components/Table/Table'
import headerReducer, { initalState } from './components/Reducers/HeaderReducer'

const App = () => {
  const [headerState, dispatch] = useReducer(headerReducer, initalState)
  const [tableItems, setTableItems] = useState([])
  const [tmpTableItems, setTmpTableItems] = useState([])


  return (
    <div className="App">
      <Header setTmpTableItems={setTmpTableItems} tableItems={tableItems} state={headerState} dispatch={dispatch}/>
      <Routes>
        <Route path='/' element={ <Table setTableItems={setTableItems} tmpTableItems={tmpTableItems} setTmpTableItems={setTmpTableItems} /> } />
        <Route path='/:id' element={ <Table setTableItems={setTableItems} tmpTableItems={tmpTableItems} setTmpTableItems={setTmpTableItems} /> } />
      </Routes>
    </div>
  );
}

export default App;
