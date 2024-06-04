import React from 'react'
import screenList from './ScreenList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {
            screenList.map((e:any,i:any)=><Route key={i} path={e.path} element = {e.element}/>)
          }
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default AppRouter
