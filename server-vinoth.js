// var let const
// var -global scope
//let const - local scope
// const a=10;
// var b="Hari";
// console.log(a);
// a=20;
// console.log(a);
// function sum(){
//     return 10+20;
// }
// console.log(sum());
//arrow function
// const sum=()=>{
//     console.log(10+19);  
// }
// sum();
const http=require('http');
const server=http.createServer(
    (req,res)=>{
    res.write("Hello Vinothkumar");
    res.end();
   }
);
server.listen(5000,(()=>{
    console.log("server is running successfully");
}))

