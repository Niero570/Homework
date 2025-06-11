const fs = require('fs');

//reading files
fs.readFile('./docs/blog.txt', (err, data) =>{
    if(err){
        console.log(err)
}
console.log(data.toString())

})
console.log('new world')

//writing files
fs.writeFile('./docs/blog2.txt','hello world',() =>{
    console.log('file was written')
})
//directories
if(!fs.existsSync('./assets')){


fs.mkdir('./assets', (err) =>{
    if(err){
        console.log(err)
    }
    console.log('folder created')
})

} else {
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

//deleting blog.txt
// files

if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', ())
}