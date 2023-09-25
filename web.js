const express = require("express");
const app = express(); //엔트리포인트만 실행
const PORT = 8003; //엔트리포인트만 실행
const reactdb = require("./api/reactdb")



app.get('/', (req, res)=>{res.sendFile(__dirname + "/public/index.html")});

app.use("/react", reactdb);

app.use((req, res)=>{res.status(404).sendFile(__dirname + "/public/nopage.html")});



app.listen(PORT, ()=>{
    console.log(PORT+"번으로 노드서버 구동")
}); //엔트리포인트만 실행









