const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const geography = [
  {
    question: "Câu 1: Trong quá trình thanh tra lao động, bước nào sau đây là quan trọng nhất trong việc thu thập thông tin của đối tượng?",
    answerA:
      "A. Bước chuẩn bị",
    answerB:
      "B. Bước tiến hành thanh tra",
    answerC:
      "C. Bước kết thúc thanh tra",
    answerD:
      "D. Bước kết luận thanh tra",
  },
  {
    question: "Câu 2: Trong quy trình thanh tra lao động, bước chuẩn bị quan trọng như thế nào cho các bước tiếp theo?",
    answerA:
      "A. Là bước quan trọng nhất",
    answerB:
      "B. Là bước cuối cùng trong hoạt động thanh tra",
    answerC:
      "C. Là bước cuối cùng trong hoạt động thanh tra",
    answerD:
      "D. Tất cả các đáp án trên",
  },
  {
    question: "Trong quy trình thanh tra lao động, bước tiến hành thanh tra có vai trò quan trọng cho bước nào sau đây?",
    answerA:
      "A. Bước kết luận thanh tra",
    answerB:
      "B. Bước kết thúc thanh tra",
    answerC:
      "C. Bước chuẩn bị thanh tra",
    answerD:
      "D. Tất cả các đáp án trên ",
  }
];


const render = (exams) => {
  const content = exams.map((exam, index) => {
    console.log(exam.question);
    return `
            <div class="question">${exam.question}</div>
            <div class="row">
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerA"></input>
                    <label for="answerA">${exam.answerA}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerB"></input>
                    <label for="answerB">${exam.answerB}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerC"></input>
                    <label for="answerC">${exam.answerC}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerD"></input>
                    <label for="answerD">${exam.answerD}</label>
                </div>
            </div>
            </div>
        `;
  });
  content.push('<button class="button">Nộp bài</button>')
  $(".content").innerHTML = content.join("");
};

const handleExam = (examName) => {
    if(examName === 'dia') render(geography)
    if(examName === 'su') render(history)
};