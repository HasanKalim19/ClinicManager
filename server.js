const app = require('./app');
const PORT = 3020//process.env.PORT;
// const PORT = 3020;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`server has started @PORT = ${PORT}`)
    }
})