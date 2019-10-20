var pesquisarServicosPorCodigoDaUnidadeCtrl = function ($scope, $stateParams, servicosEspecializadosApi) {

    $scope.servicoEspecializado = {};
    $scope.codUnidade = $stateParams.codUnidade;

    $scope.pesquisarServicosPorCodigoDaUnidade = function (codUnidade) {
        ServicosEspecializadosApi.getPesquisarServicosPorCodigoDaUnidade(codUnidade)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.servicoEspecializado = response.data;
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

    let inicializarServicosPorCodigoDaUnidade = function() {
        var codUnidade = $stateParams.codUnidade;
        console.log(codUnidade);
    }

    inicializarServicosPorCodigoDaUnidade();
};

mapaDeSaudeApp.controller("pesquisarServicosPorCodigoDaUnidadeCtrl", pesquisarServicosPorCodigoDaUnidadeCtrl);