const PROXY_CONFIG = [
  {
    context: [
      "/test",
      "/greedy",
    ],
    target: "http://192.168.0.105:8080/jason",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
