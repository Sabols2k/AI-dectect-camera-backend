const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions')
const Schema = mongoose.Schema;

const Camera = new Schema({
    name: {type: 'String', required: true},
    description: {type: 'String', maxLength: 600},
    userId: {type: Schema.Types.ObjectId, ref:'user', required: true}
}, schemaOptions);

module.exports = mongoose.model('Camera',Camera);
