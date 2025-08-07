import { useState } from "react";
import { KeyboardBody } from "./components/KeyboardBody";
// import { KeyboardSettings } from "./components/KeyboardSettings";
import Moon from "./components/moon";
import Sun from "./components/sun";
import Colorboard from "./components/Colorboard";



export default function App() {

  const [nav, setNav] = useState(true)
  const [darkMode, setDarkMode ] = useState(true)
  const [keyBorder, setKeyBorder] = useState('#fb5607')


  return <div className={`${darkMode 
    ? 'bg-linear-to-tr from-[#070707] to-[#202020]' 
    : 'bg-linear-to-tr from-slate-100 to-slate-400'} transition-colors duration-300 h-screen w-full flex flex-col items-center`}>

  <div 
    onMouseEnter={() => setNav(true)}
    onMouseLeave={() => setNav(false)}
    onChange={() => console.log("hoversd")}

    className={`island text-white absolute m-2 w-40 h-10 rounded-2xl cursor-pointer flex items-center justify-center shadow-lg hover:shadow-xl border border-dashed  hover:w-80 hover:h-30 transition-all duration-500 ease-in-out
    ${darkMode ? `border-zinc-600 shadow-black/20 bg-[#070707]]` : `border-slate-500`} 
    `}>

      {!nav 
        // ? <></>
        ? <span className={`w-full text-center transition-opacity duration-3000 ${nav ? 'opacity-0' : 'opacity-100'} ${darkMode ? 'text-white/90' : 'text-zinc-700'}`}>Theme</span>
        : <div className="w-full rounded-2xl flex items-center justify-center gap-10 transition-all duration-500 ease-in-out transform opacity-0 h-30 hover:opacity-100">
            <button
              onMouseDown={(e) => e.preventDefault()}
              className={` text-white transition-all duration-500 ease-in-out cursor-pointer transform ${nav 
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-0'}`} 
                onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Moon /> : <Sun/>}
            </button>


        <Colorboard onClick={setKeyBorder} nav={nav}/>
        </div>
        

      }
      
  </div>

    <KeyboardBody keyBorder={keyBorder} dark={darkMode}/>

  </div>





}