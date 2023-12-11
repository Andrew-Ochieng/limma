import { useDispatch } from "react-redux";
import  { Link } from 'react-router-dom'
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/Cart/cartSlice";

const CartItem = ({id, title, image, category, price, quantity=0}) => {
    const dispatch = useDispatch()

    return ( 
        <>
            <div key={id} className='card'>
                <div className="flex flex-col items-center justify-center">
                    <img src={image} alt={title} className='card-image' />
                    <Link to={`/products/${id}`} className='mt-4'>
                        <h1 className='card-content-title'>{title}</h1>
                        <p className='mt-2 card-content-details'>Category: {category}</p>
                        <p className='mt-2 card-content-price'>Ksh {price * 100}</p>
                    </Link>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <button className="card-btn" onClick={() => dispatch(removeFromCart(id))}>
                        Remove
                    </button>
                    <div className="flex items-center gap-4 ">
                        <button className="card-state-btn bg-green-500 text-white" onClick={() => dispatch(decrementQuantity(id))}>
                            -
                        </button>
                        <p>{quantity}</p>
                        <button className="card-state-btn bg-green-500 text-white" onClick={() => dispatch(incrementQuantity(id))}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CartItem;