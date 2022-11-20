import React, { useState } from 'react'

export default function Cards({ attributes,title, desc, code,selectedColor }) {
  console.log(attributes);
  const [isCardOpen, setIsCardOpen] = useState(false)
  return (
    <>
      <div className="card-big-cnt">

        <div className='card-cnt'>
          <div className={`color-box`} style={{backgroundColor:`${code}`}} ></div>
          <div className="card-desc-cnt">{desc}</div>
        </div>
        {/* <div className="card-title-cnt">{title}</div> */}
        <div className={isCardOpen ? `open card-title-cnt` : `card-title-cnt`}>{title}</div>
        <div onClick={() => setIsCardOpen(!isCardOpen)} className="show-more-cnt" >{isCardOpen ? "Show less" : "Show more"}</div>
      </div>
    </>
  )
}
