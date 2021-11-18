import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    instagramUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const Member = mongoose.model('Member', memberSchema);

export default Member;
