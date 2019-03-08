
var questionList = [];
questionList.push(new splObj("In which country is Taj Mahal located?",
                        ["India","Canada","China","Japan"],
                        "India",
                        ["Correct answer is Taj Mahal","Congrats !! You selected right answer"]));
function splObj(question, option, answer, reinText){
    this.question = question;
    this.option = option;
    this.answer = answer;
    this.reinText = reinText;
}


function addQuestion(){
    
}

function displayList(){
    console.log('hi');
    for(var i=0;i<questionList.length;i++){
        $('#qtext').text(questionList[i].question);
        
        for(var j=0;j<questionList[i].option.length;j++){
            var singleOption = "<div class='radio'>";
            singleOption+= "<label><input type='radio' name='optradio' value='"+questionList[i].option[j]+"'>"+questionList[i].option[j]+"</label>";
          singleOption+="</div>";
          $('#options').append(singleOption);
        }
        var selectedAns = $("input[name='optradio']:checked").val();
        var feedbackText;
    /*    if(selectedAns == questionList[i].answer){
         feedbackText = "<div class='alert alert-success'>";
         feedbackText += "<strong>Correct!</strong>"+questionList.reinText[1];
         feedbackText +="</div>"
        }else{
            feedbackText = "<div class='alert alert-danger'>";
            feedbackText += "<strong>Incorrect!</strong>"+questionList.reinText[0];
            feedbackText +="</div>"
        }*/

    }
}
(function() {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }else{
      alert('Hi');
  }
})();