// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json( {success:true, msg: 'Show all bootcamps', hello: req.hello } );
}


// @desc   Get single bootcamp with id
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json( {success:true, msg: `Show bootcamp ${req.params.id}` } );
}


// @desc   Create new bootcamps
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req,res,next) =>{
    res.status(200).json( {success:true, msg: 'Create new bootcamps' } );
}


// @desc   update bootcamp with id
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req,res,next) =>{
    res.status(200).json( {success:true, msg: `Update bootcamp ${req.params.id}` } );
}


// @desc   Delete single bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req,res,next) =>{
    res.status(200).json( {success:true, msg: `Delete bootcamp ${req.params.id}` } );
}

