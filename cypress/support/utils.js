//url navigations

export const goToUrl = function (route){
    return `${Cypress.env("base_url")}${Cypress.env(route)}`
}