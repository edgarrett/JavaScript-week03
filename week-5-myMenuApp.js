// week5-myMenuApp
// create the Pages Class
class Pages {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
0
    describe() {
    return `${this.name} plays ${this.description}.`;
    }
}

// create the Website Class
class Website {
    constructor(name) {
        this.name = name;
        this.Pages = [];
    }

    // create the addPages Class
    addPages(Pages) {
        if (Pages instanceof Pages) {
            this.Pages.push(Pages);
        }   else {
            throw new Error(`You can only add an instance of Pages. Argument is not a Pages: ${Pages}`);
        }
    }

    describe() {
        return `${this.name} has ${this.Pages.length} Pages.`;
    }
}

// create Menu Class. Show Website Menu Options
class Menu {
    constructor() {
        this.Websites = [];
        this.selectedWebsite = null;
    }
    
    // show Main Menu Switch Options
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createWebsite();
                    break;
                case '2':
                    this.viewWebsite();
                    break;
                case '3':
                    this.deleteWebsite();
                    break;
                case '4':
                    this.displayWebsites();
                    break;
                default:
                    selection = 0;
                }
                selection = this.showMainMenuOptions();
            }
            
            2// Goodbye
            alert('Its Been Fun, But We Are Done. See Ya!'); 
    }
    
    // show Main Menu Options
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create A New Website
            2) View A Website
            3) Delete A Website
            4) Display All Websites
        `);
    
    }
    
    // show Website Menu Options
    showWebsiteMenuOptions(WebsiteInfo) {
        return prompt(`
        0) Back
        1) Create a New Page
        2) Delete a Page
        -------------------
        ${WebsiteInfo}
    `);
    }
    
    // display a Website
    displayWebsites() {
        let WebsiteString = '';
        for (let i = 0; i < this.Websites.length; i++) {
        WebsiteString += i + ') ' + this.Websites[i].name + '\n';
        }
        alert(WebsiteString);
    }

    // create a Website
    createWebsite() {
        let name = prompt('Enter a name for the new Website:');
        this.Websites.push(new Website(name));
    }
    
    // view a website
    viewWebsite() {
        let index = prompt('Enter the index of the Website you wish to view:');
        if (index > -1 && index < this.Websites.length){
            this.selectedWebsite = this.Websites[index];
            let description = 'Website Name: ' + this.selectedWebsite.name + '\n';

            for (let i = 0; i < this.selectedWebsite.Pages.length; i++) {
                description += i + ') ' + this.selectedWebsite.Pages[i].name
                + ' - ' + this.selectedWebsite.Pages[i].description + '\n';
            }

            let selection = this.showWebsiteMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPages();
                    break;
                case '2':
                    this.deletePages();
            }
        }
    }
    
    // delete a Website
    deleteWebsite() {
        let index = prompt('Enter the index of the Website you wish to delete:'); 
        if (index > -1 && index < this.Websites.length) {
            this.Websites.splice(index, 1); 
        }
    }
    
    // create a Page
    createPages() {
        let name = prompt('Enter a name for the new Page:');
        let description = prompt('Enter a short description for the new Page:');
        this.selectedWebsite.Pages.push(new Pages(name, description));
    }
    
    // delete a Page
    deletePages() {
    let index = prompt('Enter the index of the Page you wish to delete:');
    if (index > -1 && index < this.selectedWebsite.Pages.length) {
        this.selectedWebsite.Pages.splice(index, 1);
    }
    }
}
let menu = new Menu();
    menu.start();