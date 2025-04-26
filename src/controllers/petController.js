const petModel = require("../models/pet");
const shopModel = require("../models/shop");

const getPetsList = async (req, res) => {
  const params = req.query;
  const pageNo = params.pageNo || 1;
  const pageSize = params.pageSize || 10;
  const searchText = params.searchText?.length > 2 ? params.searchText : "";
  if (searchText.length < 2) {
    return res
      .status(400)
      .json({ message: "Search text should be atleast 3 characters long" });
  }
  const list = await petModel
    .find({ name: { $regex: searchText, $options: "i" } })
    .skip((pageNo - 1) * pageSize)
    .limit(pageSize);
  const totalRecords = await petModel.countDocuments();
  return res.status(200).json({
    message: "Pets list fetched successfully",
    data: list,
    totalRecords,
  });
};

const createPet = async (req, res) => {
  if (req.user.role !== "Admin") {
    return res.status(401).json({ message: "Only admins can add the pets" });
  }

  const petData = req.body;
  console.log(petData.shopId);
  const shopCheck = await shopModel.findById(petData.shopId);

  if (!shopCheck) {
    return res.status(404).json({ message: "Shop not found" });
  }
  if (shopCheck.userId !== req.user.id) {
    return res
      .status(403)
      .json({ message: "You have no access to update this shop data" });
  }
  if (petData)
    if (req.file) {
      petData.imgUrl = req.file.filename;
    }
  const createPet = await petModel.create(petData);
  return res
    .status(201)
    .json({ message: "Pet created successfully", data: createPet });
};
module.exports = { getPetsList, createPet };
