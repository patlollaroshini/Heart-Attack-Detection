const exp=require('express');
const app=exp();
const cors = require('cors');
const mclient=require('mongodb').MongoClient;
app.listen(4500,()=>console.log("WEB server listening in port 4500"));
app.use(cors());
mclient.connect("mongodb://127.0.0.1:27017")
.then((dbRef)=>{
    let db=dbRef.db('heartattack');
    let userCollectionObj=db.collection('users');
    let data_of_user=db.collection('data_of_user');
    app.set('userCollectionObj',userCollectionObj);
    app.set('data_of_user',data_of_user);
    console.log("dabase connection success");
})
.catch((err)=>{
    console.log("DB CONNECTION ERROR",err);
})
app.use(exp.json())
let userApi=require('./APIs/userApi');
app.use('/userApi',userApi);

let invalidpathhandler=(request,response,next)=>{
    response.send({message:"INVALID PATH"});
}
app.use("*",invalidpathhandler);
let errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
};
app.use(errorHandlingMiddleware);