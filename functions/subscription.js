const { google } = require("googleapis");

const auth = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "urn:ietf:wg:oauth:2.0:oob"
);

auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });

const sheets = google.sheets({ version: "v4", auth });

exports.handler = async event => {
  const body = JSON.parse(event.body);

  await sheets.spreadsheets.values.append({
    spreadsheetId: "1WgKRev-mVc-fGo8FvoyfNAYre6sqTCIcTBdA6ZmMeGc",
    range: "A1",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          body.equipage,
          `${body.patron.nom} ${body.patron.prenom}`,
          `${body.mousse.nom} ${body.mousse.prenom}`,
          `${body.patron.email}\n${body.patron.portable}`,
          `${body.mousse.email}\n${body.mousse.portable}`,
          `site`,
          `${130 + body.repas * 20}`,
          body.repas,
          "",
          body.patron.t_shirt,
          body.mousse.t_shirt,
          "",
          `${Number(body.mousse.kind === "F") +
            Number(body.patron.kind === "F")}`,
          body.moteur,
          body.longueur
        ]
      ]
    }
  });

  return {
    body: "Ok",
    statusCode: 200
  };
};
