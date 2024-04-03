import React from 'react'

type ProductProp = {
    params : {
        id : number
    }
    searchParams : string
}

export default function ProductDetail({params,searchParams}:ProductProp) {
  console.log(params.id)
  return (
    <div>
      <ProductDetail id={params.id}/>
      <p>Product details</p>
    </div>
  )
}
