import dotenv from 'dotenv'

const verifyToken = (req, res, next) => {

  // req.token = process.env.JWT
  // next()
  const bearerHeader = req.headers['authorization']

  if(typeof bearerHeader !== 'undefined') {
    
    const bearer = bearerHeader.split(' ')
    
    const bearerToken = bearer[1]
    
    req.token = bearerToken
    
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }

}

export default verifyToken