class GitHub {
  constructor() {
    this.client_id = '6ab2e69af86e1bffdab9';
    this.client_secret = '7d72d170d247e2b90eea6b5a4e428035b6789d5a';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?clint_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
  }
}
