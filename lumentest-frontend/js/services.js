angular.module('lumentestApp.services', []).factory('Article', function($resource) {
  return $resource('http://lumentest-backend.app/api/article/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
