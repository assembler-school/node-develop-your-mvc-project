import React, {useState, useEffect, useRef} from 'react'
import axiosClient from '../../config/axios'

import {ProductCard} from '../product/'


function Home() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    // AXIOS GET
    const currentPage = page + 1
    const res = await axiosClient.get(`/items?limit=1&page=${currentPage}`)
    const items = res.data.docs

    setHasNextPage(res.data.hasNextPage)
    setProducts(prevItems => [...prevItems, ...items])
    setPage(currentPage)
  }


  return (
    <div className='container'>
      <div className='row'>
        {products.length > 0 && products.map(elm => {
          return <ProductCard productData={elm} key={elm._id} />
        })} 
        <button hidden={!hasNextPage} onClick={getProducts} >Load more</button> 
      </div>
    </div>
  )
}



export default Home
