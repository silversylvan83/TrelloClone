import Board from "../models/Board.js";

export const getBoards = async (req, res) => {
  const boards = await Board.find().sort({ createdAt: -1 });
  res.json(boards);
};

export const createBoard = async (req, res) => {
  const { title, description } = req.body;
  const newBoard = await Board.create({ title, description });
  res.status(201).json(newBoard);
};
