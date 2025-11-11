import React from "react";

export const ListBox = ({
  title,
  buttons,
  colour1,
  colour2,
  children,
  type = "list",
}) => {
  if (type === "tabs") {
    return (
      <div
        className="tab-box"
        style={{
          backgroundImage: `linear-gradient(153.07deg, ${colour1} -2.47%, ${colour2} 102.78%)`,
        }}
      >
        <div className="title-bar">
          <h3 className="title">{title}</h3>
        </div>
        <div className="list-box__container">{children}</div>
        <div className="title-bar__buttons">
          {Array.isArray(buttons)
            ? buttons.map((btn, idx) => React.cloneElement(btn, { key: idx }))
            : buttons}
        </div>
      </div>
    );
  } else {
    return (
      <div className="list-box">
        <div
          className="title-bar"
          style={{
            backgroundImage: `linear-gradient(153.07deg, ${colour1} -2.47%, ${colour2} 102.78%)`,
          }}
        >
          <h3 className="title">{title}</h3>
          <div className="title-bar__buttons">
            {Array.isArray(buttons)
              ? buttons.map((btn, idx) => React.cloneElement(btn, { key: idx }))
              : buttons}
          </div>
        </div>
        <div className="list-box__container">{children}</div>
      </div>
    );
  }
};
