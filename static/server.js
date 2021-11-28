let http = require('http')

let fs = require('fs')

var formidable = require('formidable')

var server1 = http.createServer( 
    function(req,res){
        console.log('new message')

        const execSync = require('child_process').execSync;
        // 同步执行
        const output = execSync('python3 python_web.py')
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
  res.setHeader("Access-Control-Allow-Origin", "*");
  const url = req.url;
  if (url === '/') {
    res.end();
  } else if (url === '/uploadfile') {

    var form = new formidable.IncomingForm()
    
    form.keepExtensions = true

    form.on('file', (name, file) => {
      fs.renameSync(file.filepath, '/usr/local/nginx/html/report/static/' + file.originalFilename)
      console.log(name)
      console.log(file)
    })

    form.on('end', () => {
      res.end()
    })

    form.parse(req)
  }
})

server2.listen(8096, function () {
  console.log('port is 8096')
})
