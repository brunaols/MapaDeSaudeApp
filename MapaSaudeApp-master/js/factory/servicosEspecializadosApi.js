var servicosEspecializadosApi = function($http){

    var _getPesquisarServicosPorCodigoDaUnidade = function(codUnidade){
        return $http.get(baseUrl + "/rest/servicos/unidade/" + codUnidade);
    }
    
    return{
        getPesquisarServicosPorCodigoDaUnidade: _getPesquisarServicosPorCodigoDaUnidade
    }
}
mapaDeSaudeApp.factory("servicosEspecializadosApi",servicosEspecializadosApi);