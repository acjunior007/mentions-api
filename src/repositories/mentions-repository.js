'use strict';

const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//list
exports.listMentions = async() => {
    const data = await Mentions.find({}, 'friend mention -_id');
    return data;
};

//create
exports.createMention = async data => {
    const mention = new Mentions(data);
    await mention.save();
};