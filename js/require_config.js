/* global requirejs */

/**
 * ownCloud - fuel
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @copyright Christoph Wurst 2015
 */

'use strinct';

requirejs.config({
	baseUrl: '/apps/fuel/js',
	paths: {
		/**
		 * Application
		 */
		app: 'app/fuel',
		/**
		 * OC helper
		 */
		OC: '../../../core/js/js',
		/**
		 * Libraries
		 */
		backbone: 'lib/node_modules/backbone/backbone-min',
        chartjs: 'lib/node_modules/chart.js/Chart.min',
		marionette: 'lib/node_modules/backbone.marionette/lib/backbone.marionette.min',
		underscore: '../../../core/vendor/underscore/underscore'
	}
});

require([
	'app'
]);