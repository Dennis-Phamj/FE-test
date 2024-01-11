import { useEffect, useState } from "react";
import React from "react";
import photo from "../../Assets/photo.svg";

const Adminmain = (props) => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [config, set_config] = useState({});
  const [main_component, set_main_component] = useState([]);

  const handleOnDrop = (e) => {
    const component_type = e.dataTransfer.getData("componentType");
    if (component_type == "Paragraph") {
      props.data.set_total_edit([
        ...props.data.total_edit,
        {
          id: main_component.length,
          type: component_type,
          props: { text: "This is a new paragraph" },
        },
      ]);
    } else if (component_type == "Button") {
      props.data.set_total_edit([
        ...props.data.total_edit,
        {
          id: main_component.length,
          type: component_type,
          props: { text: "Button", alert: "" },
        },
      ]);
    } else {
      props.data.set_total_edit([
        ...props.data.total_edit,
        {
          id: main_component.length,
          type: component_type,
          props: { image_src: photo },
        },
      ]);
    }
    set_main_component([...main_component, component_type]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const onClickHandler = (e) => {
    props.data.set_current_edit({ type: e.target.nodeName, id: e.target.id });
    set_config(
      props.data.total_edit.filter((data) => data.id == e.target.id)[0]
    );
  };

  const mouseMoveHandler = (e) => {
    setMouseCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      className="flex p-4 h-[80%] border-b-2 w-full"
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      <div className="w-[20%]">
        <p>
          Mouse: x = {mouseCoordinates.x}, y={mouseCoordinates.y}
        </p>
        <p>Dragging: {props.data.dragged_obj}</p>
        <p>Instances: {main_component.length}</p>
        <p>Config: {JSON.stringify(config)}</p>
      </div>
      <div className="w-[80%] flex flex-col justify-start items-center gap-4 h-full">
        {main_component.map((type, index) => {
          return type === "Paragraph" ? (
            <p onClick={onClickHandler} key={index} id={index}>
              This is a new paragraph
            </p>
          ) : type === "Button" ? (
            <button
              className="p-2 h-fit bg-inherit text-black border-2"
              onClick={onClickHandler}
              key={index}
              id={index}
            >
              Button
            </button>
          ) : (
            <img
              src={photo}
              alt="a new image"
              onClick={onClickHandler}
              className="w-16 h-16"
              key={index}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Adminmain;
