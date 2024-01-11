import React from "react";
import { useContext } from "react";
import pageDataContext from "../../context/pageData";

const Consumer_page = () => {
  const { pageData } = useContext(pageDataContext);
  const onClickHandler = (e) => {
    const data = pageData.filter((data) => data.id == e.target.id);
    alert(data[0].props.alert);
  };

  return pageData.length == 0 ? (
    <></>
  ) : (
    <div className="w-full flex flex-col justify-start items-center gap-4 h-full">
      {pageData.map((data, index) => {
        return data.type === "Paragraph" ? (
          <p key={index} id={data.id}>
            data.props.text
          </p>
        ) : data.type === "Button" ? (
          <button
            className="p-2 h-fit bg-inherit text-black border-2"
            onClick={onClickHandler}
            key={index}
            id={index}
          >
            data.props.text
          </button>
        ) : (
          <img
            src={data.props.image_src}
            alt="a new image"
            className="w-16 h-16"
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default Consumer_page;
