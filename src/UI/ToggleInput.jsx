import React, { useState } from "react";
import { Loader, Toggle } from "rsuite";
import get_chat from "../../api/get_chat";
import { explain } from "../../data/chat";
import { useEngagement } from "../../screens/Engagment";
import { TextareaAutosize } from "@mui/material";
import { BsMagic } from "react-icons/bs";
// import {Loader} from "rsuite";

function ToggleInput({
  children,
  state,
  value,
  name = "",
  onChange = () => { },
  onInputChange,
  disabled = false
}) {
  const [loading, setLoading] = useState(false);
  const {
    state: { engagmentData, clientData },
  } = useEngagement();
  const handleGpt = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true);
    // console.log(explain(children, value, engagmentData, clientData));
    const { content } = await get_chat(
      explain(children, value, engagmentData, clientData),
      true,
      false,
      500
    );
    console.log(content);
    setLoading(false);
    onInputChange(content);
  };
  return (
    <div className="relative flex flex-col gap-4 w-full my-2">
      <li className="flex justify-between">
        {children}
        <Toggle
          className="scale-90"
          onChange={(e) => {
            onChange(e);
          }}
          checked={Boolean(state)}
        />
      </li>
      {state && (
        <>
          <TextareaAutosize
            className="w-full dark:bg-gray-400"
            name={name}
            value={value}
            onChange={(e) => onInputChange(e.target.value)}
            disabled={disabled}
          />
          {!disabled && <button
            disabled={loading}
            onClick={handleGpt}
            className="p-2 flex justify-center items-center absolute m-3 right-0 bg-theme text-white bottom-0 "
          >
            {!loading ? <BsMagic /> : <Loader />}
          </button>}
        </>
      )}
    </div>
  );
}

export default ToggleInput;