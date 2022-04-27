exports.addMovie = async (collection, movieObj) => {
    try{
        const addEntry = await collection.insertOne(movieObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovie = async (collection) => {
    try{
        const movieList = await collection.find().toArray();
        console.log(movieList);
    }catch(error){
        console.log(error);
        
    }
};
//////////////
//ADDED BY ME FOR TASK
exports.findMovie=async(collection,movieObj)=>{
    try{
        const movieList=await collection.find(movieObj).toArray();
        console.log(movieList);
    }catch (error) {
        console.log("Failed to find")
    }
}
exports.updateMovie = async (collection, title, newTitle) => {
    try{
        console.log("Movie Updated")
        let updateList = await collection.updateOne(title, {$set : {title: newTitle}} )
        console.log(updateList)
    } catch (error) {
        console.log("updateMovies fail")
    }
}

exports.updateActor = async (collection, actor, newActor) => {
    try{
        console.log("Actor Updated")
        let updateActor = await collection.updateOne(actor, {$set : {actor: newActor}} )
        console.log(updateActor)
    } catch (error) {
        console.log("updateActor fail")
    }
}

exports.updateGenre = async (collection, genre, newGenre) => {
    try{
        console.log("Genre Updated")
        let updateGenre = await collection.updateOne(genre, {$set : {genre: newGenre}} )
        console.log(updateGenre)
    } catch (error) {
        console.log("updateGenre fail")
    }
}

exports.deleteMovie = async (collection, movieObj) => {
    try{
        const deleteEntry = await collection.deleteOne(movieObj);
        console.log(deleteEntry)
    }catch (error) {
        console.log("Failed too delete")
    }
};

exports.deleteAll = async (collection) => {
    try{
        const deleteAll = await collection.deleteMany(movieObj);
        console.log(deleteAll)
    }catch (error) {
        console.log("Failed too delete")
    }
};