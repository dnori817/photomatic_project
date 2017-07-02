const sql = require("../utility/sql");
const Sequelize = require("sequelize");
const Tags = require("./tags");
const Comments = require("./comments");
const Likes = require("./likes");

const fs = require("fs");


const Photos = sql.define("photo", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	size: {
		type: Sequelize.INTEGER,
		notNull: true,
	},
	originalName: {
		type: Sequelize.STRING,
		notNull: true,
	},
	mimeType: {
		type: Sequelize.STRING,
		notNull: true,
	},
});

Tags.belongsToMany(Photos, { through: "photos_tags" });
Photos.belongsToMany(Tags, { through: "photos_tags" });
Photos.hasMany(Comments);
Photos.hasMany(Likes);

module.exports = Photos;