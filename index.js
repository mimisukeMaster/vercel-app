// index.js
const express = require('express')
const app = express()
const PORT = 4000

// 'public/index.html' は '/index.html' としてサーブされるが、特別に '/' ルートを定義していない
app.use(express.static(path.join(__dirname, 'public')));

// ルートパス '/' にアクセスすると、'public/index.html' を返す
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app