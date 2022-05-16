function kangaroo(x1, v1, x2, v2) {

    for (x1, x2; x1, x2 <= 1000000; x1 += v1, x2 += v2) {
        if (x1 == x2) {
            return 'YES'
        }
    }
    return 'NO'

}