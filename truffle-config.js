module.exports = {
  networks: {
    development: {
      //localhost in port na kerem ganache teče - to preveriš na ganache app
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}