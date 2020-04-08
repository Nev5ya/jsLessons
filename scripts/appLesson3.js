'use strict';

//Task 2
const taskContainer = document.querySelector('.task-1__container');

for (let i =0; i <= 10; i++){
    if (i === 0){
        taskContainer.insertAdjacentHTML('beforeend', `<p>${i} - это ноль</p>`);
    } else if(i % 2 === 0) {
        taskContainer.insertAdjacentHTML('beforeend', `<p>${i} - это чётное число</p>`);
    } else {
        taskContainer.insertAdjacentHTML('beforeend', `<p>${i} - это нечётное число</p>`);
    }
}

//Task 3

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//Task 4

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price = (product.price * 85) / 100;
});
console.log(products);

//Task 5

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//task 5 sub 2
let prodCompareSum = products1.sort(function (a, b) {
    return a.price - b.price;
});

console.log(prodCompareSum);

//task 5 sub 1
let prodWithPhoto = products1.filter(function (prod) {
    if (prod.photos !== undefined && prod.photos.length > 0){
        return prod;
    }
});
console.log(prodWithPhoto);

//Task 7

function getHill(x) {
    for (let i = 1; i <= 20; i++){
        console.log(x);
        x += "x";
        console.log("");
    }
}

getHill("x");