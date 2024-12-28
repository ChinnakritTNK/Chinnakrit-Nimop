import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div
      className="h-screen bg-black flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: `url('/images/5.png')`, // Path ของภาพที่ใช้
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-6xl font-bold tracking-widest">NIMOP!!</h1>
      <br />
      <p className="text-xl mt-2 tracking-wider">WELCOME TO PUZZLE WORLD</p>
      
      <Link to="/gameintro"> 
      <button
        className="mt-8 px-8 py-3 border-2 border-white text-white text-lg rounded-lg hover:bg-white hover:text-black transition duration-300"
      >
        LETS GO
      </button>
      </Link>
    </div>
  );
};

export default LandingPage;