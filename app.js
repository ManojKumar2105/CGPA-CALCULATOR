const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  var n = 0;
  var sum = 0;
  if ((req.body.GPA1).length != 0) {
    sum = sum + Number(req.body.GPA1);
    n = n + 1;
    if ((req.body.GPA2).length != 0) {
      sum = sum + Number(req.body.GPA2);
      n = n + 1;
      if ((req.body.GPA3).length != 0) {
        sum = sum + Number(req.body.GPA3);
        n = n + 1;
        if ((req.body.GPA4).length != 0) {
          sum = sum + Number(req.body.GPA4);
          n = n + 1;
          if ((req.body.GPA5).length != 0) {
            sum = sum + Number(req.body.GPA5);
            n = n + 1;
            if ((req.body.GPA6).length != 0) {
              sum = sum + Number(req.body.GPA6);
              n = n + 1;
              if ((req.body.GPA7).length != 0) {
                sum = sum + Number(req.body.GPA7);
                n = n + 1;
                if ((req.body.GPA8).length != 0) {
                  sum = sum + Number(req.body.GPA8);
                  n = n + 1;
                }
              }
            }
          }
        }
      }
    }
  }
  const cgpa = sum / n;
  res.write("<body style=background-color:#6F38C5;font-size:23px;></body>");
  res.write("<h1 style=color:white;text-align:center;margin-top:20%;>Your Cgpa :<br>" + cgpa + "</h1>");
});
app.listen(3000, function() {
  console.log("server started");
})
