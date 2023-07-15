import { useState } from "react";
import ProductList from "./ProductList";
import { BiCategory } from "react-icons/bi"
import { FaBars } from "react-icons/fa"

const Products = ({products, error, loading}) => {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))


    const handleSelect = (e) => {
        setCategory(e.target.value)
        console.log(category)
    }

    if (category) {
        const newFilters = filteredProducts.filter((product) => product.category == category)
        console.log(newFilters)
    } 
    

    // console.log(filteredProducts)

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
                                onChange={handleSelect}
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
                        <form onSubmit={handleSearch} className='flex justify-center items-center md:mt-0 mt-4'>
                            <input 
                                type="search" 
                                value={search}
                                onChange={handleSearch}
                                className="border-2 p-2 rounded-lg outline-none focus-within:border-green-500 w-full" 
                                placeholder="Searching todo..." 
                            />
                        </form>
                    </div>
                </div>
                <div>
                    {error && (<p>{error}</p>)}
                    {loading ? 
                        (<p>Loading products...</p>) : 
                        (<ProductList filteredProducts={filteredProducts}  />)
                    }
                    
                </div>
            </div>
        </>
     );
}
 
export default Products;