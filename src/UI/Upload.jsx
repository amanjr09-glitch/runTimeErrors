import React from "react";
import { Loader } from "rsuite";

function UploadUI({
  title,
  onChange = () => {},
  message = "",
  accept = "*",
  loading = false,
}) {
  const id = `files-${Math.random()}`;
  return (
    <>
      <input
        accept={accept}
        onChange={onChange}
        type="file"
        disabled={loading}
        id={id}
        name={id}
        className="hidden"
      />
      <div className="relative border-4 dark:border-gray-400  overflow-x-auto">
        {title && (
          <h3 className="px-6 text-gray-400 text-base py-2 font-semibold bg-pallete-blue dark:bg-gray-400 border-b dark:border-gray-400">
            {title}:
          </h3>
        )}
        <label
          htmlFor={id}
          className="p-4 w-full h-56 grid place-content-center"
        >
          {loading ? (
            <div className="flex gap-2 items-center">
              <Loader size="lg" />
              <div className="text-2xl font-bold">Processing</div>
            </div>
          ) : (
            <>
              <span className="text-xl">Drag and Drop</span>
              <h3>to Add Documnents</h3>
              <span className="text-gray-300">{message}</span>
            </>
          )}
        </label>
      </div>
    </>
  );
}

export default UploadUI;
