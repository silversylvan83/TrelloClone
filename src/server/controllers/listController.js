import List from "../models/List.js";

export const getLists = async (req, res) => {
  const { boardId } = req.query;
  const lists = await List.find(boardId ? { boardId } : {});
  res.json(lists);
};

export const createList = async (req, res) => {
  const { title, boardId, position } = req.body;
  const list = await List.create({ title, boardId, position });
  res.status(201).json(list);
};
