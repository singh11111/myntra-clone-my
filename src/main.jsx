import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './store/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import Bag from './components/Bag.jsx'
import Homu from './store/Homu.jsx'
import myntraStore from './storeData/index.js'
import {Provider} from 'react-redux'
const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {path:'/',element:<Homu/>},
      {path:'/Bag',element:<Bag/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
