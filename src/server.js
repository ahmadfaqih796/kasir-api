const app = require('./app');

require('dotenv').config();
console.log("Running in mode:", process.env.NODE_ENV);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
