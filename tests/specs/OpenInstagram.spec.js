const HomePage = require("../pageobjects/home.page")
const { delay } = require("../../helpers/delayHelper")
const InstragramDm = require("../pageobjects/InstragramDm");

describe('Open Instagram', () => {
    it('should open the app', async() => {
        await delay(5000);
        await HomePage.clickButton();
    });
    it('pilih profile instragram di DM', async() => {
        await InstragramDm.selectprofile();
        await sendmessage.sendmessage();
        const message = await InstragramDm.sendmessage();
        await expect(message).toContain("Hallo");
    });
});