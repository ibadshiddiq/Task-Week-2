function checkWord(vocal) {
    let vocal2 = vocal.toLowerCase()
    if(vocal2 == 'a' && vocal2 == 'a' || vocal2 == 'i' || vocal2 == 'u' || vocal2 == 'e' || vocal2 == 'o') {
        document.write(vocal + ' ' + 'adalah huruf vokal');
    } else{
        document.write(vocal + ' ' + 'bukan huruf vokal');
    }
}
checkWord('A');