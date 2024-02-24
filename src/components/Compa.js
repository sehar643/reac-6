import React, { useEffect, useState } from 'react'

const Compa = () => {

    const[prod, setProd] = useState([])


    const getProducts = () =>{
        fetch("https://fakestoreapi.com/products")
        .then(abc=>abc.json())
        .then(data=>{setProd(data)})
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
        <h1>Component A</h1>
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

export default Compa