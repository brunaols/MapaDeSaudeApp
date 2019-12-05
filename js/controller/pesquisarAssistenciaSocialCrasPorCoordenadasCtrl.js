var pesquisarAssistenciaSocialCrasPorCoordenadasCtrl = function ($scope, $stateParams,
  $mdToast) {

    $scope.assistenciaSocialCras = [];
    $scope.latitude = $stateParams.latitude;
    $scope.longitude = $stateParams.longitude;

<<<<<<< HEAD

    $scope.pesquisarAssistenciaSocialCrasPorCoordenadas = function (latitude, longitude) {
        assistenciaSocialApi.getPesquisarAssistenciaSocialCrasPorCoordenadasCtrl(latitude, longitude)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.assistenciaSocialCras = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                        .textContent('Algum problema ocorreu na solicitação dos dados das Assistencias Sociais.')
                        .position('bottom center')
                        .action('OK')
                        .hideDelay(6000)
                        .toastClass('my-error');
                    $mdToast.show(toast);

                    console.error(error);
            });
    }

    let inicializarAssistenciaSocialCras = function() {
        var latitude = $stateParams.latitude;
        var longitude = $stateParams.longitude;
        pesquisarAssistenciaSocialCrasPorCoordenadas(idCras);
    }

    inicializarAssistenciaSocialCras();

=======
    let inicializarAssistenciaSocialCras = function() {
        var latitude = $stateParams.latitude;
        var longitude = $stateParams.longitude;;

        console.log(latitude);
        console.log(longitude);

        // Exibir mapa usando Leaflet.
    }

    inicializarAssistenciaSocialCras();
>>>>>>> c2643a832017c592aa82447ec0470091c6e6370f
};


mapaDeSaudeApp.controller("pesquisarAssistenciaSocialCrasPorCoordenadasCtrl", pesquisarAssistenciaSocialCrasPorCoordenadasCtrl);
