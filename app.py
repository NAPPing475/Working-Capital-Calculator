from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

class WorkingCapitalCalculator:
    def __init__(self, tca, ocl):
        self.tca = tca
        self.ocl = ocl

    def calculate_mpbf(self):
        working_capital_gap = self.tca - self.ocl
        minimum_stipulated_nwc = 0.25 * self.tca
        actual_net_working_capital = self.tca - self.ocl
        item6 = working_capital_gap - minimum_stipulated_nwc
        item7 = working_capital_gap - actual_net_working_capital
        mpbf = min(item6, item7)
        return {
            "mpbf": mpbf,
            "working_capital_gap": working_capital_gap,
            "minimum_stipulated_nwc": minimum_stipulated_nwc
        }

    def calculate_dp(self):
        margins = {
            "Raw Material": self.tca * 0.25,
            "Other Consumable Spares": self.tca * 0.25,
            "Stock-in-process": self.tca * 0.25,
            "Finished Goods": self.tca * 0.25,
            "Domestic Receivables": self.tca * 0.40,
            "Export Receivables": self.tca * 0.40
        }
        creditors = {"Creditors": self.tca * 0.40}
        total_margin_a = sum(margins.values())
        total_creditors_b = sum(creditors.values())
        return total_margin_a - total_creditors_b

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    tca = float(request.form.get('tca'))
    ocl = float(request.form.get('ocl'))
    calculator = WorkingCapitalCalculator(tca, ocl)
    mpbf_data = calculator.calculate_mpbf()
    dp = calculator.calculate_dp()
    result = {
        **mpbf_data,
        "dp": dp
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)




    
