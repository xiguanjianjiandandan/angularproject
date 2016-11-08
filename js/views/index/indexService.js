var indexService=angular.module('indexService',[]);
indexService.factory('userService',function($http){
	var userlist=[];
	return {
		getUsers:function(){
			return JSON.parse(localStorage.getItem("userlist"));
		},
		addUser:function(user){
			userlist.push(user);
			localStorage.setItem("userlist",JSON.stringify(userlist));
		},
		updateUser:function(user){
			for(var i=0;i<userlist.length;i++){
				if(userlist[i].id==user.id){
					userlist[i]=user;
				}
			}
			localStorage.setItem("userlist",JSON.stringify(userlist));
		},
		deleteUser:function(user){
			for(var i=0;i<userlist.length;i++){
				if(userlist[i].id==user.id){
					userlist.splice(i,1);
				}
			}
			localStorage.setItem("userlist",JSON.stringify(userlist));
		}
	}
})