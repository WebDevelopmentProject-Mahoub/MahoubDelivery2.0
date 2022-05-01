const btnLog = document.querySelector('.btn-login');
const btnSign = document.querySelector('.btn-signin');

btnLog.addEventListener('click', function() {
    document.querySelector('.form1').style.display = 'block';
    document.querySelector('.form2').style.display = 'none';
    btnLog.style.backgroundColor = 'darkgreen';
    btnSign.style.backgroundColor = 'rgb(55, 230, 55)';

    document.querySelector('#head1').style.display = 'block';
    document.querySelector('#head2').style.display = 'none';
});

btnSign.addEventListener('click', function() {
    document.querySelector('.form2').style.display = 'block';
    document.querySelector('.form1').style.display = 'none';
    btnSign.style.backgroundColor = 'darkgreen';
    btnLog.style.backgroundColor = 'rgb(55, 230, 55)';

    document.querySelector('#head2').style.display = 'block';
    document.querySelector('#head1').style.display = 'none';
});

function checkValid1() {
    let email = document.getElementById('email').value;
    let num = document.getElementById('password').value;
    let check = true;

    if(email == ""){
        document.getElementById('email-check').innerHTML="Your email is invalid";
        document.getElementById('email-check').style.marginTop = '-2%';
        check = false;
    } 
    if (num == ""){
        document.getElementById('pass-check').innerHTML="Please enter six number password";
        document.getElementById('pass-check').style.marginTop = '-2%';
        check = false;
    }
    else {
        callformsubmit();
        localStorage.setItem("flag", 'check1');
        localStorage.setItem("email", email);
    }

    function callformsubmit(){
        document.getElementById('email-check').innerHTML="";
        document.getElementById('pass-check').innerHTML="";
    }

    if (check == true) {
        window.location.href="Profile.html";
    }
}

function checkValid2() {
    let name = document.getElementById('name1').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let num = document.getElementById('num1').value;
    let email = document.getElementById('email1').value;
    let password = document.getElementById('password1').value;
    let address = document.getElementById('address1').value;
    let check = true;

    if(name==""){
        document.getElementById('open-1').innerHTML="Please enter your name";
        document.getElementById('open-1').style.marginTop = '-2%';
        check = false;
    }
    if(fname == ""){
        document.getElementById('open-1.1').innerHTML="Please enter your name";
        document.getElementById('open-1.1').style.marginTop = '-2%';

        check = false;
    } 
    if(lname == ""){
        document.getElementById('open-1.2').innerHTML="Please enter your name";
        document.getElementById('open-1.2').style.marginTop = '-2%';

        check = false;
    } 
    if (email == ""){
        document.getElementById('open-2').innerHTML="Please enter your email";
        document.getElementById('open-2').style.marginTop = '-2%';

        check = false;
    } 
    if (password <= 6){
        document.getElementById('open-3').innerHTML="Please enter 6 digit of password";
        document.getElementById('open-3').style.marginTop = '-2%';
 
        check = false;
    } 
    if (num.length <= 9){
        document.getElementById('open-4').innerHTML="Please enter 9 digits of phone number";
        document.getElementById('open-4').style.marginTop = '-2%';

        check = false;
    } 
    if (address == "") {
        document.getElementById('open-5').innerHTML="Please enter the address";
        document.getElementById('open-5').style.marginTop = '-2%';
    }

    else {
        callformsubmit();
        localStorage.setItem("flag", 'check2');
        localStorage.setItem("name", name);
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        localStorage.setItem("email", email);
        localStorage.setItem("num", num);
        localStorage.setItem("address", address);

    }

    function callformsubmit(){
        document.getElementById('open-1').innerHTML="";
        document.getElementById('open-1.1').innerHTML="";
        document.getElementById('open-1.2').innerHTML="";
        document.getElementById('open-2').innerHTML="";
        document.getElementById('open-3').innerHTML="";
        document.getElementById('open-4').innerHTML="";
        document.getElementById('open-5').innerHTML="";
    }

    if (check == true) {
        window.location.href="Profile.html";
    }

}
