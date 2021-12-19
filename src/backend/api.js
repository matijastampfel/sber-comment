export const getAllComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Mike",
      parentId: null,
      userId: "1",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "David",
      parentId: null,
      userId: "2",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "David",
      parentId: "1",
      userId: "2",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Mike",
      parentId: "2",
      userId: "2",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
  ];
};

export const createNewComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Jonathan",
      createdAt: new Date().toISOString(),
    };
  };