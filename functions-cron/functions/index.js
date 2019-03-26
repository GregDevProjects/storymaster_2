// Copyright 2017 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment')
const serviceAccount = require("./storymaster-2-firebase-adminsdk-0jmbr-067e4d3a9e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://storymaster-2.firebaseio.com"
});

exports.round_end = functions.pubsub
  .topic('round-end')
  .onPublish((message) => { 
    const dbTimeReference = admin.database().ref().child('next_round_start');
    const utcTime = moment.utc();
    console.log("Round finished at " + utcTime.valueOf());
    dbTimeReference.set(utcTime.add(3, 'hours').valueOf());
    console.log("Next Round set to " + utcTime.valueOf());
    return true;
  });
