import React,{useEffect, useState} from 'react'
import axios from 'axios';
const Fetchpokemon = () => {
    const [pokemons, setPokemon] = useState([])

    const fetchAllPokemon = async() =>{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        console.log(response.data.results)
        setPokemon(response.data.results)   
    };

  return (
    <div>
        <button onClick={fetchAllPokemon}>Fetch Pokemon</button>
        {pokemons? pokemons.map((poke, index)=>{
            return (<p key={index}>{poke.name}</p>)
        }):<p>Click Button To Fetch Pokemon</p>}
    </div>
  )
}

export default Fetchpokemon