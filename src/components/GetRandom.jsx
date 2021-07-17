const city = ['sitka', 'kalaupapa', 'jensen', 'patchogue']

function getRandom() {
    let random = Math.floor(Math.random() * city.length)
    return city[random]
  }

export default getRandom