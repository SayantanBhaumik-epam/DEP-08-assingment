function findMaxVowelWordOptimized() {
    let sentence = prompt("Enter a sentence");
    let words = sentence.split(" ");
    let maxVowel = 0;
    let maxVowelWord = "";

    words.forEach((word) => {
        let vowelCount = 0;
        for (let char of word) {
            if ('aeiouAEIOU'.includes(char)) {
                vowelCount++;
            }
        }

        if (vowelCount > maxVowel) {
            maxVowel = vowelCount;
            maxVowelWord = word;
        }
    });

    console.log(maxVowelWord);
}

findMaxVowelWordOptimized();