(function () {
    'use strict';

    describe('get hash string', function () {

        it(`should get string after '#' ${hb.location.hash.get('hash').toString()}`, function () {
            window.location.hash='abcdefg';
            expect(hb.location.hash.get('hash')).toBe(window.location.hash);
        });


        it(`should be object ${JSON.stringify({a:'1',b:'2'})}`, function () {
            window.location.hash='a=1&b=2';
            expect(hb.location.hash.get()).toEqual({a:'1',b:'2'});
        });


    });

    describe('get hash string', function () {

        it(`should be no hash`, function () {
            hb.location.hash.set();
            expect(window.location.hash).toBe('');
        });

        it(`should be hash at 'aaa'`, function () {
            hb.location.hash.set('aaa');
            expect(window.location.hash).toBe('#aaa');
        });

        it(`should be hash at '#a=2&b=3'`, function () {
            hb.location.hash.set({a:2,b:3});
            expect(window.location.hash).toBe('#a=2&b=3');
        });

    });

})();
