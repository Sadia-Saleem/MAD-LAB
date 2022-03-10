// console.log("hello");//printing
// console.log('hello world')//('') allowed for string ,,, (;) not essential for terminating statment
//var a;
//var a=true;//redeclaration allowed
//var a;
//var a = [1,2,18,"ali raza",true];
//a=18;
//a='sadia';//reassignment allowed
//let b;
//let b =3//redeclaration not allowed
// b=3;
// b="ali"//reassignment allowed (updating values)
//const c = 10;//initialization .... 
// const c ;//{declaration invalid}
// c = 10;
//console.log(a);
// let str = "my name is kamran";//operations on string
// console.log(str[str.toUpperCase()]);// function for converting string to upper case//undefined why ???????????????????????????????????????????????????????????????
//console.log(typeof(a));//function for finding datatype of variable
//var $=2;//variable name like this valid
// var _=45;//variable name like this valid
// console.log(_);
// var num = new Number;//object type(data types in .js considered as objects)
// //num = 8;
// console.log(num)
// console.log(typeof(num));
// var arr = new arr;//arr not a constructor (error)
// var arr = [];
// console.log(arr);
// console.log(typeof(arr));
// var arr1 =[1,2,18,"ali raza",true]//array declaration
// console.log(arr1);
// console.log(typeof(arr1));
// let arr = new Array();//empty array creation //why arr2?????????????????????????????????????????????????????????????
// let arr2 = [];
// //console.log(arr2);
// arr[0] = 0;//adding elements//error??????????????????????????????????????????
// arr[1] = 1;
// arr[2] = 2;
// arr["1"] = 30;
// arr.push("pushed");//error????????????????????????????????????????????//
// arr.push([3, 4, 5]);
// arr["name"] = "kamran";
// // console.log(arr2);
//  b = [1, 2, , 4];//accesses array index//errors???????????????????????????????????????????????????????
// console.log(b[2]);//if full whole then why undefined
// let obj1 = {//== vs === //object creation understanding#############################################################
//     name: "kamran",
//   };
//   let obj2 = {
//     name: "kamran",
//   };
//   let obj3 = obj1;
//   //console.log(obj1.name === obj2.name);//output in boolean data type
//   let comp =   console.log(obj1.name === obj2.name);
//   console.log(typeof(comp));//why undefined?????????????????????????????????????????????????????????????????????
// function myfunc(par1, par2) {//function// what is use of (/)????????????????????????????????????/
//     console.log("parameters \
//        are :" + par1 + " and " + par2);
//   }
//  let a = myfunc;//why not direct calling??????????????????????????????????????????????????/
// a(1,2);
// let obj = {//object creation understanding#############################################################
//     name: "Kamran",
//     age: 30,
//     message: function () {
//       console.log("greeting");
//     },
//   };
//   let obj1 = {
//     name: "Kamran",
//     age: 30,
//     message: function () {
//       console.log("greeting");
//     },
//   };
//   obj1.name = "Ali";
//   obj2 = obj;
//   obj2.name = "omer";
//   console.log(obj.name);
// let num = 4;//explicit conversion
// console.log(num)
// console.log(typeof(num));
// let converted=num.toString();
// console.log(num)
// console.log(typeof(converted));
// //check logic of concatination and conversion accordingly
// // let concat = num+converted;
// // console.log(concat);
// // let sub = num-converted;
// // console.log(sub);
// let mul= num*converted;
// console.log(mul);
// let arr =[1,2,3,4]
// console.log(arr);
// let arr2 = arr//pass by referance
// arr[2]="30"
// console.log(arr);//access array
// console.log(arr[2]);//access index
// var num =20
// function changer ()
// {
//     var num =30
//     console.log("inside : " + num);
// }
// changer ()
// console.log("outside : " + num);
// changer ()
// let num =20
// function changer ()
// {
//     let num =30
//     console.log("inside : " + num);
// }
// changer ()
// console.log("outside : " + num);
// changer ()
// var num =20
// function changer ()
// {
//     let num =30
//     console.log("inside : " + num);
// }
// changer ()
// console.log("outside : " + num);
// changer ()
// let num =20
// function changer ()
// {
//     var num =30
//     console.log("inside : " + num);
// }
// changer ()
// console.log("outside : " + num);
// changer ()
// const array1 = [1,4,9,16]//map function
// map1 = array1.map(x=>x*2);
// console.log(map1);
// const words = ["spray","limit","elite","exuberant","distruction","present"];
// const result = words.filter(words=>words.length>6);
// console.log(result);
// let my_filter = function (num) {
//     return num.length >= 2;
//   };
// let my_map = function (num) {
//     return num.length;
//   };
//   let my_name = ["abcd", "ab","d", "a", "cd"];
//   let output = my_name.filter(my_filter);
//   let op = my_name.map(my_map);
//   console.log(output);
//   console.log(op);
// let smaller = function (x)
// {
//     return x.length<2;
// }
// let greater = function (x)
// {
//     return x.length>=2;
// }
// let appender = function (x)
// {
//     return x+="greater";
// }
// let my_name = ["abcd", "ab","d", "a", "cd"];
// //let output = my_name.filter(greater).map(appender);
// let output = my_name.filter(smaller)
// console.log(output);