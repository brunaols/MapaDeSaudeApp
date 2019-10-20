mapaDeSaudeApp.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    var homeState = {
        url: '/home',
        templateUrl: 'home.html'
    };
    
    var listarAssistenciasSociaisCrasState = {
        url: '/listarAssistenciasSociaisCras',
        templateUrl: 'listarAssistenciasSociaisCras.html',
        controller: 'listarAssistenciasSociaisCrasCtrl'
    };
    
    var listarAssistenciasSociaisCreasState = {
        url: '/listarAssistenciasSociaisCreas',
        templateUrl: 'listarAssistenciasSociaisCreas.html',
        controller: 'listarAssistenciasSociaisCreasCtrl'
    };
    
    var listarEmpregosState = {
        url: '/listarEmpregos',
        templateUrl: 'listarEmpregos.html',
        controller: 'listarEmpregosCtrl'
    };
    
    var listarEstabelecimentosState = {
        url: '/listarEstabelecimentos',
        templateUrl: 'listarEstabelecimentos.html',
        controller: 'listarEstabelecimentosCtrl'
    }; 
    
    var listarRemediosState = {
        url: '/listarRemedios',
        templateUrl: 'listarRemedios.html',
        controller: 'listarRemediosCtrl'
        
    };
    
    var pesquisarAssistenciaSocialCrasPorCoordenadasState = {
        url: '/pesquisarAssistenciaSocialCrasPorCoordenadas/:latitude, :longitude, :raio',
        templateUrl: 'pesquisarAssistenciaSocialCrasPorCoordenadas.html',
        controller: 'pesquisarAssistenciaSocialCrasPorCoordenadasCtrl'
    };
    
    var pesquisarAssistenciaSocialCrasPorIdState = {
        url: '/pesquisarAssistenciaSocialCrasPorId/:idCras',
        templateUrl: 'pesquisarAssistenciaSocialCrasPorId.html',
        controller: 'pesquisarAssistenciaSocialCrasPorIdCtrl'
    };
    
    var pesquisarAssistenciaSocialCreasPorCoordenadasState = {
        url: '/pesquisarAssistenciaSocialCreasPorCoordenadas',
        templateUrl: 'pesquisarAssistenciaSocialCreasPorCoordenadas.html',
        controller: 'pesquisarAssistenciaSocialCreasPorCoordenadasCtrl'
    };
    
    var pesquisarAssistenciaSocialCreasPorIdState = {
        url: '/pesquisarAssistenciaSocialCreasPorId',
        templateUrl: 'pesquisarAssistenciaSocialCreasPorId.html',
        controller: 'pesquisarAssistenciaSocialCreasPorIdCtrl'
    };
    
    var pesquisarEmpregoPorCoordenadasState = {
        url: '/pesquisarEmpregoPorCoordenadas',
        templateUrl: 'pesquisarEmpregoPorCoordenadas.html',
        controller: 'pesquisarEmpregoPorCoordenadasCtrl'
    };
    
    var pesquisarEmpregosPorCodigoState = {
        url: '/pesquisarEmpregosPorCodigo',
        templateUrl: 'pesquisarEmpregosPorCodigo.html',
        controller: 'pesquisarEmpregosPorCodigoCtrl'
    };
    
    var pesquisarEspecialidadesPorCodigoDaUnidadeState = {
        url: '/pesquisarEspecialidadesPorCodigoDaUnidade',
        templateUrl: 'pesquisarEspecialidadesPorCodigoDaUnidade.html',
        controller: 'pesquisarEspecialidadesPorCodigoDaUnidadeCtrl'
    };
    
    var pesquisarEstabelecimentosPorCodigoDaUnidadeState = {
        url: '/pesquisarEstabelecimentosPorCodigoDaUnidade',
        templateUrl: 'pesquisarEstabelecimentosPorCodigoDaUnidade.html',
        controller: 'pesquisarEstabelecimentosPorCodigoDaUnidadeCtrl'
    };
    
    var pesquisarEstabelecimentosPorCoordenadasState = {
        url: '/pesquisarEstabelecimentosPorCoordenadas',
        templateUrl: 'pesquisarEstabelecimentosPorCoordenadas.html',
        controller: 'pesquisarEstabelecimentosPorCoordenadasCtrl'
    };
    
    var pesquisarProfissionaisPorCodigoDaUnidadeState = {
        url: '/pesquisarProfissionaisPorCodigoDaUnidade',
        templateUrl: 'pesquisarProfissionaisPorCodigoDaUnidade.html',
        controller: 'pesquisarProfissionaisPorCodigoDaUnidadeCtrl'
    };
    
    var pesquisarServicosPorCodigoDaUnidadeState = {
        url: '/pesquisarServicosPorCodigoDaUnidade',
        templateUrl: 'pesquisarServicosPorCodigoDaUnidade.html',
        controller: 'pesquisarServicosPorCodigoDaUnidadeCtrl'
    };
    
    $stateProvider.state("home", homeState);
    $stateProvider.state("listarAssistenciasSociaisCras", listarAssistenciasSociaisCrasState);
    $stateProvider.state("listarAssistenciasSociaisCreas", listarAssistenciasSociaisCreasState);
    $stateProvider.state("listarEmpregos", listarEmpregosState);
    $stateProvider.state("listarEstabelecimentos", listarEstabelecimentosState);
    $stateProvider.state("listarRemedios", listarRemediosState);
    $stateProvider.state("pesquisarAssistenciaSocialCrasPorCoordenadas", pesquisarAssistenciaSocialCrasPorCoordenadasState);
    $stateProvider.state("pesquisarAssistenciaSocialCrasPorId", pesquisarAssistenciaSocialCrasPorIdState);
    $stateProvider.state("pesquisarAssistenciaSocialCreasPorCoordenadas", pesquisarAssistenciaSocialCreasPorCoordenadasState);
    $stateProvider.state("pesquisarAssistenciaSocialCreasPorId", pesquisarAssistenciaSocialCreasPorIdState);
    $stateProvider.state("pesquisarEmpregoPorCoordenadas", pesquisarEmpregoPorCoordenadasState);
    $stateProvider.state("pesquisarEmpregosPorCodigo", pesquisarEmpregosPorCodigoState);
    $stateProvider.state("pesquisarEspecialidadesPorCodigoDaUnidade", pesquisarEspecialidadesPorCodigoDaUnidadeState);
    $stateProvider.state("pesquisarEstabelecimentosPorCodigoDaUnidade", pesquisarEstabelecimentosPorCodigoDaUnidadeState);
    $stateProvider.state("pesquisarEstabelecimentosPorCoordenadas", pesquisarEstabelecimentosPorCoordenadasState);
    $stateProvider.state("pesquisarProfissionaisPorCodigoDaUnidade", pesquisarProfissionaisPorCodigoDaUnidadeState);
    $stateProvider.state("pesquisarServicosPorCodigoDaUnidade", pesquisarServicosPorCodigoDaUnidadeState);
})