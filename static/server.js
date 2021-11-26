let http = require('http')

var server = http.createServer( 
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

server.listen( 8095,function()
{
    console.log('start sever')
}
)