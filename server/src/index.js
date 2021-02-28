'use strict';
const express = require('express');

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 8080, () => console.log('webhook is listening'));

app.post('/webhook', (req, res) => {
  console.log('webhook: event received: ', req.query, req.body);
  res.status(200).send('EVENT_RECEIVED');
});

app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "STRAVA";
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.json({ "hub.challenge": challenge });
    } else {
      res.sendStatus(403);
    }
  }
});
