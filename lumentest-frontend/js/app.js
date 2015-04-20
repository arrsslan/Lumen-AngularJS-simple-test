angular.module('lumentestApp', ['ui.router', 'ngResource', 'lumentestApp.controllers', 'lumentestApp.services']);
 
angular.module('lumentestApp').config(function($stateProvider) {
  $stateProvider.state('articles', { // state for showing all movies
    url: '/articles',
    templateUrl: 'partials/articles.html',
    controller: 'ArticleListController'
  }).state('viewArticle', { //state for showing single movie
    url: '/articles/:id/view',
    templateUrl: 'partials/article-view.html',
    controller: 'ArticleViewController'
  }).state('newArticle', { //state for adding a new movie
    url: '/articles/new',
    templateUrl: 'partials/article-add.html',
    controller: 'ArticleCreateController'
  }).state('editArticle', { //state for updating a movie
    url: '/articles/:id/edit',
    templateUrl: 'partials/article-edit.html',
    controller: 'ArticleEditController'
  });
}).run(function($state) {
  $state.go('articles'); //make a transition to movies state when app starts
});
