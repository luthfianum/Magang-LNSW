import { React, useState } from 'react'
import { useNavigate} from 'react-router-dom'


export const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

  const savePoint = async(e) => {
    e.preventDefault()
    const data = {
      title,
      price
    }
    const res = await fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result)
    navigate('/')
  }


  return (
    <div>
      <form onSubmit={savePoint}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}
