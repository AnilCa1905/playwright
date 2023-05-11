
exports.Homepage = class Homepage {
constructor(page){
    this.page = page;
    this.$title = page.locator('(//a[text()="Online Studio"])[3]')
    this.$START_COMPLIMENTARY_MEMBERSHIP = page.getByRole('link', { name: 'START COMPLIMENTARY MEMBERSHIP' });
    this.$onlineStudio = page.locator('#menu-mini-left-menu-1').getByRole('link', { name: 'Online Studio' })
}

async openUrl(){
    await this.page.goto('https://stage.stage_user:Tracy2022@tracyanderson.com/');
}

async START_COMPLIMENTARY_MEMBERSHIP(){
    await this.$START_COMPLIMENTARY_MEMBERSHIP.click();
}
async onlineStudio(){
await this.$onlineStudio.click();
}
}