import Goal from "../models/goalModel.js";
import asyncHandler from "express-async-handler";

export const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

export const setGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goals);
});

export const updateGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);
  if (!goals) {
    throw new Error("Goal not found");
  }

  if (!req.user) {
    res.status(403);
    throw new Error("User not found");
  }

  if (goals.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoals);
});

export const deleteGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);
  if (!goals) {
    throw new Error("Goal not found");
  }

  if (!req.user) {
    res.status(403);
    throw new Error("User not found");
  }

  if (goals.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Goal.deleteOne(goals);
  res.status(200).json(`${req.params.id}`);
});
