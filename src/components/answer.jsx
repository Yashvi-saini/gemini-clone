import {useState,useEffect} from "react"

const Answer=({ans,index})=>{
    const [heading,setheading]=useState(false)
    const [answer,setanswer]=useState(ans);

    useEffect(()=>{

   if(checkHeading(ans)){
    setheading(true);
    setanswer(replacestar(ans));
   }

    },[]);

    function replacestar(str){
    return str.replace(/^(\*)(\*)|(\*)$/g,'')
}
function checkHeading(str){
    return /^(\*)(\*)(.*)\*$/.test(str)
}

    return(
        <>
        
        {heading?<span className="pt-2 text-lg block text-white ">{answer}</span>:
        <span className="pl-5 ">{answer}</span>}
        </>
    )
}
export default Answer