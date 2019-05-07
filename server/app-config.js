var config = {
  
    siteTitle: "OAuth App",
    dbLocation: "mongodb://localhost/oauth-app",
  
    googleConfig: {
      appID: "256484107452-8gj6m3blt5p1imomu80kiaalc3pq5s4s.apps.googleusercontent.com",
      appSecret: "WhOMQd83qQ1AtAPyHxVALE9t",
      callbackUrl: "http://localhost:3000/auth/login/google/callback"
    },

    jwtSecret: "myLittlePony"
  
  }
  
  module.exports = config;