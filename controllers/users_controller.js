module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

module.exports.signUp=(req,res)=>{
    return res.render("user_sign_up",{
        title:"codeial | sign up"
    })
}

//render sign in page
module.exports.signIn=(req,res)=>{
    return res.render("user_sign_in",{
        title:"codeial | sign In"
    })
}

module.exports.create=(req,res)=>{
    //todo later
}
module.exports.createSession=(req,res)=>{
    //todo later
}