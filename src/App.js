import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";
import explorer from "./data/folderData";

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree(); //using custom hook to traverse the file/folder tree
  // and insert the newly created file/folder

  //function to insert new node to the file data tree
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div
      className="App"
      style={{
        width: "30%",
        borderRight: "1px solid black",
        padding: "10px",
        overflowY: "auto",
      }}
    >
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};
export default App;
