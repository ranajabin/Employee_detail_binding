/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"empproject1/empdetailproject1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
