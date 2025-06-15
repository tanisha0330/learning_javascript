let readlineSync = require("readline-sync"); // Import the readline-sync module

let kuler = require("kuler");



let score = 0

let username = readlineSync.question("Enter your name: ");

//welcome message
console.log(kuler(`\n Welcome ${username} to the quizify game!\n`, "#056a89"))



//database object
const database =
{
  
  data: [
    {
      question : `let a={} , b={}
      console.log(a==b)
      console.log(a===b)`,
      options:{
        a: "true false",
        b: "false true",
        c: "true true",
        d: "false false"
        
      },
      correctAnswer: "d" // Correct answer is "false false"
    },
    {
      question : "Object.assign(targer, source) creates which type of copy? ",
      options:{
        a: "Deep copy",
        b: "Shallow copy",
        c: "No copy",
        d: "Contains only the reference of source object"
      },
      correctAnswer: "b",
    },
    {
      question: "is method chaining possible with forEach?",
      options:{
        a: "Yes",
        b: "No",
      }, 
      correctAnswer: "b"
    }
  ]
  
}
//leaderboard object
const leaderboard ={
  data: [
    {
      name: "John",
      score: 1
    },
    {
      name: "riya",
      score: 3
    },
    {
      name: "Rahul",
        score: 2
    }
  ]
}



// main logic of the game
function playGame(userAnswer , correctAnswer)
{
  if (userAnswer === correctAnswer)
  { console.log("the answer is Correct!\n")
    score++}
  else {console.log(kuler("the answer is false ! \n", "#f30808"))

  console.log(kuler(`the correct answer is ${correctAnswer}`, "#056a89"))}
  
}


//creating leaderboard function
function highscorer(leaderboard)
{
  leaderboard.data.push({name: username, score: score})
  let sortedLeaderboard = leaderboard.data.sort((a, b) => b.score - a.score);
  console.log("😊 Leaderboard:")
 for (let i = 0; i < sortedLeaderboard.length; i++) 
   {
     console.log(`${i + 1}. ${sortedLeaderboard[i].name} :  ${sortedLeaderboard[i].score}`);
   }
}






function showQuestionandAnswer(database)
{
  for(let i=0;i<database.data.length;i++)
  {
    console.log(`q${i+1} - ${database.data[i].question}\n`)

    for (let key in database.data[i].options)
      {
        console.log(`${key} - ${database.data[i].options[key]}`)
      }
    let userAnswer = readlineSync.question("Enter your answer: (a/b/c/d)").toLowerCase();

    playGame(userAnswer,database.data[i].correctAnswer)

    
    
    console.log("--------------------------------------")
  }
}

showQuestionandAnswer(database)
console.log(`your score is ${score} points out of ${database.data.length} `); 
highscorer(leaderboard)
