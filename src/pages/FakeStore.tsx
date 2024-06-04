import { AppBar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HACard from '../Components/HACard';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';

const FakeStore = () => {

    const [data,setData] = useState<any>([]);


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
            console.log(res.data);
            setData([...res.data])
            
            
        })
    },[])
    console.log(data);

  return (
    <div>
          <Nav />
        <HACard  data={data}/>
    </div>
  )
}

export default FakeStore
