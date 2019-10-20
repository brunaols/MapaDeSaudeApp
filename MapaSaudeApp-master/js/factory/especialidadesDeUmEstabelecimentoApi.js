var especialidadesDeUmEstabelecimentoApi = function($http){

    var _getPesquisarEspecialidadesPorCodigoDaUnidade = function(codUnidade){
        return $http.get(baseUrl + "/rest/especialidades/unidade/" + codUnidade);
    }
    
    return{
        getPesquisarEspecialidadesPorCodigoDaUnidade: _getPesquisarEspecialidadesPorCodigoDaUnidade
    }
}
mapaDeSaudeApp.factory("especialidadesDeUmEstabelecimentoApi", especialidadesDeUmEstabelecimentoApi);