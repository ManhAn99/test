///A
//1
function findOppositeNumber(n,inputNumber){
  let a = 0
    for(let i = 0;i<n;i++){
        result = n/2;
        a = inputNumber+result;
        
       
    }
    if(a<n){
        console.log(a)
    }
    else{
        console.log(a-n)
    }
}
findOppositeNumber(10,6)
//2
function merge2String(s1,s2){
    let array1 = [];
    let array2 = [];
    let member1 = ''
    let member2 = ''
    for(let i = 0;i<s1.length;i++){
        array1.push(s1[i])
       
    }
    console.log(array1)
    console.log(member1)

    for(let i = 0;i<s2.length;i++){
        array2.push(s2[i])
        
    }
    console.log(array2)
    console.log(member2)
   let s = ''
       if(array1.length>array2.length){
   for(let i = 0;i<array2.length;i++){
           s =  s +array1[i] +array2[i]
        }
        s = s +array1[(array1.length)-1]
        console.log(s)
    }
        else if(array1.length<array2.length) {
            for(let i = 0;i<array1.length;i++){
                s =  s +array1[i] +array2[i]
             }
             s = s +array2[(array2.length)-1]
             console.log(s)
        }
        else{
            for(let i = 0;i<array1.length;i++){
                s =  s +array1[i] +array2[i]
             }
             
             console.log(s)
        }
    
    
}

merge2String('abc', '0123')

//3
let random = Math.floor(Math.random()*10 +1) 
console.log(random)
let form = document.getElementById('form')
form.onsubmit = (e) =>{
    e.preventDefault()
    let inputUser = form.input.value
    
    for(let i = 0;i<3;i++){
    
        if(inputUser==random){
            alert('You win')
            break
            
        }
        
       
       
       
    }
    
   
    
}



