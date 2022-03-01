import React from "react";
import ss from "../assets/img/ss.png";

function About() {
  return (
    <div className="about-page min-h-screen">
      <div className="container mx-auto">
        <section className="prose max-w-6xl px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold ">Web Accessibility Checker</h1>
          <p>
            Web accessibility means that people with disabilities can equally
            perceive, understand, navigate, and interact with websites and
            tools. It also means that they can contribute equally without
            barriers. Accessibility is the concept of whether a product or
            service can be used by everyone or not. Accessibility laws exist to
            aid people with disabilities, but designers should try to
            accommodate all potential users in many contexts of use anyway. To
            do so has firm benefits—notably better designs for all. The
            Accessibility Checker verifies your file against a set of rules that
            identify possible issues for people who have disabilities or also
            for normal people. Depending on how severe the issue is, the
            Accessibility Checker classifies each issue as an error, warning, or
            tip. The main objective of Accessibility Checker is a product or
            service can be used by everyone. It makes websites more accessible
            to all kind of user
          </p>
          <img src={ss} className="w-full border-2 border-indigo-400 p-4" alt="Acesssibility" />

          <h1 className="text-4xl font-extrabold">Client Dependency</h1>
          <code>
            <pre>
              "react": "^17.0.2", <br />
              "react-dom": "^17.0.2", <br />
              "react-icons": "^4.3.1",<br />
              "react-router-dom": "^6.2.1"<br />
            </pre>

          </code>

          <h1 className="text-4xl font-extrabold">Server Dependency</h1>
          <code>
            <pre>
            "cors": "^2.8.5", <br />
            "express": "^4.17.2", <br />
            "pa11y": "^6.1.1" <br />
            </pre>

          </code>

          <h1 className="text-4xl font-extrabold">Software Requirements</h1>

          <ul>
          <li> Operating System: Windows, Linux.</li>
          <li> Browser : Mozilla Firefox, Chrome, Safari.</li>
          <li> Software Development Kit: VS Code</li>
          <li> Language: React.js, Node.js</li>
          </ul>
          <h1 className="text-4xl font-extrabold">Hardware Requirements</h1>

          <ul>
          <li> Processor : Pentium.</li>
          <li> RAM : 4GB.</li>
          <li> Hard Disk : 10GB.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
