import {Page} from "@playwright/test"

export class BasicPage {

    readonly page:Page

    constructor(page:Page){
        this.page = page
    }

}