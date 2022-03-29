import mongoose from 'mongoose';

const reelSchema = mongoose.Schema({
    url: String,
    imgUrl: String,
    channel: String,
    song: String
    , description: String
    , likes: Number,
    comments: Number,


})
const Reel = mongoose.model('mytiktokclone', reelSchema);
export default Reel