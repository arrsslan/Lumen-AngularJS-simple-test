angular.module('lumentestApp.controllers', []).controller('ArticleListController', ['$scope', '$state', '$window', 'Article', function($scope, $state, $window, Article) {
  $scope.articles = Article.query(); //fetch all articles. Issues a GET to /api/article
  $scope.deleteArticle = function(article) { // Delete an article. Issues a DELETE to /api/article/:id
    article.$delete(function() {
      $window.location.href = ''; //redirect to home
    });
  };
}]).controller('ArticleViewController', ['$scope', '$stateParams', 'Article', function($scope, $stateParams, Article) {
  $scope.article = Article.get({ id: $stateParams.id }); //Get a single article. Issues a GET to /api/article/:id
}]).controller('ArticleCreateController', ['$scope', '$state', '$stateParams', 'Article', function($scope, $state, $stateParams, Article) {
  $scope.article = new Article();  //create new article instance. Properties will be set via ng-model on UI
 
  $scope.addArticle = function() { //create a new article. Issues a POST to /api/article
    $scope.article.$save(function() {
      $state.go('articles'); // on success go back to home i.e. articles state.
    });
  };
}]).controller('ArticleEditController', ['$scope', '$state', '$stateParams', 'Article', function($scope, $state, $stateParams, Article) {
  $scope.updateArticle = function() { //Update the edited article. Issues a PUT to /api/article/:id
    $scope.article.$update(function() {
      $state.go('articles'); // on success go back to home i.e. articles state.
    });
  };
 
  $scope.loadArticle = function() { //Issues a GET request to /api/article/:id to get an article to update
    $scope.article = Article.get({ id: $stateParams.id });
  };
 
  $scope.loadArticle(); // Load an article which can be edited on UI
}]);
