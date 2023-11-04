
import React from 'react'

function Card({menuData}) {
  return (
    <>
    <section className="main-card--cointainer">
    {
    menuData.map((item)=>{
      const {id,category,name,description,image}=item
return(
    <>
<div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span>
            <span className="card-author subtle" style={{ color: "red" }}>
            {category}
            </span>
            <h2 className="card-title">{name}</h2>
            <span className="card-description subtle">
               {description}
            </span>
            <div className="card-read">Read</div>
            <img src={image} alt="images" className="card-media" />
            <span className="card-tag subtle">order now</span>
          </div>
        </div>
      </div>
      </>
)
    })
    }
     </section>
    </>
  )
}

export default Card