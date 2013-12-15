var ld28 = angular.module('ld28',[]);
ld28.controller('GameUICtrl', ['$scope', function($scope) {
  $scope.game = 'FOO';
  function GameStateAPI() {
    this.setGame = function(game) {
      $scope.game = game;
      $scope.$digest();
    };
  };
  window.ngGameStateAPI = new GameStateAPI();
}]);
