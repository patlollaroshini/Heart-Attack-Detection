const exp=require('express')
const userApp=exp.Router();
const bcrypt=require('bcryptjs')
const { exec } = require('child_process');
const jwt=require('jsonwebtoken')
const expressAsyncHandler=require('express-async-handler');
const verifytoken=require('../middlewares/Verifytoken');
const { Console } = require('console');


userApp.get('/get-users',verifytoken,expressAsyncHandler(async(request,response)=>{
    let userCollectionObj=request.app.get('userCollectionObj');
    let userCredObj=request.query.params1;
    console.log(request.query.params1)
    let existeduser=await userCollectionObj.findOne({username:userCredObj});
    response.send({message:"USER LIST",payload:existeduser});
}));


userApp.post('/post-user',expressAsyncHandler(async(request,response)=>{
    let users=request.body;
    let userCollectionObj=request.app.get('userCollectionObj');
    let existeduser=await userCollectionObj.findOne({username:users.username});
    if(existeduser!=null)
    {
        response.send({message:"User already existed"});
    }
    else
    {
        let hashedpassword=await bcrypt.hash(users.password,5);
        users.password=hashedpassword;
    let res=await userCollectionObj.insertOne(users);
    console.log(res);
    response.send({message:"User INserted"})
    }
}));

userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    let userCredObj=request.body;
    let userCollectionObj=request.app.get('userCollectionObj');
    let existeduser=await userCollectionObj.findOne({username:userCredObj.username});
    if(existeduser===null)
    {
        response.send({message:"INVALID USERNAME"})
    }
    else
    {
        let equalpass=await bcrypt.compare(userCredObj.password,existeduser.password);
        if(equalpass)
        {
            let jwttoken=jwt.sign({username:userCredObj.username},'abcdef',{expiresIn:"2000000"});
            response.send({message:"LOGIN SUCCESS",token:jwttoken,user:existeduser});
        }
        else
        {
            response.send({message:"INVALID PASSWORD"});
        }
    }
}))

userApp.post('/predict',expressAsyncHandler(async(request,response)=>{
    console.log(" Predict Called ");
    console.log(request.body);
    const { age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal } = request.body;
    let username=request.body.username;
    // Initialize an array to store integer values
    const intValues = [];
    // Convert specific properties to integers and push them to intValues array
    intValues.push(parseInt(age, 10)); // Example: Convert age to integer
    intValues.push(parseInt(sex,10));
    intValues.push(parseInt(cp, 10)); // Convert cp to integer
    intValues.push(parseInt(trestbps, 10)); // Convert trestbps to integer
    intValues.push(parseInt(chol, 10)); // Convert chol to integer
    intValues.push(parseInt(fbs, 10)); // Convert fbs to integer
    intValues.push(parseInt(restecg, 10)); // Convert restecg to integer
    intValues.push(parseInt(thalach, 10)); // Convert thalach to integer
    intValues.push(parseInt(exang, 10)); // Convert exang to integer
    intValues.push(parseFloat(oldpeak)); // Convert oldpeak to float and push
    intValues.push(parseInt(slope, 10)); // Convert slope to integer
    intValues.push(parseInt(ca, 10)); // Convert ca to integer
    intValues.push(parseInt(thal, 10));
    console.log(intValues);
    exec(`python main.py ${intValues}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return response.status(500).send('Internal Server Error');
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return response.status(500).send('Internal Server Error');
        }

        try {
            const data = JSON.parse(stdout);
            let data_of_user=request.app.get("data_of_user");
            data_of_user.insertOne(request.body)
            return response.json({ message: "Success", payload: data });
        } catch (err) {
            console.error(`Failed to parse JSON: ${err}`);
            return response.status(500).send('Internal Server Error');
        }
    });
}));




module.exports=userApp;