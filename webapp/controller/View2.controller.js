sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("br.com.demorouting.DemoRouting.controller.View2", {
		
		onNavBack: function(){
			history.go(-1);
		},
		
		onInit: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("View2").attachMatched(this._onRouteMatched,this);
			
		},
		
		_onRouteMatched: function(oEvent){
			//Products(1)
			var oArgs;
			var oView;
			
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			
			oView.bindElement({
				path: "/Products(" + oArgs.productId + ")",
				events:{
					dataRequested: function(){
						oView.setBusy(true);
					},
					dataReceived: function(){
						oView.setBusy(false);
					}
				}
			});
			
		},
		
		onClick:function (){
			this.onNavBack();
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf br.com.demorouting.DemoRouting.view.View2
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf br.com.demorouting.DemoRouting.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf br.com.demorouting.DemoRouting.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf br.com.demorouting.DemoRouting.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});