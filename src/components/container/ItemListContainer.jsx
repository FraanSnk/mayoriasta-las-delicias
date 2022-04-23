const Marcas = () =>{
   return(
      <>
         <h2>Las marcas con las que trabajamos</h2>
         <div class="container preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
         <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
               <img src="img/milka.png" class="w-full" alt="marca milka" /> 
               <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" class="btn btn-circle">❮</a> 
                  <a href="#slide2" class="btn btn-circle">❯</a>
               </div>
            </div> 
            <div id="slide2" class="carousel-item relative w-full">
               <img src="img/oreo.png" class="w-full" alt="marca oreo" /> 
               <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" class="btn btn-circle">❮</a> 
                  <a href="#slide3" class="btn btn-circle">❯</a>
               </div>
            </div> 
            <div id="slide3" class="carousel-item relative w-full">
               <img src="img/terrabusi.png" class="w-full" alt="marca terrabusi" /> 
               <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" class="btn btn-circle">❮</a> 
                  <a href="#slide4" class="btn btn-circle">❯</a>
               </div>
            </div> 
            <div id="slide4" class="carousel-item relative w-full">
               <img src="img/arcor.png" class="w-full" alt="marca arcor" /> 
               <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" class="btn btn-circle">❮</a> 
                  <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
         </div>
         </div>
         </div>
      </>
   )
}

export default Marcas