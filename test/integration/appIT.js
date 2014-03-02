module("Integration Tests", {
  setup: function() {
    Ember.run(function () {
      App.reset();
    })
  }
})

test('root page is not empty', function() {
  visit('/').then(function() {
    equal(find('section#welcome').length,1, "The home page should contain a section with id welcome.")
  });
});
