//++++++++++++++++++++++++++++++++Filtet+++++++++++++++++++++++++++++++++++++++++++

//As we know tha foreach loop do not return the values so for that we use the "filter"

const arr = [1,2,3,4,5,6,7,8,9,10]
// const values = arr.filter( (num) =>num>5 );
// console.log(values);//output:- [ 6, 7, 8, 9, 10 ]

const values = arr.filter( (num) => {
    return num>6
} );
// console.log(values);

//-------------------------------------------------------------

//Using for each loop how can we do that :

const newNum = [] 

arr.forEach( (num) =>{
    if(num>4){
        newNum.push(num)
    }
} )
console.log(newNum);//[ 5, 6, 7, 8, 9, 10 ]
//---------------------------------------------------------------------------------
//copy the example from github:-

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);