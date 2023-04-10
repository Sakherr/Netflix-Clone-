import{ useState, useEffect } from 'react';
import MovieList from './MovieList';

export default function Home(){
     const [trending,setTrending]=useState([])
    async function getMovies(){
        
        const url=process.env.REACT_APP_SERVER_URL;
        
        const response = await fetch(`${url}/trending`);
         
        const trendingData = await response.json()
          
         setTrending(trendingData);
        
    }
    function commentHandler(newTrend , id){
        trending.map(trend=>{
            if(trend.id === id){
                
                trend.comments = newTrend.userComment
                return trend;
            }else{
                return trend
            }
        })
    }



     useEffect(()=>{
        getMovies()
     },[])  
    return(
        <>
        
        <MovieList  trending={trending} commentHandler={commentHandler}/>
        </>
    )
}