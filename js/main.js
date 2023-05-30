/*1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età e peso.
2. Stampare in console attraverso un ciclo for-in tutte le proprietà dell'oggetto con anche i relativi valori.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
Consigli del giorno:
- Scriviamo sempre prima in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/
//1
let marioStudent ={
    name: "Mario",
    surname:"Rossi",
    age:18,
    weight: 70.5 
}

let riccardoStudent = {
    name: "Riccardo",
    surname:"Cariello",
    age:28,
    weight: 95 
}
//2
for(const key in marioStudent){

    console.log(`${key} : ${marioStudent[key]}`);
}

//3
let studenti = [marioStudent,riccardoStudent];

//4
studenti.forEach(element =>{
    console.log(`
    -------------------${element.name}-----------------
    \tName : ${element.name}
    \tSurname : ${element.surname}
    ---------------------------------------------------
    `)
})

//5

studenti.push(StudentPush());

PrintStudents();









//************************************************************************************************************* */

function StudentPush(){

    
    let name = prompt("Inserisci il nome");
    let surname = prompt("Inserisci il cognome");
    let age = prompt("Inserisci l'età");
    let weight = prompt("Inserisci il peso");

    let newstudent = {
        name : name,
        surname : surname,
        age : age,
        weight : weight,
    }

    return newstudent;
}

function PrintStudents(){
    studenti.forEach(element =>{
        console.log(`
        -------------------${element.name}-----------------
        \tName : ${element.name}
        \tSurname : ${element.surname}
        ---------------------------------------------------
        `)
    })
}