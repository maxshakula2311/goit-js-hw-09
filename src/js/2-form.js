const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    form.email.value = formData.email.trim();
    form.message.value = formData.message.trim();
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    
    if (name === 'email' || name === 'message') {
        formData[name] = value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert('Fill all fields please!');
        return;
    }
    
    formData.email = formData.email.trim();
    formData.message = formData.message.trim();
    
    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);
    
    formData.email = '';
    formData.message = '';
    
    form.reset();
});
