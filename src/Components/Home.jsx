import Card from "./Card";

const Home = () => {
    return (
        <div className="lg:mt-24 mt-20 mx-auto container">
            <div 
                className="bg-cover bg-center h-screen relative" 
                style={{ backgroundImage: "url('https://i.ibb.co/HVyRkqy/download-2.jpg')" }}
            >
                

            </div>
            <Card />

            <div className="bg-cover  h-screen bg-center" style={{backgroundImage: "url('https://i.ibb.co/2v67gMT/Capture.png')"}} >

           <h1 className="text-red-500  absolute  ml-40 mb-3  border-2 border-red-500">Hello</h1>
            </div>

            
        </div>
    );
};

export default Home;
