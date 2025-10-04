import { useState } from 'react'
import './App.css'
import {URL} from './constants';

function App() {
 const [query,answerquery]=useState('');
const [result,setresult]=useState(undefined)


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
setresult(response.candidates[0].content.parts[0].text)
}
  return (
   
    <div className="flex flex-col h-screen">{/*this is outerwrapper*/}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">{/*this is main container*/}
        <div className='w-full max-w-2xl space-y-4'>{/*this will be welcome container*/}
           <div className='bg-zinc-900 p-4 rounded-2xl border border-zinc-700 shadow-md text-white'>{result}</div>
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
