import Image from "next/image";
import HomeContainer from '@/containers/home'
import Movies from"@/mocks/movies.json"
// async function delay(ms){
//     return new Promise((resolve)=> setTimeout(resolve,ms))
// }

const API_URL="https://api.themoviedb.org/3"

const  getTopRatedMovies=async ()=>{
    const res =await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1&language=tr-TR`);

    const data=await res.json();
    return data
}
const  getPopularMovies=async ()=>{
    const res =await fetch(`${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1&language=tr-TR`);

    const data=await res.json();
    return data
}

export default async function Home({params}) {
    // await delay(2000)
    const prm=await params;
    const popularPromise=getPopularMovies();
    const topRatePromise=getTopRatedMovies();

    const[ {results:popularMovies},{results:topRatedMovies} ]=await Promise.all([popularPromise,topRatePromise]);
    // console.log(popularMovies)
    let selectedCategory;
    
    if(prm.category?.length>0){
        selectedCategory=true;
    }

    return (
            <HomeContainer 
            topRatedMovies={topRatedMovies}
            popularMovies={popularMovies}
            selectedCategory={{
                id:prm.category?.[0] ?? '',
                movies:selectedCategory? Movies.results.slice(0,7):[]
            }}/>
    );
}
