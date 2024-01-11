import { useState } from "react";
import React from "react";
import Admin_header from "../../Components/admin_header/header.jsx";
import Draggedholder from "../../Components/dragged_component_holder/dragged_holder.jsx";
import Adminmain from "../../Components/admin_main/admin_main.jsx";
import Editfooter from "../../Components/edit_footer/edit_footer.jsx";

const Admin_page = () => {
  const [dragged_obj, set_dragged_obj] = useState("");
  const [current_edit, set_current_edit] = useState("");
  const [total_edit, set_total_edit] = useState([]);

  const header_data = {
    total_edit: total_edit,
  };

  const dragged_holder_data = {
    set_dragged_obj: set_dragged_obj,
  };

  const admin_data = {
    dragged_obj: dragged_obj,
    set_current_edit: set_current_edit,
    total_edit: total_edit,
    set_total_edit: set_total_edit,
  };

  const edit_data = {
    total_edit: total_edit,
    current_edit: current_edit,
    set_total_edit: set_total_edit,
  };

  return (
    <div className="h-full w-full">
      <Admin_header data={header_data} />
      <div className="flex h-[90%] w-full">
        <Draggedholder data={dragged_holder_data} />
        <div className="flex flex-col h-full w-full">
          <Adminmain data={admin_data} />
          <Editfooter data={edit_data} />
        </div>
      </div>
    </div>
  );
};

export default Admin_page;
