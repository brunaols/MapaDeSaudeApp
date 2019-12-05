var pesquisarEstabelecimentosPorCoordenadasCtrl = function ($scope, $mdToast, estabelecimentosDeSaudeApi) {

    $scope.estabelecimentos = [];

    $scope.pesquisarEstabelecimentosPorCoordenadas = function (latitude, longitude) {
        empregosApi.getPesquisarEstabelecimentosPorCoordenadas(latitude, longitude)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('Os estabelecimentos foram pesquisados abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.pesquisarEstabelecimentosPorCoordenadas = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                        .textContent('Algum problema ocorreu na solicitação dos dados dos Estabelecimentos.')
                        .position('bottom center')
                        .action('OK')
                        .hideDelay(6000)
                        .toastClass('my-error');
                    $mdToast.show(toast);

                    console.error(error);
            });
    }
};

mapaDeSaudeApp.controller("pesquisarEstabelecimentosPorCoordenadasCtrl", pesquisarEstabelecimentosPorCoordenadasCtrl);
