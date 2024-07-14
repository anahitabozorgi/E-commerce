import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'
import Index from './pages/Index'
import About from './pages/About'
import Home from './pages/Home'
import ProductList from './components/ProductList'
import AddProductForm from './pages/AddProductForm';
import { Provider } from 'react-redux';
import store from './Store'
// import uuid from 'uuid'





const App: React.FC = () => {

  interface Product{
    id: number;
    name: string;
    price: number;
    status: boolean;
  
  }
  
  const [products, setProducts] = useState<Product[]>([]);

  const roots = createBrowserRouter([
    {
      path: "/",
      element: 
      <Home
        products = {products}
        setProducts = {setProducts}
      />
    },
    {
      path: "/about",
      element: <About/>
    }, 
    {
      path: "/user",
      element:<About/>
    },
  
    {
      path: "/add-product",
      element:<AddProductForm
        products = {products}
        setProducts = {setProducts}
      
      />
    },
  
  
  ]) 

  return (
    // <RouterProvider router={roots}/>
    <Provider store={store}>
        <RouterProvider router={roots}/>
    </Provider>
  )
}

export default App