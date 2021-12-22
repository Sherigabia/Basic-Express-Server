const User = require("../models/userModel")
var user;

function addUser(req, res){
  
    try{
       user  = User.create(req.body);
       
       res.status(200).json({message: "User has been Created"});
    }
    catch(e)
    {
        res.status(401).json({message: e.message});
    }
}
function getUsers(req, res){
    res.status(200).json([
        {message: "Success"},
     {
        firstname: 'Bright',
        lastname: 'Owusu',
        date_of_birth: '6th June 1997',
        school: 'Grace College International'
    },
     {
        firstname: 'Ama',
        lastname: 'Mansah',
        date_of_birth: '24th october 2000',
        school: 'Zion preparatory school'
    },
     {
        firstname: 'Akwasi',
        lastname: 'Kwarteng',
        date_of_birth: '5th May 1984',
        school: 'Kwame Nkrumah University'
    },
])
}

module.exports = {
    addUser,
    getUsers
}