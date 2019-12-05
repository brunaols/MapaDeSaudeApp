var listarRemediosCtrl = function($scope, $mdToast, remediosApi) {
    $scope.remedios = [];
    $scope.quantidades = [10, 20, 30, 40, 50, 100];

    $scope.listarRemedios = function(quantidade) {
        remediosApi.getListarRemedios(quantidade)
            .then(function(response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('Os Remedios foram listados abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.remedios = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados dos Remedios.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
            });
    }
};

mapaDeSaudeApp.controller("listarRemediosCtrl", listarRemediosCtrl);
