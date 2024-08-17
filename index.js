//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Michael Kravtsiv
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction of Michael Kravtsiv!</font><br><b>App Version 1.0</b>";
  res.status(200).send(message);
};
