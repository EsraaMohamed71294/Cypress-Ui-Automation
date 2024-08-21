import Main_Base_PO from "./Main_Base_PO";

class Tutor_Profile_PO extends Main_Base_PO {

    elements = {
        Educator_Name          : () => cy.get('.title-header__title'),
        Num_of_likes           : () => cy.get('.num-of-likes'),
        Percentage_of_likes    : () => cy.xpath('//*[@class="title-header__sub-title title-header__likes"]//span[3]'),
        Title_Description      : () => cy.get('.title-header__description'),
        Current_Classes        : () => cy.xpath('//*[@class="section-title"]//h2'),
        Grade_Title            : () => cy.xpath('//*[@class="section-content"]//h3'),
        Subject_Name           : () => cy.xpath('//*[@class="class-card__info__container"]//h4//span[1]'),
        Seats_Number           : () => cy.xpath('//*[@class="class-card__info__container"]//h4//span[2]'),
        Session_Price          : () => cy.xpath('//*[@class="class-card__info__container"]//h4//span[3]'),
        Availabe_Sessions      : () => cy.xpath('(//*[@class="class-card__data"])[1]//li[1]//h4'),
        Available_Sessions_Num : () => cy.xpath('(//*[@class="class-card__data"])[1]//li[1]//h4//b'),
        Remaining_Seats        : () => cy.xpath('(//*[@class="class-card__data"])[1]//li[2]//h4'),
        Remaining_Seats_Num    : () => cy.xpath('(//*[@class="class-card__data"])[1]//li[2]//h4//b'),
        Details_Button         : () => cy.xpath('(//*[@class="btn btn-black btn-outline"])[1]'),
        Enroll_Button          : () => cy.xpath('(//*[@class="class-card__cta"])[1]//button'),
        Sold_out_Button        : () => cy.xpath('(//*[@class="class-card__cta"])//span[@class="badge badge-grey"]')
    }    
}