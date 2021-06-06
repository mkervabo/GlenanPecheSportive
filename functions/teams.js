const { google } = require("googleapis");

const auth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "urn:ietf:wg:oauth:2.0:oob"
);

auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });

const sheets = google.sheets({ version: "v4", auth });

exports.handler = async () => {
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: "140_Q_ZUeG7TfmV5_yfShMWMUvGZ_F1ue8dKF7w3d2v0",
    range: "'RÉSULTAT'!B:C"
  });

  return {
    body: JSON.stringify(data.values),
    headers: {
      "content-type": "application/json"
    },
    statusCode: 200
  };
};
