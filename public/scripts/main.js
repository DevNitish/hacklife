define(['initialQuiz'], function(initialQuiz) {

        return {
            name : 'main',
            mainDiv : null,
            init : function init(){
              this.buildHeader();
              this.buildBody();
            },

            buildHeader : function buildHeader(){
              this.mainHeader = document.createElement('div');
              this.mainHeader.className = 'mainHeader';

              var iconDiv = document.createElement('div');
              iconDiv.className = 'iconDiv';

              var titleDiv = document.createElement('div');
              titleDiv.className = 'titleDiv';
              titleDiv.innerText = "Edu Life....";

              this.mainHeader.appendChild(iconDiv);
              this.mainHeader.appendChild(titleDiv);
              document.body.appendChild(this.mainHeader);
            },

            buildBody : function buildHeader(){
              var self  = this;
              this.mainDiv = document.createElement('div');
              this.mainDiv.id = 'mainContainer';
              document.body.appendChild(this.mainDiv);

              this.buildIntroDiv(function(){
                self.initializeQuiz();
              });
            },

            buildIntroDiv : function buildIntroDiv(callback){
               var introDiv =  document.createElement('div');
               introDiv.id = 'introDivContainer';
               introDiv.className = introDiv.className.concat('centered');

               var videoIframe = document.createElement('iframe');
               introDiv.appendChild(videoIframe);
               videoIframe.src = "https://www.youtube-nocookie.com/embed/cOXttb0Vvoo?rel=0&amp;controls=0&amp;showinfo=0";

               var button = document.createElement('button');
               button.innerText = "To Learn more...";
               button.className = button.className.concat('btn btn-primary');

               introDiv.appendChild(button);
               button.onclick = function(){
                  if(callback){callback();};
               };
               this.mainDiv.appendChild(introDiv);
            },

            initializeQuiz : function initializeQuiz(){
              var self  = this;
              this.mainDiv.innerHTML = "";
              initialQuiz.init(self.mainDiv, function(){
                self.initializeEdu();
              });
            },

            initializeEdu : function initializeEdu(){
              this.mainDiv.innerHTML = "";
            }
        }
});
