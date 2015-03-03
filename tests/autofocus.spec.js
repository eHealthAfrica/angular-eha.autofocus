/*jshint expr: true*/
describe('autofocus directive', function() {
  'use strict';

  var $scope;
  var $compile;
  var $document;
  var $timeout;

  beforeEach(module('eha.autofocus.directive'));
  beforeEach(inject(function(_$rootScope_,
                             _$compile_,
                             _$document_,
                             _$timeout_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
    $document = _$document_;
    $timeout = _$timeout_;
  }));

  it('should focus first element found with autofocus attribute', function() {
    var el = angular.element('<div>' +
                             '  <button></button>' +
                             '  <input type="text" eha-autofocus />' +
                             '  <button></button>' +
                             '</div>');

    sinon.spy(el.find('input')[0], 'focus');
    $compile(el)($scope);
    $scope.$digest();
    $timeout.flush();
    expect(el.find('input')[0].focus).to.have.been.called;
  });
});
