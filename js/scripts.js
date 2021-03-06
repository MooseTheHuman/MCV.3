function ViewportUnits() {}

function BlockHero() {
    $block = $(".block--hero"), $lettering = $(".lettering", $block)
}

function BlockWork() {
    isExpanded = !1, $block = $(".block--work"), $currentProject = null, that = this
}

function SiteFooter() {}

function Overlay() {}

function Fullpage() {}

function Chapter() {}

function Main() {}
window.textToHtml = function (e) {
    var t = String(e).replace(/<\!DOCTYPE[^>]*>/i, "").replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi, "</div>");
    return t
}, ViewportUnits.prototype = {
    constructor: ViewportUnits
    , initListener: function () {
        $(window).on("resize", this.onWindowResize), this.onWindowResize(null)
    }
    , onWindowResize: function () {
        $("[data-viewport-height]").each(function () {
            $(this).css({
                height: $(this).data("viewportHeight") / 100 * $(window).height()
            })
        }), $("[data-viewport-min-height]").each(function () {
            $(this).css({
                minHeight: $(this).data("viewportMinHeight") / 100 * $(window).height()
            })
        }), $("[data-viewport-width]").each(function () {
            $(this).css({
                width: $(this).data("viewportWidth") / 100 * $(window).height()
            })
        }), $("[data-viewport-min-width]").each(function () {
            $(this).css({
                minWidth: $(this).data("viewportMinWidth") / 100 * $(window).height()
            })
        })
    }
    , init: function () {
        this.initListener()
    }
}, BlockHero.prototype = {
    constructor: BlockHero
    , initLettering: function () {
        -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") ? ($("#welcome", $lettering).fadeOut(), $("#welcome-shadow", $lettering).fadeOut()) : ($("#welcome-underline, #welcome-underline-shadow", $lettering).velocity({
            strokeDashoffset: -275
        }, {
            duration: 700
            , delay: 0
            , easing: "easeInQuad"
        }), $("#welcome-w, #welcome-w-shadow", $lettering).velocity({
            strokeDashoffset: -805
        }, {
            duration: 1400
            , delay: 0
            , easing: "easeInOutQuart"
        }), $("#welcome-e, #welcome-e-shadow", $lettering).velocity({
            strokeDashoffset: -120
        }, {
            duration: 1e3
            , delay: 0
            , easing: "easeInOutQuart"
        }), $("#welcome-lcome, #welcome-lcome-shadow", $lettering).velocity({
            strokeDashoffset: -850
        }, {
            duration: 1e3
            , delay: 400
            , easing: "easeInOutQuart"
        }), $("#connection-1, #connection-1-shadow", $lettering).velocity({
            strokeDashoffset: -272
        }, {
            duration: 600
            , delay: 400
            , easing: "linear"
        }), $("#connection-2, #connection-2-shadow", $lettering).velocity({
            strokeDashoffset: -235
        }, {
            duration: 600
            , delay: 700
            , easing: "linear"
        })), $("#md-mv, #md-mv-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 1500
            , delay: 1e3
            , easing: "easeOutSine"
        }), $("#md-e, #md-e-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 300
            , delay: 1400
            , easing: "easeInOutQuart"
        }), $("#md-lanie, #md-lanie-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 1700
            , delay: 1300
            , easing: "easeOutSine"
        }), $("#md-d, #md-d-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 600
            , delay: 1e3
            , easing: "easeInOutQuart"
        }), $("#md-a, #md-a-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 300
            , delay: 1400
            , easing: "easeOutSine"
        }), $("#md-eid, md-eid-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 1e3
            , delay: 1800
            , easing: "easeOutSine"
        }), $("#md-underline, #md-underline-shadow", $lettering).velocity({
            strokeDashoffset: -0
        }, {
            duration: 800
            , delay: 2200
            , easing: "easeInOutQuart"
        })
    }
    , init: function () {
        $(window).on("loaded", this.initLettering)
    }
}, BlockWork.prototype = {
    constructor: BlockWork
    , initPlugins: function () {
        $(".project").MDProject()
    }
    , initListener: function () {
        $(document).on("click", "a[data-next-project]", this.onNextProjectTriggerClicked.bind(this)), $("a[data-project]").on("click", this.onProjectTriggerClicked), $("a.chapter__close-button").on("click", this.onChapterCloseClicked.bind(this)), $(".project", $block).on("open", this.onProjectOpen), $(".project", $block).on("loading", this.onProjectLoading), $(".project", $block).on("loaded", this.onProjectLoaded), $(".project", $block).on("close", this.onProjectClose)
    }
    , openProject: function (e, t) {
        var o = 0;
        isExpanded && (o = this.closeProject($currentProject, !1)), setTimeout(function () {
            var o = 0;
            Math.floor($(window).scrollTop()) != Math.floor(e.offset().top) && (o = Math.min(1200, Math.max(600, Math.abs($(window).scrollTop() - e.offset().top) / $(window).height() * 600)), console.info(o), $("html,body").animate({
                scrollTop: e.offset().top
            }, o, "easeInOutQuart")), setTimeout(function () {
                e.closest("li").siblings().hide(), $(window).scrollTop($(".chapter__content", $block).offset().top), e.data("MDProject").openProject(t), isExpanded = !0, $currentProject = e
            }, o + 100)
        }, o)
    }
    , closeProject: function (e, t) {
        $block.removeClass("chapter--closeable");
        var o = 0;
        return $(window).scrollTop() != e.offset().top && (o = Math.min(1200, Math.max(600, ($(window).scrollTop() - e.offset().top) / $(window).height() * 600)), $("html,body").animate({
            scrollTop: e.offset().top
        }, o, "easeInOutQuart")), setTimeout(function () {
            e.data("MDProject").closeProject()
        }, o), setTimeout(function () {
            e.closest("li").siblings().show(), $(window).scrollTop(e.offset().top), t && ($(".project-nav a", $block).removeClass("selected"), $block.removeClass("chapter--expanded"))
        }, o + 600), isExpanded = !1, $currentProject = null, o + 1e3
    }
    , onProjectTriggerClicked: function () {
        $(".project-nav a", $block).removeClass("selected"), $('.project-nav a[data-project="' + $(this).data("project") + '"]', $block).addClass("selected");
        var e = $('.project[data-project="' + $(this).data("project") + '"]')
            , t = $(this).attr("href");
        return e.is($currentProject) || (that.openProject(e, t), Main.trackPage(t)), !1
    }
    , onNextProjectTriggerClicked: function () {
        $projects = $(".project", $block);
        var e = $projects.index($currentProject) + 1;
        e == $projects.length && (e = 0);
        var t = $projects.eq(e);
        return $('.project-nav a[data-project="' + t.data("project") + '"]', $block).trigger("click"), !1
    }
    , onProjectOpen: function () {}
    , onProjectLoading: function () {
        $block.addClass("chapter--loading")
    }
    , onProjectLoaded: function (e, t) {
        $block.addClass("chapter--expanded"), $block.removeClass("chapter--loading"), $block.addClass("chapter--closeable");
        var o = t.$project
            , i = Math.max(600, ($(window).scrollTop() - $block.offset().top) / $(window).height() * 800);
        $(window).scrollTop() != $block.offset().top && $("html,body").animate({
            scrollTop: o.offset().top
        }, i, "easeInOutQuart"), setTimeout(function () {
            o.data("MDProject").expand()
        }, i)
    }
    , onProjectClose: function () {
        $block.removeClass("chapter--open")
    }
    , onChapterCloseClicked: function () {
        return this.closeProject($currentProject, !0), !1
    }
    , init: function () {
        this.initPlugins(), this.initListener()
    }
}, SiteFooter.prototype = {
    constructor: SiteFooter
    , drawLettering: function () {
        console.info("paint");
        var e = $(".site-footer #highfive")
            , t = $(".site-footer #highfive-shadow");
        $("#highfive-h", e).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1500
            , delay: 0
            , easing: "easeInOutQuad"
        }), $("#highfive-H-1", e).velocity({
            strokeDashoffset: 0
        }, {
            duration: 300
            , delay: 400
            , easing: "easeInOutQuad"
        }), $("#highfive-H-2", e).velocity({
            strokeDashoffset: 0
        }, {
            duration: 300
            , delay: 600
            , easing: "easeInOutQuad"
        }), $("#highfive-ig", e).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1e3
            , delay: 600
            , easing: "easeInOutQuad"
        }), $("#highfive-F", e).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1e3
            , delay: 1e3
            , easing: "easeOutQuad"
        }), $("#highfive-ive", e).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1e3
            , delay: 1e3
            , easing: "easeInOutQuad"
        }), $("#highfive-shadow-h", t).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1500
            , delay: 0
            , easing: "easeInOutQuad"
        }), $("#highfive-shadow-H-1", t).velocity({
            strokeDashoffset: 0
        }, {
            duration: 300
            , delay: 400
            , easing: "easeInOutQuad"
        }), $("#highfive-shadow-H-2", t).velocity({
            strokeDashoffset: 0
        }, {
            duration: 300
            , delay: 600
            , easing: "easeInOutQuad"
        }), $("#highfive-shadow-ig", t).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1e3
            , delay: 600
            , easing: "easeInOutQuad"
        }), $("#highfive-shadow-F", t).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1e3
            , delay: 1e3
            , easing: "easeOutQuad"
        }), $("#highfive-shadow-ive", t).velocity({
            strokeDashoffset: 0
        }, {
            duration: 1e3
            , delay: 1e3
            , easing: "easeInOutQuad"
        })
    }
    , onWindowScroll: function () {
        var e = Math.min(1, Math.max(-2, ($(window).scrollTop() - $(".site-footer").offset().top) / ($(".site-footer").height() - $(window).height())));
        e > .25 && !this.isDrawn && (this.drawLettering(), this.isDrawn = !0), $(".site-footer [data-ratio]").each(function () {
            var t = $(this).data("ratio") * (1 - e);
            $(this).css({
                "-webkit-transform": "translateY(" + t + "px)"
                , "-ms-transform": " translateY(" + t + "px)"
                , transform: "translateY(" + t + "px);"
            })
        })
    }
    , init: function () {
        $(window).on("scroll", this.onWindowScroll.bind(this))
    }
}, Overlay.prototype = {
    constructor: Overlay
    , init: function () {
        this.initListener()
    }
    , initListener: function () {
        $("a[data-overlay]").on("click", this.onOverlayTrigger)
    }
    , onOverlayTrigger: function () {
        return $('a[data-overlay="' + $(this).data("overlay") + '"]').toggleClass("overlay--triggered"), $('.overlay[data-overlay="' + $(this).data("overlay") + '"]').toggleClass("overlay--visible"), !1
    }
}, Fullpage.prototype = {
    constructor: Fullpage
    , initListener: function () {}
    , init: function () {
        this.initListener()
    }
}, Chapter.prototype = {
    constructor: Chapter
    , initPlugins: function () {
        $(".chapter").MDChapter()
    }
    , init: function () {
        this.initPlugins()
    }
}, Main.prototype = {
    constructor: Main
    , initPlugins: function () {
        (new ViewportUnits).init(), (new Chapter).init(), (new BlockHero).init(), (new BlockWork).init(), (new Overlay).init(), (new SiteFooter).init(), $('a[href^="#"]').on("click", this.onAnchorClicked)
    }
    , onAnchorClicked: function () {
        var e = $(this).attr("href").substr(1);
        if ("" != e) {
            var t = $("[data-id=" + e + "]");
            if (t.length) {
                var o = 800;
                return $("html,body").animate({
                    scrollTop: t.offset().top
                }, o, "easeInOutQuart"), !1
            }
        }
    }
    , initPreloading: function () {
        $("body").waitForImages({
            finished: function () {
                $("body").addClass("loaded"), $(window).trigger("loaded")
            }
            , waitForAll: !0
        })
    }
    , trackPage: function (e) {
        console.info("track page", e), "undefined" != typeof window._gaq && window._gaq.push(["_trackPageview", e]), "undefined" != typeof window.ga && window.ga("send", "pageview", e)
    }
    , init: function () {
        Main.initPlugins(), Main.initPreloading()
    }
};
var Main = new Main;
$(Main.init);