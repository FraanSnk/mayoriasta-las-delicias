const Marcas = ({greeting}) =>{
   return(
      <>
         <h2>{greeting}</h2>
         <div className="container preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
            <div className="carousel w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                     <img src="img/milka.png" className="w-full" alt="marca milka" /> 
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                     </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative w-full">
                     <img src="img/oreo.png" className="w-full" alt="marca oreo" /> 
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                     </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative w-full">
                     <img src="img/terrabusi.png" className="w-full" alt="marca terrabusi" /> 
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                     </div>
                  </div> 
                  <div id="slide4" className="carousel-item relative w-full">
                     <img src="img/arcor.png" className="w-full" alt="marca arcor" /> 
                     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Marcas