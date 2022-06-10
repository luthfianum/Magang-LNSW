import React from 'react';
import { Link } from 'react-router-dom';

export const Table = ({ product, deleteProduct }) => {

  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button className="button is-small is-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
                <Link className="button is-small is-info" to={`/edit/${item.id}`}>Edit</Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>   
  )
}


export default Table;