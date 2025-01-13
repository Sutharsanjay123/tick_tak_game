let input = document.getElementById('result');
let btn = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btn);

arr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string) || "0";
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (value === 'AC') {
            string = "";
            input.value = "0";
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string || "0";
        } else {
            string += value;
            input.value = string;
        }
    });
});
