import React, { useState, useEffect } from 'react';
import axios from 'axios';



function home() {
  const [username,setUsername]=useState("")
  const [islogedin, setIsLogedin] = useState(false)
  useEffect(() => { }
    
    
    
    , [])
  return (
    {islogedin? (<div>hi {username} thanks for joining</div>):(<p>please log in</p>)}
    
  )
}

export default home