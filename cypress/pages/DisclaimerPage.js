import MainPage from "./MainPage"
import CapabilitiesPage from "./CapabilitiesPage"
import PoliticPage from "./PoliticPage"
import CookiesPolicyPage from "./CookiesPolicyPage"

class DisclaimerPage {

getAcceptButton = () => cy.get('button.js--cookie-info-btn') //Accept button
getWelcomeTitle = () => cy.get('div.cookie-info-l div.cookie-info__title p b') //title "Welcome"
getDiscTextInfo = () => cy.get('div.cookie-info__desc p:nth-child(1)') //Our project is for information purposes only.
getWarningSubtitle = () => cy.get('div.cookie-info__desc p:nth-child(5)') //subtitle "Warning!"
getDiscList = () => cy.get('div.cookie-info__desc ul') //disclaimer list (5 items)
getValuePrivacySubtitle = () => cy.get('div.cookie-info__desc p:nth-child(9)')//We Value Your Privacy
getLinkWrite = () => cy.get('div.cookie-info__desc a[href="mailto:info@am-builder.com"]') //link "Write"
getLinkCapabilities = () => cy.get('div.cookie-info__desc a[href="https://am-builder.com/dictionary/nashi-vozmozhnosti/"]') //link "capabilities"
getLinkTermsOfUse = () => cy.get('div.cookie-info__desc a[href="https://am-builder.com/politic/"]') //link "Terms of use"
getLinkPrivacyCookiesPolicy = () => cy.get('div.cookie-info__desc a[href="https://am-builder.com/cookies/"]') //link "Privacy and cookie policy."
getCookieImage = () => cy.get('img.cookie-info__bg-img') // cookies image


clickAcceptButton() {
    this.getAcceptButton().click()
    return new MainPage()
}

clickLinkCapabilities() {
    this.getLinkCapabilities().click()
    return new CapabilitiesPage()
}

clickLinkTermsOfUse() {
    this.getLinkTermsOfUse().click()
    return new PoliticPage()
}
clickLinkPrivacyCookiesPolicy() {
    this.getLinkPrivacyCookiesPolicy().click()
    return new CookiesPolicyPage()
}

}

export default DisclaimerPage;