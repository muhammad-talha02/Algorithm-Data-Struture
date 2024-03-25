//? what is Prime Number?
//* Its a number which is greater than 1 and it is only divisible by 1 and itself. Means it can't be divided by any other whole number other than itself or 1.

//? Problem :
//* Check the Given Integar 'n', is it prime or not?

//TODO

function isNumberPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <Math.sqrt(n); i++) {
        if (n % i === 0) {
          console.log(i)
        return false;
      }
    }
    return true;
  }
  
  console.log(isNumberPrime(52));

  //! Big-O = O(n) --- Linear complexity