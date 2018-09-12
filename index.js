function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
  }

 function logShout(string) {
  console.log(shout('hello'))
 }

  function logWhisper(string) {
  console.log(whisper('HELLO'))
  }

function sayHiToGrandma(string) {
if (string === whisper(string)) return ('I can\'t hear you!');
else if ('HELLO') return ('YES INDEED!');
else if ('I love you, Grandma.') return ('I love you, too.');
}


