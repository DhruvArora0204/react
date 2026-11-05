import { useState,  useEffect } from 'react'

export default function Github() {
    const[data,setData] = useState([]) 
    useEffect(() => {
        fetch(`https://api.github.com/users/DhruvArora0204`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <>
        <div className = 'text-3xl font-bold text-center bg-gray-200 p-4 m-6 rounded-lg'>
            Github followers: {data.followers} 
            <img src = {data.avatar_url} alt = "GitPic" width = "100px" height = "100px"/>
        </div>

        </>
    )
}

export const githubLoader = async () => {
    const response = await fetch(`https://api.github.com/users/DhruvArora0204`)
    return response.json()
}