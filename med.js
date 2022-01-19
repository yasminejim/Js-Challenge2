function forMonth(num){
    const map1 = new Map();
     map1.set(1, "January")
     map1.set(2, "Febuary")
     map1.set(3, "March")
     map1.set(4, "Apri")
     map1.set(5, "May")
     map1.set(6, "June")
     map1.set(7, "July")
     map1.set(8, "August")
     map1.set(9, "September")
     map1.set(10, "October")
     map1.set(11, "November")
     map1.set(12, "December")
     if (map1.has(forMonth)) {
         console.log(map1.get(forMonth))
     }else{
       alert("NUMBER ISN'T THERE")
     }
    }
    var forMonth =prompt('What is your birth month?');
    console.log(map1);