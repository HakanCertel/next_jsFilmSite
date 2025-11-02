import React from 'react'
import MovieContainer from '@/containers/movie'
import Movies from "@/mocks/movies.json"
import { notFound } from 'next/navigation';

async function MoviePage({params,searchParams}) {
    const prm=await params;
    const searchPrm=await searchParams;
    const movieDetail=Movies.results.find(movie=>movie.id.toString()===prm.id)
    console.log(searchPrm)
    if(!movieDetail){
        notFound()
    }
    if(searchPrm.error==="true"){
        throw new Error("Something went wrong!");
    }
  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage