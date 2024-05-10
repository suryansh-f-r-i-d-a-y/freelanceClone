import User from "../models/user.model.js";
import creatError from "../utils/createError.js";

export const deleteUser = async (req, res ,next) =>{
  const user = await User.findById(req.params.id);

    if(req.userId !== user._id.toString()){
      return next(creatError(403 , "you can delete only your account!"))
    }
  await User.findByIdAndDelete(req.params.id);
    res.stauts(200).send("user deleted successfully");

}