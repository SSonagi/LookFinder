import React from 'react';

const Home = () => {
  
 return (
  <div className="w-full h-screen relative">

    <img
      src="https://cdn.prod.website-files.com/635a76dc72a1554a18e33d3d/63f62f2c0a7557f998ef3dbb_63c52604b37bb03b1fb649a8_35_best_streetwear_web_designs_2019.jpeg"
      alt="Fashion Hero"
      className="absolute inset-0 w-full h-full object-cover"
    />

  
    <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

  
    <div className="absolute inset-0 flex gap-10 flex-col items-center justify-center accent z-10">
     
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md backdrop-blur-sm text-primary-content">
        Looks Reimagined
      </h1>

     
      <fieldset className="bg-white bg-opacity-90 border rounded-lg p-6 shadow-lg w-full max-w-md">
        <legend className="text-lg font-semibold text-gray-700 mb-2"></legend>
        <div className="flex space-x-2">
          <input
            type="text"
            className="input input-bordered flex-grow"
            placeholder="Whats your Style?"
          />
          <button className="btn btn-primary">Find</button>
        </div>
      </fieldset>
    </div>
  </div>
);

};

export default Home;
