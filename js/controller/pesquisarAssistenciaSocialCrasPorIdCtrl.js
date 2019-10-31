var pesquisarAssistenciaSocialCrasPorIdCtrl = function ($scope, $stateParams, $mdToast,
  assistenciaSocialApi) {

    $scope.assistenciaSocialCras = {};
    $scope.idCras = $stateParams.idCras;

    let pesquisarAssistenciaSocialCrasPorId = function (idCras) {
        assistenciaSocialApi.getPesquisarAssistenciaSocialCrasPorId(idCras)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistências sociais cras foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.assistenciaSocialCras = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados da Assistências Sociais Cras.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
            });
    }

    let inicializarAssistenciaSocialCras = function() {
        var idCras = $stateParams.idCras;
        pesquisarAssistenciaSocialCrasPorId(idCras);
    }

    inicializarAssistenciaSocialCras();
};

mapaDeSaudeApp.controller("pesquisarAssistenciaSocialCrasPorIdCtrl", pesquisarAssistenciaSocialCrasPorIdCtrl);
