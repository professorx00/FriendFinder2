
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
    let allquestions = []
    function combineAnswers(answers) {
        return {
            "name": name.val().trim(),
            "photo": photo.val().trim(),
            "questions": answers.trim()
        }
    
    };
    function addFriend(answers) {
        $.post('/api/addFriend', answers, function (res) {
            console.log(res.name)
            console.log(res.photo)
            console.log("friend found")
            let newDiv = $("<div>")
            let char = $("<h2>").text(res.name)
            let charImg = $("<img>").attr("src",res.photo).addClass("modalImages")
            newDiv.append(char,charImg)
            $("#modalContent").append(newDiv)
            $('.modal').modal('open')
            form.empty();
        });
    }
    
    btn.on("click", function (event) {
        event.preventDefault()
        console.log("click")
        allquestions = `${questionOne.val()},${questionTwo.val()},${questionThree.val()},${questionFour.val()},${questionFive.val()},${questionSix.val()},${questionSeven.val()},${questionEight.val()},${questionNine.val()},${questionTen.val()}`
        let test = combineAnswers(allquestions)
        addFriend(test)
    })



});
