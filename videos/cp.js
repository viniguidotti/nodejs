const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

//stdio
ls.stdout.on('data', ()=>{
    console.log(`stdout: ${data}`)
})

ls.stderr.on('data', ()=>{
    console.log(`stderr: ${data}`)
})

ls.os