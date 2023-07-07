const express = require('express');
const app = express();
var admin = require("firebase-admin");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
process.env.TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex');

var serviceAccount = require("./pupaa-angular-firebase-adminsdk-llhi1-3b87c61393.json");
const bodyParser = require('body-parser');
const { Observable } = require('rxjs');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// handling CORS
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",
            "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

// route for handling requests from the Angular client
function generateAccessToken(username, role, status) {
  const data = {
    username: username,
    role: role,
    status: status
  }
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.post('/api/login', async (req, res) => {
  const success = req.body.status;
  const username = req.body.username;
  let name = '';
  let role = '';

  let jwtBearerToken;
  let accounts = db.collection('adminAccounts').doc(username);
  accounts.get().then((doc) => {
    if(doc.exists) {
      name = doc.data().name;
      role = doc.data().role;
      jwtBearerToken = generateAccessToken(name, role, success);
      res.json({
        jwtBearerToken: jwtBearerToken,
        success: this.success,
        role: role,
        status: success
      })
    }
  })

});
app.get('/api/getBookings', (req, res) => {
  db.collection("studentBookings").where("office", "==", "Registrar").where("status", "==", "Pending")
    .onSnapshot((querySnapshot) => {
        var pendings = [];
        querySnapshot.forEach((doc) => {
            pendings.push({name: doc.data().name, course: doc.data().course, yearAndSection: doc.data().yearAndSection});
        });
      res.send(pendings)
    });
})

app.post('/api/deleteEvents', (req, res) => {
  const document = req.body.docID;

  db.collection("events").doc(document).delete().then(() => {
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
})

app.get('/api/events', (req, res) => {
  let events = [];
  db.collection('events').where("office", "==", "Registrar")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
     events.push({'title': doc.data().eventTitle, 'start':  doc.data().date, 'end': doc.data().endDate, 'color': doc.data().color});
    });
    res.json({
      events: events,
      color: events.color
    })
  })

});
app.post('/api/addEvents', (req, res) => {
  let array = [];
  const date = req.body.startDate;
  const end = req.body.endDate;
  const color = req.body.color;
  const title = req.body.eventTitle;
  db.collection('events').doc(date).set({
    eventTitle: title,
    date: date,
    endDate: end,
    color: color,
    office: "Registrar"
  })
  .then(() => {
    console.log("document added");
    res.json({
      title: title,
      date: date,
      end: end,
      color: color
    })
  })
  .catch((error) => {
    console.error('Error writing document');
  })
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
