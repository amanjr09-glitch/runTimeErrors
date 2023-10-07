import React, { useEffect, useState } from "react";
import { parseValue } from "../../middlewares/parse_number";
import { Loader, Popover, Whisper } from "rsuite";
import { readData, writeData } from "../../api/fb";
import { LuSheet } from "react-icons/lu";
import { BiNote } from "react-icons/bi";
import { BsFillFilePdfFill } from "react-icons/bs";
import link from "../../data/link";
import { useParams } from "react-router-dom";
import TextArea from "./TextArea";
import { TextareaAutosize } from "@mui/material";
const CustomeTable = ({
  data = [[]],
  header = [],
  bold = [],
  border = true,
  format = [],
  useFormatter = false,
  boldClass = "",
  rightHeader = [],
}) => {
  const getID = window.location.pathname.replaceAll("/", "_");
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [referencing, setRefrencing] = useState({});
  const speaker = (key, referencing, setRefrencing) => {
    const handleAdd = async (type) => {
      const ref_id = getID;
      writeData(`/referencing/${ref_id}/${type}/${key}`, true);
      setRefrencing((state) => ({
        ...state,
        [type]: {
          ...state[type],
          [key]: true,
        },
      }));
      if (type === "excel") {
        window.open(
          `${link.excelSheet}/${id}?add=true&&ref_id=${ref_id}&&key=${key}`
        );
      }
    };
    if (!window.location.pathname.includes(link.engagment))
      return <Popover style={{ padding: 0 }}></Popover>;
    return (
      <Popover style={{ padding: 0 }}>
        <div className="flex text-base">
          {!referencing.excel?.[key] && (
            <button
              className="hover:bg-gray-200"
              onClick={() => handleAdd("excel")}
            >
              <LuSheet />
            </button>
          )}
          {/* {!referencing.pdf?.[key] && (
            <button
              className="hover:bg-gray-200"
              onClick={() => handleAdd("pdf")}
            >
              <BsFillFilePdfFill />
            </button>
          )} */}
          {!referencing.note?.[key] && (
            <button
              className="hover:bg-gray-200"
              onClick={() => handleAdd("note")}
            >
              <BiNote />
            </button>
          )}
        </div>
      </Popover>
    );
  };
  useEffect(() => {
    readData(`/referencing/${getID}`).then((data) => {
      setRefrencing(data ?? {});
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, [window.location.pathname]);
  const handleNote = (e, key) => {
    e.preventDefault();
    const text = e.target[0].value;
    writeData(`/referencing/${getID}/note/${key}`, text);
    setRefrencing((state) => ({
      ...state,
      note: {
        ...state.note,
        [key]: text,
      },
    }));
  };
  if (loading)
    return (
      <div className="flex items-center w-full justify-center py-2">
        <Loader />
      </div>
    );
  return (
    <div className="relative border bg-white dark:border-gray-400 overflow-x-auto scrollbar-hide">
      <table className="w-full shadow-md text-black dark:text-gray-400 text-left">
        <thead className="bg-[rgba(0,0,0,0.05)] dark:bg-gray-200 w-full text-xs border-b dark:border-gray-400">
          <tr className="">
            {header.map((item, idx) => (
              <th
                key={idx}
                scope="col"
                className={`px-1 ${
                  rightHeader.includes(idx) && "text-right"
                } text-gray-300 font-normal capitalize py-2`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className={`${border && "border-b"} dark:border-gray-400`}
            >
              {item.map((itm, indx) => {
                const key = `${idx}-${indx}`;
                return (
                  <Whisper
                    trigger="click"
                    placement="top"
                    controlId="control-id-hover"
                    speaker={speaker(key, referencing, setRefrencing)}
                  >
                    <td
                      key={indx}
                      className={`px-1 whitespace-nowrap ${
                        false && "bg-yellow-100"
                      } ${
                        border && "border-r"
                      } dark:border-gray-400  py-1 hover:bg-gray-100 cursor-pointer text-xs ${
                        bold.find((item) => item === idx) && boldClass
                      }`}
                    >
                      <div
                        className={`flex gap-4 justify-end items-center ${
                          !rightHeader.includes(indx) && "justify-between"
                        }`}
                      >
                        {useFormatter && !format.includes(indx)
                          ? itm
                          : Math.abs(itm)
                          ? parseValue(itm)
                          : Boolean(itm)
                          ? itm
                          : "-"}
                        <div className="flex gap-2  items-center text-gray-300">
                          {referencing.excel?.[key] && (
                            <a
                              target="_blank"
                              href={`${link.excelSheet}/${id}?view=true&&ref_id=${getID}&&key=${key}`}
                            >
                              <LuSheet />
                            </a>
                          )}
                          {referencing.pdf?.[key] && (
                            <button className="p-0 hover:text-theme">
                              <BsFillFilePdfFill />
                            </button>
                          )}
                          {referencing.note?.[key] && (
                            <Whisper
                              trigger="click"
                              placement="left"
                              speaker={
                                <Popover style={{ padding: 0 }}>
                                  <form
                                    onSubmit={(e) => handleNote(e, key)}
                                    className="flex w-72 p-2 bg-gray-100 flex-col gap-2"
                                  >
                                    <TextareaAutosize
                                      defaultValue={referencing.note[key]}
                                      minRows={10}
                                    />
                                    <button className="py-1 text-white bg-theme ">
                                      ADD
                                    </button>
                                  </form>
                                </Popover>
                              }
                            >
                              <span className="p-0 hover:text-theme">
                                <BiNote />
                              </span>
                            </Whisper>
                          )}
                        </div>
                      </div>
                    </td>
                  </Whisper>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CustomeTable;
