import Products from "../components/Shop/Products";
import ShopHero from "../components/Shop/ShopHero";

const Shop = ({products}) => {
    return ( 
        <>
           <ShopHero />
           <div className="md:m-32 mx-6">
               <Products products={products} />
           </div>
        </>
     );
}
 
export default Shop;