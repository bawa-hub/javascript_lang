function solution(s) {
  var c = s[0];
  if (c == c.toUpperCase()) {
    // please fix condition
    return "upper";
  } else if (c == c.toLowerCase()) {
    // please fix condition
    return "lower";
  } else if (!isChar(s)) {
    // please fix condition
    return "digit";
  } else {
    return "other";
  }
}

function isChar(s) {
  return !!n.trim() && n * 0 == 0;
}
