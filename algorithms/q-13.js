/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const data = [
    { key: "I", value: 1 },
    { key: "V", value: 5 },
    { key: "X", value: 10 },
    { key: "L", value: 50 },
    { key: "C", value: 100 },
    { key: "D", value: 500 },
    { key: "M", value: 1000 },
  ];
  const dataSubtract = [
    { key: "IV", value: 4 },
    { key: "IX", value: 9 },
    { key: "XL", value: 40 },
    { key: "XC", value: 90},
    { key: "CD", value: 400 },
    { key: "CM", value: 900 },
  ];

  let newValue = s;
  let result = 0;
  for (let subtract of dataSubtract) {
    if (newValue.toString().includes(subtract.key)) {
      result += subtract.value;
      newValue = newValue.replace(subtract.key, '');
    }
  }
  for (let str of newValue) {
    const num = data.filter((f) => f.key === str).map((m) => m.value)[0];
    result += Number(num);
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));
