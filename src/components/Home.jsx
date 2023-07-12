import React from 'react'
import ProductCard from './ProductCard'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'



const Home = () => {
    const {productlist} = useSelector(state=>state.data)
    
    const dispatch = useDispatch()
    const addToCartHandler = (options) =>{
        dispatch({type:'addToCart', payload: options})
        dispatch({type:'calculatePrice'})
        toast.success("Added To Cart")
    }
  return (
    <div className='home'>
        {
            productlist.map((i)=>(
                <ProductCard key={i.id} name={i.name} id={i.id} price={i.price} imgSrc={i.imgSrc} handler={addToCartHandler} />
            ))
        }
    </div>
  )
}

export default Home