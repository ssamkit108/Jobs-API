module.exports = {
  get: function (req, res) {
    Jobs.find({}).exec((error, jobs) => {
      if (error) {
        res.send({
          code: '500',
          message: error
        })
      }
      console.log(jobs);

      res.view('pages/Displayalljobs', {
        jobs: jobs
      })
    });
  },

  add: function (req, res) {

    var jobName = req.body.jobName292;
    var partID = req.body.partId292;
    var qty = req.body.qty292;

    Jobs.create({
      jobName292: jobName,
      partId292: partID,
      qty292: qty
    }).exec((error) => {
      if (error) {
        res.send({
          code: '500',
          message: error
        })
      }
      res.redirect('/getJobs292');
    });
  },

  delete: function (req, res) {
    Jobs.destroy({
      jobName292: req.params.jobName292,
      partId292: req.params.partId292
    }).exec((error) => {
      if (error) {
        res.send({
          code: '500',
          message: error
        })
      }
      res.redirect('/getJobs292');
    });
  },



  edit: function (req, res) {
    Jobs.findOne({
      jobName292: req.params.jobName292,
      partId292: req.params.partId292
    }).exec((error, jobs) => {
      if (error) {
        res.send({
          code: '500',
          message: error
        });
      }
      res.view('pages/edit', {
        jobs: jobs
      });
    });
  },
  update: function (req, res) {
    var jobName292 = req.body.jobName292;
    var partId292 = req.body.partID292;
    var qty292 = req.body.qty292;

    Jobs.update({
      jobName292: jobName292
    }, {
      qty292: qty292
    }).exec((error) => {
      if (error) {
        res.send({
          code: '500',
          message: error
        });
      }
      res.redirect('/getJobs292');
    });
    return false;
  }
};
