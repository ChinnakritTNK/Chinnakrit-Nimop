import { Link } from 'react-router-dom';
import image from '../public/images/dooooor.png';
const Download = () => {
    return (
      <div
        className="h-screen flex flex-col items-center justify-center text-white p-10"
        style={{
          backgroundImage: `url('/images/5.png')`, // Path ของไฟล์ภาพเกม
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-bold text-left mb-8">Are you ready?</h1>
        
        <img 
                src={image} 
                alt="" 
                 width="700" height="Auto"
            />
        <a
  href="https://drive.google.com/drive/folders/1gQQ3F2YSU0ttVUD_j0CNr7vitSaba06M?usp=sharing"
  className="underline"
>
  Link Download Game
</a>
        
        <br /><br /><br />
        <div className="flex space-x-6">
          <Link to="/page3">
          <button
            className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            BACK
          </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Download;