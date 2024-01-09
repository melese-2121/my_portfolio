import React, { useState, useEffect } from "react";

const MessageButton = ({ toggleContact, directContactMethod }) => {
  const [iconColor, setIconColor] = useState("text-yellow-500");
  const [borderColor, setBorderColor] = useState("border-r-2 border-green-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setIconColor((prevColor) => {
        switch (prevColor) {
          case "text-yellow-500":
            return "text-green-500";
          case "text-green-500":
            return "text-red-500";
          default:
            return "text-yellow-500";
        }
      });

      setBorderColor((prevColor) => {
        switch (prevColor) {
          case "border-r-2 border-green-500":
            return "border-r-2 border-yellow-500";
          case "border-r-2 border-yellow-500":
            return "border-r-2 border-red-500";
          default:
            return "border-r-2 border-green-500";
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={() => {
        toggleContact();
      }}
      className={`flex items-center mt-16 mx-auto font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:border-2 hover:border-gray-500 ${borderColor}`}
    >
      <svg
        className={`w-5 h-5 mr-2 ${iconColor} stroke-2`}
        fill="none"
        stroke={iconColor.includes("white") ? "white" : "currentColor"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 2L11 13 2 2"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 2L15 22 11 13 2 2"
        ></path>
      </svg>
      <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-yellow-500 text-transparent bg-clip-text">
        {!directContactMethod ? "Show Contact Info." : "Direct Message"}
      </span>
    </button>
  );
};

export default MessageButton;
