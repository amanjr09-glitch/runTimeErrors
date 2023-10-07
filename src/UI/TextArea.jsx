import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";

function TextArea({
  children,
  value = "",
  name = "",
  onInputChange = () => { },
  title,
  defaultValue = "",
  className = "",
  ...props
}) {
  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      {title&&<strong>{title}</strong>}
      <TextareaAutosize
        {...props}
        name={name}
        value={value}
        onChange={onInputChange}
        className="border bg-white rounded-none placeholder:text-gray-300 dropdown-group dark:bg-gray-400 dark:border-gray-400"
      />
    </div>
  );
}

export default TextArea;