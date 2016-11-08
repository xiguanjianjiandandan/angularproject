var appDirective = angular.module('appDirective',[]);

appDirective.directive('accordionPanel',function(){
	return {
		restrict:'E',
		replace:true,
		templateUrl:'../tpls/directivePanel.html',
		link:function(scope,elem,attrs){
			 $( "#accordion" ).accordion({
     			 collapsible: true
   			 });
		}
	}
})