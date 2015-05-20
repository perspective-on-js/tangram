describe('tangram', function(){
    it('should exist', function(){
        expect(tangram).toBeDefined();
    });

    describe('Set', function(){
        var set;

        beforeEach(function(){
            set = new tangram.Set();
        });

        it('should exist', function(){
            expect(tangram.Set).toBeDefined();
        });

        ['t1', 't2', 'M', 'P', 'S', 'T1', 'T2'].forEach(function(id){
            describe(id, function(){
                var element;

                beforeEach(function(){
                    element = set[id];
                });

                it('should exist', function(){
                    expect(element).toBeDefined();
                });

                ['x', 'y', 'orientation', 'flipped', 'type', 'path', 'id'].forEach(function(property){
                    it('should have \'' + property + '\'', function(){
                        expect(element[property]).toBeDefined();
                    });
                });

                describe('translate', function(){
                    it('should move a piece', function(){
                        element.translate(1, 2);

                        expect(element.x).toBe(1);
                        expect(element.y).toBe(2);
                    });

                    it('should be chainable', function(){
                        element.translate(0, 0).translate(1, 2);

                        expect(element.x).toBe(1);
                        expect(element.y).toBe(2);
                    });
                });

                describe('rotate', function(){
                    it('should orient a piece', function(){
                        element.rotate(180);

                        expect(element.orientation).toBe(180);
                    });

                    it('should be chainable', function(){
                        element.rotate(0).rotate(180);

                        expect(element.orientation).toBe(180);
                    });
                });

                describe('flip', function(){
                    it('should flip a piece', function(){
                        element.flip();

                        expect(element.flipped).toBe(true);
                    });

                    it('should be chainable', function(){
                        element.flip().flip();

                        expect(element.flipped).toBe(false);
                    });
                });

                describe('d', function(){
                    it('should return path', function(){
                        expect(element.d()).toBe(element.path);
                    });
                });

                describe('transform', function(){
                    it('should return transformation', function(){
                        expect(element.transform()).toBe('translate(0,0) rotate(0) scale(1,1)');

                        element.translate(1,0)
                        expect(element.transform()).toBe('translate(1,0) rotate(0) scale(1,1)');

                        element.rotate(90)
                        expect(element.transform()).toBe('translate(1,0) rotate(90) scale(1,1)');

                        element.flip()
                        expect(element.transform()).toBe('translate(1,0) rotate(90) scale(1,-1)');
});
                });
            });
        });
    });
});
