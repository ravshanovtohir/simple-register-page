const http = require('http');
const fs = require('fs');
const path = require('path');
const Express = require('./lib/express');
const { PORT, host } = require('./config')


const server = http.createServer((req, res) => {

    const app = new Express(req, res)


    app.get('/api/users', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let users = fs.readFileSync(path.join(__dirname, 'database', 'users.json'), 'utf-8')
        let data = JSON.parse(users).filter(el => el.gender == 1 ? el.gender = 'erkak' : el.gender = 'ayol')
        res.write(JSON.stringify(data))
        return res.end()
    })
    app.post("/api/users", (req, res) => {
        let data = ""
        req.on("data", (arg) => data += arg)
        req.on("end", () => {
            data = JSON.parse(data)
            let users = fs.readFileSync(path.join(__dirname, "database", "users.json"), "utf8")
            users = JSON.parse(users)
            users.push(data)
            fs.writeFileSync(path.join(__dirname, "database", "users.json"), JSON.stringify(users, null, 4))
            res.end("You are registered")
        })
    })

})


server.listen(PORT, () => {
    console.log(`http://${host}:${PORT}`);
})