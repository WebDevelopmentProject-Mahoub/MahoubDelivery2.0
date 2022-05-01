function edit(check){
    let edit = document.getElementById('openEdit');
    let icon = document.getElementById('edit-icon');
    let input = document.getElementById('input-address');

    if (check == true) {
        edit.style.display = 'block';

        icon.style.display = 'none';
        input.style.display = 'none';
    }
}

//Edit Address

var add_str = false;
function addressChange(check) {
    let street = document.getElementById('address1').value;
    let house = document.getElementById('address2').value;
    let state = document.getElementById('address3').value;

    let edit = document.getElementById('openEdit');
    let icon = document.getElementById('edit-icon');
    let input = document.getElementById('input-address');

    if (check == true) {
        edit.style.display = 'none';

        icon.style.display = 'block';
        input.style.display = 'block';

        localStorage.setItem("street", street);
        localStorage.setItem("house", house);
        localStorage.setItem("address", state);
        add_str = true;
        condition();
    }
}

//get data from Signin

const st = localStorage.getItem("flag");
if (st == 'check2') {
    const username = localStorage.getItem("name");
    const fname = localStorage.getItem("fname");
    const lname = localStorage.getItem("lname");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("num");
    const address = localStorage.getItem("address");

    document.getElementById('info-name').innerHTML = username;
    document.getElementById('info1').innerHTML = fname;
    document.getElementById('info2').innerHTML = lname;
    document.getElementById('info3').innerHTML = email;
    document.getElementById('info4').innerHTML = phone;

    condition(address);
}

//get data from log in
else {
    let email = localStorage.getItem("email");
    document.getElementById('info3').innerHTML = email;
}

// check if condition for edit address true or not
function condition(val) {

    if (add_str == true) {
        const str = localStorage.getItem("street");
        const houseNum = localStorage.getItem("house");
        const state = localStorage.getItem("address");
    
        document.getElementById('info5').innerHTML = "str. " + str + ", " + "N0." + houseNum + ", " + state + " Cambodia";
    }

    else {
        alert('hello');
        document.getElementById('info5').innerHTML = val;
    }
}

//button section change

function payFunction(payBtn) {
    let visaBtn = document.querySelector('#visa-btn');
    let palBtn = document.querySelector('#pal-btn');
    let visa = document.querySelector('.payment-form .visa');
    let pal = document.querySelector('.payment-form .paypal');


    if (payBtn == 'pal') {
        palBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
        visaBtn.style.backgroundColor = 'transparent';
        pal.style.display = 'block';
        palBtn.style.color = 'white';
        visa.style.display = 'none';
        visaBtn.style.color = 'black';
        palBtn.style.textShadow = "1px 1px black";
        visaBtn.style.textShadow = "none";
    }

    else {
        visaBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
        palBtn.style.backgroundColor = 'transparent';
        visa.style.display = 'block';
        visaBtn.style.color = 'white';
        pal.style.display = 'none';
        palBtn.style.color = 'black';
        visaBtn.style.textShadow = "1px 1px black";
        palBtn.style.textShadow = "none";
    }
}