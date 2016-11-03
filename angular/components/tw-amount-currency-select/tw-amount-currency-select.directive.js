(function(angular) {
	'use strict';

	angular
		.module('tw.form-components')
		.directive('twAmountCurrencySelect', TwAmountCurrencySelectDirective);

	function TwAmountCurrencySelectDirective() {
		return {
			require: 'ngModel',
			bindToController: true,
			controller: 'TwAmountCurrencySelectController',
			controllerAs: '$ctrl',
			replace: false,
			restrict: 'E',
			template: templateAsString,
			scope: {
				ngModel: '=',
				ngMin: '=',
				ngMax: '=',
				ngRequired: '=',
				ngDisabled: '=',

				amountReadOnly: '=',
				onAmountChange: '&',
				showDecimals: '=',

				currency: '=',
				currencies: '=',
				onCurrencyChange: '&',

				customActionLabel: '=',
				onCustomAction: '&',

				placeholder: '@',

				lock: '@',
				size: '@',
				locale: '@'
			},
		};
	}

	var templateAsString = '\
		<div class="input-group" ng-class="{ \
			\'input-group-sm\': $ctrl.size === \'sm\', \
			\'input-group-lg\': $ctrl.size === \'lg\', \
			disabled: $ctrl.ngDisabled \
		}">  \
			<input \
				type="tel"  \
				autocomplete="off"  \
				name="amount"  \
				step="any"  \
				class="form-control"  \
				placeholder="{{ $ctrl.placeholder }}" \
				tw-focusable  \
				show-decimals="$ctrl.showDecimals" \
				tw-number-input-formatter  \
				ng-change="$ctrl.changedAmount()"  \
				ng-model="$ctrl.ngModel" \
				ng-disabled="$ctrl.ngDisabled" /> \
			<span class="input-group-addon" ng-if="$ctrl.lock" \
				ng-class="{\'input-lg\': $ctrl.size === \'lg\'}"> \
				<i class="icon icon-lock" ng-if="$ctrl.lock === \'locked\'"></i> \
				<i class="icon icon-unlock" ng-if="$ctrl.lock === \'unlocked\'"></i> \
			</span> \
			<span class="input-group-btn">  \
				<tw-select \
					ng-model="$ctrl.currency" \
					ng-required="true" \
					size="{{ $ctrl.size }}" \
					inverse="true" \
					dropdown-right="xs" \
					dropdown-width="md" \
					hide-note="true" \
					hide-secondary="true" \
					options="$ctrl.currencies" \
					ng-change="$ctrl.changedCurrency()"> \
						<a ng-if="!!$ctrl.customActionLabel" ng-click="$ctrl.onCustomAction()"> \
							{{ $ctrl.customActionLabel }} \
						</a> \
				</tw-select> \
			</span> \
		</div>';

})(window.angular);
