import React from "react";
import MainCard from "../common/MainCard";
import { FaCheck } from "react-icons/fa";

const Payment = () => {
  return (
    <MainCard title={"Payment Mode"}>
      <div className="flex space-x-10 mx-5">
        <div className="">
          <div className=" flex justify-start items-center space-x-3">
            <FaCheck className="text-green text-lg" />
            <p className="text-lg text-gray-600">Deposit to Account</p>
          </div>
          <div className=" flex justify-start items-center space-x-3">
            <FaCheck className="text-green text-lg" />
            <p className="text-lg text-gray-600">Credit Card/Debit Card</p>
          </div>
          <div className=" flex justify-start items-center space-x-3">
            <FaCheck className="text-green text-lg" />
            <p className="text-lg text-gray-600">
              Wallets (PayTM/PhonePe/Amazon etc.)
            </p>
          </div>
        </div>
        <div className="">
          <div className=" flex justify-start items-center space-x-3">
            <FaCheck className="text-green text-lg" />
            <p className="text-lg text-gray-600">Net Banking</p>
          </div>
          <div className=" flex justify-start items-center space-x-3">
            <FaCheck className="text-green text-lg" />
            <p className="text-lg text-gray-600">UPI</p>
          </div>
        </div>
      </div>
    </MainCard>
  );
};

export default Payment;
