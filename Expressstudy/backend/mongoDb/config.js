const { default: mongoose } = require("mongoose")
 const uri = "mongodb+srv://adhilu260:4a4RLaJJjvZfy*E@cluster0.7rrtoca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connection = async () => {
   
    try {
        const connect = await mongoose.connect(uri)
        console.log("data connected successfulyy...");
        
    } catch (error) {
        console.log("something went wrong on connection in mongodb : ",error);
        process.exit()
        
        
    }
} 

module.exports = connection