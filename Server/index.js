import express from 'express'
import mongoose, { Schema } from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors'


const app=express()
const PORT=process.env.PORT || 8000

app.use(bodyParser.json());
app.use(cors())


mongoose.connect("mongodb+srv://gauravraner83_db_user:Snm7InQoVZ0DjizY@cluster0.fxumpce.mongodb.net/crudDB?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

const userSchema=new mongoose.Schema({
  username:String,
  age:Number,
  email:String,
  address:String
})

const User=mongoose.model("User",userSchema)

app.get("/",async(req,res)=>{
res.send("running ...");
});
app.post("/AddUsers",async(req,res)=>{
  try{
    const obj={
      username:req.body.username,
      age:req.body.age,
      email:req.body.email,
      address:req.body.address
    }
    await User.create(obj)
    res.send("form submitted")
  }catch(err){
    res.send(err)
  }
})


app.get("/GetUsers",async(req,res)=>{
  try {
    const user=await User.find()
    res.send(user)
  } catch (error) {
    res.send(error)
  }
})


app.delete("/DeleteUser/:id",async(req,res)=>{
  try {
    const userId=req.params.id
    await User.findByIdAndDelete(userId)
    res.send("user deleted")
  } catch (error) {
    console.log(error); 
  }
})

app.put("/UpdateUser/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
})


app.get("/GetUser/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});




app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`);
})
