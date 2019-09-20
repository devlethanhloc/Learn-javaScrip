// /**
//  * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
//  * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
//  */
// // Kiểu dữ liệu	  Falsy value
// // Boolean	      false
// // Number	        0 và NaN
// // String	        ''
// // null         	null
// // undefined    	undefined


function isTruthy(x) {
    if(x)
      return true;
    else return false;
  }
  
  
  
  console.log(isTruthy(true));
  console.log(isTruthy('0'));
  console.log(isTruthy([]));
  console.log(isTruthy(1));
  console.log(isTruthy(false));
  console.log(isTruthy(0));
  console.log(isTruthy(NaN));
  console.log(isTruthy(undefined));
  console.log(isTruthy(''));
  console.log(isTruthy(null));