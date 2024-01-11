import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import pageDataContext from "../../context/pageData";

const Admin_header = (props) => {
  const { setPageData } = useContext(pageDataContext);
  const navigate = useNavigate();
  const handleSave = () => {
    setPageData(props.data.total_edit);
  };

  return (
    <nav className="flex justify-center p-4 border-b-2">
      <ul>
        <li>
          <button onClick={handleSave}>Save</button>
        </li>
        <li>
          <button>Undo</button>
        </li>
        <li>
          <button>Redo</button>
        </li>
        <li>
          <button>Export</button>
        </li>
        <li>
          <button>Import</button>
        </li>
        <li>
          <button onClick={() => navigate("/consumer", { replace: true })}>
            View
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Admin_header;
