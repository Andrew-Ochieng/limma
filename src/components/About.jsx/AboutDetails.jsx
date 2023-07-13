const AboutDetails = () => {
    return ( 
        <>
            <div className="grid md:grid-cols-2 md:gap-16 gap-8">
                <div>
                    <img src="./rider-banner.jpg" alt="" />
                </div>
                <div className="space-y-4 ">
                    <h3 className="lg:text-5xl md:text-4xl text-3xl font-black text-gray-800">Facilitating quality control in agriculture</h3>
                    <p className="border-l-2 border-green-600 pl-4 italic text-gray-600"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                </div>
            </div>
        </>
     );
}
 
export default AboutDetails;