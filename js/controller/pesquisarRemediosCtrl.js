// Controller - Pesquisar Escola pelo código.
var pesquisarRemediosCtrl = function ($scope, $stateParams, remediosApi) {

    $scope.remedios = {};
    $scope.codBarraEan = $stateParams.codBarraEan;
    $scope.produto = $stateParams.produto;
    $scope.principioAtivo = $stateParams.principioAtivo;

    $scope.pesquisarRemedios = function (codBarraEan, produto, principioAtivo) {
        escolaApi.getRemedios(codBarraEan, produto, principioAtivo)
            .then(function (response) {
              // Toast
                  var toast = $mdToast.simple()
                      .textContent('Os remedios foram pesquisados abaixo.')
                      .position('bottom center')
                      .action('OK')
                      .hideDelay(6000)
                      .toastClass('my-success');
                  $mdToast.show(toast);
                  $scope.emprego = response.data;
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
    let inicializarRemedios = function() {
        var codBarraEan = $stateParams.codBarraEan;
        console.log(codBarraEan);
        var produto = $stateParams.produto;
        console.log(produto);
        var principioAtivo = $stateParams.principioAtivo;
        console.log(principioAtivo);
    }

    inicializarRemedios();
};

mapaDeSaudeApp.controller("PesquisarRemediosCtrl", pesquisarRemediosCtrl);
