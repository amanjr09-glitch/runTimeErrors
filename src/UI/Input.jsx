import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

function InputHolder({
  copy,
  autofocus = false,  
  name = "",
  disabled = false,
  title,
  required = true,
  type = "text",
  placeholder = "Enter",
  defaultValue = "",
  onChange = () => {},
  url = "Select File",
  className = "",
  ...props
}) {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [file, setFile] = useState();
  const [copied, setCopied] = useState(false);
  const handleFile = (e) => {
    onChange(e);
    setFile(e.target.files[0]);
    e.target.file = e.target.files[0];
    e.target.value = "";
  };
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(defaultValue);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div
      className={`w-full text-sm flex flex-col dark:text-gray-100 ${title && "gap-2"
        }`}
    >
      <span className="font-bold">{title}</span>
      <div className="dark:bg-gray-400 border dark:border-gray-400 overflow-clip px-2 bg-white dropdown-group">
        {type === "file" ? (
          <div className="p-4 flex gap-2 py-2">
            <input
              disabled={disabled}
              onChange={handleFile}
              id={title}
              type="file"
              className="hidden"
              name={name}
            />
            {defaultValue.length > 0 && (
              <a target="_" href={defaultValue}>
                OPEN
              </a>
            )}
            <label htmlFor={title}>
              <div className="text-theme hover:underline">
                {file?.name ?? url}
              </div>
            </label>
          </div>
        ) : (
          <div className="flex items-center">
            <input
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              autoFocus={autofocus}
              disabled={disabled}
              onChange={(e) => {
                onChange(e)
              }}
              defaultValue={defaultValue}
              required={required}
              type={type === "password" ? (
                eyeOpen ? "text" : "password"
              ) : type}
              {...props}
              className={`h-10 dark:placeholder:text-white w-full outline-none bg-inherit dark:text-white ${className}`}
              placeholder={placeholder}
              name={name}
            />
            {
              type === "password" &&
              <div className="hover:cursor-pointer" onClick={() => { setEyeOpen(prev => !prev) }}>
                {eyeOpen ?
                  <AiOutlineEye /> :
                  <AiOutlineEyeInvisible />}
              </div>
            }
            {copy && (
              <button onClick={handleCopy}>
                {copied ? <IoCheckmarkDoneSharp /> : <BiCopy />}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputHolder;
