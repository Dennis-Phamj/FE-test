import { data } from "autoprefixer";
import { useRef } from "react";
import React from "react";

const Editfooter = (props) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    data = props.data.total_edit;
    data[props.data.current_edit.id].props.text = e.target.value;
    document.getElementById(props.data.current_edit.id).innerHTML =
      e.target.value;
    props.data.set_total_edit(data);
  };

  const handleChangeAlert = (e) => {
    data = props.data.total_edit;
    data[props.data.current_edit.id].props.alert = e.target.value;
    props.data.set_total_edit(data);
  };

  const handleChangeFile = (e) => {
    data = props.data.total_edit;
    const image = e.target.files[0];
    data[props.data.current_edit.id].props.image_src =
      URL.createObjectURL(image);
    document.getElementById(props.data.current_edit.id).src =
      URL.createObjectURL(image);
  };

  return (
    <div className="p-4">
      <div
        className={
          props.data.current_edit.type == "P" ? "flex flex-col gap-2" : "hidden"
        }
      >
        <p>Paragraph text:</p>
        <input
          type="text"
          className="w-80 h-12 border-2 p-3"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div
        className={
          props.data.current_edit.type == "BUTTON"
            ? "flex flex-col gap-2"
            : "hidden"
        }
      >
        <p>Button text:</p>
        <input
          type="text"
          className="w-80 h-12 border-2 p-3"
          onChange={handleChange}
        />
      </div>
      <div
        className={
          props.data.current_edit.type == "BUTTON"
            ? "flex flex-col gap-2"
            : "hidden"
        }
      >
        <p>Alert:</p>
        <input
          type="text"
          className="w-80 h-12 border-2 p-3"
          onChange={handleChangeAlert}
        />
      </div>
      <div
        className={
          props.data.current_edit.type == "IMG"
            ? "flex flex-col gap-2"
            : "hidden"
        }
      >
        <p>Image:</p>
        <input type="file" ref={inputRef} onChange={handleChangeFile} />
      </div>
    </div>
  );
};

export default Editfooter;
