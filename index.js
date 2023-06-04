const express = require('express') // 1. Bring in express

const app = express() // 2. Initialize express by invoking it

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// http://localhost:5001/
app.get('/', (request, response) => {
    response.send("hello /")
})

// http://localhost:5001/tweets
app.get('/tweets', function(req, res) {
    const mockTweets = [
        {
          "id": 1,
          "user": "JohnDoe",
          "tweet": "Hello, Twitter! Excited to join this platform. #firsttweet"
        },
        {
          "id": 2,
          "user": "JaneSmith",
          "tweet": "Just had the most amazing dinner at my favorite restaurant. Highly recommend it! 🍽️ #foodie"
        },
        {
          "id": 3,
          "user": "MichaelJ",
          "tweet": "Watching the sunset from the beach. Nature's beauty is truly mesmerizing. 🌅 #naturelover"
        },
        {
          "id": 4,
          "user": "EmilyB",
          "tweet": "Attended an inspiring conference today. Learned so much and feeling motivated to achieve my goals! #inspiration"
        },
        {
          "id": 5,
          "user": "DanielW",
          "tweet": "Just finished reading an incredible book. It's a must-read for all book lovers out there! 📚 #bookworm"
        },
        {
          "id": 6,
          "user": "SophiaD",
          "tweet": "Excited to announce my new art exhibition opening next week. Can't wait to share my latest creations! 🎨 #art"
        },
        {
          "id": 7,
          "user": "DavidT",
          "tweet": "Hiking up the mountains today was an amazing adventure. The view from the top was breathtaking! ⛰️ #adventure"
        },
        {
          "id": 8,
          "user": "OliviaA",
          "tweet": "Spent the day volunteering at a local shelter. It feels wonderful to give back to the community. ❤️ #volunteer"
        },
        {
          "id": 9,
          "user": "MatthewC",
          "tweet": "Enjoying a cup of coffee and catching up on my favorite TV show. Perfect way to relax! ☕ #coffeeholic"
        },
        {
          "id": 10,
          "user": "AvaW",
          "tweet": "Visited a beautiful garden today. The flowers were so vibrant and smelled heavenly! 🌺 #gardening"
        }
      ]
      

      res.send(mockTweets)
})

// http://localhost:5001/users
app.get('/users', (req, res) => {
    const mockUsers = [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "age": 25,
          "city": "New York"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "age": 30,
          "city": "Los Angeles"
        },
        {
          "id": 3,
          "name": "Michael Johnson",
          "email": "michael.johnson@example.com",
          "age": 40,
          "city": "Chicago"
        },
        {
          "id": 4,
          "name": "Emily Brown",
          "email": "emily.brown@example.com",
          "age": 28,
          "city": "Houston"
        },
        {
          "id": 5,
          "name": "Daniel Wilson",
          "email": "daniel.wilson@example.com",
          "age": 33,
          "city": "Seattle"
        },
        {
          "id": 6,
          "name": "Sophia Davis",
          "email": "sophia.davis@example.com",
          "age": 27,
          "city": "San Francisco"
        },
        {
          "id": 7,
          "name": "David Taylor",
          "email": "david.taylor@example.com",
          "age": 35,
          "city": "Miami"
        },
        {
          "id": 8,
          "name": "Olivia Anderson",
          "email": "olivia.anderson@example.com",
          "age": 31,
          "city": "Boston"
        },
        {
          "id": 9,
          "name": "Matthew Clark",
          "email": "matthew.clark@example.com",
          "age": 29,
          "city": "Dallas"
        },
        {
          "id": 10,
          "name": "Ava Walker",
          "email": "ava.walker@example.com",
          "age": 26,
          "city": "Denver"
        }
      ]
      
      res.send(mockUsers)
})

// SELECT * FROM users
// users.all()

// Exercise /followers endpoint that sends 10 followers
// http://localhost:5001/followers
app.get('/followers', (req, res) => {
    res.send([
        {
          "follower_id": 1,
          "follower_name": "John Doe",
          "follower_username": "johndoe",
          "following_id": 2,
          "following_name": "Jane Smith",
          "following_username": "janesmith"
        },
        {
          "follower_id": 2,
          "follower_name": "Jane Smith",
          "follower_username": "janesmith",
          "following_id": 3,
          "following_name": "Michael Johnson",
          "following_username": "michaelj"
        },
        {
          "follower_id": 3,
          "follower_name": "Michael Johnson",
          "follower_username": "michaelj",
          "following_id": 4,
          "following_name": "Emily Brown",
          "following_username": "emilybrown"
        },
        {
          "follower_id": 4,
          "follower_name": "Emily Brown",
          "follower_username": "emilybrown",
          "following_id": 5,
          "following_name": "Daniel Wilson",
          "following_username": "danielwilson"
        },
        {
          "follower_id": 5,
          "follower_name": "Daniel Wilson",
          "follower_username": "danielwilson",
          "following_id": 6,
          "following_name": "Sophia Davis",
          "following_username": "sophiadavis"
        },
        {
          "follower_id": 6,
          "follower_name": "Sophia Davis",
          "follower_username": "sophiadavis",
          "following_id": 7,
          "following_name": "David Taylor",
          "following_username": "davidtaylor"
        },
        {
          "follower_id": 7,
          "follower_name": "David Taylor",
          "follower_username": "davidtaylor",
          "following_id": 8,
          "following_name": "Olivia Anderson",
          "following_username": "oliviaanderson"
        },
        {
          "follower_id": 8,
          "follower_name": "Olivia Anderson",
          "follower_username": "oliviaanderson",
          "following_id": 9,
          "following_name": "Matthew Clark",
          "following_username": "matthewclark"
        },
        {
          "follower_id": 9,
          "follower_name": "Matthew Clark",
          "follower_username": "matthewclark",
          "following_id": 10,
          "following_name": "Ava Walker",
          "following_username": "avawalker"
        },
        {
          "follower_id": 10,
          "follower_name": "Ava Walker",
          "follower_username": "avawalker",
          "following_id": 1,
          "following_name": "John Doe",
          "following_username": "johndoe"
        }
      ])
})

// /profile
app.get('/profile', (req, res) => {
    const mockProfile = {
        "username": "JohnDoe",
        "name": "John Doe",
        "bio": "Passionate about technology, travel, and photography. Software engineer by profession. Love exploring new places and capturing moments. Opinions are my own.",
        "location": "San Francisco, CA",
        "website": "https://example.com",
        "followers_count": 500,
        "following_count": 300,
        "tweets_count": 1000,
        "joined_date": "2022-01-15",
        "profile_image": "https://example.com/profile-image.jpg",
        "banner_image": "https://example.com/banner-image.jpg"
      }
      
      res.status(200).json(mockProfile)
})

app.post('/login', (req, res) => {
    const mockUsers = [
        {
            email: 'a@a.com',
            password: 'password1',
        },
        {
            email: 'b@b.com',
            password: 'password2',
        },
        {
            email: 'c@c.com',
            password: 'password3',
        }
    ]

    const email = req.body.email
    const password = req.body.password

    const user = mockUsers.find(user => user.email === email)

   if(user) {
    if(user.password === password) {
        res.status(200).json({
            message: "Success"
        })
    } else {
        res.status(401).json({
            message: "Password not correct"
        })
    }
   } else {
    res.status(404).json({
        message: "user not found"
    })
   }
})

// http://localhost:5001/
app.listen('5001') // run app.listen on your desired 