class GitHub {
    constructor(){
        this.client_id = '70d2cbe3a18e54ad03e6';
        this.client_secret = 'ba900f3096ca9abb4f315258a5b70b8bbb35e3ba';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile //same as profile : profile
        }
    }
}