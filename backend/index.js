const express = require('express')
const cors = require('cors')
const app = express()
const port = 3015

app.use(cors());

app.get('/api/node-express', (req, res) => {
    const json = [{
        "technology": "Node.js",
        "description": "Node.js is an open-source, cross-platform JavaScript runtime environment that allows executing JavaScript code outside a web browser. It is built on Chrome's V8 JavaScript engine and is designed to create scalable network applications.",
        "website": "https://nodejs.org",
        "current_version": "14.17.6",
        "release_date": "2021-09-30"
    }
        ,
    {
        "technology": "Express.js",
        "description": "Express.js is a minimal and flexible Node.js web application framework designed to build web applications and APIs. It provides a set of robust features for web and mobile applications, making it one of the most popular frameworks in the Node.js ecosystem.",
        "website": "https://expressjs.com",
        "current_version": "4.17.1",
        "release_date": "2020-10-20"
    }
    ]

    const timeout = 600 + Math.floor(Math.random() * 600)
    setTimeout(() => {
        res.json(json)
    }, timeout)
})

app.get('/api/dogs', (req, res) => {
    const dogs = [
        {
            "name": "Buddy",
            "breed": "Golden Retriever",
            "age": 3,
            "color": "Golden",
            "weight_kg": 30,
            "is_trained": true,
            "owner": {
                "name": "John Smith",
                "email": "john@example.com",
                "phone": "+1 123-456-7890"
            }
        },
        {
            "name": "Luna",
            "breed": "Labrador",
            "age": 2,
            "color": "Black",
            "weight_kg": 25,
            "is_trained": false,
            "owner": {
                "name": "Emily Johnson",
                "email": "emily@example.com",
                "phone": "+1 987-654-3210"
            }
        },
        {
            "name": "Max",
            "breed": "German Shepherd",
            "age": 5,
            "color": "Tan and Black",
            "weight_kg": 35,
            "is_trained": true,
            "owner": {
                "name": "Michael Brown",
                "email": "michael@example.com",
                "phone": "+1 555-123-4567"
            }
        }
    ]

    const timeout = 600 + Math.floor(Math.random() * 600)
    setTimeout(() => {
        res.json(dogs)
    }, timeout)
}


)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})