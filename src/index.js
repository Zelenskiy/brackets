module.exports = function check(str, bracketsConfig) {
    let b = true;
    let k = [];
    for (let j=0; j<bracketsConfig.length; j++){
      k[j] = 0;
    }

    for (let i=0; i<str.length; i++){
      for (let j=0; j<bracketsConfig.length; j++){
        brackL = bracketsConfig[0];
        brackR = bracketsConfig[1];  
        if (str[i] == brackL){
          k[j]++;
        }
        if (str[i] == brackR){
          k[j]--;
          if (k[j] < 0){
            return false;
          }
        }
      }
      for (let j=0; j<bracketsConfig.length; j++){
        if (k[j] != 0){
          return false;
        }
      }
    }

   
    return true;
}
