import React from "react";

import "./Process.css";

const Process = () => {
  return (
    <div className="process__component" id="explore">
      <div className="powered">
        <h5>Powered By</h5>
        <img src="/polygon.svg" alt="Polygon" />
      </div>
      <div className="header">
        <h5>Select Project</h5>
        <h3>browse popular houses based on their features.</h3>
        <img src="/BLOCK.svg" alt="BLOCK" />
      </div>
      <div className="content">
        <img src="/house2.svg" alt="house" />
        <div>
            <h3>compact classic summer house.</h3>
            {/* <p>Donec cras lacus, quis nunc urna. Feugiat neque, non, mi erat ultricies morbi. Habitasse iaculis sed morbi natoque. acus, quis nunc urna. Feugiat neque, non, mi erat</p> */}
        </div>
        <img src="/PROPERTIES.svg" alt="PROPERTIES" className="properties" />
      </div>
    </div>
  );
};

export default Process;
