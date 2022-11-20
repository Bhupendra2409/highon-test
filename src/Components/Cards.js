import React, { useState } from 'react'
import MoreDetail from './MoreDetail';

export default function Cards({ moreDetail, title, desc, code, selectedColor }) {
  console.log(moreDetail);
  const [isCardOpen, setIsCardOpen] = useState(false)
  return (
    <>
      <div className="card-big-cnt">
        <div className='card-cnt'>
          <div className={`color-box`} style={{ backgroundColor: `${code}` }} ></div>
          <div className="card-desc-cnt">{desc}</div>
        </div>
        {moreDetail!=={}?
         <div className="attribute-cnt">
          {moreDetail.map(item=>{
            return <MoreDetail isCardOpen={isCardOpen} quality={item.quality} traits={item.traits}/>
          })
          }
         </div>
        :<></>}

        <div className={isCardOpen ? `open card-title-cnt` : `card-title-cnt`}>{title}</div>
        <div onClick={() => setIsCardOpen(!isCardOpen)} className="show-more-cnt" >{isCardOpen ? "Show less" : "Show more"}</div>
      </div>
    </>
  )
}
