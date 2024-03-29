var pesquisarAssistenciaSocialCreasPorCoordenadasCtrl = function ($scope, $mdToast, assistenciaSocialApi) {

    $scope.assistenciaSocialCreas = [];

    $scope.pesquisarAssistenciaSocialCreasPorCoordenadas = function (latitude, longitude) {
        assistenciaSocialApi.getPesquisarAssistenciaSocialCreasPorCoordenadasCtrl(latitude, longitude)
            .then(function (response) {
            // Toast
                var toast = $mdToast.simple()
                    .textContent('As assistencias sociais creas foram listadas abaixo.')
                    .position('bottom center')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                $scope.assistenciaSocialCreas = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                        .textContent('Algum problema ocorreu na solicitação dos dados das Assistencias Sociais Creas.')
                        .position('bottom center')
                        .action('OK')
                        .hideDelay(6000)
                        .toastClass('my-error');
                    $mdToast.show(toast);

                    console.error(error);
            });
    }
};

mapaDeSaudeApp.controller("pesquisarAssistenciaSocialCreasPorCoordenadasCtrl", pesquisarAssistenciaSocialCreasPorCoordenadasCtrl);
