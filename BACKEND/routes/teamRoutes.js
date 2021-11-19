import express from 'express';
import Member from '../models/memberModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const members = await Member.find({});
  res.json(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById({ _id: req.params.id });
  res.json(member);
});

export default router;
