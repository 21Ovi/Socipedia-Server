import express from "express";

import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifiedToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifiedToken, getUser);
router.get("/:id/friends", verifiedToken, getUserFriends);

// UPDATE
router.patch("/:id/:friendId", verifiedToken, addRemoveFriend);

export default router;
