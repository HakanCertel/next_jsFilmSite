import Image from "next/image";
import HomeContainer from '@/containers/home'
import Movies from"@/mocks/movies.json"

export default async function Home({params}) {
    const prm=await params;
    let selectedCategory;
    if(prm.category?.length>0){
        selectedCategory=true;
    }
  return (
        <HomeContainer selectedCategory={{
            id:prm.category?.[0] ?? '',
            movies:selectedCategory? Movies.results.slice(0,7):[]
        }}/>
    );
}
