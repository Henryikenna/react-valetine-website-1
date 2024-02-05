import { useState } from 'react'
import bearGif from "./assets/cute-love-bear-roses.gif";


const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please!",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart :(",
  
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  // function getNoButtonText() {
  //   return phrases[Math.min(noCount, phrases.length - 1)];
  // }

  function getNoButtonText() {
    const index = noCount % phrases.length;
    console.log(index);
    return phrases[index];
  }

  return (
    <div className=" bg-white bg-opacity-5 bg-cover w-screen h-screen  flex flex-col justify-center items-center">
      {yesPressed ? (
        <>
          <img className="w-2/4 md:w-1/4 -mt-16" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bears kissing" />
          <p className="text-base font-bold mt-3 md:text-2xl">Yayy!!!</p>
        </>
      ) : (
        <>
          <img className="w-2/4 md:w-1/4 -mt-16" src={bearGif} alt="bears with hearts" />
          
          <p className=" text-base font-bold my-3 md:text-xl">Will you be my valentine?</p>
          <div className=" flex flex-wrap flex-col md:flex-row gap-y-2 gap-x-4 items-center justify-center">
            <button style={{fontSize: yesButtonSize}} className=" bg-green-500 px-4 py-2 text-white font-semibold rounded-md hover:bg-green-700" onClick={() => setYesPressed(true)} >
              Yes
            </button>
            <button className=" bg-red-500 px-4 py-2 text-white font-semibold rounded-md hover:bg-red-700" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
