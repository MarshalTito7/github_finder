class GitHub {
    constructor(){
        this.client_id = '70d2cbe3a18e54ad03e6';
        this.client_secret = 'ba900f3096ca9abb4f315258a5b70b8bbb35e3ba';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile, //same as profile : profile
            repos
        }
    }
}