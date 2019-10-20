var pesquisarEspecialidadesPorCodigoDaUnidadeCtrl = function ($scope, $stateParams, especialidadesDeUmEstabelecimentoApi) {

    $scope.especialidadesDaUnidade = {};
    $scope.codUnidade = $stateParams.codUnidade;

    $scope.pesquisarEspecialidadesPorCodigoDaUnidade = function (codUnidade) {
        especialidadesDeUmEstabelecimentoApi.getPesquisarEspecialidadesPorCodigoDaUnidade(codUnidade)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.emprego = response.data;
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

    let inicializarEspecialidadesPorCodigoDaUnidade = function() {
        var codUnidade = $stateParams.codUnidade;
        console.log(codUnidade);
    }

    inicializarEspecialidadesPorCodigoDaUnidade();
};

mapaDeSaudeApp.controller("pesquisarEspecialidadesPorCodigoDaUnidadeCtrl", pesquisarEspecialidadesPorCodigoDaUnidadeCtrl);