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
  title: 'lovli.js | Hello World',
  port: 3000
};
