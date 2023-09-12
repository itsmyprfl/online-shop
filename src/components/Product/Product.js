import React, { useEffect, useState } from 'react'; 
import Card from '../Card/Card';
import { BASE_URL } from '../../Api/BASE_URL';
import './Product.css'

function Product() {
  const [db, setDb] = useState([])

  useEffect (() => {
    try {
      fetch(`${BASE_URL}/products`)
      .then(data => data.json())
      .then(data => setDb(data))
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className='content'>
      {
        db.length > 0 && db.map((element, value) => {
          return <Card key={value} data={element}/>
        })
      }
    </div>
  )
}

export default Product