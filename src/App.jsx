import React from 'react'
import SignIn from './components/SignIn'
import Overlay from './components/overlay'

function App() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:h-screen h-auto" >
      <SignIn /> 
      <Overlay />
    </div>
  )
}

export default App
