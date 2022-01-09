import React from "react";

// Animated Blur Blobs
function BlurBlob() {
  return (
    <aside>
      <div className="blur-blog w-[40vw] h-[40vh] max-w-md max-h-80 bg-indigo-300 blur-[50px] opacity-80 absolute left-10 top-44 -z-10 mix-blend-multiply animate-wonder "></div>
      <div className="blur-blog w-[40vw] h-[40vh] max-w-md max-h-80 bg-pink-300 blur-[60px] opacity-80 absolute left-20 top-14 -z-10 mix-blend-multiply animate-wonder delay-300 "></div>
      <div className="blur-blog w-[40vw] h-[40vh] max-w-md max-h-80 bg-yellow-300 blur-[80px] opacity-80 absolute left-60 top-84 -z-10 mix-blend-multiply animate-wonder delay-1000 "></div>
    </aside>
  );
}

export default BlurBlob;
