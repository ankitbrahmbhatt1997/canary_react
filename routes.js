const routes = require("next-routes");


module.exports = routes()
    .add("/login", "auth/signin")
    .add("/register", "auth/signup")
    .add("/confirmation/:token", "auth/confirmation")
    .add("/reset/:token", "auth/resetPassword")
    .add("/forgot", "auth/forgotPassword")
    .add("/campaign", 'campaign')
    .add("/campaign/create", "campaign/create")
    .add("/campaign/:address", "campaign/show")
    .add("/campaign/:address/faqs", "campaign/faq")
    .add("/campaign/:address/updates", "campaign/update")
    .add("/campaign/:address/comments", "campaign/comment")
    .add("/campaign/:address/updates/add", "campaign/updateForm")
    .add("/campaign/:address/updates/:updateId", "campaign/showUpdate")
    .add("/dashboard", 'dashboard/index')
    .add("/dashboard/create", "dashboard/createProfile")
    .add("/dashboard/edit", "dashboard/editProfile")
    .add("/dashboard/campaigns", "dashboard/contributions")
    .add("/dashboard/:address/requests", "dashboard/requests/index")
    .add("/dashboard/:address/requests/create", "dashboard/requests/createRequest")
    .add("/explore", "explore")

    ;