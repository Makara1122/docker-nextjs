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
      
    </div>
  )
}
