(function ($) {
    $(document).ready(function () {
        $(".toggle-nav").on("click", function () {
            toggleNavigation($(this), $(".nav-pane"));
            changeLetters($(this));
        }); 
        
        $("#mainbody").on("click", function () {
            togglebody($(".toggle-nav"), $(".nav-pane"));
            changeLetters($(".toggle-nav"));
        }); 
        
        function togglebody(btn, nav) {
            btn.toggleClass("open");
            nav.toggleClass("open");
        }

        function toggleNavigation(btn, nav) {
            btn.toggleClass("open");
            nav.toggleClass("open");
        }

        function changeLetters(btn) {
            var m = $(".toggle-nav span.m");
            var e = $(".toggle-nav span.e");
            var n = $(".toggle-nav span.n");
            var u = $(".toggle-nav span.u");

            e.toggleClass("btn-close");

            if (btn.hasClass("open")) {
                m.text("E");
                n.text("I");
                u.text("T");
            } else {
                m.text("M");
                n.text("N");
                u.text("U");
            }
        }
    });
})(jQuery);
