// src/components/FileViewer.js
import React from "react";
import { marked } from "marked";

const FileViewer = ({ filePath, content }) => {
  const getFileType = (filePath) => {
    const parts = filePath.split(".");
    return parts[parts.length - 1];
  };

  const fileType = getFileType(filePath);

  const renderContent = () => {
    switch (fileType) {
      case "js":
      case "txt":
      case "readme":
        return (
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {content}
          </pre>
        );
      case "md":
        return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />;
      default:
        return (
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {content}
          </pre>
        );
    }
  };

  return (
    <div>
      {filePath ? (
        <div>
          <h3>{filePath}</h3>
          {renderContent()}
        </div>
      ) : (
        <div>Select a file to view its content.</div>
      )}
    </div>
  );
};

export default FileViewer;
