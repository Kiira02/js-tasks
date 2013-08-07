Array.prototype.sort = function(predicate) {
    var result = [],
        dirty = true;

    while (dirty) {
        dirty = false;
        for (var i = 0; i < this.length - 1; i++) {
            var equal = predicate(this[i], this[i + 1]);
            if (!equal) continue;
            {
                if (equal > 0) {
                    var temp = this[i + 1];
                    this[i + 1] = this[i];
                    this[i] = temp;
                    dirty = true;
                } else {
                }
            }
        }
    }
};