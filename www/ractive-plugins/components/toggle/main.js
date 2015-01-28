define(
[
'ractive',
'rv!./template'
],
function(Ractive, template) {

  return Ractive.components.toggle = Ractive.extend({
    template: template,

    init: function() {

    }

  });

});
