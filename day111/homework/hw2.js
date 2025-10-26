function toCamelCase(s) {
    var result = '';
    var capitalize = false;
    for (var i = 0; i < s.length; i++) {
      if (s[i] === '_') {
        capitalize = true;
      } else {
        result += capitalize ? s[i].toUpperCase() : s[i];
        capitalize = false;
      }
    }
    return result;
  }
  