'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
describe('PhoneCat App', function() {
    describe('Phone List View', function() {
        beforeEach(function() {
            browser.get('app/index.html');
        });

        var phoneList = element.all(by.repeater('phone in phones'));
        var query = element(by.model('query'));

        it("should filter the phone list as a user types into the search box", function() {
            var title = element(by.css('h3'));


            expect(phoneList.count()).toBe(3);
            expect(title.getText()).toMatch('Lista de Celulares');

            var search = 'nexus';
            query.sendKeys(search);
            expect(phoneList.count()).toBe(1);
            expect(title.getText()).toMatch('Foi encontrado registros de "' + search + '"');

            query.clear();

            search = 'motorola';
            query.sendKeys(search);
            expect(phoneList.count()).toBe(2);
            expect(title.getText()).toMatch('Foi encontrado registros de "' + search + '"');
        });

        it("should display the current filter value in the title bar", function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        });
    });
});
