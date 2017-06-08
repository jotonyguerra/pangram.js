// test the isPangram() function, and print results to the console.

let sentences = [
  { content: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { content: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { content: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { content: 'Not a pangram', pangram: false },
  { content: '', pangram: false }
];

let isPangram = (sentence) => {
  let alphabets = ['a', 'b', 'c','d','e','f','g','h'
  ,'i','j', 'k', 'l', 'm','n', 'o','p','q','r','s','t','u','v','w'
  ,'x','y','z'];
  let result = '';
  alphabets.forEach((alphabet) => {
    if (!sentence.toLowerCase().includes(alphabet)) {
      result = false;
    } else {
      result = true;
    }
  });
  return sentence, result;
};

sentences.forEach((sentence) => {
  console.log(sentence);
  let result = isPangram(sentence.content);
  let correct = (result == sentence.pangram);
  console.log(`isPangram gave a ${correct ? '' : 'in'}correct result for: ${sentence.content}`);
});
