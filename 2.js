function generate(n) {
  const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: '~!@#$%^&*()_+{}:"<>?[]',
  };

  const genKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },

    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },

    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },

    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    },
  ];

  let password = "";

  while (n > password.length) {
    let keyToAdd = genKey[Math.floor(Math.random() * genKey.length)];
    password += keyToAdd();
  }

  return password;
}

console.log(generate(18));
