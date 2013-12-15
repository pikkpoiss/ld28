var ld28 = angular.module('ld28',[]);
ld28.controller('GameUICtrl', ['$scope', function($scope) {
  $scope.game = 'FOO';
  function GameStateAPI() {
    this.setGame = function(game) {
      $scope.game = game;
      if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        $scope.$digest();
      }
    };
  };
  window.ngGameStateAPI = new GameStateAPI();
}]);
