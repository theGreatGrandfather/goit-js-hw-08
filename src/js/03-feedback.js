import throttle from 'lodash.throttle';

const FFS = 'feedback-form-state';

let feedbackData = {
    email: '',
    message:'',
};
const feedbackForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');
console.log('feedbackForm', feedbackForm)
console.log('userEmail', userEmail)
console.log('userEmail', userMessage)

const onEmailChange = e=>{
    console.log('e', e.target.value)
    console.log('feedbackData', feedbackData)
    feedbackData.email =  e.target.value;
    localStorage.setItem(FFS, JSON.stringify(feedbackData));
    
}
const onMessagChange = e=>{
    console.log('e', e.target.value)
    console.log('feedbackData', feedbackData)
    feedbackData.message =  e.target.value;
    localStorage.setItem(FFS, JSON.stringify(feedbackData));
}

const loadLocalStorage = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

const response = loadLocalStorage(FFS);

response ? userEmail.value = response.email : "";
response ? userMessage.value = response.message :"";

const onFeedbackFormSubmit = (e) =>{
    e.preventDefault();
    console.log('e', e)
    console.log('feedbackData', feedbackData);
    e.currentTarget.reset();
}

userEmail.addEventListener('input', throttle(onEmailChange, 500));
userMessage.addEventListener('input', throttle(onMessagChange, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
