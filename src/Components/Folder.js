import { useState } from "react";
import { fetchFileContent } from "../data/fetchFileContent";
import FileViewer from "./FileViewer";
import { useDispatch } from "react-redux";
import { addItem } from "../store/selectedFileSlice";

const Folder = ({ handleInsertNode = () => {}, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const dispatch = useDispatch();
  const [toShowTheFileViewer, setToShowTheFileViewer] = useState(0);

  const handleFileSelect = async (filePath) => {
    const content = await fetchFileContent(filePath);
    dispatch(addItem({ selectedFilePath: filePath, fileContent: content }));
    setToShowTheFileViewer(!toShowTheFileViewer);
  };

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };
  //if the node is a folder procees otherwise else block will execute
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {/* recursively calling Folder component to account for all the nested nodes */}
          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="file"
          style={{ cursor: "pointer" }}
          onClick={() => handleFileSelect(explorer.filePath)}
        >
          📄 {explorer.name}
        </div>
        <div>
          {/* <FileViewer filePath={selectedFilePath} content={fileContent} /> */}
          {/* FileViewer component shall only be visible on clicking any node */}
          {toShowTheFileViewer ? <FileViewer /> : null}
        </div>
      </div>
    );
  }
};

export default Folder;
