var remediosApi = function($http){

    var _getListarRemedios = function(quantidadeDeItens){
        return $http.get(baseUrl + "/rest/remedios?quantidadeDeItens=" + quantidadeDeItens);
    }
    
    return{
        getListarRemedios: _getListarRemedios
    }
}
mapaDeSaudeApp.factory("remediosApi", remediosApi);