// src/components/IDE.js
import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import FileViewer from "./FileViewer";
import files from "../data/files";
import { fetchFileContent } from "../data/fetchFileContent";

const IDE = () => {
  const [selectedFilePath, setSelectedFilePath] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleFileSelect = async (filePath) => {
    console.log(filePath);
    setSelectedFilePath(filePath);
    const content = await fetchFileContent(filePath);
    setFileContent(content);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "30%",
          borderRight: "1px solid black",
          padding: "10px",
          overflowY: "auto",
        }}
      >
        <FileExplorer files={files.root} onSelect={handleFileSelect} />
      </div>
      <div style={{ width: "70%", padding: "10px", overflowY: "auto" }}>
        <FileViewer filePath={selectedFilePath} content={fileContent} />
      </div>
    </div>
  );
};

export default IDE;
