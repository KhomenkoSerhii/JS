var fields = {
    field_1: ["firstName", "text", "Іван"],
    field_2: ["lastName", "text", "Шевченко"],
    field_3: ["birthday", "date", "1993-07-22"],
    field_4: ["position", "text", "Front-end"],
    field_5: ["experience", "number", "2"],
};

var form = document.querySelector('.form');
for (var key in fields) {
    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    input.setAttribute('name', fields[key][0]);
    input.setAttribute('type', fields[key][1]);
    input.value = fields[key][2];
    label.innerHTML = fields[key][0];
    label.appendChild(input);
    div.appendChild(label);
    form.appendChild(div);
}
