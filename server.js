const app = require("./src/app");
const port = 3000;

app.list(port,() => {
    console.log(`app está rodando na porta ${port}`);
});