const AboutHero = () => {
    return ( 
        <>
            <div className="hero min-h-max " style={{backgroundImage: 'url(./about-us.jpg)'}}>
                <div className="hero-overlay bg-opacity-60 md:py-48 py-24"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 md:text-5xl text-4xl font-bold">Shop</h1>
                        <p className="mb-5 font-medium">Home - 
                            <span className="text-red-500 ml-1">About</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutHero;