function leftPad(number) {
  const pad = `00${number}`;
  return pad.substring(pad.length - 2, pad.length);
}

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return `${leftPad(minutes)}:${leftPad(seconds)}`;
}

module.exports = { leftPad, formattedTime };
