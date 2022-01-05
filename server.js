const http = require('http')

const PORT = 8001


const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

const server = http.createServer((req, res) => {
    let url = req.url
    let method = req.method
    // console.log(`request at ${url} with method ${method}`)
    if (url === '/api/v1/colors' && method === 'GET') {
        res.writeHead(200, { "content-type": "application/json", "Access-Control-Allow-Origin": "*" })
        const color = {
            red: getRandomInt(0, 256),
            green: getRandomInt(0, 256),
            blue: getRandomInt(0, 256)
        }
        res.end(JSON.stringify({
            status: "success",
            data: { color }
        }))
    }
    else {
        res.writeHead(404)
        res.end("no data found")
    }

})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})