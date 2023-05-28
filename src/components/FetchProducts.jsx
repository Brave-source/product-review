import { useState } from "react"
import { Link } from "react-router-dom"
import data from "../db.json"
import '../styles/Products.css'

export default function FetchProducts() {
  const [items] = useState(data)

  return (
    <>
      <section className="product-section">
        {items.products.map(({ id, name, desc, amt, small, large }) => (
          <article
            key={id}
            className="item-article"
          >
            <div className="img-section">
              <picture>
                <source media="(min-width: 768px)" srcSet={large} />
                <img src={small} alt={name} />
              </picture>
            </div>

            <div>
              <h2 className="head-text">{name}</h2>
              <p className="amount">{amt}</p>
              <p className="item-desc">{`${desc.substring(
                0,
                200
              )}...`}</p>
              
              <ul className="item-btn">
                <li>
                  <Link
                    to={`/${name}`}
                    className="btn-more"
                  >
                    More Details
                  </Link>
                </li>
                <li>
                <Link
                    to={`/${name}`}
                    className="btn-more"
                  >
                    Write a Review
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
