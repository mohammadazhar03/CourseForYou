import React from 'react';

function Accordian() {
  return (
    <>
      <ul className="nav nav-tabs mb-4" id="courseTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="web-tab" data-bs-toggle="tab" data-bs-target="#web" type="button" role="tab" aria-controls="web" aria-selected="true">Web Development</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="app-tab" data-bs-toggle="tab" data-bs-target="#app" type="button" role="tab" aria-controls="app" aria-selected="false">App Development</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="uiux-tab" data-bs-toggle="tab" data-bs-target="#uiux" type="button" role="tab" aria-controls="uiux" aria-selected="false">UI/UX Design</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="data-tab" data-bs-toggle="tab" data-bs-target="#data" type="button" role="tab" aria-controls="data" aria-selected="false">Data Science</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="ai-tab" data-bs-toggle="tab" data-bs-target="#ai" type="button" role="tab" aria-controls="ai" aria-selected="false">Artificial Intelligence</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="cyber-tab" data-bs-toggle="tab" data-bs-target="#cyber" type="button" role="tab" aria-controls="cyber" aria-selected="false">Cyber Security</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="cloud-tab" data-bs-toggle="tab" data-bs-target="#cloud" type="button" role="tab" aria-controls="cloud" aria-selected="false">Cloud Computing</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="devops-tab" data-bs-toggle="tab" data-bs-target="#devops" type="button" role="tab" aria-controls="devops" aria-selected="false">DevOps</button>
        </li>
      </ul>

      <div className="tab-content accordina-section my-3" id="courseTabContent">

        {/* Web Development */}
        <div className="tab-pane fade show active" id="web" role="tabpanel" aria-labelledby="web-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="Web Development" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>Web Development</h4>
              <p>Learn how to build websites and web apps from scratch using HTML, CSS, JavaScript, React, and more. Ideal for aspiring front-end and full-stack developers.</p>
            </div>
          </div>
        </div>

        {/* App Development */}
        <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="app-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740" alt="App Development" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>App Development</h4>
              <p>Build Android and iOS mobile apps using Kotlin, Swift, Flutter, or React Native. This course is great for mobile-first thinkers and product builders.</p>
            </div>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="tab-pane fade" id="uiux" role="tabpanel" aria-labelledby="uiux-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid&w=740" alt="UI/UX Design" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>UI/UX Design</h4>
              <p>Master the principles of design, user research, wireframing, and prototyping using tools like Figma and Adobe XD.</p>
            </div>
          </div>
        </div>

        {/* Data Science */}
        <div className="tab-pane fade" id="data" role="tabpanel" aria-labelledby="data-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://media.istockphoto.com/id/1364317541/photo/data-scientists-hand-of-programmer-touching-and-analyzing-development-at-various-information.jpg?s=612x612&w=0&k=20&c=mTnPYtYYxbyOdyeBQcu8LIWwD-31SIIfXSd0IEhhpYg=" alt="Data Science" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>Data Science</h4>
              <p>Analyze data using Python, Pandas, NumPy, and machine learning. Create powerful visualizations and extract insights.</p>
            </div>
          </div>
        </div>

        {/* Artificial Intelligence */}
        <div className="tab-pane fade" id="ai" role="tabpanel" aria-labelledby="ai-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=" alt="AI" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>Artificial Intelligence</h4>
              <p>Get started with AI concepts, neural networks, deep learning, and NLP using TensorFlow, PyTorch, and other libraries.</p>
            </div>
          </div>
        </div>

        {/* Cyber Security */}
        <div className="tab-pane fade" id="cyber" role="tabpanel" aria-labelledby="cyber-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=" alt="Cyber Security" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>Cyber Security</h4>
              <p>Learn ethical hacking, penetration testing, network security, and threat analysis. Stay ahead in the fight against cybercrime.</p>
            </div>
          </div>
        </div>

        {/* Cloud Computing */}
        <div className="tab-pane fade" id="cloud" role="tabpanel" aria-labelledby="cloud-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-business-network-concept_31965-13411.jpg" alt="Cloud Computing" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>Cloud Computing</h4>
              <p>Deploy and manage services on AWS, Azure, and Google Cloud. Learn cloud architecture, DevOps pipelines, and microservices.</p>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <div className="tab-pane fade" id="devops" role="tabpanel" aria-labelledby="devops-tab" tabIndex="0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://media.gettyimages.com/id/1303169188/photo/devops-concept.jpg?s=612x612&w=gi&k=20&c=WrL7QAnD4DjejDgrCxcqcX5bNqCZVZQaBVFLnLhy3_o=" alt="DevOps" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4>DevOps</h4>
              <p>Integrate development and operations using Docker, Kubernetes, Jenkins, CI/CD, GitOps, and monitoring tools.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Accordian;
