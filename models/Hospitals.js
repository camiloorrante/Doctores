/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hospitals', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		rfc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rfc'
		},
		registrynumber: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'registrynumber'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'address'
		},
		bcaddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bcaddress'
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'phone'
		}
	}, {
		tableName: 'Hospitals'
	});
};
