require("dotenv").config();
const yargs = require("yargs");

const {connections, client} = require ('./dataBase/connections')
const {addMovie, listMovie, updateMovie, deleteMovie, findMovie} = require('./utils/index.js')

const app = async (yargsObj) => {
    const collection = await connections();
    if (yargsObj.add) {
        await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
        console.log('successfully added new doc too database')
    }else if (yargsObj.list){
        await listMovie(collection)
    }else if (yargsObj.update){
        await updateMovie(collection, 
        {title: yargsObj.title},
        { $set: {
            actor:yargsObj.actor,
        },
    });
    }else if (yargsObj.delete){
        await deleteMovie(collection, {title: yargsObj.title})
    }else {
        console.log ('incorrect command')
    }
    await client.close();
};

app(yargs.argv)

//node src/app.js --add --title='Death Proof' --actor='Mary Elizabeth Winstead' WORKING
//node src/app.js --list WORKING
//node src/app.js --update