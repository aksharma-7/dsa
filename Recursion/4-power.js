// function that accepts base and exponent. Function returns power of bas to the exponent

const pow = (base, exp) => {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (base === 0) return 0;

  return base * pow(base, exp - 1);
};

console.log(pow(2, 4));
