(function(angular) {
	'use strict';

	angular
		.module('tw.form-components')
		.directive('twCurrencyInput', TwCurrencyInputDirective);

	function TwCurrencyInputDirective() {
		return {
			require: 'ngModel',
			bindToController: true,
			controller: 'TwCurrencyInputController',
			controllerAs: '$ctrl',
			replace: false,
			restrict: 'E',
			transclude: {
				'addon': '?addon'
			},
			template: templateAsString,
			scope: {
				ngModel: '=',
				ngChange: '&',
				ngMin: '=',
				ngMax: '=',
				ngRequired: '=',
				ngDisabled: '=',
				currency: '=',
				currencyCode: '@',
				placeholder: '@',
				size: '@',
				locale: '@'
			}
		};
	}

	var templateAsString = ' \
		<div class="input-group" ng-class="{ \
			\'input-group-sm\': $ctrl.size === \'sm\', \
			\'input-group-lg\': $ctrl.size === \'lg\', \
			disabled: $ctrl.ngDisabled \
		}"> \
			<input \
				type="tel" \
				autocomplete="off" \
				name="amount" \
				step="any" \
				class="form-control p-r-0" \
				placeholder="{{$ctrl.placeholder}}" \
				show-decimals="$ctrl.showDecimals" \
				tw-focusable \
				tw-number-input-formatter \
				ng-change="$ctrl.changedInputValue()" \
				ng-model="$ctrl.ngModel" \
				ng-disabled="$ctrl.ngDisabled" /> \
			<span class="hello-world input-group-addon tw-currency-input-code p-l-1"> \
				<span ng-transclude="addon"></span> \
				{{ $ctrl.currency || $ctrl.currencyCode }} \
			</span> \
		</div> \
	';

})(window.angular);
