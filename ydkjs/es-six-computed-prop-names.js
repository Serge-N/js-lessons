var prefix = "user_";

var o = {
    baz: function () {
        return Math.Round(Math.random() * 100);
    },

    [prefix + selfNamedUser] : baz()
};

function selfNamedUser() {
    return Math.Round(Math.random() * 1000);
}

// computed values are usally used with symbols