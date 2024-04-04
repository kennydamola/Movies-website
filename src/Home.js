import React,   {useEffect, useState} from 'react'
import "./style.css"
import movieTrailer from  'movie-trailer'
import Youtube from  'react-youtube'

function Home() {

  const [movies, setMovies] = useState([])
  const {movieId, setMovieId} = useState("")
  
  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=7f7dce066e9c3f831a8b248a0c31c967")
    .then((res) => res.json())
    .then((res) => setMovies(res.results))
    .catch((err) => console.log(err))
  }, [])

  function handleClick(title){
    // alert(title)
    movieTrailer(title)
    .then((res) => {
      let vidId = res.split("=")[1]
      // console.log(vidId[1]);

      setMovieId(vidId)

    })
  }

  

  

  

  
  
  // function checkAge(age){
  //   if(age >= 18){
  //     alert("you can drive")
  //   }else{
  //     alert("you cannot drive")
  //   }
  // }



  const opt = {
    playerVars: {
      autoplay: 1,
    }
  }

  
  return (
    <div className="" id="test">

      <div className="Banner">
        <div>
          <h4>The Marvel</h4>
          <div>
            <button> Watch Now</button>
            <button> Save For Later</button>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos, distinctio!
          </p>
          
        </div>
        
      </div>
      

      
      
      <main className="bg-dark p-5">
        <div className="container">
          <h5 className="text-white mb-5">Trending</h5>

          <div className="movieposter d-flex">

            {
              movies.map(each =>(

                <img onClick={()=>handleClick(each.original_title)} src={"https://image.tmdb.org/t/p/w500/" +each.poster_path} alt="poster image" />

                
              ))
            }
              
              
            

          </div>

         <div className="player">

            <Youtube
            videoId={movieId}
            opts={opt}

            />

          </div>

        </div >

      </main>

      {/* <main className="bg-dark p-5">
        <div className="Fotter">
          <h4 className="text-white mb-5">Install</h4>

        </div>

      </main> */}

               
          
          
        





      {/* <button onClick={()=> checkAge(90)}>Click</button>


      <h1>I'm a programmer</h1>      */}

    </div>

    




  )
}

export default Home