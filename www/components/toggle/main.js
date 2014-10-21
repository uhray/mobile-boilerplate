define(
[
'ractive',
'rv!./template'
],
function(Ractive, template) {

  return Ractive.extend({
    template: template,

    init: function() {

    }

  });

});

