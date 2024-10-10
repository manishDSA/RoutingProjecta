import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const GitHub = () => {
    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/manishDSA")
    //     .then((response)=>response.json())
    //     .then((data)=> setData(data))
    // },[])


    //useLoaderData hook give the GitHubDataLoader data 
    const data = useLoaderData()
  return (
    <div>
     <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>GitHub Followers {data.name}:{data.followers} 
        <img src={data.avatar_url} alt="gitHub profile" width={300} />
     </div>
    </div>
  );
}

export default GitHub;

export const GitHubDataLoader= async()=>{
    const response = await fetch("https://api.github.com/users/manishDSA")

    //in this we return the data directly in json fromate
    return (response.json())
}