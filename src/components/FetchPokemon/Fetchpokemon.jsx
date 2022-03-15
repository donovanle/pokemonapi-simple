import React,{useEffect, useState} from 'react'

const Fetchpokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = async() =>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=803")
        console.log(response)
        const jsonResponse = await response.json()
        setPokemon(jsonResponse.results)   
    };

  return (
    <div>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        {pokemon? pokemon.map((poke, index)=>{
            return (<p key={index}>{poke.name}</p>)
        }):<p>Click Button To Fetch Pokemon</p>}
    </div>
  )
}

export default Fetchpokemon