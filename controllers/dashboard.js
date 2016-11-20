var express = require("express"),
	router  = express.Router(),
	passport = require("passport"),
	middleware = require("../middleware/index.js");



router.get("/", middleware.isLoggedIn, function(req, res){
    res.render("portfolios")
});

router.get("/cadastro-investidor", middleware.isLoggedIn, function(req, res){
	res.render("cadastroInvestidor");
});

router.get("/cadastro-empresa", middleware.isLoggedIn, function(req, res){
	res.render("cadastroEmpresa");
})

router.get("/logout", middleware.isLoggedIn, function(req, res){
	req.logout();
	req.flash("success_msg","Até a proxima!");
	res.redirect("/login");
});

module.exports = router;