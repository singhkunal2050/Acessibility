import React from "react";
import { Link } from "react-router-dom";

function CTAButton({ name, to }) {
  return (
    <Link
      className="inline-block mt-4 py-2 px-4 bg-indigo-600 text-white font-bold hover:bg-indigo-100 hover:text-indigo-600 transition-colors ease-in-out duration-300"
      to={to}
    >
      {name}
    </Link>
  );
}

export default CTAButton;
