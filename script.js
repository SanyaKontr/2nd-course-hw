let name = 'Брендан Эйх';
alert(name);

let x = 10;
let y = 2;
t=x+y;
i=x-y
c=x*y;
d=x/y;
alert(t+'\n'+i+'\n'+c+'\n'+d);

let result = 2**5;
alert(result);

let a=9;
let b=2;
alert(a%b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

const user = {
    name: 'John',
    age: 37,
    isAdmin: true,
   
}
let info=prompt('Какую информацию хотите узнать о пользователе?')

alert(user[info]);

let nameUser= prompt('Ваше имя')
alert('Привет, ' + nameUser+'!')