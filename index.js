// index.js
const express = require('express')
const path = require('path');
const app = express()
const PORT = 4000
app.use(express.text());


app.use("/", express.static(path.join(__dirname, "public")));
// 'public/index.html' は '/index.html' としてサーブされるが、特別に '/' ルートを定義していない
/*app.use(express.static(path.join(__dirname, 'public')));

// ルートパス '/' にアクセスすると、'public/index.html' を返す
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/
app.post("/api", async (req, res) => {
    res.send('バックJSとエンドポイントでつながりました!: 送ってきた文章: ' + req.body);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;