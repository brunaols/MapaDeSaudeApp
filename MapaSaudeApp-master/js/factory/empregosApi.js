var empregosApi = function($http){

    var _getListarEmpregos = function(quantidadeDeItens){
        return $http.get(baseUrl + "/rest/emprego?quantidadeDeItens=" + quantidadeDeItens);
    }
    
    var _getPesquisarEmpregoPorCodigo = function(codEmprego){
        return $http.get(baseUrl + "/rest/emprego/cod/" + codEmprego);
    }
    
    var _getPesquisarEmpregoPorCoordenadas = function(latitude, longitude, raio){
        return $http.get(baseUrl + "/rest/emprego/latitude/" + latitude + "/longitude/" + longitude + "/raio/" + raio);
    }
    
    return{
        getListarEmpregos: _getListarEmpregos,
        getPesquisarEmpregoPorCodigo: _getPesquisarEmpregoPorCodigo,
        getPesquisarEmpregoPorCoordenadas: _getPesquisarEmpregoPorCoordenadas
    };
}
mapaDeSaudeApp.factory("empregosApi", empregosApi);