
$(document).ready(function () {
    $('select').formSelect();
    $('.modal').modal();
    const form = $("#surveyForm");
    const name = $("#name");
    const photo = $("#photo");
    const questionOne = $("#questionOne");
    const questionTwo = $("#questionTwo");
    const questionThree = $("#questionThree");
    const questionFour = $("#questionFour");
    const questionFive = $("#questionFive");
    const questionSix = $("#questionSix");
    const questionSeven = $("#questionSeven");
    const questionEight = $("#questionEight");
    const questionNine = $("#questionNine");
    const questionTen = $("#questionTen");
    const btn = $("#formSubmit");

    function validateQuestions() {
        let formValid = false;
        
        if(questionOne.val() && questionTwo.val() && questionThree.val() && questionFour.val() && questionFive.val() && questionSix.val() && questionSeven.val() && questionEight.val()  && questionNine.val() && questionTen.val() ){
            formValid = true
        }
        if(formValid){
            let allquestions = `${questionOne.val()},${questionTwo.val()},${questionThree.val()},${questionFour.val()},${questionFive.val()},${questionSix.val()},${questionSeven.val()},${questionEight.val()},${questionNine.val()},${questionTen.val()}`
            // addFriend(combineAnswers(allquestions))
            console.log("Passed")
        }
        else{
            $("#error").text("Please Check that you answered all the questions");
            console.log("failed")
        }

    }

    function combineAnswers(answers) {
        return {
            "name": name.val().trim(),
            "photo": photo.val().trim(),
            "questions": answers.trim()
        }

    };
    function addFriend(answers) {
        $.post('/api/addFriend', answers, function (res) {
            $("#modalContent").empty
            console.log(res.name)
            console.log(res.photo)
            console.log("friend found")
            let newDiv = $("<div>")
            let char = $("<h2>").text(res.name)
            let charImg = $("<img>").attr("src", res.photo).addClass("modalImages")
            newDiv.append(char, charImg)
            $("#modalContent").append(newDiv)
            $('.modal').modal('open')
            $("#rest").on("click", function (event) {
                event.preventDefault();
                $('#surveyForm').trigger("reset");
            })
        });
    }

    btn.on("click", function (event) {
        event.preventDefault()
        console.log("click")
        validateQuestions();
    })

});
