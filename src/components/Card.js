import React from 'react'

function Card(props){
    let badgeText
    if(props.item.openSpots===0){
        badgeText="Sold Out"
    }
    else if(props.item.location==="Online"){
        badgeText="Online"
    }
    console.log(props)
    return (
        <div className="card">
           {badgeText && <div className="card--badge">
                {badgeText}
            </div>}
            <img src={props.item.img}></img>
            <div className="card--stars">
            <img src ="#" alt="star"/>
            <span>{props.item.stats.rating}</span>
            <span className="gray">{props.item.stats.reviewCount}.</span>
            <span className="gray">{props.item.country}</span>
            </div>
            <p>{props.item.title} </p>
            <p><span className='bold'>From ${props.item.price}</span>/ person</p>
        </div>
    )
}


export default Card;