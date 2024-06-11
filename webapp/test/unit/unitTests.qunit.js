/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"firmaname/facturas/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
