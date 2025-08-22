import React from 'react'
import './products.css'
import basket from '../assets/organic-basket-farm.png'

const sampleProducts = [
  { id: 1, name: 'Free-range Chicken', price: 7.5, desc: 'Fresh and healthy', img: basket },
  { id: 2, name: 'Organic Eggs', price: 4.2, desc: 'Farm fresh eggs', img: basket },
  { id: 3, name: 'Green Lettuce', price: 2.75, desc: 'Crisp & leafy', img: basket },
  { id: 4, name: 'Corn', price: 2.75, desc: 'Crisp & leafy', img: basket },
  { id: 5, name: 'Rice', price: 2.75, desc: 'Crisp & leafy', img: basket },
  { id: 6, name: 'Ducks', price: 2.75, desc: 'Crisp & leafy', img: basket },
  { id: 7, name: 'Goats ', price: 2.75, desc: 'Crisp & leafy', img: basket },
]

const Products = () => {
  return (
    <section className='products-section'>
      <header className="products-header">
        <h2 className="products-hero">
          <span className="line-1">Fresh from</span>
          <span className="line-2">Farm to Table</span>
        </h2>
        <p className="products-sub">Fresh, organic goods sourced directly from our farms.</p>
      </header>

      <div className='products-grid'>
        {sampleProducts.map((p) => (
          <article key={p.id} className='product-card'>
            <div className='product-media'>
              <img src={p.img} alt={p.name} />
              <span className='badge'>Organic</span>
            </div>

            <div className='product-body'>
              <h3 className='product-title'>{p.name}</h3>
              <p className='product-desc'>{p.desc}</p>

              <div className='product-footer'>
                <span className='price'>${p.price.toFixed(2)}</span>
                <button className='add-cart'>Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products