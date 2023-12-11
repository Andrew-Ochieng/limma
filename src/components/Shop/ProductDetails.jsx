import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/Cart/cartSlice";

const ProductDetails = ({products}) => {
    const { id } = useParams()
    const paramId = Number(id)

    let product = {}
    if (product) {
        let arr = products.filter((item) => item.id === paramId)
        product = arr[0]
    } else {
        product = {}
    }  

    // state-management
    const dispatch = useDispatch()

    return ( 
        <>
            <div className="md:m-32 sm:m-24 my-8 mx-6 ">
                {product &&  (
                    <div className="grid sm:grid-cols-2 md:gap-16 sm:gap-12 gap-8">
                        <div>
                            <img className="md:h-80" src={product.image} alt="" />
                        </div>
                        <div className="md:space-y-4 space-y-3">
                            <h3 className="card-content-title">{product.title}</h3>
                            <p className="card-content-details">{product.description}</p>
                            <h4>Ksh {product.price*100}</h4>
                            <p>
                                Tags: 
                                <span className="ml-1">{product.category}</span>
                            </p>
                            <div className="flex justify-start items-center">
                                <button 
                                    className="btn btn-error"
                                    onClick={() => dispatch(addToCart(product.id))}
                                    >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
     );
}
 
export default ProductDetails;