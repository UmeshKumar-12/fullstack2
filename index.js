const http=require('http');   

const myserver = http.createServer((req,res)=> {
    if(req.url=='/'){
        res.end('this is my home page');
    }

     else if(req.url=='home/'){
        res.end('this is my home location');         
    }    
    else if(req.url=='location/'){
        res.end('this is my home up');
    }   
    else{
        res.end('404 page is not found');
    }
})

myserver.listen(8000,() => console.log('server is run')); 

const fs =require('fs');
//fs.writeFile("./a.text","abes college is",() =>{});
fs.readFile("./a.txt","utf-8",(arr,result)=>{
    if(error){
        console.log("erroe",err);
    }
    else{
        console.log(result);  
    }
})
fs.appendFileSync("./a.txt","good")