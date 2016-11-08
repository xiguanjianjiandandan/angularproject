var indexController = angular.module('indexController',[]);
indexController.controller('indexCtrl',function($scope){
	$scope.pageClass='user';
})

indexController.controller('userCtrl',function($scope,userService){
	
	
	//初始化数据，并且存储到localstory中
	var store=new Store();
	var userlist=store.userlist;
	for(var i=0;i<userlist.length;i++){
		userService.addUser(userlist[i]);
	}
	//将数据添加到scope中，并且显示到页面中
	$scope.userlist=userService.getUsers();
	
	//添加用户
	$scope.userId=15;
	$scope.addUser=function(){
		$scope.userId++;
		userService.addUser($scope.user);
		console.log(userService.getUsers());
		$('#myModal').modal('toggle')
	}
	//删除用户
	$scope.todeleteUser=function(user){
		$scope.deleteUser=user;
	}
	$scope.deleteuser = function(){
		userService.deleteUser($scope.deleteUser);
		$scope.userlist=userService.getUsers();
		$('#myMedal2').modal('toggle');
	}
	
	//搜索
//	$scope.searchContext=$scope.searchText;
	$scope.search=function(){
		$scope.searchContext=$scope.searchText;
	}
	
	//复选框
	$scope.isSelected=false;
	$scope.updateSelected=function(){
		console.log($scope.isSelected);
		if($scope.isSelected){
			$scope.isSelected=false;
		}else{
			$scope.isSelected=true;		
		}
	}
	
	//用户排序
	$scope.orderInfo="id";
	$scope.changeOrderInfo=function($event,orderInfo){
		$event.preventDefault();
		$scope.orderInfo=orderInfo;
	}
	
});

indexController.controller('productCtrl',function($scope){
	
})
indexController.controller('userUpdateCtrl',function($state,$scope,$stateParams,userService){
	$scope.updateUser=$stateParams.user;
	$scope.update=function(){
		userService.updateUser($scope.updateUser);
		$state.go('index.user');
	}
	$scope.cancel=function(){
		$state.go('index.user');
	}
	
	
})