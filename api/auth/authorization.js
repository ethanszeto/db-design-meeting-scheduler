import jwt from "jsonwebtoken";

export default class Authorize {
  static async loggedIn(req, res, next) {
    if (req.cookies.token) {
      const payload = jwt.verify(req.cookies.token, process.env.TOKEN_KEY);
      if (payload) {
      } else {
        //bad token
      }
    } else {
      //no token
    }
  }

  /*

  Meetings Bookings Page:

  SQL select to go through teams of a user to find their clubs.
  Display this as a selection menu (fetch api)

  SQL select to go through the club selected and get its teams
  Display this as a selection menu (fetch api)

  Allow user to then go to the booking interface, and then select a set of meetings to book.
  The user will then submit, and we will use fetch api to generate the meetings.

  Have a single page selection, where you can choose the club you are booking for
  and then you can choose the team in that club which you are booking for.
  Then, you can book for the team. 

---------------------------

  Join a Club Page:

  SQL Select all clubs that the user is part of.

  SQL Select all clubs the user is not part of and display all.

  Allow them to choose a club to join, make that an endpoint with the body data being the club to join
  */
}