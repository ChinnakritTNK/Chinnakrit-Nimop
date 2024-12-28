import { Link } from 'react-router-dom';

const CHARECTER = () => {
    return (
      <div
        className="h-screen flex flex-col items-center justify-center text-white p-10"
        style={{
          backgroundImage: `url('/images/5.png')`, // Path ของไฟล์ภาพเกม
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-bold text-left mb-20">CHARECTER</h1>
        <p className="text-lg text-center leading-relaxed max-w-3xl mb-20">
        As Nimop, a young boy captivated by his dreams, lay asleep, he suddenly 
        awoke in a mysterious place—a puzzling room 
        surrounded by enigmas and countless secrets waiting to be unraveled. 
        The astonishing truth was that the only way to escape this dream was to find
         the hidden key within this world and unlock its secrets to return to 
         reality once more.
        </p>
        
        <div className="flex space-x-80 mb-30">
          <Link to="/gameintro">
          <button
            className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            BACK
          </button>
          </Link>
          <Link to="/DownLoad">
          <button
            className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            NEXT
          </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CHARECTER;