var myArray=[9,8,5,4,2]
console.log(JSON.stringify(myArray))

myArray.push(34);
var newArrapy=myArray.map(function(num){
return {number: num}
})
console.log(JSON.stringify(newArrapy))
///

var num=myArray.reduce(function(largestValue,b){
largestValue=largestValue||0
if(b>largestValue)
largestValue=b
return largestValue
})

console.log("largestValue==>"+num)
////

var authors=[
{name:"sanjay",section:["Maths","Sports"]},
{name:"raju",section:["Physics"]},
{name:"Suresh", section:["Sports"]}
]

var mylife=authors.filter(function(author){
return author.section.indexOf('Sports')>=0;
}).map(function(sportAuthor){
return sportAuthor.name

});
console.log("SPorts Author==>"+JSON.stringify(mylife))
