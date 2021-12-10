import { useState, useEffect } from "react";
import { Movie } from './types/Movie'


const App = () => {
  let APiLink = 'https://api.b7web.com.br/cinema/';

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = () => {
    fetch(APiLink).then((response) => {
      return response.json();
    })
    .then((json) => {
      setMovies(json);
    });
  }


  return <>
  <header className="flex justify-between items-center flex-wrap py-5 px-9 shadow-2xl">
    <div className="">
      <h3 className="font-bold text-2xl text-red-300 cursor-pointer">RequestJS</h3>
    </div>
    <div className="movieTotla">
      <p>Movies total is: {movies.length}</p>
    </div>
    <nav className="mt-2 hidden">
      <div className="menu uppercase">
        <a href="#" className="px-3 py-2 hover:bg-pink-100">Home</a>
        <a href="#" className="ml-2 px-3 py-2 hover:bg-pink-100">About</a>
        <a href="#" className="ml-2 px-3 py-2 hover:bg-pink-100">Portfoloio</a>
        <a href="#" className="ml-2 px-3 py-2 hover:bg-pink-100">contact</a>
      </div>
    </nav>
  </header>

  <section className="">
  <div className="text-center my-9">
    {/* <h1 className="antialised text-2xl uppercase tracking-wider"> API <button onClick={loadMovies} className="text-red-400 underline capitalize">to show</button> Movies</h1> */}
  </div>

  <div className="grid grid-cols-1 px-5 gap-4 text-center mx-5 mb-5 sm:grid-cols-3 xl:grid-cols-4 xl:gap-5">
    
    {movies.map((item, index) => (

//Margin: auto = m-auto

<div className="box m-auto " key={index}>
      <h1 className="mb-3 font-medium text-2xl md:text-lg"> {item.title} </h1>

      <div className="image">
        <img src={item.avatar} className="w-200 object-cover" alt="{item.title}" />
      </div>

    </div>
    ))}

  </div>
  </section>
  </>
}


export default App;

//https://api.b7web.com.br/cinema/

//Quando colocamos no fetch apenas a url, ele faz uma req do tipo get.
