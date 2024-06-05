import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./SingleProduct.css"
import { Button, Rating, Typography } from '@mui/material';
import '../Components/Nav.css'

const SingleProduct = () => {
    const [data,setData] = useState<any>({})
    const params = useParams()
    useEffect(()=>{
    console.log(params);
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>{
            setData({...res.data})
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
            
        })
    },[])

  return (
    <div>
        <div>
       
    <ul>
      <li>
          <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/contact">Contact</Link>
      </li>
      <li>
          <Link to="/about">About</Link>
      </li>
    </ul>
    </div>

{data &&

    <div className="spGray">

    <div className="SP">

        <div className='spimage'>
        <img src={data.image} alt="" width={300} height={400}/>
        </div>
        <div>
            <div className='sptitle'>
                <h1>{data.title}</h1>
            </div>
            <div className='spRating'>
            {data.rating && 
            <>
            <Rating  name="read-only" value={data.rating.rate} readOnly />
            <p style={{
                display: 'inline-block',
                marginLeft: '20px',
                color: '#1A9CD7'
            }}>

           ( {data.rating.count} ratings)
            </p>
            </>
            }
            </div>
            <div className="spCategory">
                <p style={{color:'#9E9E9E'}}>
                    Category : <span style={{color:'#1A9CD7'}}>{data.category}</span>
                </p>
            </div>
            <div className="spPrice">
                <h2>Price: $ {data.price}</h2>
            </div>
            <div className="spDesc">
                <h2>
                    Description: 
                </h2>
                <p>{data.description}</p>
            </div>
            <div className="spButton">
            <Button variant="contained">Buy Now</Button>
            </div>
        </div>
            </div>
    </div>
}
    </div>
  )
}

export default SingleProduct
