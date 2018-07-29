var express = require('express');
var app = express();
var feedRoutes = express.Router();

// Require Item model in our routes module
var feed = require('../models/feed');

// Defined store route
feedRoutes.route('/add').post(function (req, res) {
  var feed = new feed(req.body);
   c.save()
    .then(item => {
    res.status(200).json({'em': 'feed added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
feedRoutes.route('/').get(function (req, res) {
   feed.find(function (err, feeds){
    if(err){
      console.log(err);
    }
    else {
      res.json(feeds);
    }
  });
});

// Defined edit route
feedRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  feed.findById(id, function (err, feed){
      res.json(feed);
  });
});

//  Defined update route
feedRoutes.route('/update/:id').post(function (req, res) {
   feed.findById(req.params.id, function(err, feed) {
    if (!feed)
      return next(new Error('Could not load Document'));
    else {
      feed.name = req.body.name;
      feed.feedback = req.body.feedback;

      feed.save().then(feed => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
feedRoutes.route('/delete/:id').get(function (req, res) {
   feed.findByIdAndRemove({_id: req.params.id}, function(err, feed){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = feedRoutes;