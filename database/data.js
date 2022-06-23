import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/discord_dashboard")
.then(() => console.log("Connected To Database"))
.catch((err) => console.log(err));