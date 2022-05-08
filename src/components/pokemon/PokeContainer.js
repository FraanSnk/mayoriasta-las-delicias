import { useEffect } from "react"

const PokeContainer = () =>{
   useEffect(() => {
     getPokemons()
   }, [])

   const getPokemons = () => { 
      const URL = 'https://pokeapi.co/api/v2/ability/&Limit=20'

      fetch(URL)
         .then(response => response.json())
         .then(data => {
            console.log(data)
            getPokemons(data.result)
         })
    }
   
   return(
      <div>
         { getPokemons.map(p => <li key={p.url}>{p.name}</li>) }
      </div>
   )
}

export default PokeContainer