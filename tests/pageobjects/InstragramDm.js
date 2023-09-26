class InstagramDm {

    get profile(){
        return $('xpath://android.widget.TextView[@content-desc="Dav"]')
    }
    get sendmessage(){
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText')
    }
    async selectprofile(){
        await this.profile.click();

    }
    async sendmessage(EditText){
        await this.sendmessage.click();
        await this.sendmessage.setValue(EditText);
    }

}
module.exports = new InstagramDm()