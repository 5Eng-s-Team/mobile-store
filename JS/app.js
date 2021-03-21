'use strict'
const cart=document.getElementById('');
//Craete a constructor functuion 
const Phone = function (name, price,color,storage,camera,network,src) {
    this.name = name;
    this.price = price;
    this.color=color;
    this.storage=storage;
    this.camera=camera;
    this.network=network
    this.src=src
    //add the object to an array
    Phone.all.push(this);
  };
  Phone.all = [];
  //create 10 phone objects

  function Phones(){
    new Phone('Huawei Enjoy 20se','220$','Crush Green','128GB','13MP','4G','src')
    new Phone('Galaxy A72','550$','Awsome Black','128GB','64MP','4G','src')
    new Phone('Galaxy M31s','470$','Mirage Black','128GB','64MP','4G','src')
    new Phone('Galaxy note 20','790$','Mystic Blue','128GB','64MP','4G','src')
    new Phone('Galaxy A21 Ultra','1150$','Phantom Brown','128GB','108MP','4G','src')
    new Phone('Iphone 12 pro','1180$','Silver Graphite','128GB','12MP','4G','src')
    new Phone('Iphone SE 2020','400$','Red','64GB','12MP','4G','src')
    new Phone('Iphone X','530$','Space Gray','64GB','12MP','4G','src')
    new Phone('Huawei Mate 40E','840$','White','128GB','64MP','4G','src')
    new Phone('Huawei P Smart 2020','250$','Aurora Blue','128GB','13MP','4G','src')
    
}
Phones();



