$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*
         *Go over each feed and check that URL is not empty
         */
        it('has URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        /*
         *Similare as above, but for Name.
         */

        it('has a Name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });


    describe('The Menu', function() {

        /*
         * Looking at body and checking if it has the class 'menu-hidden'
         */
        it('Menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*
         * Added an variable to easier access what I call hamburger icon.
         */
        var $hamburgerIcon = $('.menu-icon-link');

        /*
         * When the icon is clicked, with jquery, i excpect the class 'menu-hidden' to be removed.
         * Second click it's expected to have the class.
         */
        it('Menu is toggled by click', function() {
            $hamburgerIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $hamburgerIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    describe('Initial Entries', function() {

        /*
         * When the load is done, loadFeed is called.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Feed has atleast one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {


        /*
         * Initial loaded setup
         */
        var initFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {

                initFeed = $('.feed').find('.entry-link').attr('href');
                loadFeed(1, function() {
                    done();
                });

            });
        });

        it('Feed has been changed', function() {

            var newFeed = $('.feed').find('.entry-link').attr('href');
            expect(newFeed).not.toEqual(initFeed);

        });
    });
}());
