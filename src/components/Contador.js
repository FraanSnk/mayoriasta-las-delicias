const Contador = () => {

   const onClickHandler = () => {
      console.log('click')
   }

   return(
      <div>
         <button onClick={onClickHandler} className="btn">Click aqui</button>
      </div>
   )
}

export default Contador