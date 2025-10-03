import { useState } from 'react'
import './App.css'
import {URL} from './constants';

function App() {
 const [query,answerquery]=useState('');
const [result,setresult]=useState(undefined)


 const body={
  "contents": [{
    "parts":[{"text":"query"}]
  }]
 }

const askquestion=async()=>{
let response= await fetch(URL,{
  method:"POST",
  body:JSON.stringify(body)
})
 response = await response.json();
setresult(response.candidates[0].content.parts[0].text)
}
  return (
   
    <div>{/*this is outerwrapper*/}
      <div>{/*this is main container*/}
        <div className='container h-180 '>{/*this will be welcome container*/}
           <div className='text-white'>{result}</div>
        </div>
        <div className='bg-zinc-800 w-1/2  text-white m-auto rounded-2xl border-zinc-700 pr-3 p-1 border flex h-18xl'>{/*this will be our querycontainer*/}
          <input type="text"  value={query} onChange ={(event)=>answerquery(event.target.value)} className='w-full h-full p-3 outline-none' placeholder='Ask gemini' />
          <button onClick={askquestion}>enter</button>
        </div>
        
      </div>
    </div>
   
  )
}

export default App
