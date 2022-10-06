const lowerCaseWords = (mixedArray) => {


    return new Promise((resolve, reject) => {


        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {

            const validValeus = mixedArray.filter((element) => typeof element === "string")
                .map((items) => items.toLowerCase());

            resolve(validValeus);

        } else {

            reject("Opps! Value is not valid..");
        }

    });
};


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then((value) => console.log(value))
    .catch((error) => console.log(error)
    );