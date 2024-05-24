import { Page } from "@playwright/test";
import {MainPage} from "./MainPage"

export class PageManager{
    readonly mainPage : MainPage


    constructor(page:Page){
        this.mainPage = new MainPage(page)
    }



}