import React from 'react'

export default function MoreDetail({ isCardOpen,quality, traits }) {
    return (
        <div className={isCardOpen ? `open moredetail-cnt d-flex flex-column` : `moredetail-cnt d-flex flex-column`} >
            <div className="heading">
                {quality}
            </div>
            <div className="trait">
                {traits}
            </div>
        </div>

    )
}
