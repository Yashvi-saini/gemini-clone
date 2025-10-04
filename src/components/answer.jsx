import {useEffect,useState} from "react"
const Answer=({ans,totalresult,index,type})=>{

 const [heading,setheading]=useState(false);
 const [output,setoutput]=useState(ans);
 useEffect(()=>{
 if(checkheading(ans)){
    setheading(true);
   setoutput(replaceheading(ans))
 }

  },[])
 

  function checkheading(str){
    return /^(\*)(\*)(.*)\*$/.test(str)
 }
 function replaceheading(str){
    return  str.replace(/^(\*)(\*)|(\*)$/g,'')
 }


    return (
     <>
     {
        index==0 && totalresult> 1?<span className="pt-2 text-xl block text-white text-3xl">{output}</span>:        heading?<span className="pt-2 text-lg block text-white text-3xl">{output}</span>:
        <span className={type=='q'?'pl-1':'pl-5'}>{output}</span>
     }
       
     </>
    )
}
export default Answer