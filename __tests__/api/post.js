const frisby = require('frisby');
it ('POST should return a status of 201 Created', function () {
  return frisby
    .post('http://localhost:5000/api/blog/add', {
    "title":"thirdBlog",
    "description":"this is my third Blog",
    "image":"new image1",
    "user":"11"
    })
    .expect('status', 201);
});