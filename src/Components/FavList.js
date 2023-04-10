

import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
    
    
    export default function FavList(){
    
        const [FavList,setFavList ] = useState([]);
    
    
        async function getFavList(){
            let url =`${process.env.REACT_APP_SERVER_URL}/getMovies`;
    
            let response = await fetch(url,{
                method: 'GET',
            })
    
            let recivedData = await response.json();
            setFavList(recivedData)
    
           
        }
    
        async function handleDelete(id){
            let url =`${process.env.REACT_APP_SERVER_URL}/deleteMovie/${id}`;
    
            let response = await fetch(url,{
    
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
            })
      
    
            if(response.status === 204){
                getFavList();
                 alert(" deleted!")
    
            }
        }
        

        async function handleUpdate(id){
            
            
            let url =`${process.env.REACT_APP_SERVER_URL}/updateMovie/${id}`;
            let response = await fetch(url,{
               
                method: "PUT",
                
                headers:
                {
                  "Content-Type": "application/json",
                },
            })
            
            
        }
       
        useEffect(()=>{
            getFavList();
    
            
    
        },[])
    
    
    
        return(
            <>
    
            {
                FavList && FavList.map(trend=>{
                    return(
                     
                        <Card style={{ width: "20rem" }}>
                        
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} />
                        <Card.Body>
                          <Card.Title>{trend.title}</Card.Title>                   
                         
                          <Card.Text>{trend.comments}</Card.Text>
                          
                          <Button variant="secondary" onClick={()=>handleDelete(trend.id)}> delete </Button>
                          <p></p>
                          <Button variant="primary" onClick={()=>handleUpdate(trend.id)}> u pdate </Button>
                        </Card.Body>
                      </Card>
                    )
    
    
                })
            }
            </>
        )
    }