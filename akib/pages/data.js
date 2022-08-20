import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function data(){

    const [user, setUser] = useState([]);
    console.log("user",user)

    const getData = async ()=>{
        let res = await axios.get("https://api.github.com/users")
        .then((res)=>res.data);
        setUser(res)
    }

    useEffect(() => {
      getData();
    }, [])
    

  return (
    <div>
        <p className='text-center text-3xl pt-5 pb-5 text-green-600'>GitHub Users</p>

        <div className='grid grid-cols-7 gap-3 p-3 ' >
        {user.map((usr)=>{
            return <div key={usr.id} className=" border-solid border-2 border-black rounded-lg p-2 h-40 w-40 grid  place-items-center">
                <img className='w-20 rounded-full' src={usr.avatar_url}></img>
                <p className="text-green-600 text-2xl">{usr.login}</p>
            </div>
        })}
        </div>
    </div>
  )
}
