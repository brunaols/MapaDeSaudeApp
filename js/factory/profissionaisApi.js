var profissionaisApi = function($http){

    var _getPesquisarProfissionaisPorCodigoDaUnidade = function(codUnidade){
        return $http.get(baseUrl + "/rest/profissionais/unidade/" + codUnidade);
    }
    
    return{
        getPesquisarProfissionaisPorCodigoDaUnidade: _getPesquisarProfissionaisPorCodigoDaUnidade
    }
}
mapaDeSaudeApp.factory("profissionaisApi", profissionaisApi);