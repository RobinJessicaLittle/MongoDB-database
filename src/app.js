require("dotenv").config();
const yargs = require("yargs");

const {connections, client} = require ('./dataBase/connections')
const {addMovie, listMovie, updateMovie, deleteMovie, deleteAll, findMovie, updateActor, updateGenre } = require('./utils/index.js')

const app = async (yargsObj) => {
    const collection = await connections();
    //add movie
    if (yargsObj.add) {
        await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor, genre: yargsObj.genre});
        console.log('successfully added new doc too database')
    //list movies in database
    }else if (yargsObj.list){
        await listMovie(collection)
    //update title, actor or genre
    }else if (yargsObj.update) {
        await updateMovie(collection, {title: yargsObj.title}, yargsObj.newTitle);
        await updateActor(collection, {actor: yargsObj.actor}, yargsObj.newActor);
        await updateGenre(collection, {genre: yargsObj.genre}, yargsObj.newGenre);
    //delete selected movie entry from database
    }else if (yargsObj.delete){
        await deleteMovie(collection, {title: yargsObj.title})
    //Delete all database entries- doesn't work
    /*}else if (yargsObj.deleteAll){
        await deleteAll(collection)*/
    //find Movie via title
    }
    else if (yargsObj.findTitle) {
        await findMovie(collection, { title: yargsObj.title });
    //find Movie via Actor
    }else if (yargsObj.findActor) {
        await findMovie(collection, { actor: yargsObj.actor });
    //find Movie via Genre
    }else if (yargsObj.findGenre) {
        await findMovie(collection, { genre: yargsObj.genre });
    }else {
        console.log ('incorrect command')
    }
    await client.close();
};

app(yargs.argv)

//node src/app.js --add --title='Death Proof' --actor='Mary Elizabeth Winstead' --genre='Action' WORKING
//node src/app.js --list WORKING
//node src/app.js --update --title="But Im a Cheerleader" --newTitle="But I am a Chearleader" WORKING
//node src/app.js --update --actor="Mary Elizabeth Winstead" --newActor="Rosario Dawson" WORKING
//node src/app.js --update --genre="Action" --newGenre="Action&Adventure" WORKING
//node src/app.js --delete --title='Death Proof' --actor='Mary Elizabeth Winstead' WORKING
//node src/app.js --findTitle --title='Devil Wears Prada' WORKING
//node src/app.js --findActor --actor='Anne Hathaway' WORKING
//node src/app.js --findGenre --genre='Action&Adventure' WORKING
//node src/app.js --deleteAll NOT WORKING