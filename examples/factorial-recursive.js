function recursiveFactorial(num) {
    //base case
    if (num === 1 || num === 0) {
        return 1 
    }

    return num * recursiveFactorial(num-1)

}

