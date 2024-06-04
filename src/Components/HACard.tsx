import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';

import './HACard.css'
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



export default function MultiActionAreaCard(props:any) {
  const navigate = useNavigate()
  const navigateToSP = (id:number) => {
    navigate(`/product/${id}`)
  }
    
  console.log(props.data);
  
  return (

    <div style={{
      display:'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>


  {  props.data.map((e:any,i:any)=> <div className="card" onClick={()=>navigateToSP(e.id)}>
      <div className="image">
        <img src={e.image} alt="" width='290' height={250}/>
      </div>
        <div className="title">
          <h3>
          {e.title}
          </h3>
        </div>
       
        <div className="rating">
        <>
            <Rating  name="read-only" value={e.rating.rate} readOnly />
            <p style={{
                display: 'inline-block',
                marginLeft: '20px',
                color: '#1A9CD7'
            }}>

           ( {e.rating.count} ratings)
            </p>
            </>
        </div>
     
    </div>)
 
    }

    {/* {props.data.map((e:any,i:any)=>{
      return   <Card key={i} sx={{ minWidth: 300,maxWidth:300,marginTop:3,alignContent:'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={e.image}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {e.description}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          {e.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {e.rating.rate}/5 ({e.rating.count})
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
       
      }}>
        <Button size="small" color="primary" variant='contained'>
          ${e.price} Buy 
        </Button>
      </CardActions>
    </Card>
    })    } */}
    
          </div>
  );
}
