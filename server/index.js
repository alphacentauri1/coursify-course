const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./dbconn')
const acc = require('./schema');
const courser = require('./courseschema')
const usercourse = require('./userschema')
const cors = require('cors');
const bodyParser = require('body-parser')
const multer = require('multer');
const path = require('path')
const PORT = process.env.PORT || 3510
const app =  express();
app.use(express.json());
app.use(cors())
connectDB();

const aak = mongoose.model('coursifyreg', acc);
const courses = mongoose.model('Course', courser );
const userlist = mongoose.model('ulist', usercourse);

app.get('/', cors(), (req,res)=>{
    res.send("Get started with using our Coursify API...");
})


app.post('/register',cors(), async (req, res)=>{

        try{
        await aak.create(req.body); 
        res.status(200);
        res.json("success");
        }
        catch(err){
            console.log(err);
            res.json("exists");
        }
       
})

app.post('/login',cors(), async(req, res)=>{
        const {usr, pswd} = req.body;
        const resultset = await aak.findOne({_id:usr});
        if(usr=="admin" && pswd=="admin"){
            res.json("admin");
        }
        else{
                if(resultset){           
                    if(pswd==resultset.pswd) res.json("valid");     
                    else res.json("invalid");
                }
                else
                    res.json("not exists");    
         }
        
        
})


app.get('/courses',cors(), async(req,res)=>{
    const result = await courses.find();
      res.json(result);
    
})


app.get('/courses/:id', cors(), async(req, res)=>{

    const {id} = req.params;
    const resultset = await courses.findOne({_id: id})
    if(resultset==null){
        res.send("no data")
    }
    else{
    res.json(resultset);
    }
})

app.get('/tagy/:tag', cors(), async(req,res)=>{
    const {tag} = req.params;
    await courses.find({tag: tag})
    .then(resultset=>{

         if(resultset){
                res.json(resultset);
         }
         else{
            res.json("no entries");
         }
    })
   
})

const storage = multer.diskStorage({
    destination:( req, file, cb)=>{
        cb(null, "../client/src/images/");
    },
    filename: (req, file, cb)=>{
        console.log(file);
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage: storage})
app.post('/courses', cors(),upload.single("img"), async(req,res)=>{
    //only for admin dashboard to create new course entries..


    try{
        await courses.create({
            cname: req.body.CourseName,
            _id: req.body.CourseId,
            hours: req.body.Hours,
            desc: req.body.Description,
            tag: req.body.Tag,
            handler: req.body.Handler,
            price: req.body.Price,
            img: req.file.filename,
            link: req.body.Link
        })
        res.json("success")
    }
    catch(err){
        console.log(`i have somthing${err}`);
        res.json("CID duplicate");
        
    }
})


app.get('/user:id', cors(), async(req,res)=>{
    var {id} = req.params;

    id = id.substring(1);
    console.log(id);
    const resultset = await userlist.findOne({_id: id})
    res.json(resultset);
})

app.post('/user', cors(), async(req,res)=>{
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    try{
        const {_id, courses, spent} = req.body; 
        const resultset = await userlist.findOne({_id: _id});
        if(resultset==null){
            //create a new entry

            await userlist.create({
                _id:_id,
                courses: courses,
                spent: spent
            })
            res.json("success");
        }
        else{
            //update
            var amount=0;
            var courselist = resultset.courses;
             amount = parseInt(resultset.spent);
             console.log(amount);
            
           
            try{
                    var resu1;
                    spentint = 0;
                    spentint = parseInt(spent);
                    console.log(spentint);
                    var totamt = 0;
                    totamt = spentint + amount;
                    console.log(totamt);
                //below 'if' is for CART 
                if(isArray(courses)){ 
                    for(var i=0;i<courses.length;i++)
                        courselist.push(courses[i]);
                    console.log(courselist)
                    resu1 = await userlist.findByIdAndUpdate({_id:_id}, {courses: courselist, spent: totamt})
                    
                }
                else{
                    if(courselist.includes(courses))
                        res.json("already bought");
                    
                    else{
                    courselist.push(courses);
                    resu1 = await userlist.findByIdAndUpdate({_id:_id}, {courses: courselist, spent:totamt });
                    }
                }
            
                if(resu1) 
                    res.json("success");
                else 
                    res.json("failed");
                
            }
            catch(err){
                console.log(err);
            }
        }
        }
    
   
    catch(err){
        console.log(err);
    }
})

app.listen(PORT, ()=>{
    console.log(`Mongo connected.. Listening on ${PORT}`);
})