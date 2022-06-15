const questions = document.querySelectorAll(".question");

questions.forEach(function () {
    const btn = question.querySelector(".question-btn");

    btn.addeventListener("click", () => {
        questions.forEach(function (time) {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        });

        question.classList.toggle("show-text");
    });
});
