const express = require('express')
const router = express.Router()

const Maneger = require('../models/maneger');
const Employee = require('../models/employee');

const jwt = require('jsonwebtoken');


//Cheking Tokens
function ensureToken(req,res,next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next(); 
    }
    else{
        res.status(403);
    }
}
//Maneger Login
router.post('/loginManeger', (req, res) => {
    let userData = req.body
    Maneger.findOne({email : userData.email}, (err, user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                res.status(401).send('Invalid email');
            }
            else if(user.password !== userData.password){
                res.status(401).send('Invalid Password');
            }
            else{
                let payload = {subject : user._id}
                let token = jwt.sign(payload,'secretkey')
                res.status(200).send({token})
            }
        }
    })
})


//Maneger Signup
router.post('/signupManeger', (req,res)=>{
    let userData = req.body;
    let user = new Maneger(userData);

    user.save((err,registerdUser)=>{
        if(err){
            console.log(err);
        }
        else{
            let payload = {subject : registerdUser._id};
            let token = jwt.sign(payload , 'secretkey');
            res.status(200).send({token});
        }
    })
})

//Get All Employees
router.get('/getEmp', /*ensureToken ,*/ async(req, res) => {
    try{
        const emp = await Employee.find()
        res.json(emp)
    }catch(err){
     res.send('Error :' + err)
    }
})

//Get All Employees
router.get('/getOneEmp/:id', async(req, res) => {
    try{
        const oneEmp = await Employee.findOne({'_id':req.params.id})
        res.json(oneEmp)
    }catch(err){
     res.send('Error :' + err)
    }
})


//Addinf Employee
router.post('/addEmp', async(req,res) => {
    const empDet = req.body;
    const emp = new Employee(empDet);
    try{
        const user = await emp.save() 
        res.json(user)
    }catch(err){
        res.send('Error')
    }
})

//Updating Employee
router.put('/update/:id', async(req, res)=>{
    const empUpdateDet = req.body;
        await Employee.updateOne({'_id':req.params.id},empUpdateDet)
        .then((user)=>{
            if(!user){
                return res.status(404).send("user not found");
            }
            res.send(user);
        })
        .catch((err)=>{
            res.status(400).send("Could not update employee");
        })
})

//Deleting Employee
router.delete('/deleteEmp/:id', async(req , res)=>{
    
    await Employee.deleteOne({_id : req.params.id}).then(
    ()=>{
        res.status(200).send("Employee Deleted Successfully");
    })
    .catch((err)=>{
        res.status(400).send("Error : Couldnt Delete the Employee");
    });
});



module.exports = router;
