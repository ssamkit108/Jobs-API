const { datastores } = require("../../config/datastores");

module.exports={
    attributes: {
        jobName292:{ type:'string', required: true},
        partId292: { type:'number', required:true},
        qty292:{type:'number',required:true}
    },
    primaryKey:'jobName292',
    primaryKey:'partId292',
    tableName:'jobs',

    datastore:'azure'
};