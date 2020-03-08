const argsString = (message, args) => {
  let resultMessage = message;
  for (let i = 0; i < args.length; i += 1) {
    resultMessage = resultMessage.replace('{}', args[i]);
  }
  return resultMessage;
};

export { argsString };
