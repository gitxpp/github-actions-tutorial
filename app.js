const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// ミドルウェア
app.use(express.json());

// ルート
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello GitHub Actions!', 
    timestamp: new Date().toISOString() 
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.post('/echo', (req, res) => {
  res.json({ 
    received: req.body,
    echo: `Echo: ${req.body.message || 'No message provided'}` 
  });
});

// 数学関数（テスト用）
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// サーバー起動（テスト時は起動しない）
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = { app, add, multiply };