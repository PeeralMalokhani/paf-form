/*

function convertor(){
    let input=prompt('enter your price in rupees');
    let dollar=180;
    let result=input/dollar;
    console.log(result);
    let h1=document.createElement('h1');
    let textanswer=document.createTextNode(result)
    h1.setAttribute('id','result');
    h1.appendChild(textanswer);
    document.getElementById('heading').appendChild(h1);
    

}
function reset(){
    document.getElementById('convertor').remove();
}

*/

// diameter
function Circum(){
    const PI=3.142;
    let circumference=prompt('enter the value of circum ference');
    let radius=circumference/2*PI;
    console.log(radius);
    let h1=document.createElement('h1');
    let result=document.createTextNode('Radius = \n'+radius+' cm');
    h1.setAttribute('id','radius');
    h1.appendChild(result);
document.getElementById('heading').appendChild(h1);

let diameter=2*radius;
console.log(diameter);
let create=document.createElement('h1');
let result1=document.createTextNode('diameter = '+diameter+' cm');
create.setAttribute('id','diameter');
create.appendChild(result1);
document.getElementById('heading').appendChild(create);

circumference=2*PI*radius;
console.log(circumference);
let create1=document.createElement('h1');
let resul2=document.createTextNode('circumference = '+ circumference +' cm');
create1.setAttribute('id','circumference');
create1.appendChild(resul2);
document.getElementById('heading').appendChild(create1);

let area=PI*radius*radius;
console.log(circumference);
let create2=document.createElement('h1');
let resul3=document.createTextNode('Area = '+ area +' cm');
create2.setAttribute('id','area');
create2.appendChild(resul3);
document.getElementById('heading').appendChild(create2);


}
function fun(){  
    document.getElementById("Circum").reset();  
  }   