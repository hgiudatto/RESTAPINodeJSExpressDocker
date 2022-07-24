const express = require("express");
const app = express();

const port = 3080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/foo', function (req, res) {
    // res.send('Hello, Express!')
    res.json({"foo": "bar"})
});

app.use(express.urlencoded({
    extended: true
}))

app.post('/bar', function (req, res) {
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo)
})

// 20220520 -> https://youtu.be/FqUmAS_GZfQ?t=381
