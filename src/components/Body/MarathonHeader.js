import React from "react";
// import { FiEdit2 } from "react-icons/fi";
import { FaFileArchive, FaEdit } from "react-icons/fa";

const MarathonHeader = () => {
  return (
    <div className="d-flex justify-content-between marathon-header">
      <p>
        <span>Current Marathon Name</span>
        <span>
          <FaEdit className="ml-3" />
        </span>
      </p>
      <div>
        <FaFileArchive className="icon" title="Archive this" />
      </div>
    </div>
  );
};

export default MarathonHeader;
