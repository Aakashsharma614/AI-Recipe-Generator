const http = require ('http');
const PORT =process.env.PORT|| 3000;
const app=require('./app')

const server=http.createServer(app);

server.listen(PORT,()=>{
  console.log('Server is running at http://localhost:3000 Port');
})