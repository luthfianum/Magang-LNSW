import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditProduct = () => {
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchData = async () => {
    const res = await fetch(`http://localhost:8080/products/${id}`);
    const data = await res.json();
    setTitle(data.title);
    setPrice(data.price);
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  })

  const updateProduct = async (e) => {
    e.preventDefault();
    const data = {
      title,
      price
    }
    const res = await fetch(`http://localhost:8080/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    await res.json();
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={updateProduct}>
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
