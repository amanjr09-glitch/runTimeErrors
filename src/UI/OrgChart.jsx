import React, { useLayoutEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import { renderToString } from "react-dom/server";
import { AiOutlinePlus } from "react-icons/ai";

export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = props.chart ?? null;
  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
        .layout(props.layout ?? "left")
        .nodeHeight((d) => 50)
        .compact(false)
        .onNodeClick((id) => {
          const nodeIndex = props.data.findIndex((item) => item.id === id);
          if (props.data[nodeIndex].type === "add") {
            props.onNodeAdd(nodeIndex);
          } else {
            props.onNodeClick(nodeIndex);
          }
        })
        .nodeContent((data, idx) => {
          const str = renderToString(
            <div className="p-4 h-full flex justify-between items-center bg-gray-200 dark:bg-gray-400 border-gray-300 dark:border-gray-500 rounded border">
              <span>{data.data.name}</span>
              {data.data.fieldwork !== undefined && (
                <span className="text-pallete-darkblue font-bold">
                  {data.data.fieldwork + 1}
                </span>
              )}
            </div>
          );
          return str;
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return <div className="flex-1" ref={d3Container} />;
};
