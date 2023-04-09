const frisby = require('frisby');
it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:5000/api/blog/63d0ce95603a9459b3e08c7a')
    .expect('status', 200);
});
