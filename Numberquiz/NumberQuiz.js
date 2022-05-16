exports.guessnumber = function (req, res, vals) {
  var score = 0;
  let hidden = parseInt(vals.get("quiznumber"));
  let youranswer = parseInt(vals.get("youranswer"));
  let prevscore = parseInt(vals.get("score"));
   
  const nums = {
    pi: [3, 1, 4, 1, 5],
    fib: [1, 1, 2, 3, 5],
    sq: [1, 4, 9, 16, 25],
    pr: [2, 3, 5, 7, 11],
    pow: [1, 2, 4, 8, 16],
  };
  const answer = [9, 8, 36, 13, 32];
  let quiznumber = 0;
  score = score + prevscore;

  if (!hidden) {
    hidden = 1;
    score = 0;

    displayQuestion(req, res, nums.pi, score, hidden);
  } else {
    switch (hidden) {
      case 1:
        hidden++;
        if (youranswer == answer[0]) {
          score++;
          displayQuestion(req, res, nums.fib, score, hidden);
        } else {
          displayQuestion(req, res, nums.fib, score, hidden);
        }
        break;
      case 2:
        hidden++;
        if (youranswer == answer[1]) {
          score++;
          displayQuestion(req, res, nums.sq, score, hidden);
        } else {
          displayQuestion(req, res, nums.sq, score, hidden);
        }
        break;
      case 3:
        hidden++;
        if (youranswer == answer[2]) {
          score++;
          displayQuestion(req, res, nums.pr, score, hidden);
        } else {
          displayQuestion(req, res, nums.pr, score, hidden);
        }
        break;
      case 4:
        hidden++;
        if (youranswer == answer[3]) {
          score++;
          displayQuestion(req, res, nums.pow, score, hidden);
        } else {
          displayQuestion(req, res, nums.pow, score, hidden);
        }
        break;
      case 5:
        hidden++;
        if (youranswer == answer[4]) {
          score++;
          displayfnalMesg(req, res, score, answer.length);
        } else {
          displayfnalMesg(req, res, score, answer.length);
        }
        break;
      default:
        break;
    }
  }
};
function displayQuestion(req, res, list, score, hidden) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write('<head><meta charset="utf-8"/>');
  res.write("<title>Quiz Game</title>");
  res.write("</head>");
  res.write("<body>");
  res.write('<form action="http://localhost:8080/">');
  res.write("<label name=quiznumber>");
  res.write(`<input type="hidden" name="quiznumber" value=${hidden} />`);
  res.write("<div>");
  res.write("<p> your score is :");
  res.write(`<input type="text" name="score" value=${score} readonly/>`);
  res.write("</p>");
  res.write("<p>Guess the next number in the sequence.</p>");
  res.write("<p>");
  res.write(String(list));
  res.write("</p>");
  res.write("<label>your answer:</label>");
  res.write('<input type="text" name="youranswer"/>');
  res.write("<br/>");
  res.write('<input type="submit" value="Submit"/>');
  res.write("</div>");
  res.write("</form>");

  res.write(
    "<a href='startquiz.html'>Start over</a>"
  );
  res.write("</body>");
  res.write("</html>");
  return res.end();
}
function displayfnalMesg(req, res, score, ans) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write('<head><meta charset="utf-8"/>');
  res.write("<title>Quiz Game</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<div>");
  res.write("<h1> The Number Quiz");
  res.write("</h1>");
  res.write("<p>your current score is</p>");
  res.write(`${score}`);
  res.write("<p> You have completed the Number Quiz, with a score of ");
  res.write(`${score}`);
  res.write("out of ");
  res.write(`${ans}`);
  res.write("</p>");
  res.write(
    "<a href='startquiz.html'>Start over</a>"
  );
  res.write("</div>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
}
