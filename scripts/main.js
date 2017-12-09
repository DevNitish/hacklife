define([/*"./cart"*/], function() {

        return {
            name : 'main',
            init : function(){
              var mainDiv = document.createElement('div');
              mainDiv.id = 'main-app-conatiner';
              document.body.appendChild(mainDiv);
            }
        }
});
