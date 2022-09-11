const vivi = require("http");
var server = vivi.createServer((req,res)=> {
     res.write("Hello world! I have created my first server!");
	 res.end();
	 });
	 server.listen(2000);
	 console.log("server started... Running on localhost:2000");