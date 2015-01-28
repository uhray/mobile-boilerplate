define(
[
'ractive',
'rv!./template'
],
function(Ractive, template) {

  return function() {
    var ractive = new Ractive({
          el: '#body',
          template: template,
          data: {
            time: new Date(),
            toggleon: false
          },
          computed: {
            timestamp: function() {
              var t = this.get('time');
              return t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
            }
          }
        });

    setInterval(function() {
      ractive.set('time', new Date());
    }, 1000);

  }

});
