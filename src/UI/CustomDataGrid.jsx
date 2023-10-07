import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useAuth } from "../../context/auth";

function CustomToolbar({ toolbar, title = "" }) {
  return (
    <GridToolbarContainer>
      <div className="flex w-full justify-between">
        <span className="self-start text-base font-bold px-2 text-theme mt-1">
          {title}
        </span>
        <div className="flex gap-4">
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
          {toolbar}
        </div>
      </div>
    </GridToolbarContainer>
  );
}

export default function CustomDataGrid({
  toolbar = true,
  disableFooter = false,
  rowsPerPageOptions = 9,
  totalRows = 7,
  onRowClick = () => {},
  onCellClick = () => {},
  columns = [],
  rows = [],
  title = "",
  toolbarOptions,
  ...props
}) {
  const { theme } = useAuth();
  const borderColor = theme === "dark" ? "#2B2B2B" : "#F0F0F0";
  const textColor = theme === "dark" ? "#E5E5E5" : "#000";
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        borderColor: borderColor,
        color: textColor,
        borderRadius: "15px",
        overflow: "hidden",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: borderColor,
          border: "none",
          borderRadius: "0px",
        },
        "& .MuiDataGrid-toolbarContainer": {
          backgroundColor: borderColor,
          border: "none",
          padding: "0.5rem",
          borderBottom: `1px solid ${borderColor}`,
        },
        "& .css-1knaqv7-MuiButtonBase-root-MuiButton-root": {
          color: "#47DC80",
        },
        "& .MuiDataGrid-columnsContainer": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderColor: borderColor,
          // add more css for customization
        },
        "& .MuiDataGrid-footerContainer": {
          color: "white",
          borderColor: borderColor,
          display: !disableFooter ? "auto" : "none",
        },
        "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {
          color: "white",
        },
        "& .css-zylse7-MuiButtonBase-root-MuiIconButton-root.Mui-disabled": {
          color: "white",
        },
        "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
          color: "white",
        },
        "& .css-axafay-MuiDataGrid-virtualScroller": {
          height: rows.length > 0 ? "100%" : "0px",
        },
      },
    })
  );
  const style = useStyles();
  return (
    <div className="h-full">
      <DataGrid
        components={
          toolbar
            ? {
                Toolbar: () => (
                  <CustomToolbar toolbar={toolbarOptions} title={title} />
                ),
              }
            : {}
        }
        className={style.root}
        rows={rows}
        columns={columns}
        pageSize={totalRows}
        rowsPerPageOptions={[5, 10, 20]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onRowClick={onRowClick}
        onCellClick={onCellClick}
        {...props}
      />
    </div>
  );
}
