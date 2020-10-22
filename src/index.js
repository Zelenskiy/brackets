module.exports = function check(str, bracketsConfig) {
    let b = true;
    let k = [];
    // for (let j=0; j<bracketsConfig.length; j++){
    //   k[j] = 0;
    // }

    for (let i=0; i<str.length; i++){
      for (let j=0; j<bracketsConfig.length; j++){
        brackL = bracketsConfig[0];
        brackR = bracketsConfig[1];  
        if (true){//brackL !== brackB){
          if (str[i] == brackL){
            k.push(brackL)
          }
          if (str[i] == brackR){
            let x = k.pop()
            if (x != brackR){
              return false;
            }
          }
        } else {

        }
      }
      if (k.length > 0) return false;
    }
    if (k.length > 0) return false;
   
    return true;
}
