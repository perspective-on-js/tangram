;(function(tangram, undefined){
    /* A library to play Tangram */
    function transform(x, y, orientation, flipped) {
        return 'translate(' + x + ',' + y + ') ' +
            'rotate(' + orientation + ') ' +
            (flipped ? 'scale(1,-1)': 'scale(1,1)');
    }


    var Piece = function(type, path, id){
        this.type = type;
        this.path = path;
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.orientation = 0;
        this.flipped = false;
    };
    Piece.prototype.translate = function(x, y){
        this.x = x;
        this.y = y;
        return this;
    };
    Piece.prototype.rotate = function(orientation){
        this.orientation = orientation;
        return this;
    };
    Piece.prototype.flip = function(){
        this.flipped = !this.flipped;
        return this;
    };
    Piece.prototype.d = function(){
        return this.path;
    };
    Piece.prototype.transform = function(){
        return transform(this.x, this.y, this.orientation, this.flipped);
    };

    var piece = [
        { 'type': 't', 'path': 'M 0 0 L 0.25 0.25 L 0.5 0 Z' },
        { 'type': 'M', 'path': 'M 0 0 L 0 0.5 L 0.5 0 Z' },
        { 'type': 'P', 'path': 'M 0 0 L 0.25 0.25 L 0.75 0.25 L 0.5 0 Z' },
        { 'type': 'S', 'path': 'M 0 0 L 0.25 0.25 L 0.5 0 L 0.25 -0.25 Z' },
        { 'type': 'T', 'path': 'M 0 0 L 0.5 0.5 L 1 0 Z' }
    ].map(function(options){
        var constructor = function(id){
            Piece.call(this, options.type, options.path, id);
        }
        constructor.prototype = Object.create(Piece.prototype);
        constructor.prototype.constructor = constructor;
        return [options.type, constructor];
    }).reduce(function(accumulator, element){
        accumulator[element[0]] = element[1];
        return accumulator;
    }, {});

    var type = {
        't1': 't',
        't2': 't',
        'M': 'M',
        'P': 'P',
        'S': 'S',
        'T1': 'T',
        'T2': 'T'
    };
    var Set = tangram.Set = function(){
        for (var id in type) {
            this[id] = new piece[type[id]](id);
        }
    };
})(window.tangram = window.tangram || {})
