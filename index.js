const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
require('dotenv').config()
//console.log(process.env.DB_PASSWORD)
app.use(express.json())
app.use(cors())

//user:divyadharshinidivyaak
//password:dtupRCSDvJNp6W6r



const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobforu.tbxfdhg.mongodb.net/?retryWrites=true&w=majority&appName=JobForU`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //create db
    const db = client.db("jobportal")
    const jobcollections = db.collection("demojobs")
    app.post("/post-job",async(req,res) => {
        const body = req.body;
        body.createAt = new Date();
        //console.log(body)

        const result = await jobcollections.insertOne(body);
        if(result.insertedId){
            return res.status(200).send(result)
        }else{
            return res.status(404).send({message:"Can not inset try again!",
            status:false 
        })
        }
    })
    //get all jobs
    app.get("/all-jobs",async(req,res) => {
        const jobs = await jobcollections.find({}).toArray()
        res.send(jobs);
    })

    app.get("/myJobs/:email",async(req,res) => {
      //console.log(req.params.email)
      const jobs = await jobcollections.find({postedBy: req.params.email}).toArray();
      res.send(jobs)


    })

    app.get("/all-jobs/:id",async(req,res)=> {
      const id = req.params.id;
      const job = await jobcollections.findOne({
        _id:new ObjectId(id)
      })
      res.send(job)
    })

    app.delete("/job/:id",async(req,res) => {
      const id = req.params.id;
      const filter = {_id:new ObjectId(id)}
      const result = await jobcollections.deleteOne(filter);
      res.send(result);
    })


    app.patch("/update-job/:id",async(req,res)=>{
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id:new ObjectId(id)};
      const options = {upsert:true};
      const updateDoc = {
        $set:{
          ...jobData
        },

      }
      const result = await jobcollections.updateOne(filter,updateDoc,options);
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res) => {
    res.send('Hello Divya')
})

app.listen(port,() => {
    console.log(`example app listening on port ${port}`)
})
