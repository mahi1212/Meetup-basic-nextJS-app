import { MongoClient } from 'mongodb'
// api/new-meetup
// POST/ api/new-meetup

async function handler(req, res){

    if(req.method === 'POST'){
        const data = req.body
        // Connect to server side
        const client = await MongoClient.connect('mongodb+srv://meetupAdmin:KgBeVHfXJAfR9yns@cluster0.tecyb.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        // console.log(result)
        client.close()

        res.status(201).json({message: 'Meetups Inserted'})
        
    }
}

export default handler;