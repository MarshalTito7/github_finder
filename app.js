// Init github
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call 
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert
            } else {
                // Show profile
                ui.showProfile(data.profile);
            }
            console.log(data);
        })
    } else{
        // Clear profile
    }
});