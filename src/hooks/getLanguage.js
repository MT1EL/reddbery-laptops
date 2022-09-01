export default function getLanguage(e) {
  let response;
  let languagesArr = [];
  let text = e.replace(/\s/g); //read input value, and remove "space" by replace \s
  let toCheck = [...text];
  //Dictionary for Unicode range of the languages
  const langdic = {
    arabic: /[\u0600-\u06FF]/,
    persian: /[\u0750-\u077F]/,
    Hebrew: /[\u0590-\u05FF]/,
    Syriac: /[\u0700-\u074F]/,
    Bengali: /[\u0980-\u09FF]/,
    Ethiopic: /[\u1200-\u137F]/,
    "Greek and Coptic": /[\u0370-\u03FF]/,
    Georgian: /[\u10A0-\u10FF]/,
    Thai: /[\u0E00-\u0E7F]/,
    english: /^[a-zA-Z]+$/,
    //add other languages her
  };
  /* უნდა ვცადო მერე თუ შევძლებ რომ დავამატო ასოს წაშლაზე არეიდან ის ენა რომ ამოიღოს */
  Object.entries(langdic).forEach(([key, value]) => {
    // loop to read all the dictionary items if not true
    if (toCheck.length === 0) {
      response = [];
    }
    toCheck.forEach((item) => {
      if (value.test(item) === true && !languagesArr.includes(key)) {
        //Check Unicode to see which one is true
        languagesArr.push(key.toString());
        // setLanguage((prev) => [...prev, key.toString()]);
        response = languagesArr;
      }
    });
  });
  return response;
}
