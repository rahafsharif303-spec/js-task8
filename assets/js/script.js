/////1 reverse string
function reversString(str){
let newstr= str.split("")
let revstring= newstr.reverse()
let finstring=newstr.join("")
        console.log(finstring)
}
reversString("javascript")
///palindrome
function palindromeStr(str){
        let str1=str.split( "")
        str1.reverse()
        for(let i=0;i<str.length;i++){
                if (str[0]==str[str.length-1]){
                        console.log(true)
                }
                else console.log(false)
        }
}
palindromeStr("hello")
palindromeStr("madam")

//////3.maximum number
let numbers=[1, 5, 3, 9, 2]

let maxNumber = numbers[0]
for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] > maxNumber){
                maxNumber = numbers[index] ;
        }
}
                console.log(maxNumber)

///4 FACTORIAL
function calc (num){
let factorial=1
for(let i=num; i>1;i--){
factorial*=i}
console.log("rseultFactorial=" ,factorial)}       
calc(5)
//5 prime
function prime(number){
        if (number<=1)return false;
        if(number===2) return true
        if(number%2==0)return false
        let boundary=Math.sqrt(number)
        for(let i=3;i<boundary;i+=2){
                if(number%i==0)return false
        }

return true}
console.log(prime(7))
console.log(prime(10))




//6  remove duplicate
function removeDuplicat(array){
        let noRepeat= array.filter((item,index)=> (array.indexOf(item)===index)) 
console.log( "array without repeat",noRepeat)}
removeDuplicat([1, 2, 2, 3, 4, 4, 5])


//7 missing number
let arr=[]
for(let i=0;i<54;i++){
        arr[i]=i+1
}
for(let i=54;i<99;i++){
        arr[i]=i+2
}

function missing(arr){
let m
for(let i=0;i<arr.length-1;i++){
        if((arr[i+1]-arr[i])>1){
        m=arr[i]+1
        
        }}

return m
}
console.log(missing(arr))


//8 uppercase
let text="hello world from javascript"
let result= text.split(' ')
let result2 = result.map(word => word.charAt(0).toUpperCase()+word.slice(1))
let upperCaseResult=result2.join( ' ')
console.log(upperCaseResult)
//9 Anagram check
function  anagram (str1,str2){
        let nstr1= str1.split("")
        nstr1.sort()
        let nstr2= str2.split('')
        nstr2.sort()
        let newStr1=nstr1.join()
        let newStr2=nstr2.join()

        // str2.split("").sort().join()
        if(newStr1==newStr2){
                console.log("true")}

        else console.log("false")}

anagram("listen","silent")
anagram("hello","world")



//10 Chunck an array
function subArray(array,size){
        let result=[ ]
        let chuncked=[]
        for(let i =0 ; i < array.length ; i+=size){
                let Chunck = array.slice(i,i+size)
                result.push(Chunck)
}
console.log(result)
console.log(JSON.stringify(result))}
        subArray([1,2,3,4,5,6,7],3)
        //11 pair
        function pair( array,target){
                for(let number of array){
                        let complement = target-number
                        let x=array.includes(complement)
                        if(x===true){
                                console.log([complement,number])
                                break
                        }
                }
        }
        pair([1,2,3,4,8,6,7],10)
//12 rotate
function rotateArray(array,n){
        let x=array.indexOf(n)
        let newArray=[ ]
newArray=array.slice(x+1).concat(array.slice(0,x+1))
console.log(JSON.stringify(newArray))}
rotateArray([1,2,3,4,5],2)


        //13 intersection
        function intersection(array1,array2){
                let res=[]
        for(let num1 of array1){
                for( let num2 of array2){
                        if (num1==num2){
                                res.push(num1)
                        
                        }
                }

        }
        console.log(res)
        }
        intersection([1,2,3,4],[3,4,5,6])
        //13 طريقة ثانية
        function compArrays(array1,array2){
        let newArray=array1.concat(array2)
        let freqItem= newArray.filter((item,index)=>newArray.indexOf(item)!=index)
        console.log(freqItem)
        }
        compArrays([1,2,3,4],[3,4,5,6])
        //14 // 14. Count Character Frequency in a String
        function chartFreq (str){
                let charCount={}
                for(let char of str){
                charCount[char]=(charCount[char]||0)+1}
                console.log(charCount)        }
                chartFreq("hello")
//15. Flatten a Nested Array
        function flattenarray(array){
                let flatten = array.flat(Infinity)
                console.log(flatten)
        }
        flattenarray([1, [2, 3], [4, [5, 6]]])
        // 16. Find the Longest Word in a Sentence
        function longestWord(str){
                let words=str.split(' ')
                let theLongest = " "
                for( let index=0; index<words.length;index++){
                        if(words[index].length>theLongest.length){
                                theLongest=words[index]
                        }
                }
                console.log(theLongest)
        }
        longestWord("The quick brown fox jumped over the lazy dog")

        // 17. Find the Most Frequent Element in an Array
        function findMostFreq( array){
                let frequency ={}
                let maxCount=1
                let mostFrequentItem=0
                for(let item of array){
                        frequency[item]=(frequency[item]||0)+1
                        if(frequency[item]>maxCount){
                                maxCount=frequency[item]
                        
                                mostFrequentItem=item
                        }
                }
                console.log(mostFrequentItem)
        
        }
        findMostFreq([1,3,2,3,4,2,2,2,5,])
        findMostFreq(['a', 'b', 'c', 'a', 'b', 'a'])
        //18
        function repstr(word){
        
                let nword=word.split("")
                let x=nword.find(item=>nword.indexOf(item)===nword.lastIndexOf(item))||null
                console.log(x)}

        repstr("swiss")
        repstr("aabb")
        //19 sort
        function sortArrayOfObject(array){
                for (let age of array){
                array.sort((a,b)=>a.age-b.age)
                }
                // console.log(array)
                console.log(JSON.stringify(array))

        }
        sortArrayOfObject([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }])





        //20
        function arrayWithoutFreq(array1,array2){
        let combin=array1.concat(array2)
        let nofreq=combin.filter(item=>combin.indexOf(item)===combin.lastIndexOf(item))
                console.log(nofreq)}


        arrayWithoutFreq([1,2,3],[3,5,6])