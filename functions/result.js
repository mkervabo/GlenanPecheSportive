const { google } = require("googleapis");

const auth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "urn:ietf:wg:oauth:2.0:oob"
);

auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });

const sheets = google.sheets({ version: "v4", auth });
const ranges = [
  "1er Manche site!A:J",
  "resultat samedi!C:F",
  "2ème Manche site!A:J",
  "resultat dimanche!C:F",
  "resultat final!A:F"
];
exports.handler = async event => {
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId: "140_Q_ZUeG7TfmV5_yfShMWMUvGZ_F1ue8dKF7w3d2v0",
    range: ranges[parseInt(event.queryStringParameters.range)]
  });

  return {
    body: JSON.stringify(data.values),
    headers: {
      "content-type": "application/json"
    },
    statusCode: 200
  };
};
