const userModel = require("../models/userModel");


const userProfileEdit = async (req, res) => {
    const { name, email, dp, password, phNumber, role, userOnline } = req.body;

    try {
        const user = await userModel.findById(userOnline._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.dp = dp || user.dp;
        user.password = password || user.password;
        user.phNumber = phNumber || user.phNumber;
        user.role = role || user.role;
        await user.save();

        return res.status(200).json({ message: "User profile updated successfully", user, status : true });
    } catch (error) {
        console.error("Error updating user profile:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const userSettings = async (req, res) => {
    const { notification, newPassword, userOnline } = req.body;
  
    try {
      const user = await userModel.findById(userOnline._id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (notification !== undefined) {
        user.notification = notification;
      }
      if (newPassword) {
        user.password = newPassword;
      }
  
      await user.save();
  
      return res.status(200).json({ message: 'User settings updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

  const addAdvocate = async (req, res) => {
      const { userId, advocateId } = req.body;
      console.log(req.body)
      try {
          const user = await userModel.findById(userId);
          if (!user) {
              return res.status(404).json({ message: "User not found"});
          }
          if (user.myLawyers.includes(advocateId)) {
              return res.status(400).json({ message: "Advocate already added to myLawyers" });
          }
          user.myLawyers.push(advocateId);
          await user.save();
  
          res.status(200).json({ message: "Advocate added successfully", user: user, status : true });
      } catch (error) {
          console.error("Error adding advocate:", error);
          res.status(500).json({ message: "Internal server error" });
      }
  };
  
  
module.exports = {userProfileEdit, userSettings, addAdvocate };