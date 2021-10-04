//#1 Фильтрация строки

const string = "Привет! Как дела?";

const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];


const getVowels = (string) => {
   let result = '';
   for (var i=0; i < string.length; i++ ) {
      if (vowels.includes(string[i])) {
         result +=string[i];
      }
      
   }
   return result;
}

      console.log(getVowels(string));

//#2 Выборка объекта

      const workers = [
         {"name":"John","salary":500},
         {"name":"Mike","salary":1300},
         {"name":"Linda","salary":1500}];

         const getWorthyWorkers = (arr) => {
            const result = [];
            arr.forEach((el) => {
               if (el.salary > 1000) {
                  result.push(el.name);
               }
            })

            return result
         }
   
         console.log(getWorthyWorkers(workers));

      //#3 Анализ строки

      const path = "/users/download/index.html"

      const isHtml = (string) => typeof string && string.endsWith('.html')

      console.log(isHtml(path))


//#1 Фильтрация массива
      
      const mixedArray = [3,13,74,14,66,15,22,4];
      
      const isEven = (num) => !(num % 2);
      

     const filterArray = (arr, func) => arr.filter((el) => func(el));

      console.log(filterArray(mixedArray, isEven));