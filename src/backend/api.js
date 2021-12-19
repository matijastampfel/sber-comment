export const getAllComments = async () => {
  return [
    {
      id: "1",
      body: "Life isn't about finding yourself. Life is about creating yourself.",
      username: "Mike",
      parentId: null,
      userId: "1",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
    {
      id: "2",
      body: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      username: "David",
      parentId: null,
      userId: "2",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
    {
      id: "3",
      body: "Who are you to judge the life I live? I know I'm not perfect and I don't live to be but before you start pointing fingers... make sure you hands are clean!",
      username: "David",
      parentId: "1",
      userId: "2",
      createdAt: "2022-10-18T23:00:13.014+01:00",
    },
    {
      id: "4",
      body: "You only live once, but if you do it right, once is enough.",
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

export const updateNewComment = async (text) => {
  return { text };
};

export const deleteCommentApi = async () => {
  return {};
};
