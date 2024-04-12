import MySQLConnection from "../db/connect.js";
import Errors from "../error/errors.js";
import TeamController from "./team_controller.js";
import handleError from "../error/error_handler.js";

export default class ClubController {
  static async createClub(req, res) {
    let sqlCreateClub = `INSERT INTO club (club_name) VALUES (
        "${req.body.club_name}"
    );`;

    MySQLConnection.makeQuery(sqlCreateClub, (err, rows, columns) => {
      if (err) {
        console.error(err);
        return handleError(res, Errors[500].InternalServerError);
      }
    });

    let sqlGetClub = `SELECT * FROM club WHERE club_name = "${req.body.club_name}";`;
    MySQLConnection.makeQuery(sqlGetClub, (err, rows, columns) => {
      if (err) {
        console.error(err);
        return handleError(res, Errors[500].InternalServerError);
      } else {
        console.log;
        TeamController.createTeamByName(req, res, "Eboard", rows[0].club_id);
      }
    });
  }
}
