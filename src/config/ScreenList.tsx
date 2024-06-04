import About from "../Screens/About"
import Contact from "../Screens/Contact"
import Error from "../Screens/Error"
import Home from "../Screens/Home"
import SingleProduct from "../Screens/SingleProduct"
import FakeStore from "../pages/FakeStore"


type ScreenList ={
    path:string,
    element:any
}[]


const screenList:ScreenList =[
    {
        path:'/',
        element:<FakeStore />
    },
    {
        path:'/contact',
        element:<Contact />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/product/:id',
        element:<SingleProduct />
    },
    {
        path:'/*',
        element:<Error />
    },
]



export default screenList