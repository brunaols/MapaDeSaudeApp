var pesquisarEmpregosPorCoordenadasCtrl = function ($scope, $mdToast, empregosApi) {

    $scope.empregosPorCoordenadas = [];

    $scope.pesquisarEmpregosPorCoordenadas = function (latitude, longitude, raio) {
        empregosApi.getPesquisarEmpregosPorCoordenadas(latitude, longitude, raio)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.EmpregosPorCoordenadas = response.data;
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
};

mapaDeSaudeApp.controller("pesquisarEmpregosPorCoordenadasCtrl", pesquisarEmpregosPorCoordenadasCtrl);