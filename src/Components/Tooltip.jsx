import React, { forwardRef, useImperativeHandle, useState } from "react";

const Tooltip = forwardRef(({ props }, ref) => {
  const [message, setMessage] = useState("");
  useImperativeHandle(
    ref,
    () => ({
      showtooltip: (props) => {
        setMessage(props);
      },
      hidetooltip :()=>{
        setMessage('')
      }
    }),
    []
     
  );
  return (
    <>{
      message && <span
        className={`bg-transparent text-sm text-black p-0 rounded-xl inline-block absolute top-0}`}
      > 
        <p className="p-0 relative top-0">{message}</p>
      </span>
    }
      
    </>
  );
});

export default Tooltip;
