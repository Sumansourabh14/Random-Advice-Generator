import axios from "axios";
import { useState } from 'react';

function App() {
  const API_URL = "https://api.adviceslip.com/advice";

  const [showAdvice, setShowAdvice] = useState("Advice will show up here.");

  function getAdvice() {
    axios.get(API_URL)
      .then(response => setShowAdvice(response.data.slip.advice));
  }

  return (
    <div className="container p-8 min-w-full min-h-screen text-white bg-gradient-to-r from-slate-700 to-slate-800">
      <div className="flex flex-col items-center gap-8 py-16">
        <h1
          className="text-3xl lg:text-5xl font-bold border-b-2">Random Advice Generator
        </h1>
        <div>
          <button
            onClick={getAdvice}
            className="bg-slate-100 hover:bg-slate-400 hover:scale-105 duration-200 px-8 py-4 font-bold rounded-sm text-black">Generate Advice
          </button>
        </div>
        <div className="bg-slate-800 p-8 max-w-2xl shadow-lg rounded-lg text-center lg:text-xl">
          <p
            className='font-bold font-mono'>{showAdvice}
          </p>
        </div>
        <div className="absolute bottom-5 text-center">
          <p>Built by <a className="hover:border-b" href="https://sumansourabh.netlify.app/">Suman Sourabh</a></p>
          <p className="text-sm mt-2 text-gray-400">Made with <a href="https://reactjs.org/">React</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
