var assistenciaSocialApi = function($http){

    var _getListarAssistenciasSociaisCras = function(quantidadeDeItens){
        return $http.get(baseUrl + "/rest/assistenciasocial/cras?quantidadeDeItens=" + quantidadeDeItens);
    }

    var _getPesquisarAssistenciaSocialCrasPorId = function(idCras){
        let recurso = baseUrl + "/rest/assistenciasocial/cras/id/" + idCras;
        return $http.get(recurso);
    }

    var _getPesquisarAssistenciaSocialCrasPorCoordenadas = function(latitude, Longitude, raio){
        return $http.get(baseUrl + "/rest/assistenciasocial/cras/latitude/" + latitude + "/longitude/" + longitude +"/raio/" + raio);
    }

    var _getListarAssistenciasSociaisCreas = function(quantidadeDeItens){
        return $http.get(baseUrl + "/rest/assistenciasocial/creas?quantidadeDeItens=" + quantidadeDeItens);
    }

    var _getPesquisarAssistenciaSocialCreasPorId = function(idCreas){
        return $http.get(baseUrl + "/rest/assistenciasocial/creas/id/" + idCreas);
    }

    var _getPesquisarAssistenciaSocialCreasPorCoordenadas = function(latitude, Longitude, raio){
        return $http.get(baseUrl + "/rest/assistenciasocial/creas/latitude/" + latitude + "/longitude/" + longitude +"/raio/" + raio);
    }

    return{
        getListarAssistenciasSociaisCras: _getListarAssistenciasSociaisCras,
        getPesquisarAssistenciaSocialCrasPorId: _getPesquisarAssistenciaSocialCrasPorId,
        getPesquisarAssistenciaSocialCrasPorCoordenadas: _getPesquisarAssistenciaSocialCrasPorCoordenadas,
        getListarAssistenciasSociaisCreas: _getListarAssistenciasSociaisCreas,
        getPesquisarAssistenciaSocialCreasPorId: _getPesquisarAssistenciaSocialCreasPorId,
        getPesquisarAssistenciaSocialCreasPorCoordenadas: _getPesquisarAssistenciaSocialCreasPorCoordenadas
    };

}

mapaDeSaudeApp.factory("assistenciaSocialApi", assistenciaSocialApi);
