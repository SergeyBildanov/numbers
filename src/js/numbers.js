export default function numberChanger(numberStr){
  let array = numberStr.split(/[^\w^+]/);
  if(array[0] === "8"){
    array[0] = "+7";
  }
  return "".concat(...array.filter(item => item !== ''));
}