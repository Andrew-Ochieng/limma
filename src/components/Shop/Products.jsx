import { useState } from "react";
import ProductList from "./ProductList";
import { BiCategory } from "react-icons/bi"
import { FaBars } from "react-icons/fa"

const Products = ({products, error, loading}) => {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')

    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(search.toLowerCase()) && 
        category === '' || product.category.toLowerCase() === category.toLowerCase()
    )

    return ( 
        <>
            <div>
                <div className="grid md:grid-cols-2 md:gap-16 md:mt-0 mt-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center md:text-xl">
                            <p className="p-2 bg-gray-200 rounded-md hover:text-red-500 cursor-pointer"><BiCategory /></p>
                            <p className="p-2 bg-gray-200 rounded-md hover:text-red-500 cursor-pointer ml-2"><FaBars /></p>
                        </div>
                        <form>
                            <select 
                                className="form-input focus-within:border-red-500" 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="men's clothing">Men's clothing</option>
                                    <option value="women's clothing">Women's clothing</option>
                                    <option value="jewelery">Jewelery</option>
                                <option value="electronics">Electronics</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <input 
                            type="search" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border-2 p-2 rounded-lg outline-none focus-within:border-green-500 w-full" 
                            placeholder="Searching todo..." 
                        />
                    </div>
                </div>
                <div>
                    {error && (<p>{error}</p>)}
                    {loading ? 
                        (<p>Loading products...</p>) : 
                        (
                            <div className='card-container'>
                                {filteredProducts.map(product => (
                                    <div key={product.id} className='card'>
                                        <ProductList product={product}  />
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </>
     );
}
 
export default Products;