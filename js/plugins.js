! function (t) {
    t.MDChapter = function (e, n) {
        var o = (t.extend({}, t.fn.MDChapter.defaults, n), t(e))
            , i = t(".chapter__title", o)
            , a = (t(".chapter__content", o), function () {
                r()
            })
            , r = function () {
                t(window).on("scroll", c), t(window).on("resize", c), c(null)
            }
            , c = function () {
                var e = o.outerHeight()
                    , n = o.offset().top
                    , a = t(window).height()
                    , r = t(window).scrollTop();
                if (r >= n && n + e - a >= r) i.addClass("title--fixed").css({
                    top: 0
                });
                else {
                    var c = r - n;
                    c = Math.max(0, c), c = Math.min(e - a, c), i.removeClass("title--fixed").css({
                        top: c
                    })
                }
            };
        a()
    }, t.fn.MDChapter = function (e) {
        return this.each(function () {
            if (void 0 === t(this).data("MDChapter")) {
                var n = new t.MDChapter(this, e);
                t(this).data("MDChapter", n)
            }
        })
    }, t.fn.MDChapter.defaults = {
        option1: 1e3
        , option2: 760
    }
}(jQuery)
, function (t) {
    t.MDProject = function (e, n) {
        var o = (t.extend({}, t.fn.MDProject.defaults, n), t(e))
            , i = t(".project__header", o)
            , a = t(".project__content", o)
            , r = this
            , c = !1;
        this.closeProject = function () {
            r.collapse(), o.trigger("close", {
                $project: o
            }), c = !1
        }, this.openProject = function (t) {
            f(t)
        };
        var s = function () {
                h()
            }
            , h = function () {
                t(window).on("scroll", l)
            };
        this.collapse = function (e) {
            return "undefined" == typeof e && (e = !0), e ? (a.animate({
                height: 0
            }, 800), t(".header__image", i).animate({
                top: 0
            }, 800)) : (a.css({
                height: 0
            }), t(".header__image", i).css({
                top: 0
            })), i.css("height", t(window).height()), o.removeClass("open"), c = !1, 800
        }, this.expand = function () {
            return o.addClass("open"), a.css("height", "auto"), i.css("height", .54 * t(window).height()), window.viewportUnitsBuggyfill.refresh(), c = !0, 600
        };
        var f = function (e) {
                o.trigger("loading"), t.ajax({
                    url: e
                    , success: u
                })
            }
            , u = function (e) {
                var n = t(textToHtml(e))
                    , o = t(".project__content", n);
                a.css("height", "0px").html(o.html()).waitForImages(d, function () {})
            }
            , d = function () {
                o.trigger("loaded", {
                    $project: o
                })
            }
            , l = function () {
                var e = (t(window).scrollTop() - o.offset().top) / i.height();
                c && t(".header__image", i).css({
                    top: .5 * Math.min(1, Math.max(0, e)) * i.height()
                })
            };
        s()
    }, t.fn.MDProject = function (e) {
        return this.each(function () {
            if (void 0 === t(this).data("MDProject")) {
                var n = new t.MDProject(this, e);
                t(this).data("MDProject", n)
            }
        })
    }, t.fn.MDProject.defaults = {
        option1: 1e3
        , option2: 760
    }
}(jQuery);