const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "folder 1",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "nested folder 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "file1.txt",
              filePath: "/files/sample2.txt",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "file2.js",
              filePath: "/files/index.js",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "nested_file.txt",
          filePath: "/files/sample3.txt",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "folder 2",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "file3.json",
          filePath: "/files/sample1.json",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "sample4.css",
      filePath: "/files/sample4.css",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
