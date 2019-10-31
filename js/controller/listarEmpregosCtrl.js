var listarEmpregosCtrl = function($scope, $mdToast, empregosApi) {
    $scope.empregos = [];
    $scope.quantidades = [10, 20, 30, 40, 50, 100];
    
    $scope.listarEmpregos = function(quantidade) {
        empregosApi.getListarEmpregos(quantidade)
            .then(function(response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.empregos = response.data;
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

mapaDeSaudeApp.controller("listarEmpregosCtrl", listarEmpregosCtrl);