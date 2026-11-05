import React from 'react'
import { useParams } from 'react-router-dom'
export default function Contact() {
    const {id} = useParams()
    return (
        <>
        <h1 className = 'text-3xl font-bold text-center'> User : {id} </h1>
        </>
    )
}