//*********************************ObjectPart03*************************************

//destructuring of Objects:-

const course = {
    courseName :"js in hindi",
    price:456,
    courseInstructor :"Vishal tiwari",
}

console.log(course.price);
//this the destructuring of Object............
const {courseInstructor:instructor} = course;
console.log(instructor);
