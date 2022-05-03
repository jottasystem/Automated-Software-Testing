function normalizePort(val: string) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val;
  } if (port >= 0) {
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || '80');
export default port;
