import React, { useEffect, useState } from "react";
import { ResizableBox } from "react-resizable";
import { useEngagement } from "../../screens/Engagment";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineDoubleRight,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import { filter_fs } from "../../middlewares/data_classification";
import { Loader } from "rsuite";
import CustomModal from "./Modal";
import DropDown from "./DropDown";
import InputHolder from "./Input";
import { v4 } from "uuid";
import { readData, writeData } from "../../api/fb";
class MyHandleComponent extends React.Component {
  render() {
    const { handleAxis, type, innerRef, ...props } = this.props;
    return (
      <div ref={innerRef} className={`foo handle-${handleAxis}`} {...props}>
        <div className="absolute px-1 top-0 font-bold flex justify-center dark:bg-gray-400 bg-gray-200 items-center cursor-n-resize float-right w-full">
          =
        </div>
      </div>
    );
  }
}

export const MyHandle = React.forwardRef((props, ref) => (
  <MyHandleComponent innerRef={ref} {...props} />
));

function ResizableFs({
  selected,
  onAdd,
  onClose = () => {},
  onAuto = () => {},
  onDelete = () => {},
  autoLoad = false,
}) {
  const {
    state: { mapping, fieldwork, setMapping, engagmentData },
  } = useEngagement();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [related, setRelated] = useState([]);
  const [newFs, setNewFs] = useState({ group: 0, fieldwork: 0, sub: 0 });
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((state) => !state);
  const sub = mapping.sub.filter(
    ({ group }) => group === mapping.group[newFs.group].name
  );
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 0) {
        const result = await filter_fs(query, mapping, fieldwork);
        setRelated(result);
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Sibfs = mapping.fs.find((item) => item.sub === sub[newFs.sub].name);
    const data = {
      name: newFs.name,
      fieldwork: newFs.fieldwork,
      type: "fs",
      parentNodeId: Sibfs.parentNodeId,
      group: Sibfs.group,
      sub: Sibfs.sub,
      id: v4(),
    };
    setMapping((state) => ({
      ...state,
      fs: [data, ...state.fs],
    }));
    toggleModal();
    const map_id = `mapping/${engagmentData.clientId}/state`;
    const mapping_data = await readData(map_id);
    if (!mapping_data) {
      const map_data = await readData("mapping/default");
      writeData(`mapping/${engagmentData.clientId}`, {
        ...map_data,
        state: [data, ...map_data.state],
      });
    } else {
      writeData(map_id, [data, ...mapping_data]);
    }
  };
  return (
    <div className="p-4 pb-0 border-t-4 border-gray-200 dark:border-gray-400 h-72 fixed flex left-[16.9rem] bg-white bottom-0 w-[calc(100%-20.4rem)] shadow-lg dark:bg-gray-400 flex-col pt-6 text-xs">
      <div className="flex justify-between">
        <p className="font-bold text-sm">
          Selected: {selected.map((item) => item.id).join(", ")}
        </p>
        <div className="flex shrink-0 h-fit gap-2">
          <button
            onClick={onAuto}
            disabled={autoLoad}
            className="bg-theme py-1 text-white font-bold"
          >
            {autoLoad ? <Loader size="xs" /> : "AUTO CLASSIFY"}
          </button>
          <button
            onClick={onDelete}
            className="bg-pallete-red dark:bg-gray-500 border py-1 text-white font-bold"
          >
            <AiOutlineDelete />
          </button>
          <button
            onClick={onClose}
            className="border-theme bg-gray-200 dark:bg-gray-500 border py-1 text-theme font-bold"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <CustomModal open={showModal} closeModal={toggleModal}>
        <form
          onSubmit={handleSubmit}
          className="p-4 text-sm w-[40vw] flex flex-col gap-4"
        >
          <p className="text-xl font-bold">Create New FS Caption</p>
          <InputHolder
            onChange={(e) =>
              setNewFs((state) => ({ ...state, name: e.target.value }))
            }
            placeholder="Name"
          />
          <DropDown
            onChange={(group) => {
              setNewFs((state) => ({ ...state, group }));
            }}
            data={mapping.group}
            title="Group"
          />
          <DropDown
            onChange={(sub) => {
              setNewFs((state) => ({ ...state, sub }));
            }}
            data={sub}
            title="Subgroup"
          />
          <DropDown
            onChange={(fieldwork) => {
              setNewFs((state) => ({ ...state, fieldwork }));
            }}
            data={fieldwork.map((name) => ({ name }))}
            title="Fieldwork"
          />
          <button className="bg-theme w-fit self-end px-4 text-white font-bold">
            Create New
          </button>
        </form>
      </CustomModal>
      <br />
      <div className="flex gap-2 items-center">
        <div className="flex flex-[0.3] items-center rounded pr-2 justify-between border">
          <input
            value={query}
            autoFocus
            onChange={(e) => {
              setLoading(true);
              setQuery(e.target.value);
            }}
            className="p-2 w-full outline-none "
            placeholder="Search here..."
          />
          <AiOutlineSearch />
        </div>
        <button
          onClick={toggleModal}
          className="bg-theme text-white p-2 text-sm h-fit"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <br />
      {loading ? (
        <div className="flex gap-2 h-full justify-center items-center">
          <Loader />
          Loading...
        </div>
      ) : (
        <div className="flex flex-col h-full overflow-scroll">
          {query.length>3 && mapping.fs
            .map((item, index) => ({ ...item, index }))
            .filter(
              ({ name }) =>
                name.toLowerCase().includes(query.toLowerCase()) ||
                related.find((item) => name === item)
            )
            .map((item) => (
              <div
                onClick={() => onAdd(item.index)}
                className="flex px-2 group cursor-pointer hover:bg-gray-100 py-2 border-b border-gray-200 justify-between "
              >
                <div className="flex items-center">
                  <span>{item.group}</span>
                  <AiOutlineDoubleRight className="mx-2" />
                  <span>{item.sub}</span>
                  <AiOutlineDoubleRight className="mx-2" />
                  <span>{item.name}</span>
                </div>
                <span>{fieldwork[item.fieldwork]}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ResizableFs;
