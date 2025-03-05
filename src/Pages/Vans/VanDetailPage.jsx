import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../../api';

export function loader({params}) {
    return getVans(params.id)
}

function VanDetailPage() {

    let van = useLoaderData()
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    
    
    

    return (
        <div className="van-detail-container">
                <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
                >&larr; <span>Back to {type} vans</span></Link>

            {van ? (
                <div className="van-detail">
                    <img alt={van.name} src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetailPage