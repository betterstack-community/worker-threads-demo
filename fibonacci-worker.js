import workerpool from "workerpool";

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export { fibonacci };

workerpool.worker({
  fibonacci: fibonacci,
});
