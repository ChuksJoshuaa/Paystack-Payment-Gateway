import React from "react";
import { PaystackConsumer } from 'react-paystack';

const PaymentCustomer = ({ config }) => {

    // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }


     const componentProps = {
          ...config,
          text: 'Paystack Button Implementation',
          onSuccess: (reference) => handleSuccess(reference),
          onClose: handleClose
      };
  return <div>
    <PaystackConsumer {...componentProps} >
          {({initializePayment}) => <button onClick={() => initializePayment(handleSuccess, handleClose)}>Paystack Consumer Implementation</button>}
    </PaystackConsumer>
  </div>;
};

export default PaymentCustomer;
