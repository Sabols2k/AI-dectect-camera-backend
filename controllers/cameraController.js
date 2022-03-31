const { Camera } = require("../models");
const { mongooseToObject } = require("../util/mongoose");



exports.create = async (req, res, next) => {
  try {
    const newCamera = new Camera ({
      name : req.body.name,
      userId : "621b11f24d5bda47085c532f",
    })
    const savedCamera = await newCamera.save()
    res.status(201).json(savedCamera)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

exports.getAll = async (req, res, next) => {
  try {
    const list = await Camera.find({})

    res.status(200).json(list)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getOne =async (req, res, next) => {
  try {
    const camera = await Camera.findById(req.params.id)
    res.status(200).json(camera)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
// TODO: vẫn chưa update được 

exports.update = async (req, res) => {
  try{
    console.log(req.body)
    const camera = await Camera.findByIdAndUpdate(
      req.params.id,
      { $set: req.body}
    )
    res.status(200).json(camera)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params
    await Camera.findByIdAndDelete(id)
    res.status(200).json('Deleted')
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

