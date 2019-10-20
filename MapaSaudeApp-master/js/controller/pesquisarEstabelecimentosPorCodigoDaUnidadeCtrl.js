var pesquisarEstabelecimentosPorCodigoDaUnidadeCtrl = function ($scope, $stateParams, estabelecimentoDeSaudeApi) {

    $scope.estabelecimento = {};
    $scope.codUnidade = $stateParams.codUnidade;

    $scope.pesquisarEstabelecimentosPorCodigoDaUnidade = function (codUnidade) {
        estabelecimentoDeSaudeApi.getEstabelecimentosPorCodigoDaUnidade(codUnidade)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.estabelecimento = response.data;
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

    let inicializarEstabelecimento = function() {
        var codUnidade = $stateParams.codUnidade;
        console.log(codUnidade);
    }

    inicializarEstabelecimento();
};

mapaDeSaudeApp.controller("pesquisarEstabelecimentosPorCodigoDaUnidadeCtrl", pesquisarEstabelecimentosPorCodigoDaUnidadeCtrl);