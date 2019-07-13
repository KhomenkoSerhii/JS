var table = document.querySelector('table tbody');
table.addEventListener('keypress', function (event) {
    var key = event.which;
    if (key < 22 || key > 66) {
        event.preventDefault();
    }
});

var btn_calc = document.querySelector('.btn-calc');
var totalValue = document.querySelector('.total');

btn_calc.addEventListener('click', function () {
    var tr = document.querySelectorAll('.table tbody tr')
    var total = 0;
    tr.forEach(function (row) {
        total += row.querySelector('[name="price"]').value *
            row.querySelector('[name="amount"]').value;
    });
    totalValue.innerHTML = total;
});