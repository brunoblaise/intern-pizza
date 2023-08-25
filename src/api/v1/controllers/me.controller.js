module.exports = async function (req, res, next){
   try {
        if(req.user){
            res.json(true)
        }else{
            res.json(false)
        }
    } catch (error) {
        res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });

		next(error);
    }

}