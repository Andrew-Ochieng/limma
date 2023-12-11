import { useSelector } from "react-redux";
import CartItem from "../components/Shop/CartItem";

const Cart = ({products}) => {
    const cart = useSelector((state) => state.cart)
    
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        });
        return { totalQuantity, totalPrice }
    }
    
    
    return ( 
        <>
            <div className="md:m-8">
                <h1 className="container-title">Shopping Cart</h1>
                <div className="grid md:grid-cols-4 sm:grid-cols-3  md:gap-8 gap-4">
                    {cart?.map((item) => (
                        <CartItem 
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            category={item.category}
                            price={item.price} 
                            quantity={item.quantity}
                        />
                    ))}
                </div>

                <div className="md:mt-16 mt-8 flex items-center justify-center">
                    <div className="bg-green-200  rounded-lg">
                        <h2 className="md:text-xl text-lg text-center py-4 bg-red-200 rounded-t-lg text-gray-700 font-semibold">Order Summary</h2>
                        <div className="md:px-12 p-8 space-y-2 items-center flex flex-col">
                            <p>Total Items: {getTotal().totalQuantity}</p>
                            <p>Total Price: Ksh {Math.trunc(getTotal().totalPrice * 100)}</p>
                            <button className="card-state-btn" onClick={() => alert('Payment will be intergrated soon!')}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cart;