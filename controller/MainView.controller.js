sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {

    "use strict";
   
    return Controller.extend("com.training.exer1mantupar.controller.MainView", {
        onInit: function () {
			this._Page = this.byId("page");
		},

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        },

        onChangeMOP: function (oEvent) {
            //Mode of Payment
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            //Cash on Delivery
            var oCashDelAddrLabel = this.getView().byId("idLblAddr");
            var oCashDelAddrInput = this.getView().byId("idInputAddr");
            var oCashDelAmountLabel = this.getView().byId("idLblAmountCOD");
            var oCashDelAmountInput = this.getView().byId("idInputAmountCOD");

            //Credit Card
            var oCredCardNoLabel = this.getView().byId("idLblCC");
            var oCredCardNoInput = this.getView().byId("idInputCC");
            var oCredCardCVVLabel = this.getView().byId("idLblCCCVV");
            var oCredCardCVVInput = this.getView().byId("idInputCCCVV");
            var oCredCardExpDateLabel = this.getView().byId("idLblExpDate");
            var oCredCardExpDateInput = this.getView().byId("idInputExpDate");
            var oCredCardNameCCLabel = this.getView().byId("idLblNameCC");
            var oCredCardNameCCInput = this.getView().byId("idInputNameCC");
            var oCredCardBillAddrLabel = this.getView().byId("idLblBillAddr");
            var oCredCardBillAddrInput = this.getView().byId("idInputBillAddr");
            var oCredCardZipCodeLabel = this.getView().byId("idLblZipCode");
            var oCredCardZipCodeInput = this.getView().byId("idInputZipCode");

            //GCash
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oMobileAmountLabel = this.getView().byId("idLblAmount");
            var oMobileAmountInput = this.getView().byId("idInputAmount");

            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("payMode");

            if (sSelectedKey === "COD"){
                // show the COD field
                oCashDelAddrLabel.setVisible(true);
                oCashDelAddrInput.setVisible(true);
                oCashDelAmountLabel.setVisible(true);
                oCashDelAmountInput.setVisible(true);
                this.fnDisplayMsg(sMsg + " C.O.D.");
            } else {
                oCashDelAddrLabel.setVisible(false);
                oCashDelAddrInput.setVisible(false);
                oCashDelAmountLabel.setVisible(false);
                oCashDelAmountInput.setVisible(false);
            }

            if (sSelectedKey === "CC"){
                // show the mobile field
                oCredCardNoLabel.setVisible(true);
                oCredCardNoInput.setVisible(true);
                oCredCardCVVLabel.setVisible(true);
                oCredCardCVVInput.setVisible(true);
                oCredCardExpDateLabel.setVisible(true);
                oCredCardExpDateInput.setVisible(true);
                oCredCardNameCCLabel.setVisible(true);
                oCredCardNameCCInput.setVisible(true);
                oCredCardBillAddrLabel.setVisible(true);
                oCredCardBillAddrInput.setVisible(true);
                oCredCardZipCodeLabel.setVisible(true);
                oCredCardZipCodeInput.setVisible(true);

                this.fnDisplayMsg(sMsg + " Credit Card");
            } else {
                oCredCardNoLabel.setVisible(false);
                oCredCardNoInput.setVisible(false);
                oCredCardCVVLabel.setVisible(false);
                oCredCardCVVInput.setVisible(false);
                oCredCardExpDateLabel.setVisible(false);
                oCredCardExpDateInput.setVisible(false);
                oCredCardNameCCLabel.setVisible(false);
                oCredCardNameCCInput.setVisible(false);
                oCredCardBillAddrLabel.setVisible(false);
                oCredCardBillAddrInput.setVisible(false);
                oCredCardZipCodeLabel.setVisible(false);
                oCredCardZipCodeInput.setVisible(false);
            }

            if (sSelectedKey === "GCASH"){
                // show the CC field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oMobileAmountLabel.setVisible(true);
                oMobileAmountInput.setVisible(true);
                
                this.fnDisplayMsg(sMsg + " GCash");
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oMobileAmountLabel.setVisible(false);
                oMobileAmountInput.setVisible(false);
            }
        },

    });
});