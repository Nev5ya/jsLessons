'use strict';

//Task 1
function getDigitsOfNumber(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999){
        console.log("Число должно быть целым и от 0 до 999!");
        return {};
    }

    return {
        units: number % 10,
        tens: Math.floor(number / 10) % 10,
        hundreds: Math.floor(number / 100)
    }
}
const number = +prompt("Введите число от 0 до 999:");
console.log(getDigitsOfNumber(number));

//Task 1.1
//Es5

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// Product.prototype.make25PercentDiscount = function () {
//     this.price = (this.price * 75)/ 100;
// };
//
// let product1 = new Product('Shirt', 80);
// console.log(product1);

//Es 6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(){
        this.price = (this.price * 75)/ 100;
    }
}

let product1 = new Product('Pants', 350);
console.log(product1);
product1.make25PercentDiscount();
console.log(product1);


//Task 1.2
//Es 5

// function Post(author, date, text) {
//     this.author = author;
//     this.date = date;
//     this.text = text;
// }
//
// Post.prototype.edit = function () {
//     this.text = prompt('Введите текст:');
// };
//
// let post1 = new Post('user', 'date');
// console.log(post1);
// post1.edit();
// console.log(post1);
//
//
//
// function AttachedPost(author, date, text) {
//     Post.call(this, author, date, text);
//     this.highlighted = false;
// }
//
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
//
// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
// };
//
// const attPost = new AttachedPost('user2', 'date2');
// console.log(attPost);
// attPost.makeTextHighlighted();
// console.log(attPost);

//Es6

class Post {
    constructor(author, date, text) {
        this.author = author;
        this.date = date;
        this.text = text;
    }

    edit(){
        this.text = prompt('Введите текст:');
    }
}

const post = new Post('user', 'date');
console.log(post);
post.edit();
console.log(post);



class AttachedPost extends Post{
    constructor(author, date, text) {
        super(author, date, text);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        this.highlighted = true;
    }
}

const postAtt = new AttachedPost('user1', 'date1', 'someText');
console.log(postAtt);
postAtt.makeTextHighlighted();
console.log(postAtt);
