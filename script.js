function calculate() {
    let num = document.getElementById('inputNumbers')
    let tab = document.getElementById('selTab')
    // Parse the input value as a number
    let n = Number(num.value)

    if (num.value.length == 0 || n < 1 || n > 100) {
        window.alert('Please make sure that your number is between 1 and 100!')
    } else {
        tab.innerHTML = ''
        for (let c=1; c<=10; c++) {
            // Create a new option element with text content showing the multiplication result
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            // Append the option to the select element
            tab.appendChild(item)
        }
    }
}























