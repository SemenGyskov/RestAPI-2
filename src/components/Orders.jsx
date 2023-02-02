import React from "react";

export default function Orders({order, OnRemove}){
    return(
        <div>
            <h1>Ваш заказ:</h1>
            <ul>
                {order.map(coct=>(<li key={coct}>{coct} <button onClick={()=> OnRemove(coct)}>Remove</button></li>))}
            </ul>
        </div>
    )
}