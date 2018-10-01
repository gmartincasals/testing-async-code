module.exports = {
    // A func that takes in two parameters `req` and `res` [request, response]
    getIndexPageSpy: (req, res) => {
        res.send("Hey");
    },
    getIndexPageStub: (req, res) => {
        if (req.user.isLoggedIn()) {
            return res.send("Hey");
        }
        console.log('Estoy pasando por el controller');
        res.send("Oooops. You need to log in to access this page");
    }
}