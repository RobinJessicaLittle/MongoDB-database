/*npm i dotenv
npm yargs
npm i mongodb*/
///FROM ATLAS mongodb+srv://NewUser:Carlisle2@cluster0.rehec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
require ('dotenv').config();

const{MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

const connections = async () => {
    try{
        await client.connect();
        console.log('success')
        const db = client.db('movies');
        return db.collection('Movie')
    }catch(error){
        console.log(error);
    }
};

module.exports = { connections, client}