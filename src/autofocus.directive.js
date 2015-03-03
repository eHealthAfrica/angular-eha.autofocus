;(function() {
  'use strict';
  /**
   * autofocus directive
   *
   * @ngdoc directive
   * @name ehaAutofocus
   * @module eha.common.autofocus.directive
   * @description
   * @element ANY
   * @restrict A
   *
   * Autofocuses first element with autofocus attribute
   *
   * @example
   * <example module="autofocusExample">
   *  <file name="autofocusExample.js">
   *    angular.module('autofocusExample', ['eha.common.autofocus.directive']);
   *  </file>
   *  <file name="autofocusExample.html">
   *    <input type="text" eha-autofocus />
   *  </file>
   * </example>
   *
   */
  var ngModule = angular.module('eha.autofocus.directive', [])
  .directive('ehaAutofocus', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        function focusElement() {
          $timeout(function() {
            element[0].focus();
          });
        }

        focusElement();
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }
}());
