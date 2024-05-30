import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Table from '../Components/Table'

const Apicall = () => {
    const [userData,setUserData] = useState<any>([])

    const getApiData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{console.log(res)
            setUserData([...res.data])
        })
        .catch(err => console.error(err))
    }

    return (
    <>
      <Box>
        <h1>Api handling</h1>

        <Button sx={{margin:1,textTransform:"capitalize"}} onClick={getApiData} variant="contained">Get Data</Button>
        <Button sx={{margin:1,textTransform:"capitalize"}}  variant="contained">post Data</Button>
        <Button sx={{margin:1,textTransform:"capitalize"}}  variant="contained">put Data</Button>
        <Button sx={{margin:1,textTransform:"capitalize"}}  variant="contained">delete Data</Button>
      </Box>

        {userData[0] && <Table dataList={userData} 
        colList={[
            {type:"text", key:"id",label:"User ID"},
            {type:"text", key:"name",label:"User Name"},
            {type:"text", key:"email",label:"E-mail"},
            {type:"text", key:"phone",label:"Phone Number"},
            {type:"text", key:"website",label:"Website"},
            {type:"button",key:"", label:"",displayField:(row:any)=><Button variant="contained" onClick={()=>{
                console.log(row);
                
            }}>Delete</Button>}
            ]}/>}

    </>
  )
}

export default Apicall
