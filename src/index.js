module.exports = function check(str, bracketsConfig) {
  let b = true;
  let k = [];
  for (let i=0; i<str.length; i++){
    for (let j=0; j<bracketsConfig.length; j++){
      brackL = bracketsConfig[j][0];
      brackR = bracketsConfig[j][1];  
      if (brackL !== brackR){
        if (str[i] === brackL){
            k.push(brackL)
            // console.log("L--->",brackL);
        } else 
        if (str[i] === brackR){
            // console.log("R--->",brackR);
            let x = k.pop()
            if (x != brackL) return false;
        } 
    } else {
        
    }       
    }
  }     
  if (k.length > 0) return false;
  else   
    return true;
}