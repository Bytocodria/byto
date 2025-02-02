
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

const express= require('express');

const app = express();

app.get("/",(req, resp)=>{resp.send("app is working..")});

app.listen(5000);