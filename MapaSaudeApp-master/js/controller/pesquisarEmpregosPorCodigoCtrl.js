var pesquisarEmpregosPorCodigoCtrl = function ($scope, $stateParams, empregosApi) {

    $scope.emprego = {};
    $scope.codPosto = $stateParams.codPosto;

    $scope.pesquisarEmpregosPorCodigo = function (codPosto) {
        empregosApi.getPesquisarEmpregoPorCodigo(codPosto)
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

    let inicializarEmpregosPorCodigo = function() {
        var codPosto = $stateParams.codPosto;
        console.log(codPosto);
    }

    inicializarEmpregosPorCodigo();
};

mapaDeSaudeApp.controller("PesquisarEmpregosPorCodigoCtrl", pesquisarEmpregosPorCodigoCtrl);