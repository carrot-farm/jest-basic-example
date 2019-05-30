// ===== 더하기
function sum(a, b) {
  return a + b;
}

// ===== 배열의 합
function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
