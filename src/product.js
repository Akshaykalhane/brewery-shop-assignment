import React from "react";

const Product=()=>{

    let productdata=[
        {
            "id":1,
            "name":"Monitor",
            "isavail":true
        },
        {
            "id":2,
            "name":"desktop",
            "isavail":false
        },
        {
            "id":3,
            "name":"mouse",
            "isavail":true
        }
    ]


console.log(productdata)


    return(
        <>
            {productdata.map((item)=>{
                return (
                    <div key={item.id} >
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Product;