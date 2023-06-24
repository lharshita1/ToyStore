var products=[
 {
    image_name:'./toy1.jpg',
    name:'teddy',
    price:'INR',
    type:'#toddle'
},
{
    image_name:'./images.png',
    name:'teddy',
    price:'INR',
    type:'#kid'
},
{
    image_name:'./toy2.jpg',
    name:'teddy',
    price:'INR',
    type:'#infant'
},
{
    image_name:'./toy3.jpg',
    name:'teddy',
    price:'INR',
    type:'#toddle'
},
{
    image_name:'./toy4.jpeg',
    name:'teddy',
    price:'INR',
    type:'#kid'
},
{
    image_name:'./toy5.jpeg',
    name:'teddy',
    price:'INR',
    type:'#infant'
}
];
var prod ='';

prod=` 
<div class="toy">
    <img src="${products[0].image_name}">
        <h3>${products[0].name}</h3>
        <h5>${products[0].price}</h5>
</div>
<div class="toy">
    <img src="${products[1].image_name}">
        <h3>${products[1].name}</h3>
        <h5>${products[1].price}</h5>
</div>
<div class="toy">
    <img src="${products[2].image_name}">
        <h3>${products[2].name}</h3>
        <h5>${products[2].price}</h5>
</div>
<div class="toy">
    <img src="${products[3].image_name}">
        <h3>${products[3].name}</h3>
        <h5>${products[3].price}</h5>
</div>
<div class="toy">
    <img src="${products[4].image_name}">
        <h3>${products[4].name}</h3>
        <h5>${products[4].price}</h5>
</div>
<div class="toy">
    <img src="${products[5].image_name}">
        <h3>${products[5].name}</h3>
        <h5>${products[5].price}</h5>
</div>
`;

document.getElementById('all_products').innerHTML=prod;