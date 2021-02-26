const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const works = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", (req, res) => {
   const about = {
       avatar:"https://avatars.githubusercontent.com/u/76409563?s=460&u=6ace252f2cb217f9a254ee16ea3b51137f14dba3&v=4",
       name:"Flávio Santos",
       role:"Programador",
       description:"Programador web, com conhecimentos em Node.js, HTML, CSS, javascript..e estudando",
       links:[
           { url:"img/linkedin.png"},
           { url:"img/facebook.png"},
           { url:"img/github.png"},
           { url:"img/stack-overflow.png"}
       ]

   } 
   return res.render("about", {about})
})

server.get("/works", (req, res) => {
    return res.render("works", { items: works})
 })
 
 
server.get("/work", function(req, res){
    const id = req.query.id


    const work = works.find(function(work){
        if(work.id == id){
            return true
        }
    })

    if(!work){
        res.send("Not work")
    }

    return res.render("work",{item: work})
})


server.listen(3000, function(){
    console.log('Server is On')
})