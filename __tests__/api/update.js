const frisby = require('frisby');
it ('POST should return a status of 201 OK', function () {
  return frisby
    .put('http://localhost:5000/api/blog/update/63d6a85354251e20086a6105', {
    "title":"firstBlog",
    "description":"this is my first update Blog"
    })
    .expect('status', 201);
});