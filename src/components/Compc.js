import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Compc = () => {

    const[prod, setProd] = useState([])


    const getProducts = async() =>{
        await axios.get("https://fakestoreapi.com/products").then(res=>setProd(res.data))
    }
console.log("product", prod)


    useEffect(()=>{
    //   const getProducts = async() =>{
    //     await axios.get("https://fakestoreapi.com/products").then(res=>setProd(res.data))
    // }
        getProducts()
    },[])

  return (
    <div>
        <h1>Component C</h1>
        {
            prod.map(ele=>{
                return(
                    <>
                        <h1>{ele.title}</h1>
                        <h1>{ele.price}</h1>
                        <hr />
                    </>
                )
            })
        }
    </div>
  )
}

export default Compc