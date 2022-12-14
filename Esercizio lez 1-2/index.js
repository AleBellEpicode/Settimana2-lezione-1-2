/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*1. String : Non e altro che una serie di lettere o caratteri, aperti e chiusi da due virgolette
2. Number : Se ad una variabile viene assegnato un valore numero, quel valore potra essere utilizzato per operazioni matematiche
3. Boolean: Si puo dare un valore boolean (true or false) ad una qualunque variabile. Essa potra poi essere ``controllata``
da un altro comando, in modo da dare il via ad alcune reazioni (Se una variabile e ``vera`` si potra chiedere al browser di 
agire in un modo, in caso contrario in un altro). Esso e un valore che, una volta richiesto un console.log, potrebbe anche essere dato 
in risposta alla ``domanda`` (es let number: 14. let number>13=false)
4. Undefined: Quando si assegna un nome ad una variabile, se non gli viene dato un determinato valore (es: let _nomevariabile_= *nessun valore dato*), 
quella variabile avra valore undefined finche non verra ad essa assegnata, cambiando il precedente codice, o aggiungendo un nuovo 
``let _nomevariabile_= valore``
5. Null: null e un valore nullo, assegnato dal programmatore, o frutto di un risultato, che una variabile puo possedere.
Esso non verra considerato nei controlli console.log.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const name = "Alessandro";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*let name = "Bellante"; rimosso il commento questo risultera un errore dato il valore gia assegnato con la constant 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let number3 = 4;
console.log(number3 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1 = "john";
let name2 = "John";
console.log(name1 === name2); che risultera falsa una volta rimosso il commento
*/
let name1 = "john";
let name2 = "John";
console.log(name2.toLowerCase === name1.toLowerCase);
