const visualizer = require('../visualizer'); 

exports.index = function(request, response) {
    return visualizer.render("./View/home.html", response);
}