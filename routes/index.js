
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res) {
    res.render('helloworld', { title: 'Hola World' });
};

exports.userlist = function(db) {
    return function(req, res) {
	var collection = db.get('usercollection');
	collection.find({}, {}, function(e, docs) {
	    res.render('userlist', {
		       "userlist" : docs
	    });
	});
    };
};
		     
exports.d3json = function(db) {
    return function(req, res) {
	var collection = db.get('d3visual');
	collection.find({}, {}, function(e, docs) {
	   // res.json({
	//	"d3json": docs
	//	});
	    res.json(docs);
	    });
	};
};

exports.d3jsonclientside = function(db) {
    return function(req, res) {
	var collection = db.get('d3data');
	collection.find({}, {}, function(e, docs) {
	    res.json(docs);
	    });
	};
};

exports.d3visual = function(req, res) {
    res.render('d3visual.html');
};
