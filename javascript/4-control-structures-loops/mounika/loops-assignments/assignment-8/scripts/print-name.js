const nameArray = [
  ['M   M', ' OOOO', 'U   U', 'N   N', 'I', 'K   K', '  A  '],
  ['MM MM', 'O    ', 'U   U', 'NN  N', 'I', 'K  K ', ' A A '],
  ['M M M', 'O    ', 'U   U', 'N N N', 'I', 'KKK  ', 'AAAAA'],
  ['M   M', 'O    ', 'U   U', 'N  NN', 'I', 'K  K ', 'A   A'],
  ['M   M', ' OOOO', ' UUU ', 'N   N', 'I', 'K   K', 'A   A']
];

for (const row of nameArray) {
  console.log(row.join('  '));
}
