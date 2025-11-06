import Card from "../models/Card.js";

export const getCards = async (req, res) => {
  const { listId } = req.query;
  const cards = await Card.find(listId ? { listId } : {});
  res.json(cards);
};

export const createCard = async (req, res) => {
  const { title, description, listId, position, labels, dueDate } = req.body;
  const card = await Card.create({ title, description, listId, position, labels, dueDate });
  res.status(201).json(card);
};
