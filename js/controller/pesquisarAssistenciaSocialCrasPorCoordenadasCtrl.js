var pesquisarAssistenciaSocialCrasPorCoordenadasCtrl = function ($scope, $stateParams,
  $mdToast) {

    $scope.assistenciaSocialCras = [];
    $scope.latitude = $stateParams.latitude;
    $scope.longitude = $stateParams.longitude;

    let inicializarAssistenciaSocialCras = function() {
        var latitude = $stateParams.latitude;
        var longitude = $stateParams.longitude;;

        console.log(latitude);
        console.log(longitude);

        // Exibir mapa usando Leaflet.
    }

    inicializarAssistenciaSocialCras();
};


mapaDeSaudeApp.controller("pesquisarAssistenciaSocialCrasPorCoordenadasCtrl", pesquisarAssistenciaSocialCrasPorCoordenadasCtrl);
