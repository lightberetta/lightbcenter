// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};
<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA3tcGigI-NfT0HC7ise9KjqeDSb5MdqM8",
    authDomain: "lightbcenter.firebaseapp.com",
    databaseURL: "https://lightbcenter.firebaseio.com",
    projectId: "lightbcenter",
    storageBucket: "lightbcenter.appspot.com",
    messagingSenderId: "662892844726"
  };
  firebase.initializeApp(config);
</script>
