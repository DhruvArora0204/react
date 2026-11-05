import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { RouterProvider , createBrowserRouter, Route,createRoutesFromElements} from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     //array se uthaega jisko render krna hai
//     children:[
//       {
//         path :'',
//         element:<Home/>
//       },
//       {
//         path :'about',
//         element:<About/>
//       },
//       {
//         path :'contact',
//         element:<Contact/>
//       }

//     ]
//   }
// ])

//url se parameter ka kaam pehle yaha par hota hai

//isske andar jo bhi child route hai wo render hoga
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = "" element = {<Home/>} />
      <Route path = "about" element = {<About/>} />
      <Route path = "contact" element = {<Contact/>} />
      <Route path =  "user/:id" element = {<User/>} />
      //loader ka kaam ye hai ki data ko fetch krke component me bhej de
      <Route 
      path =  "github/:githubId" element = {<Github/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
