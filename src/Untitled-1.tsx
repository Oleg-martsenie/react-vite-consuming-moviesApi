<header className="flex  justify-between items-center py-2 px-4 bg-gradient-to-r from-yellow-100 via-red-100 to-pink-200">
<div className="left">
  <h1> <a href="#" className="font-bold	tracking-widest	">LifeCyicle</a> </h1>
</div>

<div className="px-4	py-4 uppercase font-semibold text-blue-500">
  <h2>I'm {name}</h2>
</div>
<div className="button-area">
  <button onClick ={"HandleClickButton"} className='py-1 px-1 text-sm	rounded'> Change your name here</button>
</div>

<div className="right hidden">
  <nav className="navbar ">
    <a href="#home" className='ml-4	px-4	py-4 font-semibold	uppercase hover: underline hover:text-white'>home</a>
    <a href="#about" className='ml-4	px-4	py-4	font-semibold	uppercase hover: underline hover:text-white'>about</a>
    <a href="#contact" className='ml-4	px-4	py-4	font-semibold	uppercase hover: underline hover:text-white'>contact</a>
  </nav>
</div>
</header>

------------------------------------------------------------------------

//useEffect na prática => Projeto de formulário  que faz o monitoramento e pega os values

import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(()=>{
    setFullName(`${name} ${lastName}`)
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }



  return <>
  <section className='flex  flex-col items-center flex-wrap py-2 px-4 bg-gradient-to-r from-yellow-100 via-red-100 to-pink-200'>
    <input type="text" className='rounded outline-none px-2 py-1 mb-4 border-red-400 ring-0' placeholder='Type your name' value={name} onChange={handleNameChange}/>
    <input type="text" className='rounded outline-none px-2 py-1 mb-4 border-red-400 ring-0' placeholder='Type you last name' value={lastName} onChange={handleLastNameChange}/>

    <h3 className='font-bold	'>Full name: {fullName} </h3>
  </section>
  </>
}

export default App;


