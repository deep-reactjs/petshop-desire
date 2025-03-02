const shopModel = require("../models/shop");
const userModel = require("../models/user");

const getShopDetails = async (req, res) => {
  const getShopData = await shopModel
    .find({ userId: req.user.id })
    .populate("userId", ["name", "email"]);

  if (!getShopData) {
    return res.status(404).json({
      message:
        "No shops found associated with this account, please add new shop",
    });
  }
  return res
    .status(200)
    .json({ message: "Shop details fetched sucessfully", data: getShopData });
};

const createShopDetails = async (req, res) => {
  const shopData = req.body;
  shopData.userId = req.user.id;
  const saveShopData = await shopModel.create(shopData);
  console.log(saveShopData);
  await userModel.findByIdAndUpdate(req.user.id, {
    $push: { shops: saveShopData._id },
  });
  return res
    .status(201)
    .json({ message: "New shop added successfully", data: saveShopData });
};
const updateShopDetails = async (req, res) => {
  const dataToUpdate = req.body;
  const shopId = req.params.id;
  console.log(shopId);
  const updatedShopData = await shopModel.findByIdAndUpdate(
    shopId,
    dataToUpdate,
    { new: true }
  );
  if (!updatedShopData) {
    return res.status(404).json({
      message: "Shop does not exist, please contact admin",
    });
  }
  return res.status(200).json({
    message: "Shop details updated successfully",
    data: updatedShopData,
  });
};
const deleteShop = async (req, res) => {
  try {
    const shopId = req.params.id;
    const shopData = await shopModel.findById(shopId);
    if (!shopData) {
      return res.status(404).json({
        message: "Shop does not exist, please contact admin",
      });
    }
    const isOwner = shopData?.userId == req.user.id;
    if (!isOwner) {
      return res.status(403).json({
        message: "You can not delete this shop as you are not the owner",
      });
    }
    await shopModel.findByIdAndDelete(shopId);
    res.status(200).json({ message: "Shop deleted successfully", shopData });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getShopDetails,
  createShopDetails,
  updateShopDetails,
  deleteShop,
};
