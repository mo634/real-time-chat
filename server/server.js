let app = require('./app');

// listen to port
const  port = 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})