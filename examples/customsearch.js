/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var google = require('../lib/googleapis.js');
var customsearch = google.customsearch('v1');

// You can get a custom search engine id at
// https://www.google.com/cse/create/new
var CX = 'INSERT YOUR CUSTOM SEARCH ENGINE ID here';
var API_KEY = 'INSERT YOUR API KEY HERE';
var SEARCH = 'INSERT A GOOGLE REQUEST HERE';

customsearch.cse.list({ cx: CX, q: query, auth: API_KEY }, function(err, resp) {
  if (err) {
    console.log('An error occured', err);
    return;
  }
  // Got the response from custom search
  console.log('Result: ' + resp.searchInformation.formattedTotalResults);
  if (resp.items.length > 0) {
    console.log('First result name is ' + resp.items[0].title);
  }
});
