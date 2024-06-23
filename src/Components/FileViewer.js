import React from "react";
import { marked } from "marked";
import { useSelector } from "react-redux";

const FileViewer = () => {
  const selectedFile = useSelector((store) => store.selectedFile.items);
  const filePath = selectedFile.selectedFilePath;
  const content = selectedFile.fileContent;
  const getFileType = (filePath) => {
    if (filePath) {
      const parts = filePath.split(".");
      return parts[parts.length - 1];
    } else return;
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
      {filePath && (
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "35%",
            padding: "10px",
          }}
        >
          <h3>{filePath}</h3>
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default FileViewer;
