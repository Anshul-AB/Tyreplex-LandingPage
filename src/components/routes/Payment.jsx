import React from "react";
import MainCard from "../common/MainCard";
import { FaCheck } from "react-icons/fa";

const Payment = () => {
  return (
    <MainCard title={"Payment Mode"}>
      <div className="mx-5">
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-5 sm:space-y-0">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <FaCheck className="text-green text-lg" />
              <p className="text-lg text-gray-600">Deposit to Account</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck className="text-green text-lg" />
              <p className="text-lg text-gray-600">Credit Card/Debit Card</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck className="text-green text-lg" />
              <p className="text-lg text-gray-600">
                Wallets (PayTM/PhonePe/Amazon etc.)
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <FaCheck className="text-green text-lg" />
              <p className="text-lg text-gray-600">Net Banking</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck className="text-green text-lg" />
              <p className="text-lg text-gray-600">UPI</p>
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  );
};

export default Payment;
