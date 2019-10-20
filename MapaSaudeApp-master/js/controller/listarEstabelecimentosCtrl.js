var listarEstabelecimentosCtrl = function($scope, $mdToast, estabelecimentoDeSaudeApi) {
    
    $scope.estabelecimentos = [];
    $scope.quantidades = [10, 20, 30, 40, 50, 100];
    
    $scope.listarEstabelecimentos = function(quantidade) {
        estabelecimentoDeSaudeApi.getListarEstabelecimentos(quantidade)
            .then(function(response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('Os estabelecimentos sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.estabelecimentos = response.data;
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

mapaDeSaudeApp.controller("listarEstabelecimentosCtrl", listarEstabelecimentosCtrl);