const fs = require('fs');
const os = require('os'); //moduł os z informacjami o systemie. require jako zwykly import. System formatowania z require nazywa się CommonJS.
/* Różnice między require a import:
Eksportowanie całych modułów wygląda następująco: module.exports = {id: 1,name: 'TestModule'};     vs  export default {id: 1, name: 'TestModule'};
Eksportowanie pojedynczych funkcjonalności, które znamy z import ... export również jest możliwe w require: exports.helloWorld = function() {...}
A samo ich importowanie wręcz identyczne: const { helloWorld, test } = require('./module');
 */

console.log('Platform: ', os.platform());  //Założyliśmy, że nasza aplikacja pokaże następujące dane: rodzaj platformy, rodzaj architektury i jakieś podstawowe informacje o użytkowniku. 
console.log('Arch: ', os.arch());
console.log('userInfo: ', os.userInfo());

const genders=['M', 'F'];
const maleNames=['Anthony', 'Peter', 'Brad', 'Johnny', 'Tom', 'Phil', 'Steven'];
const femaleNames=['Julianne', 'Kate', 'Helen', 'Martha', 'Lucy', 'Joanne'];
const lastNames=['Moore', 'Depp', 'Pitt', 'Trump', 'Putin', 'Macron'];
const telephoneNumbers=['012345678', '123456789', '234567890', '345678901', '456789012', '567890123'];

function randChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const randomValue = arr[index];
  return randomValue;
}

const people=[];

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

for (i=1; i <= 20; i++) {
    let firstName;
    let lastName;
    let telephoneNumber;
    let email;
    gender = randChoice(genders);  //wylosowanie płci za pomocą randChoice i przypisanie jej jako atrybut gender. 
    if(gender=='M'){  //Następnie, w zależności od wylosowanej płci, wybierz za pomocą randChoice imię z odpowiedniej tablicy. 
      firstName = randChoice(maleNames);
    } else {
      firstName = randChoice(femaleNames);
    }
     //Na końcu wylosuj w podobny sposób również nazwisko (już bez użycia randChoice, a za pomocą zwykłego Math.random() 
    lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    email = firstName + '.' + lastName + '@gmail.com';
    const age = randomInt( 18, 78); //ustal wiek osoby w zakresie 18-78 lat.
    telephoneNumber = telephoneNumbers[Math.floor(Math.random() * telephoneNumbers.length)];
    const newObject={gender, firstName, lastName, age, telephoneNumber, email};   //utworzenie nowego obiektu,
    people.push(newObject);
}

const data = JSON.stringify(people);

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });