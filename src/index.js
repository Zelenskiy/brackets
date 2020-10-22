module.exports = function check(str, bracketsConfig) {
  let k = str.length / 2;
  while (str !== '' && k > 0){
      for (let j=0; j<bracketsConfig.length; j++){
          let s = bracketsConfig[j][0] +  bracketsConfig[j][1];
          str = str.replace(s, '');
      }
      k--;
  }
  if (str !== '') return false; else return true;
  
}