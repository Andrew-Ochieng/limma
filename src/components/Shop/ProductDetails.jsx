import { useParams } from "react-router-dom";

const ProductDetails = ({products}) => {
    const { id } = useParams()

    console.log(products)
    let product = {}
    if (product) {
        let arr = products.filter((item) => item.id == id)
        product = arr[0]
    } else {
        product = {}
    }  

    return ( 
        <>
            <div className="md:m-32 sm:m-24 my-8 mx-6 ">
                {product &&  (
                    <div className="grid sm:grid-cols-2 md:gap-16 sm:gap-12 gap-8">
                        <div>
                            <img className="md:h-80" src={product.image} alt="" />
                        </div>
                        <div className="md:space-y-4 space-y-3">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <h4>Ksh {product.price*100}</h4>
                            <p>
                                Tags: 
                                <span className="ml-1">{product.category}</span>
                            </p>
                            <div className="flex justify-start items-center">
                                <div className="flex items-center rounded-lg border-2 border-success">
                                    <label htmlFor="pcs" className="btn btn-success rounded-none">Pcs</label>
                                    <input type="number" className="input input-success w-16 outline-none" />
                                </div>
                                <button className="btn btn-error ml-6">
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