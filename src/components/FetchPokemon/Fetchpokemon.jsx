import React,{useEffect, useState} from 'react'

const Fetchpokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=803")
            .then(response => {return response.json()})
            .then(response => {setPokemon({data:response.results})})    
    };

  return (
    <div>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        {pokemon.data? pokemon.data.map((poke, index)=>{
            return (<p key={index}>{poke.name}</p>)
        }):<p>Click Button To Fetch Pokemon</p>}
    </div>
  )
}

export default Fetchpokemon