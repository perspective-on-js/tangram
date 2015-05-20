;(function(tangram){
    var set = new tangram.Set();
    [
        set.T1.translate(1,1).rotate(180),
        set.T2.translate(1,0).rotate(90),
        set.S.translate(0.25, 0.25),
        set.P.translate(0.25, 0.25).rotate(90),
        set.M,
        set.t1.translate(0.5, 0),
        set.t2.translate(0.25, 0.25).rotate(90).flip(),
    ].forEach(function(piece){
        var element = document.getElementById(piece.id);
        ['d', 'transform'].forEach(function(attribute){
            element.setAttribute(attribute, piece[attribute]());
        });
    });
})(tangram);
