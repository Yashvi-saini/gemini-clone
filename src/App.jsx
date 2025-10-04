import { useState,useId } from 'react'
import './App.css'
import {URL} from './constants';
import Answer from './components/answer'

function App() {
 const [query,answerquery]=useState('');
const [result,setresult]=useState([])
const id=useId()

 const body={
  contents: [{
    role:"user",
    parts:[{text:query}]
  }]
 }

const askquestion=async()=>{
let response= await fetch(URL,{
  method:"POST",
  headers:{"Content-Type": "application/json"},
  body:JSON.stringify(body)
})

 response = await response.json();
 let dataString= response.candidates[0].content.parts[0].text;
 dataString= dataString.split("* ");
 dataString=dataString.map((item)=>item.trim())
 setresult([...result,{type:'q',text:query},{type:'a',text:dataString}]);
}
console.log(result)

  return (
   
    <div className="flex flex-col h-screen">{/*this is outerwrapper*/}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">{/*this is main container*/}
        <div className='w-full max-w-2xl space-y-4'>{/*this will be welcome container*/}
           <div className='bg-zinc-900 p-4 rounded-2xl border border-zinc-700 shadow-md text-zinc-300'>
              <ul>
              {
                result.map((item,index)=>(
                  <div key={index+Math.random()} className={item.type=='q' ? 'flex justify-end':''}>{
                  item.type=='q'?
                   <li key={index+Math.random()} className="text-right p-1 border-5 bg-zinc-700 border-zinc-700 rounded-tl-4xl rounded-br-4xl rounded-bl-4xl  w-fit"><Answer ans ={item.text} totalresult={1} index={index} type={item.type}/></li>
                   :item.text.map((ansitem,ansindex)=>(
                    <li key={ansindex+Math.random()} className="text-left "><Answer ans ={ansitem} totalresult={item.length} index={ansindex} type={item.type}/></li>
                   ))
                  } 
                   </div>
                  ))
              }
              </ul>

            </div>
        </div>

        <div className='bg-zinc-800 w-1/2  text-white m-auto rounded-2xl border-zinc-700 pr-3 p-2 border flex h-18xl'>{/*this will be our querycontainer*/}
          <input type="text"  value={query} onChange ={(event)=>answerquery(event.target.value)} className='w-full h-full p-3 outline-none' placeholder='Ask gemini' />
          <button onClick={askquestion}>enter</button>
        </div>
      </div>
    </div>  

  )
}

export default App
