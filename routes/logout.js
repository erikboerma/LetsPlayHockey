module.exports = app => {
    app.get('/logout', (req, res) => {
        req.session.destroy = (err) => {
            req.logout();
            res.redirect('/');
        };
    })
}