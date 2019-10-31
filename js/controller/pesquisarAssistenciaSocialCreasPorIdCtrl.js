var pesquisarAssistenciaSocialCreasPorIdCtrl = function ($scope, $stateParams, assistenciaSocialApi) {

    $scope.assistenciaSocialCreas = {};
    $scope.idCreas = $stateParams.idCreas;

    $scope.pesquisarAssistenciaSocialCreasPorId = function (idCreas) {
        assistenciaSocialApi.getPesquisarAssistenciaSocialCreasPorId(idCreas)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais por id foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.assistenciaSocialCreas = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados das Assistencias Sociais Por ID.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
            });
    }

    let inicializarAssistenciaSocialCreas = function() {
        var idCreas = $stateParams.idCreas;
        console.log(idCreas);
    }

    inicializarAssistenciaSocialCreas();
};

mapaDeSaudeApp.controller("pesquisarAssistenciaSocialCreasPorIdCtrl", pesquisarAssistenciaSocialCreasPorIdCtrl);
