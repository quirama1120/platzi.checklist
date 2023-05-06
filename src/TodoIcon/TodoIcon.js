import React from "react";
import "./index.css";
function TodoIcon(props) {
  const iconTypes = {
    checkmark: (
        <svg className="icon--check" viewBox="0 0 20 20">
        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
      </svg>
    ),
    delete: (
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path
          fill="none"
          d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z"
        ></path>
      </svg>
    ),
  };
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  let iconClassName = "Icon";
  if (props.type === "checkmark") {
    iconClassName += " Icon-check";
  } else if (props.type === "delete") {
    iconClassName += " Icon-delete";
  }
  return (
    <span className={iconClassName} onClick={handleClick}>
      {props.type === "checkmark" && iconTypes.checkmark}
      {props.type === "delete" && iconTypes.delete}
    </span>
  );
}

export { TodoIcon };
