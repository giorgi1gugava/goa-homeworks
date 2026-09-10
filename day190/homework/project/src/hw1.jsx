import React from 'react'

function Hw1() {
    const productName = "Wireless Headphones";
    const price = 120;
    const discount = 25;
    const inStock = true;
    const isPremium = false;
    const rating = 4.7;
    const reviews = 128;
    const image = "https://example.com/headphones.jpg";
    const userAge = 20;

    let  discountMessage;

    if(discount > 0){
        discountMessage = "25% OFF 🔥"
    } else{
        discountMessage = "no discount"
    }

    let ageMessage;

    if(userAge >= 18){
        ageMessage = "You can purchase this product."
    }else{
        ageMessage = "You must be 18 or older to purchase this product."
    }


    return (
        <div>
            <p>{productName}</p>
            <p>price:{price}</p>
            <p>rating:{rating}</p>
            <p>reviews:{reviews}</p>


            <img src={image} alt={productName}/>


            <p>{price-(price * discount/100)}$</p>


            <p>{discountMessage}</p>


            <p>{inStock == true? "In Stock ✅": "Out of Stock ❌"}</p>


            {isPremium && <p>⭐ Premium Product</p>}


            <p>{ageMessage}</p>


            <p>reting:{rating >= 4.5 ? "excellent Product ⭐⭐⭐⭐⭐": rating >= 3 ? "Good Product ⭐⭐⭐": "Low Rated Product ⭐"}</p>




        </div>
    )
}

export default Hw1