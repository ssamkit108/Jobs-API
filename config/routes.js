module.exports.routes = {

  '/': 'LabController.get',
  '/Jobs/delete292/:jobName292/:partId292':'LabController.delete',
  '/Jobs/updatejob292/:jobName292/:partId292':'LabController.edit',
  '/add': { view: 'pages/addnewjob' },
  'POST /Jobs/Post':'LabController.add',
  'GET /getJobs292':'LabController.get',
  '/Jobs/putJob292/:jobName292':'LabController.update'
};