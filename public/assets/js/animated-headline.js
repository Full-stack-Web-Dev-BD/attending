/*! elementor-pro - v3.13.1 - 11-05-2023 */
"use strict";
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[26], {
    3663: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        window.elementorCommon && window.elementorCommon.helpers.softDeprecated('Scroll util from "/dev/js/frontend/utils/scroll"', "3.1.0", "elementorModules.utils.Scroll");
        var i = elementorModules.utils.Scroll;
        t.default = i
    }
    ,
    629: (e,t,i)=>{
        var n = i(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(i(3663))
          , a = elementorModules.frontend.handlers.Base.extend({
            svgPaths: {
                circle: ["M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"],
                underline_zigzag: ["M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"],
                x: ["M497.4,23.9C301.6,40,155.9,80.6,4,144.4", "M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"],
                strikethrough: ["M3,75h493.5"],
                curly: ["M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6"],
                diagonal: ["M13.5,15.5c131,13.7,289.3,55.5,475,125.5"],
                double: ["M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2", "M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8"],
                double_underline: ["M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6", "M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"],
                underline: ["M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"]
            },
            getDefaultSettings() {
                const e = this.getElementSettings("rotate_iteration_delay")
                  , t = {
                    animationDelay: e || 2500,
                    lettersDelay: .02 * e || 50,
                    typeLettersDelay: .06 * e || 150,
                    selectionDuration: .2 * e || 500,
                    revealDuration: .24 * e || 600,
                    revealAnimationDelay: .6 * e || 1500,
                    highlightAnimationDuration: this.getElementSettings("highlight_animation_duration") || 1200,
                    highlightAnimationDelay: this.getElementSettings("highlight_iteration_delay") || 8e3
                };
                return t.typeAnimationDelay = t.selectionDuration + 800,
                t.selectors = {
                    headline: ".elementor-headline",
                    dynamicWrapper: ".elementor-headline-dynamic-wrapper",
                    dynamicText: ".elementor-headline-dynamic-text"
                },
                t.classes = {
                    dynamicText: "elementor-headline-dynamic-text",
                    dynamicLetter: "elementor-headline-dynamic-letter",
                    textActive: "elementor-headline-text-active",
                    textInactive: "elementor-headline-text-inactive",
                    letters: "elementor-headline-letters",
                    animationIn: "elementor-headline-animation-in",
                    typeSelected: "elementor-headline-typing-selected",
                    activateHighlight: "e-animated",
                    hideHighlight: "e-hide-highlight"
                },
                t
            },
            getDefaultElements() {
                var e = this.getSettings("selectors");
                return {
                    $headline: this.$element.find(e.headline),
                    $dynamicWrapper: this.$element.find(e.dynamicWrapper),
                    $dynamicText: this.$element.find(e.dynamicText)
                }
            },
            getNextWord: e=>e.is(":last-child") ? e.parent().children().eq(0) : e.next(),
            switchWord(e, t) {
                e.removeClass("elementor-headline-text-active").addClass("elementor-headline-text-inactive"),
                t.removeClass("elementor-headline-text-inactive").addClass("elementor-headline-text-active"),
                this.setDynamicWrapperWidth(t)
            },
            singleLetters() {
                var e = this.getSettings("classes");
                this.elements.$dynamicText.each((function() {
                    var t = jQuery(this)
                      , i = t.text().split("")
                      , n = t.hasClass(e.textActive);
                    t.empty(),
                    i.forEach((function(i) {
                        var s = jQuery("<span>", {
                            class: e.dynamicLetter
                        }).text(i);
                        n && s.addClass(e.animationIn),
                        t.append(s)
                    }
                    )),
                    t.css("opacity", 1)
                }
                ))
            },
            showLetter(e, t, i, n) {
                var s = this
                  , a = this.getSettings("classes");
                e.addClass(a.animationIn),
                e.is(":last-child") ? i || setTimeout((function() {
                    s.hideWord(t)
                }
                ), s.getSettings("animationDelay")) : setTimeout((function() {
                    s.showLetter(e.next(), t, i, n)
                }
                ), n)
            },
            hideLetter(e, t, i, n) {
                var s = this
                  , a = this.getSettings();
                e.removeClass(a.classes.animationIn),
                e.is(":last-child") ? i && setTimeout((function() {
                    s.hideWord(s.getNextWord(t))
                }
                ), s.getSettings("animationDelay")) : setTimeout((function() {
                    s.hideLetter(e.next(), t, i, n)
                }
                ), n)
            },
            showWord(e, t) {
                var i = this
                  , n = i.getSettings()
                  , s = i.getElementSettings("animation_type");
                "typing" === s ? (i.showLetter(e.find("." + n.classes.dynamicLetter).eq(0), e, !1, t),
                e.addClass(n.classes.textActive).removeClass(n.classes.textInactive)) : "clip" === s && i.elements.$dynamicWrapper.animate({
                    width: e.width() + 10
                }, n.revealDuration, (function() {
                    setTimeout((function() {
                        i.hideWord(e)
                    }
                    ), n.revealAnimationDelay)
                }
                ))
            },
            hideWord(e) {
                var t = this
                  , i = t.getSettings()
                  , n = i.classes
                  , s = "." + n.dynamicLetter;
                if (this.isLoopMode || !e.is(":last-child")) {
                    var a = t.getElementSettings("animation_type")
                      , l = t.getNextWord(e);
                    if ("typing" === a)
                        t.elements.$dynamicWrapper.addClass(n.typeSelected),
                        setTimeout((function() {
                            t.elements.$dynamicWrapper.removeClass(n.typeSelected),
                            e.addClass(i.classes.textInactive).removeClass(n.textActive).children(s).removeClass(n.animationIn)
                        }
                        ), i.selectionDuration),
                        setTimeout((function() {
                            t.showWord(l, i.typeLettersDelay)
                        }
                        ), i.typeAnimationDelay);
                    else if (t.elements.$headline.hasClass(n.letters)) {
                        var r = e.children(s).length >= l.children(s).length;
                        t.hideLetter(e.find(s).eq(0), e, r, i.lettersDelay),
                        t.showLetter(l.find(s).eq(0), l, r, i.lettersDelay),
                        t.setDynamicWrapperWidth(l)
                    } else
                        "clip" === a ? t.elements.$dynamicWrapper.animate({
                            width: "2px"
                        }, i.revealDuration, (function() {
                            t.switchWord(e, l),
                            t.showWord(l)
                        }
                        )) : (t.switchWord(e, l),
                        setTimeout((function() {
                            t.hideWord(l)
                        }
                        ), i.animationDelay))
                }
            },
            setDynamicWrapperWidth(e) {
                const t = this.getElementSettings("animation_type");
                "clip" !== t && "typing" !== t && this.elements.$dynamicWrapper.css("width", e.width())
            },
            animateHeadline() {
                var e = this
                  , t = e.getElementSettings("animation_type")
                  , i = e.elements.$dynamicWrapper;
                "clip" === t ? i.width(i.width() + 10) : "typing" !== t && e.setDynamicWrapperWidth(e.elements.$dynamicText),
                setTimeout((function() {
                    e.hideWord(e.elements.$dynamicText.eq(0))
                }
                ), e.getSettings("animationDelay"))
            },
            getSvgPaths(e) {
                var t = this.svgPaths[e]
                  , i = jQuery();
                return t.forEach((function(e) {
                    i = i.add(jQuery("<path>", {
                        d: e
                    }))
                }
                )),
                i
            },
            addHighlight() {
                const e = this.getElementSettings()
                  , t = jQuery("<svg>", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 500 150",
                    preserveAspectRatio: "none"
                }).html(this.getSvgPaths(e.marker));
                this.elements.$dynamicWrapper.append(t[0].outerHTML)
            },
            rotateHeadline() {
                var e = this.getSettings();
                this.elements.$headline.hasClass(e.classes.letters) && this.singleLetters(),
                this.animateHeadline()
            },
            initHeadline() {
                const e = this.getElementSettings("headline_style");
                "rotate" === e ? this.rotateHeadline() : "highlight" === e && (this.addHighlight(),
                this.activateHighlightAnimation()),
                this.deactivateScrollListener()
            },
            activateHighlightAnimation() {
                const e = this.getSettings()
                  , t = e.classes
                  , i = this.elements.$headline;
                i.removeClass(t.hideHighlight).addClass(t.activateHighlight),
                this.isLoopMode && (setTimeout((()=>{
                    i.removeClass(t.activateHighligh).addClass(t.hideHighlight)
                }
                ), e.highlightAnimationDuration + .8 * e.highlightAnimationDelay),
                setTimeout((()=>{
                    this.activateHighlightAnimation(!1)
                }
                ), e.highlightAnimationDuration + e.highlightAnimationDelay))
            },
            activateScrollListener() {
                this.intersectionObservers.startAnimation.observer = s.default.scrollObserver({
                    offset: "0px 0px -100px",
                    callback: e=>{
                        e.isInViewport && this.initHeadline()
                    }
                }),
                this.intersectionObservers.startAnimation.element = this.elements.$headline[0],
                this.intersectionObservers.startAnimation.observer.observe(this.intersectionObservers.startAnimation.element)
            },
            deactivateScrollListener() {
                this.intersectionObservers.startAnimation.observer.unobserve(this.intersectionObservers.startAnimation.element)
            },
            onInit() {
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments),
                this.intersectionObservers = {
                    startAnimation: {
                        observer: null,
                        element: null
                    }
                },
                this.isLoopMode = "yes" === this.getElementSettings("loop"),
                this.activateScrollListener()
            }
        });
        t.default = a
    }
}]);
