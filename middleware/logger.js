// @desc Logs request to console

const logger = (req, res, next) => {
    console.log(
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next(); //need to put the next so that code will get to know to move to next piece of middleware in cycle
  }; //this middleware has access throughout our code

module.exports = logger;