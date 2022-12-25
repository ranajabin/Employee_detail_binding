sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("empproject1.empdetailproject1.controller.View1", {
            onInit: function () {
                let oModel = new sap.ui.model.json.JSONModel("../model/emp.json");
                this.getView().setModel(oModel);
            }
        });
    });
