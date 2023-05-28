import React from 'react'


function ReUsableCard ({title, description, picture}) {
    return (
        
    <div className="card m-auto" style={{maxwidth: "540px"}}>
        <img src={picture} className="card-img-top" alt={title}/>
        <div className="card-body">
        <h1>{title}</h1>
        <p className="card-text">{description}</p>
    </div>

    </div>
    )
}
export default ReUsableCard;
