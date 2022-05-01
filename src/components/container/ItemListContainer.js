import { useEffect, useState } from "react";
import { productos as productosData } from "../data/productos";
import ItemsCards from "../ItemsCards";

const ItemListContainer = () => {

   const [productos, setProductos] = useState([])

   useEffect(() => {
      const getProductos = new Promise((resolve, reject) => {
         setTimeout(() =>{
            resolve(productosData)
         }, 2000)         
      })

      getProductos.then( (result) => {
         console.log('Se completo la promesa', result);
         setProductos(result)
      }).catch((err) => {
         console.log('Hubo un error', err)
      })

      console.log('Se termino el efecto');
   }, [])
   
   return(
      <div>
         {productos.map(productos => <ItemsCards key={productos.id} productosData={productos}/>)}
      </div>
   )
}

export default ItemListContainer