define([], function() {
  return {
    name : 'initialQuiz',
    init : function init(mainDiv, callback){
      var self = this;
      var data = [
        {'question' : "1?" , 'answer' : 2 , 'values' :  [1,2,34,5], 'explanation' : "dav"},
          {'question' : "2?" , 'answer' : 2 , 'values' :  [1,2,34,5], 'explanation' : "dav"},
            {'question' : "3?" , 'answer' : 2 , 'values' :  [1,2,34,5], 'explanation' : "dav"},
              {'question' : "4?" , 'answer' : 2 , 'values' :  [1,2,34,5], 'explanation' : "dav"}
      ];
      this.buidIntroDiv(mainDiv, function(){
        self.buildQuizDiv(mainDiv,data,callback);
      });
    },

    buidIntroDiv : function buidIntroDiv(mainDiv,callback){
      var introQuizDiv = document.createElement('div');
      introQuizDiv.className = 'introQuizDiv';
      introQuizDiv.innerText = "Let's play a small game....";
      mainDiv.appendChild(introQuizDiv);
      setTimeout(function(){
        mainDiv.innerHTML = "";
        callback();
      },1000);
    },

    buildQuizDiv : function buildQuizDiv(mainDiv,data,callback){
      var index = 0 ;

      this.quizDiv = document.createElement('div');
      this.quizDiv.className = 'quizDiv';
      mainDiv.appendChild(this.quizDiv);

      this.displayQuestion(data,index,callback);
    },

    displayQuestion : function displayQuestion(dataArray,index,onComplete){
        var self = this;
        data = dataArray[index];
        this.quizDiv.innerHTML = "";

        var questionDiv = document.createElement('div');
        questionDiv.className = questionDiv.className.concat('questionDiv');
        questionDiv.innerText = data.question;
        this.quizDiv.appendChild(questionDiv);

        var valuesDiv = document.createElement('div');
        valuesDiv.className = valuesDiv.className.concat('valuesDiv btn-group-vertical');
        for(var i = 0 ; i < data.values.length ; i++){
          var value = document.createElement('button');
          value.className = 'valueDiv btn btn-default';
          value.innerText = data.values[i];
          value.onclick = function(e){
              var classToSet = (e.currentTarget.innerText == data.answer)?'quizCorrect':'quizWrong';
              valuesDiv.className = 'valuesDiv ' + classToSet;
              valuesDiv.innerText = data.explanation;
              setTimeout(function(){
              valuesDiv.className = 'valuesDiv btn-group-vertical';
              if(index < (dataArray.length-1)){
                self.displayQuestion(dataArray,index+1,onComplete);
              }else {
                if(onComplete){onComplete();};
              }
            },5000);
          };
          valuesDiv.appendChild(value);
        }
        this.quizDiv.appendChild(valuesDiv);
    }
  };
});
