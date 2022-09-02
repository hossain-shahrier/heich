import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping address', 'Payment method', 'Place order'].map(
        (step, index) => (
          <div
            className={`flex-1 p-2 border-b-2 text-center text-xs font-sans ${
              index <=  activeStep
                ? 'border-[#2685e3] text-[#2685e3]'
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
