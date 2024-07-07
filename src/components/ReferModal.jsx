import React from "react";
import Form from "./Form";
import { IoMdClose } from "react-icons/io";

const ReferModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center px-2 z-10">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <IoMdClose className="text-black text-lg" />
        </button>
        <h2 className="text-xl font-bold mb-4">Refer a Friend</h2>
        <Form />
      </div>
    </div>
  );
};

export default ReferModal;
