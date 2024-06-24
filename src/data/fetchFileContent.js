// custom function to fetch the contents of the file
export const fetchFileContent = async (filePath) => {
  const response = await fetch(filePath);
  const content = await response.text();
  return content;
};
