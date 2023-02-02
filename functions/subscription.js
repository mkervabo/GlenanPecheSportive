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

  const womenNum =
    Number(body.mousse.kind === "F") + Number(body.patron.kind === "F");

  await sheets.spreadsheets.values.append({
    spreadsheetId: "140_Q_ZUeG7TfmV5_yfShMWMUvGZ_F1ue8dKF7w3d2v0",
    range: "Inscription2023!A1",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          body.equipage,
          body.bateau,
          `${body.patron.nom} ${body.patron.prenom}`,
          `${body.mousse.nom} ${body.mousse.prenom}`,
          `${body.patron.email}`,
          `${body.patron.portable}\n${body.patron.fixe}`,
          `${body.mousse.email}`,
          `${body.mousse.portable}\n${body.mousse.fixe}`,
          `site`,
          `${140 + body.repas * 25}`,
          `${body.repas}`,
          "",
          body.patron.t_shirt,
          body.mousse.t_shirt,
          (body.mousse.minor ? "JUNIOR " : "") +
            ["", "MIXTE", "FEMININE"][womenNum],
          `${womenNum}`,
          body.moteur,
          body.longueur,
          body.immatriculation,
          body.assurance1,
          body.assurance2,
          JSON.stringify(body)
        ]
      ]
    }
  });

  return {
    body: "Ok",
    statusCode: 200
  };
};
