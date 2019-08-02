sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("br.com.demorouting.DemoRouting.controller.View1", {
		
		handleListItemPress:function(evt){
			
			var selectedProductId = evt.getSource().getBindingContext().getProperty("ProductID");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.navTo("View2", {
				productId: selectedProductId
			});
			
		},
		
		onClick:function(){
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.navTo("View2", {
				productId: 3
			});
			
		}

	});
});