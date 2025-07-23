const User = require('../models/user');

exports.getAllUsers = async(req, res)  =>
{
    try
    {
        const users= await User.find();
    }
    catch(err)
    {
        res.status(500).send(err);
    }
};

exports.CreateUser = async(req, res)=>
{
    const { name,email,age,lastname} = req.body;
    try
    {
        const user = new User({ name,email,age,lastname});
        await user.save();
    }
    catch(err)
    {
        res.status(500).send(err);
    }

}

exports.UpdateUser = async(req, res)=>
    {
        const { name,email,age,lastname} = req.body;
        try
        {
            await User.findByIdAndUpdate(req.params.id, { name, email, age });
            await user.save();
        }
        catch(err)
        {
            res.status(500).send(err);
        }
    
    }