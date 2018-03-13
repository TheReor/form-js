var form = document.getElementById('the-form');
console.log(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('tju');
    var AllOkay = confirm('Is all good?');
    console.log('AllOkay');
    if (AllOkay === true) {
        console.log('All is good');
    } else {
        console.log('Nothing is good!');
    }
    var name = prompt('What is your name?');
    console.log(name);
});

var get = document.getElementById('id-i-html');
console.log(get);

get.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('SDFUISDF');
    var BraJobbat = confirm('Bra jobbat!');
    console.log(BraJobbat);
    if (BraJobbat === true) {
        console.log('Bra Jobbat');
    }
});