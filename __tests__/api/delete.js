const frisby = require('frisby');
it ('DELETE should return a status of 204 No Content', function () {
  return frisby
    .del('http://localhost:5000/api/blog/63d6a7391e5ba7dd69e0bcdf')
    .expect('status', 204);
});