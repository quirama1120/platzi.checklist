import { useState } from "react";

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log('ha habido cambios en el storage')
        setStorageChange(true);
      }
    });
    const toggleShow = () => {
      props.sincronize (); 
      setStorageChange(false)
    }
    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
}

export { WithStorageListener };
