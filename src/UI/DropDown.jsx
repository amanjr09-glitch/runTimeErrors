import React, { useEffect, useState } from "react";
import { Dropdown } from "rsuite";
import "../../style/styles.css";
function DropDown({
  title,
  disabled = false,
  data = [],
  defaultValue = "",
  onChange = () => { },
  getText = () => { },
  getFullData = () => { },
  getState = () => { },
  className=""
}) {
  const [open, setOpen] = useState(false);
  const idx = data.findIndex(
    (item) => item.name.toLowerCase() === defaultValue.toLowerCase()
  );
  const [state, setState] = useState(idx === -1 ? 0 : idx);
  useEffect(() => {
    getState(state);
  }, []);
  return (
    <div className={`w-full flex flex-col ${title && "gap-2"}`}>
      <span className="font-bold">{title}</span>
      <div className={`border z-1 h-fit dark:bg-gray-400 bg-white dropdown-group dark:border-gray-400 ${className}`}>
        <Dropdown
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          disabled={disabled}
          activeKey={state}
          onSelect={(e) => {
            setState(e);
            onChange(e);
            getFullData(data[e]);
            getText(data[e]["name"]);
            setOpen(false);
          }}
          title={
            data[state]?.Symbol
              ? data[state]?.Symbol
              : data[state]?.name
                ? data[state].name
                : ""
          }
          value={state}
          toggleClassName="text-xs rounded-xl"
        >
          <div className="max-h-[15rem] z-40 bg-white dark:bg-inherit text-xs h-full min-w-[10rem] rounded-lg scrollbar-hide overflow-scroll">
            {data.map((item, idx) => {
              return (
                <Dropdown.Item eventKey={idx} key={idx}>
                  <div className="flex capitalize items-center justify-between text-gray-500 dark:text-white">
                    <span> {item.name}</span>
                    <span>{item.Symbol}</span>
                  </div>
                </Dropdown.Item>
              );
            })}
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default DropDown;
