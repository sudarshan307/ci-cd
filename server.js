const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Hello from CI/CD Pipeline with GitHub Actions & DockerHub!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
