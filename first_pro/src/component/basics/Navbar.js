import React from 'react'

function Navbar({menu}) {
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
             {
                menu.map((item)=>{
                    return (
                        <>
                        <button className="btn-group__item">
                        {item}
                      </button>
                      </>
                    )
                })
             }
             
           
         
        </div>
      </nav>
    </>
  )
}

export default Navbar