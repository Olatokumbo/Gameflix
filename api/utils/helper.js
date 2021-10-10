exports.sessionizeUser  = (user) => {
    return {user_Id: user._id, email: user.email}
}