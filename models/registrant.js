/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('registrant', {
		idregistrant: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'idregistrant'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'lastname'
		},
		secondlastname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'secondlastname'
		},
		birthdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'birthdate'
		},
		bcaddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bcaddress'
		},
		fingerprint: {
			type: "BYTEA",
			allowNull: true,
			field: 'fingerprint'
		}
	}, {
		tableName: 'registrant'
	});
};
