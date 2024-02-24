import React, { useEffect, useState } from 'react'

const Compb = () => {

    const[prod, setProd] = useState([])


    const getProducts = async() =>{
        let result = await fetch("https://fakestoreapi.com/products")
        result = await result.json()
        console.log(result)
        setProd(result)
    }



    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
        <h1>Component B</h1>
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

export default Compb