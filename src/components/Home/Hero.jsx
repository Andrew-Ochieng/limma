import heroImg from "../../assets/shop-banner.jpg"

const Hero = () => {
    return ( 
        <>
            <div className="hero min-h-max relative" style={{backgroundImage: `url(${heroImg})`}}>
                <div className="hero-overlay bg-opacity-60 md:py-48 py-24"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="md:max-w-xl">
                        <h1 className="md:my-4 my-2 md:text-5xl text-2xl font-bold">Your all in One Agricultural Consultant & Marketplace</h1>
                        <p className="font-medium text-red-500">Home</p>
                    </div>
                </div>
            </div>  
        </>
     );
}
 
export default Hero;