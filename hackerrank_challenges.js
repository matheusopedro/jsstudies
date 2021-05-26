function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   * ^ procura o primeiro caracter
   * () guarda o resultado do match
   * [] as possibilidades de match a ser guardado
   * . achar qualquer caracter
   * + match para uma ou mais ocorrencias
   * \1 verifica se é igual ao primeiro resultado guardado no primeiro (), se tivesse outro parentese, usaria \2
   * $ combinado com o \1 olha para o ultimo caractere
   */
  let re = /^([aeiou]).+\1$/
  /*
   * Do not remove the return statement
   */
  return re;
}


/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""))
    // var array = s.split('');
    // var reversedArray = array.reverse();
    // var reversedString = reversedArray.join('');
    // console.log(reverseString);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}


/*
 * Complete the Rectangle function (class, object, whatevs)
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}


/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a > 0) return 'YES';
  if (a == 0) throw new Error('Zero Error');
  if (a < 0) throw new Error('Negative Error');
}



/*
 * PROTOTYPE CHALLENGE  
 */
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
*  Write code that adds an 'area' method to the Rectangle class' prototype
*  Como no javascript, uma classe é nada mais que um objeto, que por sua vez tem um prototype, é possível acessar e modificar esse prototype no runtime
*/
Rectangle.prototype.area = function () { return (this.w * this.h) };

/*
* Create a Square class that inherits from Rectangle and implement its class constructor
* No javascript, uma classe que herda (extends) de outra, recebe as propriedades do seu prototype, as propriedades podem ser funçoes ou variaveis;
*/
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
  const rec = new Rectangle(3, 4);
  const sqr = new Square(3);

  console.log(rec.area());
  console.log(sqr.area());
} else {
  console.log(-1);
  console.log(-1);
}



/**
 * Front-end challenge
 */
let btn = document.getElementById('btn');
let count = 0;
btn.innerHTML = count;
btn.onclick = function () {
  btn.innerHTML = ++count;
}