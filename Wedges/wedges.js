
let arr_of_data_of_Wedges=[


    {image:"https://m.media-amazon.com/images/I/71L18e1TDBL._AC_SX272_.jpg",name:"Steve Madden Idolized Wedge Sandal",price:63.50},
    {image:"https://m.media-amazon.com/images/I/71XdAMH22KL._AC_SX272_.jpg",name:"SOREL Cameron Wedge Sandal",price:79.45 },
    {image:"https://m.media-amazon.com/images/I/71Naih6+b1L._AC_SR1840,1472_.jpg",name:"LifeStride Delta",price:59.50},
    {image:"https://m.media-amazon.com/images/I/81Anw1yUw7L._AC_SR1840,1472_.jpg",name:"SKECHERS Foamies Footsteps - Breezy Feels",price:159.49},
    {image:"https://m.media-amazon.com/images/I/71fqnO7YnTL._AC_SR768,1024_.jpg",name:"Crocs Brooklyn Strappy Low Wedge",price:139.93},
    {image:"https://m.media-amazon.com/images/I/71hBFoO8MqL._AC_SR768,1024_.jpg",name:"Steve Madden Idolized Wedge Sandal",price:148.00},
    {image:"https://m.media-amazon.com/images/I/71+lnxJ27aL._AC_SR768,1024_.jpg",name:"Steve Madden Slinky30 Wedge Sandal",price:128.95},
    {image:"https://m.media-amazon.com/images/I/812h+ddtK5L._AC_SR768,1024_.jpg",name:"Steve Madden Kimmie Espadrille Sandal",price:33.59},
    {image:"https://m.media-amazon.com/images/I/81Fqph86VFL._AC_SX272_.jpg",name:"LifeStride Divine",price:135.90},
    {image:"https://m.media-amazon.com/images/I/810qbZUQ1iL._AC_SR768,1024_.jpg",name:"LAUREN Ralph Lauren Beach bikini",price:145.49},
    {image:"https://m.media-amazon.com/images/I/7134y90ECYL._AC_SX272_.jpg",name:"Clarks Annadel Eirwyn",price:84.69},
    {image:"https://m.media-amazon.com/images/I/71Ap06mu+YL._AC_SR768,1024_.jpg",name:"SOREL Cameron Flatform Sandal",price:67.99},
    {image:"https://m.media-amazon.com/images/I/71DfNwZnneL._AC_SR1840,1472_.jpg",name:"Steve MaddenDefuse Wedge Sandal",price:45.95},
    {image:"https://m.media-amazon.com/images/I/71i6Q5+H91L._AC_SR768,1024_.jpg",name:"SKECHERS Arch Fit - City Catch",price:128.35},
    {image:"https://m.media-amazon.com/images/I/71HJ2YirMKL._AC_SR768,1024_.jpg",name:"TOMS Marison Wedge",price:62.95},
    {image:"https://m.media-amazon.com/images/I/61PMZboqI7L._AC_SR768,1024_.jpg",name:"Dansko",price:127.99},


];
append(arr_of_data_of_Wedges)

function append(response){
    let container= document.querySelector("#grid")
    container.innerHTML=null;
    response.forEach((el)=>{
     let image=document.createElement("img")
     image.src=el.image;
     let name= document.createElement("h3")
     name.innerText=`${el.name}`;
     let price= document.createElement("h4")
     price.innerText=`$${el.price}`;
 
     let div= document.createElement("div")
     div.append(image,name,price)
     div.addEventListener("click",function(){
     storeData(el)
     })
     container.append(div)
    })
   }

 
  let size=document.createElement("div")
  document.querySelector("#Wsize").addEventListener("click",function(){
     let div= document.querySelector("#Wsize")
     size.innerHTML=null
     size.setAttribute("class", "bargrid")
     size.innerHTML=`<div>5</div> <div>5.5</div><div>6</div><div>6.5</div> <div>7</div> <div>7.5</div><div>8</div><div>8.5</div> <div>9</div> <div>9.5</div><div>10</div><div>10.5</div> <div>11</div> <div>11.5</div><div>12</div><div>12.5</div>`
     div.append(size)
  })
 
    
 
 let size1=document.createElement("div")
 document.querySelector("#Msize").addEventListener("click", function(){
     let div= document.querySelector("#Msize")
    
 
     
     size1.innerHTML=null
 
     size1.setAttribute("class", "bargrid")
 
     size1.innerHTML=`<div>5</div> <div>5.5</div><div>6</div><div>6.5</div> <div>7</div> <div>7.5</div><div>8</div><div>8.5</div> <div>9</div> <div>9.5</div><div>10</div><div>10.5</div> <div>11</div> <div>11.5</div><div>12</div><div>12.5</div>`
     div.append(size1)
 })
  let width=document.createElement("div")
  document.querySelector("#Wwidth").addEventListener("click", function(e) {
  
 width.innerHTML=null
 let div= document.querySelector("#Wwidth")
 width.setAttribute("class", "bargrid")
 width.innerHTML=`<div>N</div> <div>M</div><div>W</div><div>2A</div> <div>B</div> <div>D</div>`
 div.append(width)
 })
 let width2=document.createElement("div")
 document.querySelector("#Mwidth").addEventListener("click", function() {
 
 
     let div= document.querySelector("#Mwidth")
  
    
     width2.innerHTML=null
     width2.setAttribute("class", "bargrid")
 
     width2.innerHTML=`<div>N</div> <div>M</div><div>W</div><div>2A</div> <div>B</div> <div>D</div>`
     div.append(width2)
 })
//  let div=document.createElement("div")
//  document.querySelector("#gender").addEventListener("click", function(){
//      let gender=document.querySelector("#gender")
   
//      div.setAttribute("id", "mW")
 
//      div.innerHTML=null
//      div.innerHTML=`<div>Male (180)</div> <div>Female(228)</div`
//      gender.append(div)
//  })
 let brand=document.createElement("div")
 document.querySelector("#brand").addEventListener("click", function(){
 let div=document.querySelector("#brand")
 brand.innerHTML=null;
 brand.innerHTML=`<input type="checkbox" id="brand1" name="brand1">
 <label for="brand1">42 GOLD (1)</label><br>
 <input type="checkbox" id="brand2" name="brand2">
 <label for="brand2">5.11 Tactical (9)</label><br>
 <input type="checkbox" id="brand3" name="brand3">
 <label for="brand3">A.S. 98 (2)</label><br>
 <input type="checkbox" id="brand4" name="brand4">
 <label for="brand4">ACE work Boots (6)</label><br>
 <input type="checkbox" id="brand5" name="brand5">
 <label for="brand5">ADIDAS (1008)</label><br>
 <input type="checkbox" id="brand6" name="brand6">
 <label for="brand6">AGL(456)</label><br>
 <input type="checkbox" id="brand7" name="brand7">
 <label for="brand7">ASTRAL (234)</label><br>
 <input type="checkbox" id="brand8" name="brand8">
 <label for="brand8">ASH (35)</label><br>
 <input type="checkbox" id="brand9" name="brand9">
 <label for="brand9">US POLO (1)</label><br>
 <input type="checkbox" id="brand10" name="brand10">
 <label for="brand10">NIKE (9)</label><br>
 <input type="checkbox" id="brand11" name="brand11">
 <label for="brand11">FM (2)</label><br>
 <input type="checkbox" id="brand12" name="brand12">
 <label for="brand12">Reebok (6)</label><br>
 <input type="checkbox" id="brand14" name="brand14">
 <label for="brand14">ZARA (1008)</label><br>
 <input type="checkbox" id="brand15" name="brand15">
 <label for="brand15">LIBERTY(4456)</label><br>
 <input type="checkbox" id="brand16" name="brand16">
 <label for="brand16">BATA (234)</label><br>
 <input type="checkbox" id="brand17" name="brand17">
 <label for="brand17">COBB (35)</label><br><input type="checkbox" id="brand1" name="brand1">
 <label for="brand1">42 GOLD (1)</label><br>
 <input type="checkbox" id="brand2" name="brand2">
 <label for="brand2">5.11 Tactical (9)</label><br>
 <input type="checkbox" id="brand3" name="brand3">
 <label for="brand3">A.S. 98 (2)</label><br>
 <input type="checkbox" id="brand4" name="brand4">
 <label for="brand4">ACE work Boots (6)</label><br>
 <input type="checkbox" id="brand5" name="brand5">
 <label for="brand5">ADIDAS (1008)</label><br>
 <input type="checkbox" id="brand6" name="brand6">
 <label for="brand6">AGL(456)</label><br>
 <input type="checkbox" id="brand7" name="brand7">
 <label for="brand7">ASTRAL (234)</label><br>
 <input type="checkbox" id="brand8" name="brand8">
 <label for="brand8">ASH (35)</label><br>
 <input type="checkbox" id="brand9" name="brand9">
 <label for="brand9">US POLO (1)</label><br>
 <input type="checkbox" id="brand10" name="brand10">
 <label for="brand10">NIKE (9)</label><br>
 <input type="checkbox" id="brand11" name="brand11">
 <label for="brand11">FM (2)</label><br>
 <input type="checkbox" id="brand12" name="brand12">
 <label for="brand12">Reebok (6)</label><br>
 <input type="checkbox" id="brand14" name="brand14">
 <label for="brand14">ZARA (1008)</label><br>
 <input type="checkbox" id="brand15" name="brand15">
 <label for="brand15">LIBERTY(4456)</label><br>
 <input type="checkbox" id="brand16" name="brand16">
 <label for="brand16">BATA (234)</label><br>
 <input type="checkbox" id="brand17" name="brand17">
 <label for="brand17">COBB (35)</label><br>`
 div.append(brand)
 })
 let cat=document.createElement("div")
 document.querySelector("#cat").addEventListener("click", function(){
     let div=document.querySelector("#cat")
     cat.innerHTML=null;
     cat.innerHTML=`Running Shoes(262)
     Athletic Shoes(46)
     Lifestyle Sneakers(1)`
     div.append(cat)
 })
 let c=document.createElement("div")
 document.querySelector("#color").addEventListener("click", function(){
 let div=document.querySelector("#color")
    c.innerHTML=null;
     c.innerHTML=`<input type="text" id="search" placeholder="Search Color"><br>
     <input type="checkbox" id="c1" name="c1">
     <label for="c1">GOLDEN (11)</label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">BLACK (9)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">BLUE (2)</label><br>
     <input type="checkbox" id="c4" name="c4">
     <label for="c4">GREEN (11)</label><br>
     <input type="checkbox" id="c5" name="c5">
     <label for="c5">ORANGE (9)</label><br>
     <input type="checkbox" id="c6" name="c6">
     <label for="c6">RED (2)</label><br>
     <input type="checkbox" id="c7" name="c7">
     <label for="c7">PINK (11)</label><br>
     <input type="checkbox" id="c8" name="c8">
     <label for="c8">PURPLE (9)</label><br>
     <input type="checkbox" id="c9" name="c9">
     <label for="c9">YELLOW (2)</label><br>
     <input type="checkbox" id="c10" name="c10">
     <label for="c10">GREY (11)</label><br>
     <input type="checkbox" id="c11" name="11">
     <label for="c11">BROWN (9)</label><br>
     <input type="checkbox" id="c12" name="c12">
     <label for="c12">NAVY (2)</label><br>`
     div.append(c)
 })
 let div1=document.createElement("div")
 document.querySelector("#price").addEventListener("click", () => {
     let price=document.querySelector("#price")
     div1.innerHTML=null;
     div1.innerHTML=`$50 and Under(16)<br>
     $100 and Under(161)<br>
     $200 and Under(309)<br>`
     price.append(div1)
 })
 let feature=document.createElement("div")
 document.querySelector("#features").addEventListener("click", () => {
     let div=document.querySelector("#features")
     features.innerHTML=null;
     feature.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">LIGHTWEIGHT (11)</label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">REFLECTIVE (9)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">NON MARKETING (2)</label><br>
     <input type="checkbox" id="c4" name="c4">
     <label for="c4">SEAMLESS(11)</label><br>
     <input type="checkbox" id="c5" name="c5">
     <label for="c5">WATER RESISTANT (9)</label><br>
     <input type="checkbox" id="c6" name="c6">
     <label for="c6">WATERPROOF (2)</label><br>`
     div.append(feature)
 })
 let closure=document.createElement("div")
 document.querySelector("#closures").addEventListener("click",function() {
     let div=document.querySelector("#closures")
     closure.innerHTML=null;
     closure.innerHTML=`<input type="checkbox" id="c1" name="c1">
     <label for="c1">Lace up(298) </label><br>
     <input type="checkbox" id="c2" name="c2">
     <label for="c2">Bungee (2)</label><br>
     <input type="checkbox" id="c3" name="c3">
     <label for="c3">Toggle (2)</label><br></br>`
     div.append(closure)
 })
 let shoe1=document.createElement("div")
 document.querySelector("#shoe").addEventListener("click",function(e) {
     let div=document.querySelector("#shoe")
   shoe1.innerHTML=null;
   shoe1.innerHTML=`<input type="checkbox" id="c1" name="c1">
   <label for="c1">6-10oz(231) </label><br>
   <input type="checkbox" id="c2" name="c2">
   <label for="c2">11-15oz (62)</label><br>`
 div.append(shoe1)
 })
 function storeData(el){
    //  let list=JSON.parse(localStorage.getItem("productinfo"))
    //  list.push(el)
     localStorage.setItem("productinfo",JSON.stringify(el))
     window.location.href="/product_page/product.html"
     }
 import navbar from "../navbar/components/navbar.js"
 document.getElementById("navbar").innerHTML=navbar()
 import footer from "../navbar/components/footer.js"
 document.getElementById("foot").innerHTML=footer()

 let sortBy =document.getElementById("sort")
 sortBy.addEventListener("change",sortData)

 function sortData(){
    let value=sortBy.value;

    if(value=="lth"){
     arr_of_data_of_Wedges.sort(function(a,b){
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
      })
      console.log(arr_of_data_of_Wedges)
      append(arr_of_data_of_Wedges)
      } else {
    arr_of_data_of_Wedges.sort(function(a,b){
        if(a.price<b.price) return 1;
        if(a.price>b.price) return -1;
        return 0;
      })
      console.log(arr_of_data_of_Wedges)
     append(arr_of_data_of_Wedges)
    }
 }