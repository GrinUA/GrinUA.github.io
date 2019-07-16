class Render {
    constructor() {
        this.elements = {
            $splitBill: document.querySelector('[id="split_bill"]'),
            $results: document.querySelector('[id="results"]'),
            $splitResults: document.querySelector('[id="split_between_result"]'),
            $totalTip: document.querySelector('[id="tip_result"]'),
            $totalPrice: document.querySelector('[id="price_result"]'),
            $splitBetween: document.querySelector('[id="split_between_row"]'),
            $splitAmount: document.querySelector('[id="price_result_per_person"]'),
            $splitTip: document.querySelector('[id="tip_result_per_person"]'),
        };

        this.elements.$splitBill.addEventListener("change", this._showSplit.bind(this));
    }

    showResult = (element, value) => {
        this.elements["$results"].style = "display: block";
        this.elements[element].innerHTML = value;
        if (this.elements["$splitBill"].checked) {
            this.elements["$splitResults"].style = "display: block";
        }
    };

    _showSplit() {
        if (this.elements["$splitBill"].checked) {
            this.elements["$splitBetween"].style = "display: block";
        } else {
            this.elements["$splitBetween"].style = "display: none";
        }
    };
}



