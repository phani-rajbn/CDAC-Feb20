const employees = [
    {"empId" : 123, "empName":"Deepika", "empSalary" : 34000},
    {"empId" : 124, "empName":"Priyanka", "empSalary" : 24000},
    {"empId" : 125, "empName":"Radhika", "empSalary" : 30000},
    {"empId" : 126, "empName":"Sonakshi", "empSalary" : 38000}
];
//Used to iterate or traversing...
employees.forEach((element, index)=>{
  console.log(employees[index] == element)//true
    console.log(element.empName);//element is the item in the array....
  console.log(index)//index of the element in the array...  
})

/////////////////Lambda Expression
function apple(){
    console.log("apple");
} //named method....

//Anonymous method....
let mango = function(){
    console.log("mango")
}

let orange = () => console.log("orange")

const addFunc = (f, s) => f + s;
const res = addFunc(123, 234);
console.log(res);
apple();
mango();
orange();