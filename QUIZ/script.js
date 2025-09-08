const questions = [
    {
        question: "کیا رمضان میں عمرے کا ثواب حج کے برابر ملتا ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا روزہ قیامت کے دن روزے دار کی سفارش کرے گا؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا روزہ داروں کے لیے جنت میں خصوصی دروازہ بنایا گیا ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا رمضان کے روزے آئندہ سال تک سرزد ہونے والے بڑے گناہوں کا کفارہ بنتے ہیں؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: " کیا رمضان کے پورے مہینے ہر رات اللہ سبحانہ تعالٰی لوگوں کو جہنم سے نجات دلاتے ہیں؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "رمضان پانے کے باوجود مغفرت نہ حاصل کرنے والے کے لیے سزا ہلاکت ہے؟ ",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا روزے صرف امت مسلمہ پر فرض کیے گئے ہیں؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: "کیا روزے کا مقصد صرف بھوک اور پیاس برداشت کرنا ہے؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: "کیا روزے کا مقصد تقویٰ حاصل کرنا ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا نیا چاند دیکھنے پر دعا پڑھنا مسنون عمل ہے",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا روزے کی نیت صرف دل سے  ہو جاتی ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا فرض روزے کی نیت فجر سے پہلے کرنا ضروری ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا نفل روزے کی نیت دن میں زوال کے بعد بھی کی جا سکتی ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا سہری کھانے میں برکت ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "اگر اذان ہو جائے تو سہری فوراً ترک کر دینا چاہیے؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: "کیا نمک سے روزہ افطار کرنا سنت سے ثابت ہے؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: "افطار کرتے وقت مخصوص دعا `ذهب الذماو والبتلت العروق و ثبت الاجر ان شاء الله` پڑھنا مسنون عمل ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا روزہ افطار کرانے والے کا اجر روزے دار کے برابر ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا نماز تراویح کی سنت رکتیں آٹھ ہیں لیکن غیر سنت رکتوں کی کوئی حد نہیں؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا خواتین نمازِ تراویح مسجد میں جا کر ادا  کرسکتی ہیں؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا ایک، تین یا پانچ وتر پڑھنا مسنون عمل ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا نمازِ مغرب کی طرح دو تشہد اور ایک سلام سے تین وتر ادا کرنا درست ہے؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: "کیا ایک رات میں قرآن کریم ختم کرنا (شبینہ)سنت ہے؟",
        answers: [
            { Text: "جی ہاں", correct: false},
            { Text: "جی نہیں", correct: true},
        ]
    },
    {
        question: "کیا فرض نمازوں کے علاوہ نفل نمازوں میں قرآن کریم دیکھ کر تلاوت کرنا جائز ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "کیا شریعت کی طرف سے دی گئی رخصت پر عمل کرنا افضل ہے؟",
        answers: [
            { Text: "جی ہاں", correct: true},
            { Text: "جی نہیں", correct: false},
        ]
    },
    {
        question: "پچھلے رمضان کے چھوٹے ہوۓ روزے کی قضا آئندہ رمضان سے پہلے کسی بھی وقت ادا کی جا سکتی ہے۔",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "مرنے والے کے قضا روزوں کے لیے اس کے وارث کو روزہ رکھنا چاہیے",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "بھول چوک سے کھا لینا روزہ توڑ دیتا ہے",
        answers: [
            { Text: "صحیح", correct: false},
            { Text: "غلط", correct: true},
        ]
    },
    {
        question: "روزے کے دوران غیبت کرنا، جھوٹ بولنا، گالی دینا اور لڑائی جھگڑا کرنا جائز ہے",
        answers: [
            { Text: "صحیح", correct: false},
            { Text: "غلط", correct: true},
        ]
    },
    {
        question: "روزے کا کفارہ ایک غلام آزاد کرنا ہے۔",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "روزے کا کفارہ دو ماہ کے مسلسل روزے رکھنا بھی ہو سکتا ہے",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "روزے کا کفارہ ساٹھ مساکین کو کھانا کھلانے سے بھی ہو سکتا ہے۔",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "قصداًکھانے پینے سے روزہ نہیں ٹوٹتا۔",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "نفل روزے جہنم سے بچانے والی ڈھال ہیں",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "ہر سال شوال کی چھ نفل روزے رکھنے کا ثواب عمر بھر کے روزوں کے برابر ہے",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "کسی بیمار یا سفر کرنے والے پر بھی روزہ فرض ہے",
        answers: [
            { Text: "صحیح", correct: false},
            { Text: "غلط", correct: true},
        ]
    },

    {
        question: "روزہ ادا نہ کرنے کی صورت میں قضا واجب نہیں ہے",
        answers: [
            { Text: "صحیح", correct: false},
            { Text: "غلط", correct: true},
        ]
    },
    {
        question: "کے شروع ہوتے ہی جنت کے دروازے کھول دیے جاتے ہیں اور جہنم کے دروازے بند کر دیے جاتے ہیں-___",
        answers: [
            { Text: "رمضان", correct: true},
            { Text: "ذوالحجہ", correct: false},
        ]
    },
    {
        question: "روزے داروں کے لیے جنت میں خصوصی دروازہ بنایا گیا ہے جس کا نام _______ ہے۔ ",
        answers: [
            { Text: "صراط", correct: false},
            { Text: "ریان", correct: true},
        ]
    },
    {
        question: "محرم کے مہینے میں روزہ رکھنے کی فضیلت _______ کے بعد سب سے افضل ہے",
        answers: [
            { Text: "رمضان ", correct: true},
            { Text: "شوال", correct: false},
        ]
    },
    {
        question: "ایامِ بیض کی تاریخیں کون سی ہیں؟",
        answers: [
            { Text: "تیرہ ،چودہ ،پندرہ", correct: true},
            { Text: "ایک ،دو ،تین ", correct: false},
        ]
    },
    {
        question: "ذوالحجہ کے پہلے نو روزے _______ ہیں",
        answers: [
            { Text: "فرض", correct: false},
            { Text: "مستحب", correct: true},
        ]
    },
    {
        question: "کے روزے رکھنا منع ہے-____",
        answers: [
            { Text: "عید الفطر اور عید الضحی", correct: true},
            { Text: "سموار اور جمعرات", correct: false},
        ]
    },
    {
        question: "اعتکاف کے لیے _______ کی نماز کے بعد اعتکاف کی جگہ بیٹھنا مسنون ہے",
        answers: [
            { Text: "مغرب", correct: false},
            { Text: "فجر", correct: true},
        ]
    },
    {
        question: "لیلۃ القدر کی مدت متعین نہ کرنے میں _______ ہے",
        answers: [
            { Text: "امت کے لیے تجسس", correct: false},
            { Text: "امت کی بھلائی", correct: true},
        ]
    },
    {
        question: "صدقہ فطر کا مقصد روزے کی حالت میں سرزد ہونے والے گناہوں سے خود کو پاک کرنا ہے",
        answers: [
            { Text: "صحیح", correct: true},
            { Text: "غلط", correct: false},
        ]
    },
    {
        question: "فرض صدقہ اعلان کے ساتھ ادا کرنا چاہیے جبکہ نفل صدقہ پوشیدہ ادا کرنا افضل ہے",
        answers: [
            { Text: "غلط", correct: false},
            { Text: "صحیح", correct: true},
        ]
    },
    {
        question: "عید الفطر کی نماز کے لیے جانے سے پہلے کوئی میٹھی چیز کھانا _______ ہے",
        answers: [
            { Text: "واجب", correct: false},
            { Text: "سنت", correct: true},
        ]
    },
    {
        question: "عید الفطر کی نماز کا وقت _______ کی نماز کا وقت ہے",
        answers: [
            { Text: "اشراق", correct: true},
            { Text: "فجر", correct: false},
        ]
    },
    {
        question: "عیدین کی نماز میں بارہ تکبیریں ہیں جو _______ عمل ہیں",
        answers: [
            { Text: "فرض", correct: false},
            { Text: "مسنون", correct: true},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML = "Start Again";
    nextbutton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();