class HomePage {
    get buttonOthers(){
        return $('xpath://android.widget.Button[@content-desc="Tidak ada pesan yang belum dibaca"]')
    }

    async clickButton(){
        await this.buttonOthers.click();
    }
    
}

module.exports = new HomePage()