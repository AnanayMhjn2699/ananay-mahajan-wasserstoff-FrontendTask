// src/data/fetchFileContent.js
export const fetchFileContent = async (filePath) => {
  const response = await fetch(filePath);
  const content = await response.text();
  return content;
};
