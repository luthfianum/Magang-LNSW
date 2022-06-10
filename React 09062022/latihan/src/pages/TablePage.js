import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import Table from '../components/Table'

export const TablePage = () => {
  const [product, setProduct] = useState([])

  // const deleteProduct = (id) => {
  //   setProduct(product.filter(item => item.id !== id))
  // }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch('http://localhost:8080/products')
    const data = await res.json()
    setProduct(data)
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8080/products/${id}`, {
      method: 'DELETE',
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    fetchData()
  }

  return (
    <>
      <Header title="Table Page" />
      <Link to="/add" className="button is-primary mt-5">Add</Link>
      <Table product={product} deleteProduct={deleteProduct} />
    </>
  )
}

