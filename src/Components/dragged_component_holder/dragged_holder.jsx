import React from "react";
import letterimg from "../../Assets/letter.svg";
import photo from "../../Assets/photo.svg";
import "./dragged_holder.scss";

const Draggedholder = (props) => {
  const handleOnDrag = (e, type) => {
    e.dataTransfer.setData("componentType", type);
    props.data.set_dragged_obj(type);
  };

  const handleEndDrag = () => {
    props.data.set_dragged_obj("");
  };

  return (
    <div className="flex flex-col w-[10%] h-full border-r-2 p-4 gap-6">
      <div
        className="flex flex-col justify-center items-center p-2 hover:bg-[#fcedda]"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Paragraph")}
        onDragEnd={handleEndDrag}
      >
        <div>
          <img
            className="img w-16 h-16 bg-none"
            src={letterimg}
            alt="Letter A"
            unselectable="on"
          />
        </div>
        <p className="text-center">Paragraph</p>
      </div>
      <div
        className="flex flex-col justify-center items-center p-2 hover:bg-[#fcedda]"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Button")}
        onDragEnd={handleEndDrag}
      >
        <div className="w-14 h-14 border-2"></div>
        <p className="text-center">Button</p>
      </div>
      <div
        className="flex flex-col justify-center items-center p-2 hover:bg-[#fcedda]"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Image")}
        onDragEnd={handleEndDrag}
      >
        <div>
          <img
            className="img w-14 h-14 bg-none"
            src={photo}
            alt="Photo"
            unselectable="on"
          />
        </div>
        <p className="text-center">Image</p>
      </div>
    </div>
  );
};

export default Draggedholder;
