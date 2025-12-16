import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './comps/Header'
import { ProductList } from './comps/ProductList'

function App() {
  

  return (
    <>
    <div className="App">
      <Header title='ShopApp'/>
      <ProductList />
    </div>
    </>
  )
}

export default App
