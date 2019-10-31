var pesquisarAssistenciaSocialCrasPorCoordenadasCtrl = function ($scope, $mdToast, assistenciaSocialApi) {

    $scope.assistenciaSocialCras = [];
    $scope.latitude = $stateParams.latitude;
    $scope.longitude = $stateParams.longitude;
    $scope.raio = $stateParams.raio;


    $scope.pesquisarAssistenciaSocialCrasPorCoordenadas = function (latitude, longitude, raio) {
        assistenciaSocialApi.getPesquisarAssistenciaSocialCrasPorCoordenadasCtrl(latitude, longitude, raio)
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
        var raio = $stateParams.raio;
        pesquisarAssistenciaSocialCrasPorCoordenadas(idCras);
    }

    inicializarAssistenciaSocialCras();
    
};


mapaDeSaudeApp.controller("pesquisarAssistenciaSocialCrasPorCoordenadasCtrl", pesquisarAssistenciaSocialCrasPorCoordenadasCtrl);