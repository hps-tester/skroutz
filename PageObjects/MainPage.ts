import { BasicPage } from "./BasicPage";
import { Page } from "@playwright/test";

export class MainPage extends BasicPage{
    

    constructor(page:Page){
        super(page)

    }

}