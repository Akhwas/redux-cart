import Navbar from "./components/navbar";
import CartContainer from './components/cartContainer'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react";
import {calculateTotals,getCartItems} from './features/cart/cartSlice'
import cartItems from "./cartItems";
import Modal from "./components/modal";
function App() {
  const dispatch = useDispatch()
  const {cartItems,isLoading} = useSelector((state)=>state.cart)
  const {isOpen} = useSelector((state)=>state.modal)
  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  useEffect(()=>{dispatch(calculateTotals())},[cartItems])
  if(isLoading){
    return <div><h3>
      loading...
      </h3></div>
  }
  return <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
