let express = require("express");
let app = express();
let port=8080;
const path = require("path");
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",async(req,res) => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    res.render('Home.ejs',{arr});
})

app.get("/Trending",async(req,res) => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    arr.reverse();
    res.render('Home.ejs',{arr});
})

app.get("/Business",async(req,res) => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    res.render('business.ejs',{arr});
})

app.get("/Sports",async(req,res) => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    res.render('sports.ejs',{arr});
})

app.get("/Entertainment",async(req,res) => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    res.render('entertainment.ejs',{arr});
})

app.get("/Politics",async(req,res) => {
    let url = `https://newsapi.org/v2/everything?q=politics&language=en&apiKey=1851ae9ef717490e8689fece51e259b0`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    res.render('politics.ejs',{arr});
})

app.get("/Technology",async(req,res) => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`;
    let response = await fetch(url);
    let result = await response.json();
    let arr = result.articles;
    res.render('technology.ejs',{arr});
})

app.post("/search",async(req,res) => {
    let {searchnews} = req.body;
    let url = `https://newsapi.org/v2/everything?q=${searchnews}&language=en&apiKey=1851ae9ef717490e8689fece51e259b0`;
    let response = await fetch(url);
    let result = await response.json();
    let Title = [];
    for(let news of result.articles){
        if(news.title!="[Removed]"){
            Title.push(news);
        }
    }
    res.render("ShowSearch.ejs", {Title,searchnews});
})

app.listen(port,(req,res) => {
    console.log(`listening to port ${port}`);
})
