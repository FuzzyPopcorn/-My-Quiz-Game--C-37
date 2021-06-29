class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("pink");
    //write code to show a heading for showing the result of Quiz
    textSize(30)
    text("Result of the Quiz", 360, 40)
    //call getContestantInfo( ) here
  Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
    if(allPlayers !== undefined){
      //write code to add a note here
      fill("Blue")
      textSize(20);
      text("*NOTE:Contestant who answered correct are hightlighted in green color!", 130, 230)
    }

    //write code to highlight contest who answered correctly
    
  }

}
