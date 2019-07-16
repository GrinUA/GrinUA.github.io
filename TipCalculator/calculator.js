class Calculator {
    constructor(options) {
        this.render = options.render;
        this.$el = options.element;
        this.$billElement = this.$el.querySelector('[id="bill_amount"]');
        this.$tipElement = this.$el.querySelector('[id="tip"]');
        this.$$splitBetween = this.$el.querySelector('[id="split_between"]');

        this.$el.addEventListener('submit', this._calculate.bind(this));
    }

    _calculate() {
        let billAmount = this.$billElement.value ? parseFloat(this.$billElement.value) : 0;
        let tipAmount = this.$tipElement.value ? parseFloat((this.$tipElement.value)) * billAmount / 100 : 0;
        let splitAmount = this.$$splitBetween.value;

        let result = Math.round(tipAmount + billAmount);
        let totalSplit = result / splitAmount;
        let tipSplit = tipAmount / splitAmount;

        this.render.showResult("$totalPrice", result.toFixed(2));
        this.render.showResult("$totalTip", tipAmount.toFixed(2));
        if (render.elements.$splitBill.checked) {
            this.render.showResult("$splitAmount", totalSplit.toFixed(2));
            this.render.showResult("$splitTip", tipSplit.toFixed(2));
        }
    }
}





