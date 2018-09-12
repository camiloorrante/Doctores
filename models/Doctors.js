/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('doctors', {
		idHospital: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'Hospitals',
				key: 'id'
			},
			field: 'id_hospital'
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
		profesionalid: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'profesionalid'
		},
		bcaddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bcaddress'
		},
		createdAt: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'updatedAt'
		}
	}, {
		tableName: 'Doctors'
	});
};
