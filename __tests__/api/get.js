const frisby = require('frisby');

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:5000/api/blog/')
    .expect('status', 200);
});
