
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './apis/StoreContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



ReactDom.createRoot(document.getElementById('root')).render(

<BrowserRouter basename="/Food-app/">


<StoreContextProvider>

<App />

</StoreContextProvider>
<ToastContainer position="top-center"
autoClose={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce/>

</BrowserRouter>


 
)
