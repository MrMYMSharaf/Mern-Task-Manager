import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.koqfj.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Database connection error: ', error);
    }
}

export default Connection;


//https://medium.com/@sanikakotgire2003/building-crud-application-using-mern-stack-6c2321f6ef34
//https://github.com/sanika6969/Project-3-CRUD-APP/tree/main/server