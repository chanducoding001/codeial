const User=require("../models/user")


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

// module.exports.create=async (req,res)=>{
//    if(req.body.password!=req.body.confirm_password){
//     return res.redirect("back");
//    }
//    let user=await User.findOne({email:req.body.email});
//     
//     if(!user){
//         await User.create(req.body);
// return res.redirect("/users/sign-in")

//     }
//         return res.redirect("back");
//}


module.exports.createSession=(req,res)=>{
    //todo later
}


module.exports.create = async function (req, res) {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create(req.body);
      return res.redirect("/users/sign-in");
    }
    return res.redirect("back");
  };