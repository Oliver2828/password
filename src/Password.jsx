import React, { useRef, useState } from 'react'

function Password() {

    let [typo,settypo] = useState('password')
    let [view,setview] = useState('👹')
    let [ww,setww] = useState('0%')
    let [bgg,setbgg] = useState("")
    let [forstrength,setforstrength] = useState("strength")
    let getval = useRef()




    function check() {
        if (typo == "password") {
            settypo('text')
            setview('🥸')
        } else {
            settypo("password")
            setview("👹")
            
        }
    
    }
    function status() {
       if (getval.current.value.length <= 0) {
          setww("0%")
          setbgg("white")
          setforstrength("strength")
       }
        else if (getval.current.value.length <= 4) {
            setww("30%")
            setbgg("red")
            setforstrength("very weak")
            
        } else if(getval.current.value.length <= 8) {
            setww("70%")
            setbgg("yellow")
            setforstrength("weak")
        }
           else if(getval.current.value.length <= 10) {
            setww("100%")
            setbgg("green")
            setforstrength("strong")
        }
    }

        

         
      
  return (
    <div className='h-[100vh] flex justify-center items-center bg-slate-50'>
         <div className='h-[100px] w-[400px] bg-slate-600 rounded grid grid-rows-2'>
             <div className='bg-neutral-300 flex justify-center items-center gap-3'>
                <input type={typo} ref={getval}  onInput={status} placeholder='Enter your password'/>
                <button onClick={check} className='bg-gray-200 text-white p-2 rounded hover:bg-gray-300'>{view}</button>
             </div>
             <div className='bg-black flex justify-center items-center gap-3'>
                 <div className=' flex h-[10px] rounded-lg w-[170px] bg-slate-200'>
                     <div className='bg-red-500 h-[10px]  rounded-xl' style={{width:ww,backgroundColor:bgg,transition:"0.5s"}}></div> 
                 </div>
                 <p className='text-white font-bold font-mono'>{forstrength}</p>
             </div>
         </div>
    </div>
  )
};

export default Password;