import React from 'react'
import FetaruedMovie from "@/components/featured-movie"

function MovieContainer({movie}) {
  return (
    <FetaruedMovie movie={movie} isCompact={false}/>
  )
}

export default MovieContainer