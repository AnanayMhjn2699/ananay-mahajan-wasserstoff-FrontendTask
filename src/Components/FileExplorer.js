// src/components/FileExplorer.js
import React from "react";

const FileExplorer = ({ files, onSelect }) => {
  const renderFiles = (files, path = "") => {
    return Object.keys(files).map((key) => {
      const newPath = path ? `${path}/${key}` : key;
      const value = files[key];
      if (typeof value === "string") {
        return (
          <div
            key={newPath}
            onClick={() => onSelect(value)}
            style={{
              cursor: "pointer",
              marginLeft: "20px",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            {key}
          </div>
        );
      } else {
        return (
          <div key={newPath}>
            <div style={{ fontWeight: "bold" }}>{key}</div>
            <div style={{ paddingLeft: 20 }}>{renderFiles(value, newPath)}</div>
          </div>
        );
      }
    });
  };

  return <div>{renderFiles(files)}</div>;
};

export default FileExplorer;
