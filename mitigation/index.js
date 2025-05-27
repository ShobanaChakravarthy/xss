const express = require("express");
const app = express();

const PORT=3000;

app.use((req,res,next)=>{
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self';" +
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
    )
    next()
})
app.use(express.static('public'))

app.listen(PORT,()=>console.log("server started"))