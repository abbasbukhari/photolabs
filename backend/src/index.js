const PORT = 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
