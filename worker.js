import { parentPort, workerData } from "worker_threads";

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(workerData);
parentPort.postMessage(result);
