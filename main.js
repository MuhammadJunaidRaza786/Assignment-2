// No.1

// function add (num1) {
//     return function (num2) {
//         return num1 + num2
// }
// }
// let result = add(5)
// console.log(result(5))

// No.2

// function find (arr , val) {
//     if(arr.length === 0){
//         return false
//     }
//     else if(arr[0] === 4) { 
//         return true
//     }
//     else{
//         return find(arr.slice(1),val)
//     }
// }

// let arr = [1,2,3,4,5,6,7,8]
// console.log(find(arr,6))

//  No.3

// let newpara = document.getElementsByClassName("newpara")
// function para (content) {
//     let para = document.innerHTML = "<p> </p>"
//     let para1 = document.textContent = content
//     return para1
// }

// console.log(para("xnjdxnjkhnkdnuiwhsnwiohncdjkbeuwhdencj"))

// No.4



// function list (item){
//     let unorderlist = document.querySelector("ul")
//     let listitem = document.createElement("li")
//     let listitem1 = document.createTextNode(item)
//     listitem.append(listitem1)
//     unorderlist.appendChild(listitem)
//     return unorderlist

// }

// document.write(list("add"))
// document.write(list ("sub"))

// No.5

// function color (ref,color) {
//     let tag = document.querySelector(ref)
//     console.log(tag)
//     let bgcolor = tag.style.backgroundColor = color
//     return bgcolor
// }

// document.write(color("h6","red"))

// No.6

// function saveObjectToLocalStorage (key, obj) {
//   const serializedObj = JSON.stringify(obj);
//   localStorage.setItem(key, serializedObj);
// }

// No.7

// function getObjectFromLocalStorage(key) {
//     const storedValue = localStorage.getItem(key);

//     if (storedValue === null) {
//         return null;
//     }

//     try {
//         return JSON.parse(storedValue);
//     } catch (error) {
//         console.error("Error parsing JSON for key :" + key +  error);
//         return null;
//     }
// }

// No .8

// function saveObjectToLocalStorage(obj) {
//     Object.keys(obj).forEach(key => {
//       localStorage.setItem(key, JSON.stringify(obj[key]));
//     });
  
//     const newObj = {};
//     Object.keys(localStorage).forEach(key => {
//       newObj[key] = JSON.parse(localStorage.getItem(key));
//     });
//     return newObj;
//   }
  
