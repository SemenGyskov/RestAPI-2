import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function List({ onOrder }){
    const[coct,setCoct]=useState([])
    useEffect(()=>{
        fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(response => response.json())
        .then(data => setCoct(data.drinks))
        .catch(error => console.error(error));
    }, [])
return(
    <div>
        {coct.map(coc=>(
            <div key={coc.idDrink}>
                <img src={coc.strDrinkThumb} alt={coc.strDrink}></img>
                <h1>{coc.strDrink}</h1><button onClick={()=>onOrder(coc.strDrink)}>Order</button>
            </div>
        ))}
    </div>
)
}