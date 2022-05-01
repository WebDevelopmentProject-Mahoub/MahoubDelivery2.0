var Menu = {
    'menu1' : {'name':'Spaghetti Cabonara', 'price':16.5, 'counter': 0},
    'menu2' : {'name':'Spaghetti Bolognaise', 'price':16.5, 'counter': 0},
    'menu3' : {'name':'Escargot', 'price':13.2, 'counter': 0},
    'menu4' : {'name':'Salmon Tartare', 'price':19.8, 'counter': 0},
    'menu5' : {'name':'Puree de Pmmes de Terre', 'price':11, 'counter': 0},
    'menu6' : {'name':'Grantin De Macaroni', 'price':6.6, 'counter': 0},

}


var count = 0;
var fees = 1.50;
var sum = fees;
var check = false;

function calFunction(item) {
    let checkItem = document.getElementById('check-items');

    let newDiv = document.createElement('div');
    let numItem = 'menu' + item;
    newDiv.setAttribute("id", "tempDiv");
    newDiv.setAttribute(
        "style",
        "width: 80%; margin: auto; margin-top: 0.5em; display: flex; font-size: 1.5em;"
    );

    Menu[numItem].counter++;

    let ele = checkDup(item);

    if (check == true) {
        let text = `${Menu[numItem].name} x${Menu[numItem].counter}`;

        let list = document.querySelectorAll("#left");
        list[ele].innerHTML = text;
    }

    else {

        let leftDiv = document.createElement('div');
        let rightDiv = document.createElement('div');
    
        leftDiv.setAttribute('id', 'left');
        leftDiv.setAttribute('class', item);
    
        leftDiv.setAttribute(
            "style",
            "width: 80%;"
        );
    
        leftDiv.append(Menu[numItem].name);
    
        rightDiv.setAttribute(
            "style",
            "width: 30%;"
        );

        rightDiv.append(Menu[numItem].price + '$');

        newDiv.append(leftDiv);
        newDiv.append(rightDiv);

        checkItem.appendChild(newDiv);
    }
    
    sum += Menu[numItem].price;
    document.getElementById('total').innerHTML = sum.toFixed(2);
    
    count++;
    document.getElementById('count').innerHTML = count + " items";
}

function checkDup(item) {
    let list = document.querySelectorAll("#left");

    for(let n = 0; n < list.length; n++) {
        if (list[n].className == item) {
            check = true;
            return n;
        }
    }
    return check = false;
}

function removeItem() {

    let list = document.querySelectorAll("#tempDiv");
    for(let n = 0; n < list.length; n++) {
        list[n].remove();
    }

    for (var i = 1; i <= Object.keys(Menu).length; i++) {
        Menu['menu' + i].counter = 0;
    }

    sum = fees;
    document.getElementById('total').innerHTML = sum;

    count = 0;
    document.getElementById('count').innerHTML = count + " items";
    
}

//Time Open or close

window.onload = function() {
    let time = document.getElementById('open-close');
    const d = new Date();
    let hour = d.getHours();
    let day = d.getDay();

    if (day >= 1 && day <= 5 && hour >= 8 && hour <= 20) {
        time.innerHTML = 'OPEN';
        time.style.backgroundColor = "green";
    }
    else {
        time.innerHTML = 'CLOSED';
        time.style.backgroundColor = "red";
    }
}

function checkOrder() {
    const item = document.getElementById('check-items');

    if (item.childNodes.length == 1) {
        document.getElementById('missing').innerHTML = "Please add items in order to proceed";
    }
    else {
        document.getElementById('missing').innerHTML = "";
        setTimeout(function() {
            document.getElementById('order').style.display= 'none';
            document.getElementById('done').style.display= 'block';
            removeItem();

            setTimeout(function() {
                document.getElementById('done').style.display= 'none';
                document.getElementById('order').style.display= 'block';
            }, 3000)

        }, 3000);

    }
    
}
