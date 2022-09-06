

const a = [1 , 2 , 3 ,['husnain ',' azaan ',' altaf '], 3];
const nestedArray = [...a[3]]     ///////////////no copy write /////new arry generate
document.write ( "array" +  " " + " = " + a + "<br>")
document.write( "nestedArray" + " = " + nestedArray  + '<br>' );
//splice (chang array)    /////cut copy
nestedArray.splice(0,1,"ehsan")
changeNestedArray = nestedArray
 document.write('change first nested array ' + ' ' + '=' + ' ' + changeNestedArray  + '<br>')
changeNestedArray.push('sohail','anwar')
add =changeNestedArray
document.write(   'add 2 new names' + ' = ' + ' ' + add)


//object
const students = {
     HUSNIAN : {
     university:'KarachiUniversity',
     dept: 'I S S T',
     seatNumber:'eh2118040',
    },
    ALTAF :{
        university:'S A I M S',
        dept: 'webDevelopment',
        seatNumber:'eh211804sddididd0',
    },
    AZZAN : {
        university:'DAUDUniversity',
     dept: 'patroleum',
     seatNumber:'eh2456618040',}
    
}
console.log(students);

 copyStudents = {...students} 

copyStudents.ALTAF.dept = 'graphicDesigning' ,
copyStudents.HUSNIAN.dept = 'indusUniversity',
copyStudents.AZZAN.seatNumbe

r = 'uigvdioggjig9jdifgjiuhygug',

 console.log( copyStudents);





////objectExampleTwo,


const Students = {
     HUSNIAN : {
     university:{
ONE:"DaudUniversiy",
two:'12213421421',
     },
   
    },

}
newStudentData  ={...Students.HUSNIAN.university.two}, 

console.log(newStudentData );





