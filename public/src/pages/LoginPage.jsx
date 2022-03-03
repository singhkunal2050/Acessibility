import React from "react";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div>
      <section className="hero ">
        <div className="container relative mx-auto flex flex-col md:flex-row justify-center items-center py-10 px-4 md:py-20 md:px-10 ">
          <Login />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
