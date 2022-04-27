require("dotenv").config();
const yargs = require("yargs");

const {connections, client} = require ('./dataBase/connections')
const {addMovie, listMovie, updateMovie, deleteMovie} = require('./utils/index.js')

const app = async (yargsObj) => {
    const collection = await connections();
    if (yargsObj.add) {
        await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
        console.log('successfully added new doc too database')
    }else if (yargsObj.list){
        await listMovie(collection)
    }else if (yargsObj.update){
        await updateMovie(collection)
    }else if (yargsObj.delete){
        await deleteMovie(collection)
    }else {
        console.log ('incorrect command')
    }
    await client.close();
};

app(yargs.argv)

//node src/app.js --add --title='But I'm a Cheerleader' --actor='Natasha Lyonne'
//node src/app.js --list
//Node src/db/connection.js