import { Link } from 'react-router-dom';

const GameIntroPage = () => {
    return (
      <div
        className="h-screen flex flex-col items-center justify-center text-white p-10"
        style={{
          backgroundImage: `url('/images/5.png')`, // Path ของไฟล์ภาพเกม
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-bold  flex justify-Left mb-20 ">WHAT IS NIMOP!!</h1>
        <p className="text-lg text-center leading-relaxed max-w-3xl mb-20">
          A WORLD OF MYSTERIES FILLED WITH CHALLENGES AND EERIE SUSPENSE, WHERE
          UNEXPECTED SOUNDS KEEP YOU ON EDGE AT ALL TIMES. IN THIS GAME, YOUR
          MISSION IS TO UNCOVER SECRET CODES TO UNLOCK A SAFE, RETRIEVE A CD, AND
          PLAY IT ON A TV, WHICH HOLDS THE KEY TO YOUR ESCAPE. <br /> <br />
          ARE YOU READY TO FACE THIS CHALLENGE?
        </p>
        <img src="/asdasdgame.png" alt="" />
        
        <div className="flex space-x-80">
          <Link to="/">
          <button
            className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            BACK
          </button>
          </Link>
          <Link to="/page3">
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
  
  export default GameIntroPage;