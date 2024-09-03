// import Card from "./Card";
 import img from '../assets/download (2).jpg'

const Home = () => {
    return (
        // <div className="lg:mt-24 mt-20 mx-auto container">
        //     <div 
        //         className="bg-cover bg-center h-screen relative" 
        //         style={{ backgroundImage: "url('https://i.ibb.co/HVyRkqy/download-2.jpg')" }}
        //     >
                

        //     </div>
        //     <Card />

        //     <div className="bg-cover  h-screen bg-center" style={{backgroundImage: "url('https://i.ibb.co/2v67gMT/Capture.png')"}} >

        //    <h1 className="text-red-500  absolute  ml-40 mb-3  border-2 border-red-500">Hello</h1>
        //     </div>

            
        // </div>

      <div className='mt-28 className="lg:mt-24  mx-auto container'>

        <div  className=''>
            <img className='w-full h-[450px]   object-cover' src={img} alt="" />

        
        </div>
        <div className='absolute top-[300px] left-[50%]'>
            <h1 className='btn btn-primary '>Click</h1>
            <h1>How are you </h1>
            <h1>How are you </h1>
            <h1>How are you </h1>
        </div>
        <div className='absolute top-[300px] left-[50%]'>
            <h1 className='btn btn-primary '>Click</h1>
            <h1 className='ml-3'> how about you </h1>
            <h1>How are you </h1>
            <h1>How are you </h1>
        </div>

        <div className=' bg-cover bg-center h-screen border-4 relative border-gray-900' style={{backgroundImage: "url('https://i.ibb.co/2v67gMT/Capture.png')"}}>
        <h1 className='text-red-700 text-3xl  bg-green-700 rounded-xl  w-28  p-4 absolute left-[50%] bottom-[50%]'>Hello</h1>

        </div>




          <div className="relative">
                  <div className="flex flex-col gap-6 p-10 mt-28 ">

<div className="card card-compact bg-base-100 lg:w-96 w-[50%]  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact bg-base-100 lg:w-96 w-[50%]   shadow-xl absolute lg:left-[230px] left-[200px] top-[50%]">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            

        </div>

        </div>
      </div>

  
    );
};

export default Home;
