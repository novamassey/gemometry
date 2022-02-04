const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

async function create(req, res) {
    try {
        //add user to the database
        const user = await User.create(req.body);
        //create a token using 'user' obj
        //token will be a string
        const token = createJWT(user);
        //Respond to request with JSon of token, token is passed to signUp form thru user
        res.json(token);
    }catch(err) {
        res.status(400).json(err);
    }
    
}

async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }




//Helper functions
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        {expiresIn:'24h'}
    );
}