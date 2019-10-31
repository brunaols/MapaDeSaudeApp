var listarAssistenciasSociaisCreasCtrl = function($scope, $mdToast, assistenciaSocialApi) {
    $scope.assistenciasSociaisCreas = [];
    $scope.quantidades = [10, 20, 30, 40, 50, 100];
    
    $scope.listarAssistenciasSociaisCreas = function(quantidade) {
        assistenciaSocialApi.getListarAssistenciasSociaisCreas(quantidade)
            .then(function(response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.assistenciasSociaisCreas = response.data;
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

mapaDeSaudeApp.controller("listarAssistenciasSociaisCreasCtrl", listarAssistenciasSociaisCreasCtrl);