import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            className={`flex-1 border-b-2 text-center font-sans ${
              index <= activeStep
                ? 'border-purple-700 text-purple-700'
                : 'border-gray-400 text-gray-400'
            }`}
            key={step}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
