module.exports = {
  horizon_options: {
    auto_create_collection: true,
    auto_create_index: true,
    project_name: 'lovli',
    permissions: false, // waiting for additions to permission system atm
    auth: {
      allow_anonymous: true,
      allow_unauthenticated: true,
      token_secret: 'ztYchtc6ejUxWYiVtY6EFUweA+djd/'
    }
  },
  github_oauth_options: {
    path: 'github',
    id: '6018d5a418338b81e8f0',
    secret: 'f6f14cbc0ca8f03c93534bdb5ba1199c9f7d0819',
  },
  title: 'lovli.js | Hello World',
  port: 3000
};
