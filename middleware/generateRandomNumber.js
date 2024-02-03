// Please don't change the pre-written code
// Import the necessary modules here

export const generateRandomNumber = (req, res, next) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Write your code here to set the randomNumber as a cookie with a 1-day expiration.

  // check if client sent cookie
  let cookie = req.cookies.randomNumber;
  if (cookie === undefined) {
    // no: set a new cookie
    let randomNumber = Math.floor(Math.random() * 10) + 1;;
    // randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie('randomNumber', randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  }
  

  res.cookie("attemptsLeft", 2, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
  next();
};
