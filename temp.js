module.exports = {
  convertToFfromC: (temp) => {
    return (temp / (5/9)) + 32
  },
  convertToCfromF: (temp) => {
    return (temp - 32) * (5/9);
  }
}