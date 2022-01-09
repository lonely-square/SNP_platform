let http = require('http')

let fs = require('fs')

var formidable = require('formidable')

var server1 = http.createServer( 
    function(req,res){
        console.log('new message')

        const execSync = require('child_process').execSync;
        // 同步执行
        const output = execSync('python3 /usr/local/nginx/html/report/static/python_web3.py')
        console.log('sync: ' + output.toString())
        console.log('over')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end()

    }
);

server1.listen( 8095,function()
{
    console.log('start sever1')
}
)



const server2 = http.createServer();

server2.on('request', function (req, res) {
  console.log('new message2')
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.url)
  const url = req.url;
  if (url === '/') {
  	console.log('new message3')
    res.end();
    
  } else if (url === '/uploadFile') {
console.log('new message4')
    var form = new formidable.IncomingForm()
    
    form.keepExtensions = true

    form.on('file', (name, file) => {
      fs.renameSync(file.filepath, '/usr/local/nginx/html/report/static/demo.xlsx')
      console.log(name)
      console.log(file)
    })

    form.on('end', () => {
    	 res.write("OK!!!!")
      res.end()
    })

    form.parse(req)
  }
})

server2.listen(8096, function () {
  console.log('port is 8096')
})
