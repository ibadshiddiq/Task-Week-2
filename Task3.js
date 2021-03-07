function primeNumber(number1,number2) {
    for(i = number1; i <= number2; i++) {
        if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0 ) {
            document.write(i + '<br/>')
        } 
    }
}
primeNumber(20,50);
