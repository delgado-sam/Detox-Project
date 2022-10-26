describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen with welcome message', async () => {
        await expect(element(by.id('welcomeScreen'))).toBeVisible();
        await expect(element(by.id('welcome'))).toBeVisible();
    });
    
    it('should try incorrect username and password', async () => {
        await element(by.id('username')).typeText('Sam');
        await element(by.id('password')).typeText('123');
        await element(by.id('logInButton')).tap();
        await expect(element(by.text('Invalid username or password, please try again.'))).toBeVisible();
    });

    it('should try correct username and password', async () => {
        await element(by.id('username')).typeText('AppleJuice');
        await element(by.id('password')).typeText('123!');
        await element(by.id('logInButton')).tap();
        await expect(element(by.id('homeScreen'))).toBeVisible();
        await expect(element(by.id('hiName'))).toBeVisible();
        await expect(element(by.id('peaceSign'))).toBeVisible();
    });
});
