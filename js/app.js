var app=angular.module('app',['ui.router','ngAnimate','appController','appDirective','appService']);

//配置默认路由
app.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
});

//配置大小写是否敏感
app.config(function($urlMatcherFactoryProvider){
	$urlMatcherFactoryProvider.caseInsensitive(true);//设置为不敏感
})

//配置其他路由
//主路由
app.config(function($stateProvider){
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'../tpls/index.html',
			controller:'indexCtrl'
		})
})
//用户管理路由页面
app.config(function($stateProvider){
	$stateProvider
		.state('index.user',{
			url:'/',
			templateUrl:'../tpls/user.html',
			controller:'userCtrl'
		})
})
//更新用户
app.config(function($stateProvider){
	$stateProvider
		.state('index.userupdate',{
			url:'/',
			templateUrl:'../tpls/user_update.html',
			controller:'userUpdateCtrl',
			params:{user:null}
		})
})
//商品管理路由页面
app.config(function($stateProvider){
	$stateProvider
		.state('index.product',{
			url:'/',
			templateUrl:'../tpls/product.html',
			controller:'productCtrl'
		})
})
