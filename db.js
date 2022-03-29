import mongoose from "mongoose";

const mongoUrl = 'mongodb+srv://ms29ash:3KpHuHkkuksRRgex@cluster0.8r29e.mongodb.net/tiktok?retryWrites=true&w=majority'

const connectToMongo = () => {
    mongoose.connect(mongoUrl, () => {
        console.log('Connected to Mongo successfully')
    }).catch(err => console.log(err))
}

export default connectToMongo;