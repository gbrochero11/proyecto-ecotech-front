const express=require('express');
const app = express();

app.use(express.static(__dirname+'/dist/carrion-app-front-master'))

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/carrion-app-front-master/index.html');
})

app.listen(process.env.PORT || 8081);