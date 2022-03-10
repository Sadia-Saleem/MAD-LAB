// let add = function(x,y)//normal function
// {
//     return x+y ;
// }
// let add = (x,y)=>    //arrow function
// {
//     return x+y ;
// }
// let add = (x,y)=>   x+y ;   //arrow function in case of single return statment
// let add = (x)=>console.log(x) ;  //arrow function in case of single parameter single return statment
// add(7);
// let add = (x)=>     //arrow function in case of single parameter single return statment another way
// {
//    return console.log(x)  
// }  ;  
// add(72);
// let add = x=>console.log(x);  //arrow function in case of single parameter single return statment another way
// add(7);
//console.log(add(4,5))
//#################################################### ambiguity ########################################################################
//output should b {value:x} an object
// let add = (x)=>     //arrow function in case of obj //fine
// {
//    return {"value":x} 
// }  ; 
// console.log(add(5))
// let add = (x)=>  ( {"value":x}) ; //confusion b/w brackets of obj litral and function then use () around obj litral
// console.log(add(56))
//arrow function in case of this function 
// let x = 20
// let add = function()//normal function in case of this keyword
// {
//     this.x=0;
//     console.log("value at step 1 : " + this.x)
//     this.increment = function (x)
//     {
//         // this.x=5;
//         this.x=x;
//         let self=this
//         console.log("value of x inside increment is : " + this.x)
//         // setTimeout(increment(),1000)//or
//         // setTimeout(function(){
//         //    // this.x="hello";
//         //     console.log("value of x inside timeout is : " + self.x)
//         // },1000)
//         setTimeout(()=>{
//             // this.x="hello";
//              console.log("value of x inside timeout is : " + this.x)
//          },1000)
//         //console.log("value of x inside increment is : " + this.x)   
//     }
// } 
// let a=new add()//0
// a.increment (5);

//let x = 20
//add();

//console.log("value at step 2 :" + this.x) //refer out of scope 
// let x = 20
// let add = function()//normal function in case of this keyword ###############################
// {
//     x=0;
//     console.log("value at step 1 : " + x)
// } 
// //let x = 20
// add();
// let sumNumbers = function(a,b,c)
// {
//     return a+b+c;
// }
//reset operator###############################################################################
/*let sumNumbers = function(...params)//reset operator
{
    console.log(params);
}
console.log(sumNumbers(1,4,7));*/
//the spread operator##########################################################################
/*let arr1 = [1,2,3]
let arr2 = [5,6,7]//instead of pushing elemets onebyone use spread function
//arr2 = [5,6,7, ...arr1]
//arr2 = [5,...arr1,6,7,]
//console.log(arr2)
//if we want to combine these arrays into saperate array
console.log([...arr1, ...arr2])*///[] array litrals used//...arr1 ye aar1 k elements ko and ...arr2 ye aar2 k elements ko spread kar dy ga
//Destructuring Assignment########################################################################
/*function getstudents()
{
    return ["sadia","ali","hadi"]//array of students
}
let students = getstudents()
//if we want to assign students individually to different variables (destruction assignment useful)
// let a = students[0]//method one, fails when there are large number of values
// let b = students[1]
// let c = students[2]
//let[a,b,c]=students//method 2 (destruction assignment ) agar students me values ziada r variable kam to phely phely walii values assign ho jaen gi
//let[a,b,c,d]=students//d=undefined
let[a,b,c,d=0]=students//assigning default value of d is possible
console.log(a)
console.log(b)
console.log(c)
console.log(d)*/
//for...of loop#####################################################################################
/*let arr1 = [1,2,3,4,5]
for (let values of arr1)
{
    values+=5
    console.log(values)
}
let arr1 = [1,2,3,4,5]
for (const values of arr1)//if we want loop k andar value modify na ho use const keyword with variable instead of let
{
    values+=5
    console.log(values)//error (assignment to constant variable)
}*/
//for each loop#####################################################################################
/*array.forEach(element => {
    
});*/
//function used to create objects####################################################################
/*function student(name)
{
    this.stdname=name
}
let obj1 = new student("sadia")
console.log(obj1.stdname)*/
//class################################################################################################
//above function as a class
// let student = class //used as an expression
// //class student
// {
//     // constructor()
//     // {
//     //     console.log("constructor called")
//     // }
//     constructor(stdname)
//     {
//         console.log(" constructor called")
//         //this.stdname=stdname//property name 
//     }
//     //getter and setter
//     get stdname()
//     {
//         console.log("getter called")
//         return this._stdname;//return
//     }
//     /*set stdname(name)
//     {
//         console.log("setter called")
//         this._stdname=name
//     }*/
//     //normal simple function // set values
//     setValues (name)
//     {
//         this._stdname=name 
//     }
// }
// let obj1 = new student("sadiasaleem")
// obj1.setValues("SADIA")
// console.log(obj1._stdname)
//console.log(obj1.stdname)
//########################################################################################################
/*function person(pname)
{
    this.name = pname
}
function student(name)//student of type person
{
    person.call(this ,name)//1st argument context pass karty k kis ny  call kia
}
let std = new student("sadia")
console.log(std.name)*/
//Template literals#########################################################################################
let a =10
let b =20
//console.log("the sum of "+a +" and "+b+" is :"+(a+b))//if move on next line error us k lie \ laga k next line py move karna parta
//solution of above problem ##################################################################################
console.log(`the sum of
 ${a}  and
  ${b} is : ${a+b}`)//(backticks) support multiline so also give output of multilines,,, support new lines 
  //another case ,,, if want to show html code on web page on run time //database se output aai r us output ko page py elements tag k andar
  //show krna cha rae
let arr = ["sadia","ali","raza"]
//i want k html page py 3no as a new line h1 tag k andar display hon
for (student of arr)
{
    document.writeln(`<h1>${student} </h1>`)
}

