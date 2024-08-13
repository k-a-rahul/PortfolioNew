import React, { forwardRef, useImperativeHandle, useState } from "react";

const Toaster = forwardRef((props, ref) => {
  const [message, setMessage] = useState({});
  useImperativeHandle(
    ref,
    () => ({
      showToast: (props) => {
        setMessage(props);
      },
    }),
    []
  );
  return(
    <div className={`absolute top-6 bg-blue-400 p-1`}>
        <p>{message}</p>
    </div>
  )
});
