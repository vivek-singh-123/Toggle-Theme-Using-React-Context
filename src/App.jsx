import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='p-4 text-4xl bg-pink-400'>Toggle Theme</h1>
    </>
  )
}

export default App
