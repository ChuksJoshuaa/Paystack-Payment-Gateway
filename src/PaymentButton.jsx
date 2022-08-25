import React, { useState } from "react";
import { PaystackButton } from "react-paystack"

const PaymentButton = ({ config }) => {
    
    let publicKey = config.publicKey
    let amount = config.amount
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")


    const componentProps = {
    email,
    amount,
    metadata: {name, phone},
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
        alert("Thanks for doing business with us! Come back soon!!")
        removeInput()
    }
      ,
    onClose: () => {
        alert("Wait! Don't leave :(")
        removeInput()
    },
  }

  const removeInput = () => {
      setName("")
      setEmail("")
      setPhone("")
  }

    
  return <div>
      <div className="App">
        <div className="container">
            <div className="item">
            <div className="overlay-effect"></div>
            <img
                className="item-image"
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="product"
                width={200}
            />
            <div className="item-details">
                <p className="item-details__title">Coconut Oil</p>
                <p className="item-details__amount">Amount: NGN{config.amount}</p>
            </div>
            </div>
            <div className="checkout">
            <div className="checkout-form">
                <div className="checkout-field">
                    <label>Name</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Email</label>
                    <input 
                       type="text"
                       id="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Phone</label>
                    <input
                       type="text"
                       id="phone"
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
            </div>
            </div>
        </div>
        </div>
        <PaystackButton className="paystack-button" {...componentProps} />
      </div>;
};

export default PaymentButton;
