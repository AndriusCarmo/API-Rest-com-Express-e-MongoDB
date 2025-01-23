import mongoose,{mongo} from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect("mongodb+srv://amjc2:amjc2123@cluster0.yyuhc.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
};

export default conectaNaDatabase;
