import React from 'react'
import { usePaystackPayment } from "react-paystack"
import PaymentButton from './PaymentButton'

function App() {
  let date = (new Date()).getTime().toString()
  let amountPaid = 1000

  //Paystack needs you to convert money to kobo, so if a client pays 1000, 100 is multiplied by the amount 
  amountPaid = amountPaid * 100
  
  const config = {
    reference: date,
    email: import.meta.env.VITE_EMAIL_USER,
    amount: amountPaid,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  }
   

   // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };

  return (
    <div >
       <div >
        <h4 style={{ textDecoration: "underline", textTransform: "capitalized" }}>First Option. Payment with usePaystackPayment</h4>
        <p>Click the button to proceed the payment</p>
        <PaystackHookExample />
       </div>
       
       <div >
        <h4 style={{ marginTop: "5em", textDecoration: "underline", textTransform: "capitalized" }}>Second Option. Payment with button</h4>
         <PaymentButton config={config} />
       </div>
    </div>
  )
}

export default App
