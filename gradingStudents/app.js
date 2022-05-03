'use strict';

function gradingStudents(grades) {
    const arr = [];
    grades.forEach(num => {
        let a = num.toString();
        let a_1 = a.substring(0, 1);
        let a_2 = a.substring(1, 2);

        if (parseInt(a) >= 38) {
            if (a_2 < 5) {
                let b = 5 - parseInt(a_2);
                if (b < 3) {
                    a = `${a_1}5`;
                }
            } else {
                let a_3 = (parseInt(a_1) + 1) * 10;
                let c = a_3 - parseInt(a);
                if (c < 3) {
                    a = a_3;
                }
            }
        }

        arr.push(parseInt(a));
    });

    return arr;
}