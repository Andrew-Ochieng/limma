import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decrementQuantity, incrementQuantity } from "../../redux/Cart/cartSlice";


const ProductList = ({product, quantity=0}) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const cartItem = cart.find((item) => item.id === product.id)
    return ( 
        <>
            <div className="flex flex-col items-center justify-center">
                <img src={product.image} alt={product.title} className='card-image' />
                <Link to={`/products/${product.id}`} className='mt-4'>
                    <h1 className='card-content-title'>{product.title.slice(0,20)}</h1>
                    <p className='mt-2 card-content-details'>{product.description.slice(0, 40)}...</p>
                    <p className='mt-2 card-content-price'>Ksh {product.price * 100}</p>
                </Link>
            </div>
            {cartItem ? (
                <div className="flex items-center justify-between">
                    <button className="card-state-btn bg-green-500 text-white" onClick={() => dispatch(decrementQuantity(product.id))}>
                        -
                    </button>
                    <p>{product.quantity}</p>
                    <button className="card-state-btn bg-green-500 text-white" onClick={() => dispatch(incrementQuantity(product.id))}>
                        +
                    </button>
                </div>
            ) : (
                <button 
                    className="card-btn mt-2"
                    onClick={() => dispatch(addToCart(product))}>
                    Add to cart 
                </button>
            )}              
        </>
     );
}
 
export default ProductList;