var pesquisarProfissionaisPorCodigoDaUnidadeCtrl = function ($scope, $stateParams, profissionaisApi) {

    $scope.atividadeProfissional = {};
    $scope.codUnidade = $stateParams.codUnidade;

    $scope.pesquisarProfissionaisPorCodigoDaUnidade = function (codUnidade) {
        profissionaisApi.getPesquisarProfissionaisPorCodigoDaUnidade(codUnidade)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('Os profissionais foram pesquisados abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.atividadeProfissional = response.data;
            })
            .catch(function (error) {
             var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados dos Profissionais.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
            });
    }

    let inicializarProfisionaisPorCodigoDaUnidade = function() {
        var codUnidade = $stateParams.codUnidade;
        console.log(codUnidade);
    }

    inicializarProfissionaisPorCodigoDaUnidade();
};

mapaDeSaudeApp.controller("pesquisarProfissionaisPorCodigoDaUnidadeCtrl", pesquisarProfissionaisPorCodigoDaUnidadeCtrl);
