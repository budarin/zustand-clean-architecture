/*! For license information please see main.74e0634977f53eb30477.js.LICENSE.txt */
(() => {
    'use strict';
    var e = {
            465: (e, t) => {
                function n(e) {
                    function t(t, a, o, l) {
                        var i = a ? n + t + e.e + a : n + t,
                            u = i;
                        if (o) {
                            var s = ' ' + u + e.m;
                            for (var c in o)
                                if (o.hasOwnProperty(c)) {
                                    var d = o[c];
                                    !0 === d ? (u += s + c) : d && (u += s + c + r + d);
                                }
                        }
                        if (void 0 !== l)
                            for (var f = 0, p = (l = Array.isArray(l) ? l : [l]).length; f < p; f++) {
                                var m = l[f];
                                if (m && 'string' == typeof m.valueOf())
                                    for (var h = m.valueOf().split(' '), g = 0; g < h.length; g++) {
                                        var y = h[g];
                                        y !== i && (u += ' ' + y);
                                    }
                            }
                        return u;
                    }
                    var n = e.n || '',
                        r = e.v || e.m;
                    return function (e, n) {
                        return function (r, a, o) {
                            return 'string' == typeof r
                                ? 'string' == typeof a || Array.isArray(a)
                                    ? t(e, r, void 0, a)
                                    : t(e, r, a, o)
                                : t(e, n, r, a);
                        };
                    };
                }
                n({ e: '-', m: '_' }), (t.withNaming = n);
            },
            504: (e, t, n) => {
                e.exports = n(465);
            },
            982: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(81),
                    a = n.n(r),
                    o = n(645),
                    l = n.n(o)()(a());
                l.push([
                    e.id,
                    '.AppHeader {\n    display: flex;\n    align-items: center;\n    gap: var(--x2);\n}\n\n.AppHeader__Icon {\n    height: var(--x8);\n    width: var(--x8);\n    margin-left: var(--x2);\n    vertical-align: text-bottom;\n}\n\n.AppHeader__Title {\n    flex: 1;\n    font-size: 1.5rem;\n    font-weight: 400;\n    display: inline-block;\n}\n\n.AppHeader__MenuButton {\n    height: var(--x10);\n    width: var(--x10);\n    margin: var(--touchAreaPadding, 8px);\n    vertical-align: sub;\n    border: 0;\n    border-radius: var(--x6);\n    background-color: white;\n    cursor: pointer;\n}\n\n@media (hover: hover) {\n    .AppHeader__MenuButton:hover {\n        background-color: var(--primaryLightColor);\n    }\n}\n\n@media only screen and (min-width: 641px) {\n    .AppHeader__Icon {\n        margin-left: 0;\n    }\n}\n\n@media only screen and (min-height: 640px) {\n    .AppHeader {\n        height: 80px;\n    }\n    .AppHeader__Title {\n        font-size: 1.7rem;\n    }\n}\n',
                    '',
                ]);
                const i = l;
            },
            396: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(81),
                    a = n.n(r),
                    o = n(645),
                    l = n.n(o)()(a());
                l.push([
                    e.id,
                    ".App {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    block-size: 100%;\n    max-width: 1100px;\n    padding: 0 var(--x);\n    overflow: hidden;\n}\n\n.App__Container {\n    flex: 1;\n    width: 100%;\n    overflow: hidden;\n}\n\n.App__Container_scrolled {\n    border-top: 1px solid var(--primaryColor);\n}\n\n.App__NavPanel {\n}\n.App__TodoList {\n}\n\n@media only screen and (min-width: 641px) {\n    .App {\n        padding: 0 var(--x2);\n    }\n\n    .App__Container {\n        display: flex;\n        flex-direction: row;\n        gap: var(--x4);\n    }\n}\n\n@media only screen and (min-width: 1100px) {\n    .App {\n        padding: 0;\n        margin: 0 auto;\n    }\n}\n\n/* меняем глобально шрифт и размеры для мобил и десктопа */\n@media (pointer: coarse) {\n    input {\n        padding: var(--x2);\n    }\n    input[type='checkbox'],\n    input[type='radio'] {\n        height: var(--x5);\n        width: var(--x5);\n        margin: var(--x3, 8px);\n        background: transparent;\n    }\n\n    :root {\n        --touchAreaPadding: 8px;\n    }\n}\n",
                    '',
                ]);
                const i = l;
            },
            815: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(81),
                    a = n.n(r),
                    o = n(645),
                    l = n.n(o)()(a());
                l.push([
                    e.id,
                    '.CheckButton {\n    height: var(--x9);\n    padding: var(--touchAreaPadding, 8px);\n    margin: 0;\n    border: 0;\n    cursor: pointer;\n}\n\n@media (pointer: coarse) {\n    .CheckButton {\n        height: var(--x11);\n        width: var(--x11);\n    }\n}\n',
                    '',
                ]);
                const i = l;
            },
            873: (e, t, n) => {
                n.d(t, { Z: () => f });
                var r = n(81),
                    a = n.n(r),
                    o = n(645),
                    l = n.n(o),
                    i = n(667),
                    u = n.n(i),
                    s = new URL(n(283), n.b),
                    c = l()(a()),
                    d = u()(s);
                c.push([
                    e.id,
                    `@font-face {\n    font-family: 'robotoregular';\n    src: url(${d}) format('woff2');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n:root {\n    --font-family: 'robotoregular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial,\n        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n\n    --isTouch: 0;\n\n    /* sizes */\n    --x: 4px;\n    --x2: 8px;\n    --x3: 12px;\n    --x4: 16px;\n    --x5: 20px;\n    --x6: 24px;\n    --x7: 28px;\n    --x8: 32px;\n    --x9: 36px;\n    --x10: 40px;\n    --x11: 44px;\n\n    /* colors */\n    --primaryColor: hsl(214deg 100% 90%);\n    --primaryLightColor: hsl(214deg 100% 97%);\n    --primaryDarkColor: hsl(214deg 100% 60%);\n    --primaryGrayColor: hsl(214deg 34.3% 59.41%);\n    --secondaryColor: hsl(90deg 100% 80%);\n    --secondaryDarkColor: hsl(90.17deg 100% 35%);\n    --itemHoverColor: hsl(60deg 100% 95%);\n    --borderColor: hsl(0deg 0% 90.98%);\n    --primaryTextColor: hsl(214.29deg 100% 30%);\n    --accentColor: hsl(6.58deg 73.74% 61.18%);\n\n    /* notify */\n    --toastify-font-family: var(--font-family);\n}\n\n@media (pointer: coarse) {\n    :root {\n        --isTouch: 1;\n    }\n}\n\nhtml,\nbody,\n#root {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    font-size: 100%;\n}\n\nhtml {\n    color: var(--primaryTextColor);\n    font-family: var(--font-family);\n}\n\n#root {\n    transition: opacity 1s ease;\n    /* только тут должен быть hidden чтобы работал pull to refresh */\n    overflow: hidden;\n}\n\n.hidden {\n    opacity: 0;\n}\n`,
                    '',
                ]);
                const f = c;
            },
            645: (e) => {
                e.exports = function (e) {
                    var t = [];
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = '',
                                    r = void 0 !== t[5];
                                return (
                                    t[4] && (n += '@supports ('.concat(t[4], ') {')),
                                    t[2] && (n += '@media '.concat(t[2], ' {')),
                                    r && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                                    (n += e(t)),
                                    r && (n += '}'),
                                    t[2] && (n += '}'),
                                    t[4] && (n += '}'),
                                    n
                                );
                            }).join('');
                        }),
                        (t.i = function (e, n, r, a, o) {
                            'string' == typeof e && (e = [[null, e, void 0]]);
                            var l = {};
                            if (r)
                                for (var i = 0; i < this.length; i++) {
                                    var u = this[i][0];
                                    null != u && (l[u] = !0);
                                }
                            for (var s = 0; s < e.length; s++) {
                                var c = [].concat(e[s]);
                                (r && l[c[0]]) ||
                                    (void 0 !== o &&
                                        (void 0 === c[5] ||
                                            (c[1] = '@layer'
                                                .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                                                .concat(c[1], '}')),
                                        (c[5] = o)),
                                    n &&
                                        (c[2]
                                            ? ((c[1] = '@media '.concat(c[2], ' {').concat(c[1], '}')), (c[2] = n))
                                            : (c[2] = n)),
                                    a &&
                                        (c[4]
                                            ? ((c[1] = '@supports ('.concat(c[4], ') {').concat(c[1], '}')), (c[4] = a))
                                            : (c[4] = ''.concat(a))),
                                    t.push(c));
                            }
                        }),
                        t
                    );
                };
            },
            667: (e) => {
                e.exports = function (e, t) {
                    return (
                        t || (t = {}),
                        e
                            ? ((e = String(e.__esModule ? e.default : e)),
                              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                              t.hash && (e += t.hash),
                              /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                                  ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                                  : e)
                            : e
                    );
                };
            },
            81: (e) => {
                e.exports = function (e) {
                    return e[1];
                };
            },
            448: (e, t, n) => {
                var r = n(294),
                    a = n(840);
                function o(e) {
                    for (
                        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
                        n < arguments.length;
                        n++
                    )
                        t += '&args[]=' + encodeURIComponent(arguments[n]);
                    return (
                        'Minified React error #' +
                        e +
                        '; visit ' +
                        t +
                        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
                    );
                }
                var l = new Set(),
                    i = {};
                function u(e, t) {
                    s(e, t), s(e + 'Capture', t);
                }
                function s(e, t) {
                    for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
                }
                var c = !(
                        'undefined' == typeof window ||
                        void 0 === window.document ||
                        void 0 === window.document.createElement
                    ),
                    d = Object.prototype.hasOwnProperty,
                    f =
                        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    m = {};
                function h(e, t, n, r, a, o, l) {
                    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
                        (this.attributeName = r),
                        (this.attributeNamespace = a),
                        (this.mustUseProperty = n),
                        (this.propertyName = e),
                        (this.type = t),
                        (this.sanitizeURL = o),
                        (this.removeEmptyString = l);
                }
                var g = {};
                'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
                    .split(' ')
                    .forEach(function (e) {
                        g[e] = new h(e, 0, !1, e, null, !1, !1);
                    }),
                    [
                        ['acceptCharset', 'accept-charset'],
                        ['className', 'class'],
                        ['htmlFor', 'for'],
                        ['httpEquiv', 'http-equiv'],
                    ].forEach(function (e) {
                        var t = e[0];
                        g[t] = new h(t, 1, !1, e[1], null, !1, !1);
                    }),
                    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
                        g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
                    }),
                    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
                        g[e] = new h(e, 2, !1, e, null, !1, !1);
                    }),
                    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
                        .split(' ')
                        .forEach(function (e) {
                            g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
                        }),
                    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
                        g[e] = new h(e, 3, !0, e, null, !1, !1);
                    }),
                    ['capture', 'download'].forEach(function (e) {
                        g[e] = new h(e, 4, !1, e, null, !1, !1);
                    }),
                    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
                        g[e] = new h(e, 6, !1, e, null, !1, !1);
                    }),
                    ['rowSpan', 'start'].forEach(function (e) {
                        g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
                    });
                var y = /[\-:]([a-z])/g;
                function v(e) {
                    return e[1].toUpperCase();
                }
                function b(e, t, n, r) {
                    var a = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== a
                        ? 0 !== a.type
                        : r || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
                        ((function (e, t, n, r) {
                            if (
                                null == t ||
                                (function (e, t, n, r) {
                                    if (null !== n && 0 === n.type) return !1;
                                    switch (typeof t) {
                                        case 'function':
                                        case 'symbol':
                                            return !0;
                                        case 'boolean':
                                            return (
                                                !r &&
                                                (null !== n
                                                    ? !n.acceptsBooleans
                                                    : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                                            );
                                        default:
                                            return !1;
                                    }
                                })(e, t, n, r)
                            )
                                return !0;
                            if (r) return !1;
                            if (null !== n)
                                switch (n.type) {
                                    case 3:
                                        return !t;
                                    case 4:
                                        return !1 === t;
                                    case 5:
                                        return isNaN(t);
                                    case 6:
                                        return isNaN(t) || 1 > t;
                                }
                            return !1;
                        })(t, n, a, r) && (n = null),
                        r || null === a
                            ? (function (e) {
                                  return (
                                      !!d.call(m, e) || (!d.call(p, e) && (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                                  );
                              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
                            : a.mustUseProperty
                            ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
                            : ((t = a.attributeName),
                              (r = a.attributeNamespace),
                              null === n
                                  ? e.removeAttribute(t)
                                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
                                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
                }
                'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
                    .split(' ')
                    .forEach(function (e) {
                        var t = e.replace(y, v);
                        g[t] = new h(t, 1, !1, e, null, !1, !1);
                    }),
                    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
                        .split(' ')
                        .forEach(function (e) {
                            var t = e.replace(y, v);
                            g[t] = new h(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
                        }),
                    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
                        var t = e.replace(y, v);
                        g[t] = new h(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
                    }),
                    ['tabIndex', 'crossOrigin'].forEach(function (e) {
                        g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
                    }),
                    (g.xlinkHref = new h('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
                    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
                        g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
                    });
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    k = Symbol.for('react.element'),
                    _ = Symbol.for('react.portal'),
                    S = Symbol.for('react.fragment'),
                    x = Symbol.for('react.strict_mode'),
                    E = Symbol.for('react.profiler'),
                    C = Symbol.for('react.provider'),
                    T = Symbol.for('react.context'),
                    N = Symbol.for('react.forward_ref'),
                    P = Symbol.for('react.suspense'),
                    L = Symbol.for('react.suspense_list'),
                    I = Symbol.for('react.memo'),
                    z = Symbol.for('react.lazy');
                Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
                var O = Symbol.for('react.offscreen');
                Symbol.for('react.legacy_hidden'), Symbol.for('react.cache'), Symbol.for('react.tracing_marker');
                var M = Symbol.iterator;
                function R(e) {
                    return null === e || 'object' != typeof e
                        ? null
                        : 'function' == typeof (e = (M && e[M]) || e['@@iterator'])
                        ? e
                        : null;
                }
                var D,
                    F = Object.assign;
                function A(e) {
                    if (void 0 === D)
                        try {
                            throw Error();
                        } catch (e) {
                            var t = e.stack.trim().match(/\n( *(at )?)/);
                            D = (t && t[1]) || '';
                        }
                    return '\n' + D + e;
                }
                var B = !1;
                function j(e, t) {
                    if (!e || B) return '';
                    B = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (
                                ((t = function () {
                                    throw Error();
                                }),
                                Object.defineProperty(t.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                'object' == typeof Reflect && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(t, []);
                                } catch (e) {
                                    var r = e;
                                }
                                Reflect.construct(e, [], t);
                            } else {
                                try {
                                    t.call();
                                } catch (e) {
                                    r = e;
                                }
                                e.call(t.prototype);
                            }
                        else {
                            try {
                                throw Error();
                            } catch (e) {
                                r = e;
                            }
                            e();
                        }
                    } catch (t) {
                        if (t && r && 'string' == typeof t.stack) {
                            for (
                                var a = t.stack.split('\n'),
                                    o = r.stack.split('\n'),
                                    l = a.length - 1,
                                    i = o.length - 1;
                                1 <= l && 0 <= i && a[l] !== o[i];

                            )
                                i--;
                            for (; 1 <= l && 0 <= i; l--, i--)
                                if (a[l] !== o[i]) {
                                    if (1 !== l || 1 !== i)
                                        do {
                                            if ((l--, 0 > --i || a[l] !== o[i])) {
                                                var u = '\n' + a[l].replace(' at new ', ' at ');
                                                return (
                                                    e.displayName &&
                                                        u.includes('<anonymous>') &&
                                                        (u = u.replace('<anonymous>', e.displayName)),
                                                    u
                                                );
                                            }
                                        } while (1 <= l && 0 <= i);
                                    break;
                                }
                        }
                    } finally {
                        (B = !1), (Error.prepareStackTrace = n);
                    }
                    return (e = e ? e.displayName || e.name : '') ? A(e) : '';
                }
                function U(e) {
                    switch (e.tag) {
                        case 5:
                            return A(e.type);
                        case 16:
                            return A('Lazy');
                        case 13:
                            return A('Suspense');
                        case 19:
                            return A('SuspenseList');
                        case 0:
                        case 2:
                        case 15:
                            return (e = j(e.type, !1));
                        case 11:
                            return (e = j(e.type.render, !1));
                        case 1:
                            return (e = j(e.type, !0));
                        default:
                            return '';
                    }
                }
                function $(e) {
                    if (null == e) return null;
                    if ('function' == typeof e) return e.displayName || e.name || null;
                    if ('string' == typeof e) return e;
                    switch (e) {
                        case S:
                            return 'Fragment';
                        case _:
                            return 'Portal';
                        case E:
                            return 'Profiler';
                        case x:
                            return 'StrictMode';
                        case P:
                            return 'Suspense';
                        case L:
                            return 'SuspenseList';
                    }
                    if ('object' == typeof e)
                        switch (e.$$typeof) {
                            case T:
                                return (e.displayName || 'Context') + '.Consumer';
                            case C:
                                return (e._context.displayName || 'Context') + '.Provider';
                            case N:
                                var t = e.render;
                                return (
                                    (e = e.displayName) ||
                                        (e =
                                            '' !== (e = t.displayName || t.name || '')
                                                ? 'ForwardRef(' + e + ')'
                                                : 'ForwardRef'),
                                    e
                                );
                            case I:
                                return null !== (t = e.displayName || null) ? t : $(e.type) || 'Memo';
                            case z:
                                (t = e._payload), (e = e._init);
                                try {
                                    return $(e(t));
                                } catch (e) {}
                        }
                    return null;
                }
                function H(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return 'Cache';
                        case 9:
                            return (t.displayName || 'Context') + '.Consumer';
                        case 10:
                            return (t._context.displayName || 'Context') + '.Provider';
                        case 18:
                            return 'DehydratedFragment';
                        case 11:
                            return (
                                (e = (e = t.render).displayName || e.name || ''),
                                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
                            );
                        case 7:
                            return 'Fragment';
                        case 5:
                            return t;
                        case 4:
                            return 'Portal';
                        case 3:
                            return 'Root';
                        case 6:
                            return 'Text';
                        case 16:
                            return $(t);
                        case 8:
                            return t === x ? 'StrictMode' : 'Mode';
                        case 22:
                            return 'Offscreen';
                        case 12:
                            return 'Profiler';
                        case 21:
                            return 'Scope';
                        case 13:
                            return 'Suspense';
                        case 19:
                            return 'SuspenseList';
                        case 25:
                            return 'TracingMarker';
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ('function' == typeof t) return t.displayName || t.name || null;
                            if ('string' == typeof t) return t;
                    }
                    return null;
                }
                function V(e) {
                    switch (typeof e) {
                        case 'boolean':
                        case 'number':
                        case 'string':
                        case 'undefined':
                        case 'object':
                            return e;
                        default:
                            return '';
                    }
                }
                function W(e) {
                    var t = e.type;
                    return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
                }
                function Q(e) {
                    e._valueTracker ||
                        (e._valueTracker = (function (e) {
                            var t = W(e) ? 'checked' : 'value',
                                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                                r = '' + e[t];
                            if (
                                !e.hasOwnProperty(t) &&
                                void 0 !== n &&
                                'function' == typeof n.get &&
                                'function' == typeof n.set
                            ) {
                                var a = n.get,
                                    o = n.set;
                                return (
                                    Object.defineProperty(e, t, {
                                        configurable: !0,
                                        get: function () {
                                            return a.call(this);
                                        },
                                        set: function (e) {
                                            (r = '' + e), o.call(this, e);
                                        },
                                    }),
                                    Object.defineProperty(e, t, { enumerable: n.enumerable }),
                                    {
                                        getValue: function () {
                                            return r;
                                        },
                                        setValue: function (e) {
                                            r = '' + e;
                                        },
                                        stopTracking: function () {
                                            (e._valueTracker = null), delete e[t];
                                        },
                                    }
                                );
                            }
                        })(e));
                }
                function q(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = '';
                    return (
                        e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0)
                    );
                }
                function K(e) {
                    if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body;
                    } catch (t) {
                        return e.body;
                    }
                }
                function Y(e, t) {
                    var n = t.checked;
                    return F({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked,
                    });
                }
                function Z(e, t) {
                    var n = null == t.defaultValue ? '' : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    (n = V(null != t.value ? t.value : n)),
                        (e._wrapperState = {
                            initialChecked: r,
                            initialValue: n,
                            controlled:
                                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
                        });
                }
                function X(e, t) {
                    null != (t = t.checked) && b(e, 'checked', t, !1);
                }
                function G(e, t) {
                    X(e, t);
                    var n = V(t.value),
                        r = t.type;
                    if (null != n)
                        'number' === r
                            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
                            : e.value !== '' + n && (e.value = '' + n);
                    else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
                    t.hasOwnProperty('value')
                        ? ee(e, t.type, n)
                        : t.hasOwnProperty('defaultValue') && ee(e, t.type, V(t.defaultValue)),
                        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
                }
                function J(e, t, n) {
                    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
                        var r = t.type;
                        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
                        (t = '' + e._wrapperState.initialValue),
                            n || t === e.value || (e.value = t),
                            (e.defaultValue = t);
                    }
                    '' !== (n = e.name) && (e.name = ''),
                        (e.defaultChecked = !!e._wrapperState.initialChecked),
                        '' !== n && (e.name = n);
                }
                function ee(e, t, n) {
                    ('number' === t && K(e.ownerDocument) === e) ||
                        (null == n
                            ? (e.defaultValue = '' + e._wrapperState.initialValue)
                            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
                }
                var te = Array.isArray;
                function ne(e, t, n, r) {
                    if (((e = e.options), t)) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
                        for (n = 0; n < e.length; n++)
                            (a = t.hasOwnProperty('$' + e[n].value)),
                                e[n].selected !== a && (e[n].selected = a),
                                a && r && (e[n].defaultSelected = !0);
                    } else {
                        for (n = '' + V(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a]);
                        }
                        null !== t && (t.selected = !0);
                    }
                }
                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return F({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: '' + e._wrapperState.initialValue,
                    });
                }
                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (((n = t.children), (t = t.defaultValue), null != n)) {
                            if (null != t) throw Error(o(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(o(93));
                                n = n[0];
                            }
                            t = n;
                        }
                        null == t && (t = ''), (n = t);
                    }
                    e._wrapperState = { initialValue: V(n) };
                }
                function oe(e, t) {
                    var n = V(t.value),
                        r = V(t.defaultValue);
                    null != n &&
                        ((n = '' + n) !== e.value && (e.value = n),
                        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                        null != r && (e.defaultValue = '' + r);
                }
                function le(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
                }
                function ie(e) {
                    switch (e) {
                        case 'svg':
                            return 'http://www.w3.org/2000/svg';
                        case 'math':
                            return 'http://www.w3.org/1998/Math/MathML';
                        default:
                            return 'http://www.w3.org/1999/xhtml';
                    }
                }
                function ue(e, t) {
                    return null == e || 'http://www.w3.org/1999/xhtml' === e
                        ? ie(t)
                        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
                        ? 'http://www.w3.org/1999/xhtml'
                        : e;
                }
                var se,
                    ce,
                    de =
                        ((ce = function (e, t) {
                            if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
                            else {
                                for (
                                    (se = se || document.createElement('div')).innerHTML =
                                        '<svg>' + t.valueOf().toString() + '</svg>',
                                        t = se.firstChild;
                                    e.firstChild;

                                )
                                    e.removeChild(e.firstChild);
                                for (; t.firstChild; ) e.appendChild(t.firstChild);
                            }
                        }),
                        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
                            ? function (e, t, n, r) {
                                  MSApp.execUnsafeLocalFunction(function () {
                                      return ce(e, t);
                                  });
                              }
                            : ce);
                function fe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
                    }
                    e.textContent = t;
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0,
                    },
                    me = ['Webkit', 'ms', 'Moz', 'O'];
                function he(e, t, n) {
                    return null == t || 'boolean' == typeof t || '' === t
                        ? ''
                        : n || 'number' != typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
                        ? ('' + t).trim()
                        : t + 'px';
                }
                function ge(e, t) {
                    for (var n in ((e = e.style), t))
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf('--'),
                                a = he(n, t[n], r);
                            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
                        }
                }
                Object.keys(pe).forEach(function (e) {
                    me.forEach(function (t) {
                        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
                    });
                });
                var ye = F(
                    { menuitem: !0 },
                    {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0,
                    },
                );
                function ve(e, t) {
                    if (t) {
                        if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if (
                                'object' != typeof t.dangerouslySetInnerHTML ||
                                !('__html' in t.dangerouslySetInnerHTML)
                            )
                                throw Error(o(61));
                        }
                        if (null != t.style && 'object' != typeof t.style) throw Error(o(62));
                    }
                }
                function be(e, t) {
                    if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
                    switch (e) {
                        case 'annotation-xml':
                        case 'color-profile':
                        case 'font-face':
                        case 'font-face-src':
                        case 'font-face-uri':
                        case 'font-face-format':
                        case 'font-face-name':
                        case 'missing-glyph':
                            return !1;
                        default:
                            return !0;
                    }
                }
                var we = null;
                function ke(e) {
                    return (
                        (e = e.target || e.srcElement || window).correspondingUseElement &&
                            (e = e.correspondingUseElement),
                        3 === e.nodeType ? e.parentNode : e
                    );
                }
                var _e = null,
                    Se = null,
                    xe = null;
                function Ee(e) {
                    if ((e = ba(e))) {
                        if ('function' != typeof _e) throw Error(o(280));
                        var t = e.stateNode;
                        t && ((t = ka(t)), _e(e.stateNode, e.type, t));
                    }
                }
                function Ce(e) {
                    Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
                }
                function Te() {
                    if (Se) {
                        var e = Se,
                            t = xe;
                        if (((xe = Se = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
                    }
                }
                function Ne(e, t) {
                    return e(t);
                }
                function Pe() {}
                var Le = !1;
                function Ie(e, t, n) {
                    if (Le) return e(t, n);
                    Le = !0;
                    try {
                        return Ne(e, t, n);
                    } finally {
                        (Le = !1), (null !== Se || null !== xe) && (Pe(), Te());
                    }
                }
                function ze(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = ka(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case 'onClick':
                        case 'onClickCapture':
                        case 'onDoubleClick':
                        case 'onDoubleClickCapture':
                        case 'onMouseDown':
                        case 'onMouseDownCapture':
                        case 'onMouseMove':
                        case 'onMouseMoveCapture':
                        case 'onMouseUp':
                        case 'onMouseUpCapture':
                        case 'onMouseEnter':
                            (r = !r.disabled) ||
                                (r = !(
                                    'button' === (e = e.type) ||
                                    'input' === e ||
                                    'select' === e ||
                                    'textarea' === e
                                )),
                                (e = !r);
                            break e;
                        default:
                            e = !1;
                    }
                    if (e) return null;
                    if (n && 'function' != typeof n) throw Error(o(231, t, typeof n));
                    return n;
                }
                var Oe = !1;
                if (c)
                    try {
                        var Me = {};
                        Object.defineProperty(Me, 'passive', {
                            get: function () {
                                Oe = !0;
                            },
                        }),
                            window.addEventListener('test', Me, Me),
                            window.removeEventListener('test', Me, Me);
                    } catch (ce) {
                        Oe = !1;
                    }
                function Re(e, t, n, r, a, o, l, i, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s);
                    } catch (e) {
                        this.onError(e);
                    }
                }
                var De = !1,
                    Fe = null,
                    Ae = !1,
                    Be = null,
                    je = {
                        onError: function (e) {
                            (De = !0), (Fe = e);
                        },
                    };
                function Ue(e, t, n, r, a, o, l, i, u) {
                    (De = !1), (Fe = null), Re.apply(je, arguments);
                }
                function $e(e) {
                    var t = e,
                        n = e;
                    if (e.alternate) for (; t.return; ) t = t.return;
                    else {
                        e = t;
                        do {
                            0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
                        } while (e);
                    }
                    return 3 === t.tag ? n : null;
                }
                function He(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
                            return t.dehydrated;
                    }
                    return null;
                }
                function Ve(e) {
                    if ($e(e) !== e) throw Error(o(188));
                }
                function We(e) {
                    return null !==
                        (e = (function (e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = $e(e))) throw Error(o(188));
                                return t !== e ? null : e;
                            }
                            for (var n = e, r = t; ; ) {
                                var a = n.return;
                                if (null === a) break;
                                var l = a.alternate;
                                if (null === l) {
                                    if (null !== (r = a.return)) {
                                        n = r;
                                        continue;
                                    }
                                    break;
                                }
                                if (a.child === l.child) {
                                    for (l = a.child; l; ) {
                                        if (l === n) return Ve(a), e;
                                        if (l === r) return Ve(a), t;
                                        l = l.sibling;
                                    }
                                    throw Error(o(188));
                                }
                                if (n.return !== r.return) (n = a), (r = l);
                                else {
                                    for (var i = !1, u = a.child; u; ) {
                                        if (u === n) {
                                            (i = !0), (n = a), (r = l);
                                            break;
                                        }
                                        if (u === r) {
                                            (i = !0), (r = a), (n = l);
                                            break;
                                        }
                                        u = u.sibling;
                                    }
                                    if (!i) {
                                        for (u = l.child; u; ) {
                                            if (u === n) {
                                                (i = !0), (n = l), (r = a);
                                                break;
                                            }
                                            if (u === r) {
                                                (i = !0), (r = l), (n = a);
                                                break;
                                            }
                                            u = u.sibling;
                                        }
                                        if (!i) throw Error(o(189));
                                    }
                                }
                                if (n.alternate !== r) throw Error(o(190));
                            }
                            if (3 !== n.tag) throw Error(o(188));
                            return n.stateNode.current === n ? e : t;
                        })(e))
                        ? Qe(e)
                        : null;
                }
                function Qe(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e; ) {
                        var t = Qe(e);
                        if (null !== t) return t;
                        e = e.sibling;
                    }
                    return null;
                }
                var qe = a.unstable_scheduleCallback,
                    Ke = a.unstable_cancelCallback,
                    Ye = a.unstable_shouldYield,
                    Ze = a.unstable_requestPaint,
                    Xe = a.unstable_now,
                    Ge = a.unstable_getCurrentPriorityLevel,
                    Je = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    ot = null;
                var lt = Math.clz32
                        ? Math.clz32
                        : function (e) {
                              return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
                          },
                    it = Math.log,
                    ut = Math.LN2;
                var st = 64,
                    ct = 4194304;
                function dt(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e;
                    }
                }
                function ft(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        o = e.pingedLanes,
                        l = 268435455 & n;
                    if (0 !== l) {
                        var i = l & ~a;
                        0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
                    } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
                    if (0 === r) return 0;
                    if (
                        0 !== t &&
                        t !== r &&
                        0 == (t & a) &&
                        ((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
                    )
                        return t;
                    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
                        for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
                    return r;
                }
                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1;
                    }
                }
                function mt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
                }
                function ht() {
                    var e = st;
                    return 0 == (4194240 & (st <<= 1)) && (st = 64), e;
                }
                function gt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t;
                }
                function yt(e, t, n) {
                    (e.pendingLanes |= t),
                        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
                        ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
                }
                function vt(e, t) {
                    var n = (e.entangledLanes |= t);
                    for (e = e.entanglements; n; ) {
                        var r = 31 - lt(n),
                            a = 1 << r;
                        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
                    }
                }
                var bt = 0;
                function wt(e) {
                    return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
                }
                var kt,
                    _t,
                    St,
                    xt,
                    Et,
                    Ct = !1,
                    Tt = [],
                    Nt = null,
                    Pt = null,
                    Lt = null,
                    It = new Map(),
                    zt = new Map(),
                    Ot = [],
                    Mt =
                        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
                            ' ',
                        );
                function Rt(e, t) {
                    switch (e) {
                        case 'focusin':
                        case 'focusout':
                            Nt = null;
                            break;
                        case 'dragenter':
                        case 'dragleave':
                            Pt = null;
                            break;
                        case 'mouseover':
                        case 'mouseout':
                            Lt = null;
                            break;
                        case 'pointerover':
                        case 'pointerout':
                            It.delete(t.pointerId);
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                            zt.delete(t.pointerId);
                    }
                }
                function Dt(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o
                        ? ((e = {
                              blockedOn: t,
                              domEventName: n,
                              eventSystemFlags: r,
                              nativeEvent: o,
                              targetContainers: [a],
                          }),
                          null !== t && null !== (t = ba(t)) && _t(t),
                          e)
                        : ((e.eventSystemFlags |= r),
                          (t = e.targetContainers),
                          null !== a && -1 === t.indexOf(a) && t.push(a),
                          e);
                }
                function Ft(e) {
                    var t = va(e.target);
                    if (null !== t) {
                        var n = $e(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = He(n)))
                                    return (
                                        (e.blockedOn = t),
                                        void Et(e.priority, function () {
                                            St(n);
                                        })
                                    );
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
                    }
                    e.blockedOn = null;
                }
                function At(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length; ) {
                        var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ba(n)) && _t(t), (e.blockedOn = n), !1;
                        var r = new (n = e.nativeEvent).constructor(n.type, n);
                        (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
                    }
                    return !0;
                }
                function Bt(e, t, n) {
                    At(e) && n.delete(t);
                }
                function jt() {
                    (Ct = !1),
                        null !== Nt && At(Nt) && (Nt = null),
                        null !== Pt && At(Pt) && (Pt = null),
                        null !== Lt && At(Lt) && (Lt = null),
                        It.forEach(Bt),
                        zt.forEach(Bt);
                }
                function Ut(e, t) {
                    e.blockedOn === t &&
                        ((e.blockedOn = null),
                        Ct || ((Ct = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, jt)));
                }
                function $t(e) {
                    function t(t) {
                        return Ut(t, e);
                    }
                    if (0 < Tt.length) {
                        Ut(Tt[0], e);
                        for (var n = 1; n < Tt.length; n++) {
                            var r = Tt[n];
                            r.blockedOn === e && (r.blockedOn = null);
                        }
                    }
                    for (
                        null !== Nt && Ut(Nt, e),
                            null !== Pt && Ut(Pt, e),
                            null !== Lt && Ut(Lt, e),
                            It.forEach(t),
                            zt.forEach(t),
                            n = 0;
                        n < Ot.length;
                        n++
                    )
                        (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; ) Ft(n), null === n.blockedOn && Ot.shift();
                }
                var Ht = w.ReactCurrentBatchConfig,
                    Vt = !0;
                function Wt(e, t, n, r) {
                    var a = bt,
                        o = Ht.transition;
                    Ht.transition = null;
                    try {
                        (bt = 1), qt(e, t, n, r);
                    } finally {
                        (bt = a), (Ht.transition = o);
                    }
                }
                function Qt(e, t, n, r) {
                    var a = bt,
                        o = Ht.transition;
                    Ht.transition = null;
                    try {
                        (bt = 4), qt(e, t, n, r);
                    } finally {
                        (bt = a), (Ht.transition = o);
                    }
                }
                function qt(e, t, n, r) {
                    if (Vt) {
                        var a = Yt(e, t, n, r);
                        if (null === a) Vr(e, t, r, Kt, n), Rt(e, r);
                        else if (
                            (function (e, t, n, r, a) {
                                switch (t) {
                                    case 'focusin':
                                        return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                                    case 'dragenter':
                                        return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                                    case 'mouseover':
                                        return (Lt = Dt(Lt, e, t, n, r, a)), !0;
                                    case 'pointerover':
                                        var o = a.pointerId;
                                        return It.set(o, Dt(It.get(o) || null, e, t, n, r, a)), !0;
                                    case 'gotpointercapture':
                                        return (o = a.pointerId), zt.set(o, Dt(zt.get(o) || null, e, t, n, r, a)), !0;
                                }
                                return !1;
                            })(a, e, t, n, r)
                        )
                            r.stopPropagation();
                        else if ((Rt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
                            for (; null !== a; ) {
                                var o = ba(a);
                                if ((null !== o && kt(o), null === (o = Yt(e, t, n, r)) && Vr(e, t, r, Kt, n), o === a))
                                    break;
                                a = o;
                            }
                            null !== a && r.stopPropagation();
                        } else Vr(e, t, r, null, n);
                    }
                }
                var Kt = null;
                function Yt(e, t, n, r) {
                    if (((Kt = null), null !== (e = va((e = ke(r))))))
                        if (null === (t = $e(e))) e = null;
                        else if (13 === (n = t.tag)) {
                            if (null !== (e = He(t))) return e;
                            e = null;
                        } else if (3 === n) {
                            if (t.stateNode.current.memoizedState.isDehydrated)
                                return 3 === t.tag ? t.stateNode.containerInfo : null;
                            e = null;
                        } else t !== e && (e = null);
                    return (Kt = e), null;
                }
                function Zt(e) {
                    switch (e) {
                        case 'cancel':
                        case 'click':
                        case 'close':
                        case 'contextmenu':
                        case 'copy':
                        case 'cut':
                        case 'auxclick':
                        case 'dblclick':
                        case 'dragend':
                        case 'dragstart':
                        case 'drop':
                        case 'focusin':
                        case 'focusout':
                        case 'input':
                        case 'invalid':
                        case 'keydown':
                        case 'keypress':
                        case 'keyup':
                        case 'mousedown':
                        case 'mouseup':
                        case 'paste':
                        case 'pause':
                        case 'play':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointerup':
                        case 'ratechange':
                        case 'reset':
                        case 'resize':
                        case 'seeked':
                        case 'submit':
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchstart':
                        case 'volumechange':
                        case 'change':
                        case 'selectionchange':
                        case 'textInput':
                        case 'compositionstart':
                        case 'compositionend':
                        case 'compositionupdate':
                        case 'beforeblur':
                        case 'afterblur':
                        case 'beforeinput':
                        case 'blur':
                        case 'fullscreenchange':
                        case 'focus':
                        case 'hashchange':
                        case 'popstate':
                        case 'select':
                        case 'selectstart':
                            return 1;
                        case 'drag':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'mousemove':
                        case 'mouseout':
                        case 'mouseover':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'scroll':
                        case 'toggle':
                        case 'touchmove':
                        case 'wheel':
                        case 'mouseenter':
                        case 'mouseleave':
                        case 'pointerenter':
                        case 'pointerleave':
                            return 4;
                        case 'message':
                            switch (Ge()) {
                                case Je:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16;
                            }
                        default:
                            return 16;
                    }
                }
                var Xt = null,
                    Gt = null,
                    Jt = null;
                function en() {
                    if (Jt) return Jt;
                    var e,
                        t,
                        n = Gt,
                        r = n.length,
                        a = 'value' in Xt ? Xt.value : Xt.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var l = r - e;
                    for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
                    return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
                }
                function tn(e) {
                    var t = e.keyCode;
                    return (
                        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
                        10 === e && (e = 13),
                        32 <= e || 13 === e ? e : 0
                    );
                }
                function nn() {
                    return !0;
                }
                function rn() {
                    return !1;
                }
                function an(e) {
                    function t(t, n, r, a, o) {
                        for (var l in ((this._reactName = t),
                        (this._targetInst = r),
                        (this.type = n),
                        (this.nativeEvent = a),
                        (this.target = o),
                        (this.currentTarget = null),
                        e))
                            e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
                        return (
                            (this.isDefaultPrevented = (
                                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
                            )
                                ? nn
                                : rn),
                            (this.isPropagationStopped = rn),
                            this
                        );
                    }
                    return (
                        F(t.prototype, {
                            preventDefault: function () {
                                this.defaultPrevented = !0;
                                var e = this.nativeEvent;
                                e &&
                                    (e.preventDefault
                                        ? e.preventDefault()
                                        : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                                    (this.isDefaultPrevented = nn));
                            },
                            stopPropagation: function () {
                                var e = this.nativeEvent;
                                e &&
                                    (e.stopPropagation
                                        ? e.stopPropagation()
                                        : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                                    (this.isPropagationStopped = nn));
                            },
                            persist: function () {},
                            isPersistent: nn,
                        }),
                        t
                    );
                }
                var on,
                    ln,
                    un,
                    sn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (e) {
                            return e.timeStamp || Date.now();
                        },
                        defaultPrevented: 0,
                        isTrusted: 0,
                    },
                    cn = an(sn),
                    dn = F({}, sn, { view: 0, detail: 0 }),
                    fn = an(dn),
                    pn = F({}, dn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: En,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (e) {
                            return void 0 === e.relatedTarget
                                ? e.fromElement === e.srcElement
                                    ? e.toElement
                                    : e.fromElement
                                : e.relatedTarget;
                        },
                        movementX: function (e) {
                            return 'movementX' in e
                                ? e.movementX
                                : (e !== un &&
                                      (un && 'mousemove' === e.type
                                          ? ((on = e.screenX - un.screenX), (ln = e.screenY - un.screenY))
                                          : (ln = on = 0),
                                      (un = e)),
                                  on);
                        },
                        movementY: function (e) {
                            return 'movementY' in e ? e.movementY : ln;
                        },
                    }),
                    mn = an(pn),
                    hn = an(F({}, pn, { dataTransfer: 0 })),
                    gn = an(F({}, dn, { relatedTarget: 0 })),
                    yn = an(F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    vn = F({}, sn, {
                        clipboardData: function (e) {
                            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
                        },
                    }),
                    bn = an(vn),
                    wn = an(F({}, sn, { data: 0 })),
                    kn = {
                        Esc: 'Escape',
                        Spacebar: ' ',
                        Left: 'ArrowLeft',
                        Up: 'ArrowUp',
                        Right: 'ArrowRight',
                        Down: 'ArrowDown',
                        Del: 'Delete',
                        Win: 'OS',
                        Menu: 'ContextMenu',
                        Apps: 'ContextMenu',
                        Scroll: 'ScrollLock',
                        MozPrintableKey: 'Unidentified',
                    },
                    _n = {
                        8: 'Backspace',
                        9: 'Tab',
                        12: 'Clear',
                        13: 'Enter',
                        16: 'Shift',
                        17: 'Control',
                        18: 'Alt',
                        19: 'Pause',
                        20: 'CapsLock',
                        27: 'Escape',
                        32: ' ',
                        33: 'PageUp',
                        34: 'PageDown',
                        35: 'End',
                        36: 'Home',
                        37: 'ArrowLeft',
                        38: 'ArrowUp',
                        39: 'ArrowRight',
                        40: 'ArrowDown',
                        45: 'Insert',
                        46: 'Delete',
                        112: 'F1',
                        113: 'F2',
                        114: 'F3',
                        115: 'F4',
                        116: 'F5',
                        117: 'F6',
                        118: 'F7',
                        119: 'F8',
                        120: 'F9',
                        121: 'F10',
                        122: 'F11',
                        123: 'F12',
                        144: 'NumLock',
                        145: 'ScrollLock',
                        224: 'Meta',
                    },
                    Sn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
                function xn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
                }
                function En() {
                    return xn;
                }
                var Cn = F({}, dn, {
                        key: function (e) {
                            if (e.key) {
                                var t = kn[e.key] || e.key;
                                if ('Unidentified' !== t) return t;
                            }
                            return 'keypress' === e.type
                                ? 13 === (e = tn(e))
                                    ? 'Enter'
                                    : String.fromCharCode(e)
                                : 'keydown' === e.type || 'keyup' === e.type
                                ? _n[e.keyCode] || 'Unidentified'
                                : '';
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: En,
                        charCode: function (e) {
                            return 'keypress' === e.type ? tn(e) : 0;
                        },
                        keyCode: function (e) {
                            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
                        },
                        which: function (e) {
                            return 'keypress' === e.type
                                ? tn(e)
                                : 'keydown' === e.type || 'keyup' === e.type
                                ? e.keyCode
                                : 0;
                        },
                    }),
                    Tn = an(Cn),
                    Nn = an(
                        F({}, pn, {
                            pointerId: 0,
                            width: 0,
                            height: 0,
                            pressure: 0,
                            tangentialPressure: 0,
                            tiltX: 0,
                            tiltY: 0,
                            twist: 0,
                            pointerType: 0,
                            isPrimary: 0,
                        }),
                    ),
                    Pn = an(
                        F({}, dn, {
                            touches: 0,
                            targetTouches: 0,
                            changedTouches: 0,
                            altKey: 0,
                            metaKey: 0,
                            ctrlKey: 0,
                            shiftKey: 0,
                            getModifierState: En,
                        }),
                    ),
                    Ln = an(F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    In = F({}, pn, {
                        deltaX: function (e) {
                            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
                        },
                        deltaY: function (e) {
                            return 'deltaY' in e
                                ? e.deltaY
                                : 'wheelDeltaY' in e
                                ? -e.wheelDeltaY
                                : 'wheelDelta' in e
                                ? -e.wheelDelta
                                : 0;
                        },
                        deltaZ: 0,
                        deltaMode: 0,
                    }),
                    zn = an(In),
                    On = [9, 13, 27, 32],
                    Mn = c && 'CompositionEvent' in window,
                    Rn = null;
                c && 'documentMode' in document && (Rn = document.documentMode);
                var Dn = c && 'TextEvent' in window && !Rn,
                    Fn = c && (!Mn || (Rn && 8 < Rn && 11 >= Rn)),
                    An = String.fromCharCode(32),
                    Bn = !1;
                function jn(e, t) {
                    switch (e) {
                        case 'keyup':
                            return -1 !== On.indexOf(t.keyCode);
                        case 'keydown':
                            return 229 !== t.keyCode;
                        case 'keypress':
                        case 'mousedown':
                        case 'focusout':
                            return !0;
                        default:
                            return !1;
                    }
                }
                function Un(e) {
                    return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
                }
                var $n = !1;
                var Hn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    'datetime-local': !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                };
                function Vn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return 'input' === t ? !!Hn[e.type] : 'textarea' === t;
                }
                function Wn(e, t, n, r) {
                    Ce(r),
                        0 < (t = Qr(t, 'onChange')).length &&
                            ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
                }
                var Qn = null,
                    qn = null;
                function Kn(e) {
                    Ar(e, 0);
                }
                function Yn(e) {
                    if (q(wa(e))) return e;
                }
                function Zn(e, t) {
                    if ('change' === e) return t;
                }
                var Xn = !1;
                if (c) {
                    var Gn;
                    if (c) {
                        var Jn = 'oninput' in document;
                        if (!Jn) {
                            var er = document.createElement('div');
                            er.setAttribute('oninput', 'return;'), (Jn = 'function' == typeof er.oninput);
                        }
                        Gn = Jn;
                    } else Gn = !1;
                    Xn = Gn && (!document.documentMode || 9 < document.documentMode);
                }
                function tr() {
                    Qn && (Qn.detachEvent('onpropertychange', nr), (qn = Qn = null));
                }
                function nr(e) {
                    if ('value' === e.propertyName && Yn(qn)) {
                        var t = [];
                        Wn(t, qn, e, ke(e)), Ie(Kn, t);
                    }
                }
                function rr(e, t, n) {
                    'focusin' === e
                        ? (tr(), (qn = n), (Qn = t).attachEvent('onpropertychange', nr))
                        : 'focusout' === e && tr();
                }
                function ar(e) {
                    if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Yn(qn);
                }
                function or(e, t) {
                    if ('click' === e) return Yn(t);
                }
                function lr(e, t) {
                    if ('input' === e || 'change' === e) return Yn(t);
                }
                var ir =
                    'function' == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                          };
                function ur(e, t) {
                    if (ir(e, t)) return !0;
                    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
                    }
                    return !0;
                }
                function sr(e) {
                    for (; e && e.firstChild; ) e = e.firstChild;
                    return e;
                }
                function cr(e, t) {
                    var n,
                        r = sr(e);
                    for (e = 0; r; ) {
                        if (3 === r.nodeType) {
                            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
                            e = n;
                        }
                        e: {
                            for (; r; ) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e;
                                }
                                r = r.parentNode;
                            }
                            r = void 0;
                        }
                        r = sr(r);
                    }
                }
                function dr(e, t) {
                    return (
                        !(!e || !t) &&
                        (e === t ||
                            ((!e || 3 !== e.nodeType) &&
                                (t && 3 === t.nodeType
                                    ? dr(e, t.parentNode)
                                    : 'contains' in e
                                    ? e.contains(t)
                                    : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
                    );
                }
                function fr() {
                    for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
                        try {
                            var n = 'string' == typeof t.contentWindow.location.href;
                        } catch (e) {
                            n = !1;
                        }
                        if (!n) break;
                        t = K((e = t.contentWindow).document);
                    }
                    return t;
                }
                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return (
                        t &&
                        (('input' === t &&
                            ('text' === e.type ||
                                'search' === e.type ||
                                'tel' === e.type ||
                                'url' === e.type ||
                                'password' === e.type)) ||
                            'textarea' === t ||
                            'true' === e.contentEditable)
                    );
                }
                function mr(e) {
                    var t = fr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
                            else if (
                                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
                            ) {
                                e = e.getSelection();
                                var a = n.textContent.length,
                                    o = Math.min(r.start, a);
                                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                                    !e.extend && o > r && ((a = r), (r = o), (o = a)),
                                    (a = cr(n, o));
                                var l = cr(n, r);
                                a &&
                                    l &&
                                    (1 !== e.rangeCount ||
                                        e.anchorNode !== a.node ||
                                        e.anchorOffset !== a.offset ||
                                        e.focusNode !== l.node ||
                                        e.focusOffset !== l.offset) &&
                                    ((t = t.createRange()).setStart(a.node, a.offset),
                                    e.removeAllRanges(),
                                    o > r
                                        ? (e.addRange(t), e.extend(l.node, l.offset))
                                        : (t.setEnd(l.node, l.offset), e.addRange(t)));
                            }
                        for (t = [], e = n; (e = e.parentNode); )
                            1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
                        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                            ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
                    }
                }
                var hr = c && 'documentMode' in document && 11 >= document.documentMode,
                    gr = null,
                    yr = null,
                    vr = null,
                    br = !1;
                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br ||
                        null == gr ||
                        gr !== K(r) ||
                        ('selectionStart' in (r = gr) && pr(r)
                            ? (r = { start: r.selectionStart, end: r.selectionEnd })
                            : (r = {
                                  anchorNode: (r = (
                                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                                      window
                                  ).getSelection()).anchorNode,
                                  anchorOffset: r.anchorOffset,
                                  focusNode: r.focusNode,
                                  focusOffset: r.focusOffset,
                              }),
                        (vr && ur(vr, r)) ||
                            ((vr = r),
                            0 < (r = Qr(yr, 'onSelect')).length &&
                                ((t = new cn('onSelect', 'select', null, t, n)),
                                e.push({ event: t, listeners: r }),
                                (t.target = gr))));
                }
                function kr(e, t) {
                    var n = {};
                    return (
                        (n[e.toLowerCase()] = t.toLowerCase()),
                        (n['Webkit' + e] = 'webkit' + t),
                        (n['Moz' + e] = 'moz' + t),
                        n
                    );
                }
                var _r = {
                        animationend: kr('Animation', 'AnimationEnd'),
                        animationiteration: kr('Animation', 'AnimationIteration'),
                        animationstart: kr('Animation', 'AnimationStart'),
                        transitionend: kr('Transition', 'TransitionEnd'),
                    },
                    Sr = {},
                    xr = {};
                function Er(e) {
                    if (Sr[e]) return Sr[e];
                    if (!_r[e]) return e;
                    var t,
                        n = _r[e];
                    for (t in n) if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
                    return e;
                }
                c &&
                    ((xr = document.createElement('div').style),
                    'AnimationEvent' in window ||
                        (delete _r.animationend.animation,
                        delete _r.animationiteration.animation,
                        delete _r.animationstart.animation),
                    'TransitionEvent' in window || delete _r.transitionend.transition);
                var Cr = Er('animationend'),
                    Tr = Er('animationiteration'),
                    Nr = Er('animationstart'),
                    Pr = Er('transitionend'),
                    Lr = new Map(),
                    Ir =
                        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                            ' ',
                        );
                function zr(e, t) {
                    Lr.set(e, t), u(t, [e]);
                }
                for (var Or = 0; Or < Ir.length; Or++) {
                    var Mr = Ir[Or];
                    zr(Mr.toLowerCase(), 'on' + (Mr[0].toUpperCase() + Mr.slice(1)));
                }
                zr(Cr, 'onAnimationEnd'),
                    zr(Tr, 'onAnimationIteration'),
                    zr(Nr, 'onAnimationStart'),
                    zr('dblclick', 'onDoubleClick'),
                    zr('focusin', 'onFocus'),
                    zr('focusout', 'onBlur'),
                    zr(Pr, 'onTransitionEnd'),
                    s('onMouseEnter', ['mouseout', 'mouseover']),
                    s('onMouseLeave', ['mouseout', 'mouseover']),
                    s('onPointerEnter', ['pointerout', 'pointerover']),
                    s('onPointerLeave', ['pointerout', 'pointerover']),
                    u('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
                    u(
                        'onSelect',
                        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                            ' ',
                        ),
                    ),
                    u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
                    u('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
                    u('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
                    u('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
                var Rr =
                        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                            ' ',
                        ),
                    Dr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Rr));
                function Fr(e, t, n) {
                    var r = e.type || 'unknown-event';
                    (e.currentTarget = n),
                        (function (e, t, n, r, a, l, i, u, s) {
                            if ((Ue.apply(this, arguments), De)) {
                                if (!De) throw Error(o(198));
                                var c = Fe;
                                (De = !1), (Fe = null), Ae || ((Ae = !0), (Be = c));
                            }
                        })(r, t, void 0, e),
                        (e.currentTarget = null);
                }
                function Ar(e, t) {
                    t = 0 != (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var l = r.length - 1; 0 <= l; l--) {
                                    var i = r[l],
                                        u = i.instance,
                                        s = i.currentTarget;
                                    if (((i = i.listener), u !== o && a.isPropagationStopped())) break e;
                                    Fr(a, i, s), (o = u);
                                }
                            else
                                for (l = 0; l < r.length; l++) {
                                    if (
                                        ((u = (i = r[l]).instance),
                                        (s = i.currentTarget),
                                        (i = i.listener),
                                        u !== o && a.isPropagationStopped())
                                    )
                                        break e;
                                    Fr(a, i, s), (o = u);
                                }
                        }
                    }
                    if (Ae) throw ((e = Be), (Ae = !1), (Be = null), e);
                }
                function Br(e, t) {
                    var n = t[ha];
                    void 0 === n && (n = t[ha] = new Set());
                    var r = e + '__bubble';
                    n.has(r) || (Hr(t, e, 2, !1), n.add(r));
                }
                function jr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Hr(n, e, r, t);
                }
                var Ur = '_reactListening' + Math.random().toString(36).slice(2);
                function $r(e) {
                    if (!e[Ur]) {
                        (e[Ur] = !0),
                            l.forEach(function (t) {
                                'selectionchange' !== t && (Dr.has(t) || jr(t, !1, e), jr(t, !0, e));
                            });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Ur] || ((t[Ur] = !0), jr('selectionchange', !1, t));
                    }
                }
                function Hr(e, t, n, r) {
                    switch (Zt(t)) {
                        case 1:
                            var a = Wt;
                            break;
                        case 4:
                            a = Qt;
                            break;
                        default:
                            a = qt;
                    }
                    (n = a.bind(null, t, n, e)),
                        (a = void 0),
                        !Oe || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
                        r
                            ? void 0 !== a
                                ? e.addEventListener(t, n, { capture: !0, passive: a })
                                : e.addEventListener(t, n, !0)
                            : void 0 !== a
                            ? e.addEventListener(t, n, { passive: a })
                            : e.addEventListener(t, n, !1);
                }
                function Vr(e, t, n, r, a) {
                    var o = r;
                    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
                        e: for (;;) {
                            if (null === r) return;
                            var l = r.tag;
                            if (3 === l || 4 === l) {
                                var i = r.stateNode.containerInfo;
                                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                                if (4 === l)
                                    for (l = r.return; null !== l; ) {
                                        var u = l.tag;
                                        if (
                                            (3 === u || 4 === u) &&
                                            ((u = l.stateNode.containerInfo) === a ||
                                                (8 === u.nodeType && u.parentNode === a))
                                        )
                                            return;
                                        l = l.return;
                                    }
                                for (; null !== i; ) {
                                    if (null === (l = va(i))) return;
                                    if (5 === (u = l.tag) || 6 === u) {
                                        r = o = l;
                                        continue e;
                                    }
                                    i = i.parentNode;
                                }
                            }
                            r = r.return;
                        }
                    Ie(function () {
                        var r = o,
                            a = ke(n),
                            l = [];
                        e: {
                            var i = Lr.get(e);
                            if (void 0 !== i) {
                                var u = cn,
                                    s = e;
                                switch (e) {
                                    case 'keypress':
                                        if (0 === tn(n)) break e;
                                    case 'keydown':
                                    case 'keyup':
                                        u = Tn;
                                        break;
                                    case 'focusin':
                                        (s = 'focus'), (u = gn);
                                        break;
                                    case 'focusout':
                                        (s = 'blur'), (u = gn);
                                        break;
                                    case 'beforeblur':
                                    case 'afterblur':
                                        u = gn;
                                        break;
                                    case 'click':
                                        if (2 === n.button) break e;
                                    case 'auxclick':
                                    case 'dblclick':
                                    case 'mousedown':
                                    case 'mousemove':
                                    case 'mouseup':
                                    case 'mouseout':
                                    case 'mouseover':
                                    case 'contextmenu':
                                        u = mn;
                                        break;
                                    case 'drag':
                                    case 'dragend':
                                    case 'dragenter':
                                    case 'dragexit':
                                    case 'dragleave':
                                    case 'dragover':
                                    case 'dragstart':
                                    case 'drop':
                                        u = hn;
                                        break;
                                    case 'touchcancel':
                                    case 'touchend':
                                    case 'touchmove':
                                    case 'touchstart':
                                        u = Pn;
                                        break;
                                    case Cr:
                                    case Tr:
                                    case Nr:
                                        u = yn;
                                        break;
                                    case Pr:
                                        u = Ln;
                                        break;
                                    case 'scroll':
                                        u = fn;
                                        break;
                                    case 'wheel':
                                        u = zn;
                                        break;
                                    case 'copy':
                                    case 'cut':
                                    case 'paste':
                                        u = bn;
                                        break;
                                    case 'gotpointercapture':
                                    case 'lostpointercapture':
                                    case 'pointercancel':
                                    case 'pointerdown':
                                    case 'pointermove':
                                    case 'pointerout':
                                    case 'pointerover':
                                    case 'pointerup':
                                        u = Nn;
                                }
                                var c = 0 != (4 & t),
                                    d = !c && 'scroll' === e,
                                    f = c ? (null !== i ? i + 'Capture' : null) : i;
                                c = [];
                                for (var p, m = r; null !== m; ) {
                                    var h = (p = m).stateNode;
                                    if (
                                        (5 === p.tag &&
                                            null !== h &&
                                            ((p = h), null !== f && null != (h = ze(m, f)) && c.push(Wr(m, h, p))),
                                        d)
                                    )
                                        break;
                                    m = m.return;
                                }
                                0 < c.length && ((i = new u(i, s, null, n, a)), l.push({ event: i, listeners: c }));
                            }
                        }
                        if (0 == (7 & t)) {
                            if (
                                ((u = 'mouseout' === e || 'pointerout' === e),
                                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                                    n === we ||
                                    !(s = n.relatedTarget || n.fromElement) ||
                                    (!va(s) && !s[ma])) &&
                                    (u || i) &&
                                    ((i =
                                        a.window === a
                                            ? a
                                            : (i = a.ownerDocument)
                                            ? i.defaultView || i.parentWindow
                                            : window),
                                    u
                                        ? ((u = r),
                                          null !== (s = (s = n.relatedTarget || n.toElement) ? va(s) : null) &&
                                              (s !== (d = $e(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                                              (s = null))
                                        : ((u = null), (s = r)),
                                    u !== s))
                            ) {
                                if (
                                    ((c = mn),
                                    (h = 'onMouseLeave'),
                                    (f = 'onMouseEnter'),
                                    (m = 'mouse'),
                                    ('pointerout' !== e && 'pointerover' !== e) ||
                                        ((c = Nn), (h = 'onPointerLeave'), (f = 'onPointerEnter'), (m = 'pointer')),
                                    (d = null == u ? i : wa(u)),
                                    (p = null == s ? i : wa(s)),
                                    ((i = new c(h, m + 'leave', u, n, a)).target = d),
                                    (i.relatedTarget = p),
                                    (h = null),
                                    va(a) === r &&
                                        (((c = new c(f, m + 'enter', s, n, a)).target = p),
                                        (c.relatedTarget = d),
                                        (h = c)),
                                    (d = h),
                                    u && s)
                                )
                                    e: {
                                        for (f = s, m = 0, p = c = u; p; p = qr(p)) m++;
                                        for (p = 0, h = f; h; h = qr(h)) p++;
                                        for (; 0 < m - p; ) (c = qr(c)), m--;
                                        for (; 0 < p - m; ) (f = qr(f)), p--;
                                        for (; m--; ) {
                                            if (c === f || (null !== f && c === f.alternate)) break e;
                                            (c = qr(c)), (f = qr(f));
                                        }
                                        c = null;
                                    }
                                else c = null;
                                null !== u && Kr(l, i, u, c, !1), null !== s && null !== d && Kr(l, d, s, c, !0);
                            }
                            if (
                                'select' === (u = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                                ('input' === u && 'file' === i.type)
                            )
                                var g = Zn;
                            else if (Vn(i))
                                if (Xn) g = lr;
                                else {
                                    g = ar;
                                    var y = rr;
                                }
                            else
                                (u = i.nodeName) &&
                                    'input' === u.toLowerCase() &&
                                    ('checkbox' === i.type || 'radio' === i.type) &&
                                    (g = or);
                            switch (
                                (g && (g = g(e, r))
                                    ? Wn(l, g, n, a)
                                    : (y && y(e, i, r),
                                      'focusout' === e &&
                                          (y = i._wrapperState) &&
                                          y.controlled &&
                                          'number' === i.type &&
                                          ee(i, 'number', i.value)),
                                (y = r ? wa(r) : window),
                                e)
                            ) {
                                case 'focusin':
                                    (Vn(y) || 'true' === y.contentEditable) && ((gr = y), (yr = r), (vr = null));
                                    break;
                                case 'focusout':
                                    vr = yr = gr = null;
                                    break;
                                case 'mousedown':
                                    br = !0;
                                    break;
                                case 'contextmenu':
                                case 'mouseup':
                                case 'dragend':
                                    (br = !1), wr(l, n, a);
                                    break;
                                case 'selectionchange':
                                    if (hr) break;
                                case 'keydown':
                                case 'keyup':
                                    wr(l, n, a);
                            }
                            var v;
                            if (Mn)
                                e: {
                                    switch (e) {
                                        case 'compositionstart':
                                            var b = 'onCompositionStart';
                                            break e;
                                        case 'compositionend':
                                            b = 'onCompositionEnd';
                                            break e;
                                        case 'compositionupdate':
                                            b = 'onCompositionUpdate';
                                            break e;
                                    }
                                    b = void 0;
                                }
                            else
                                $n
                                    ? jn(e, n) && (b = 'onCompositionEnd')
                                    : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
                            b &&
                                (Fn &&
                                    'ko' !== n.locale &&
                                    ($n || 'onCompositionStart' !== b
                                        ? 'onCompositionEnd' === b && $n && (v = en())
                                        : ((Gt = 'value' in (Xt = a) ? Xt.value : Xt.textContent), ($n = !0))),
                                0 < (y = Qr(r, b)).length &&
                                    ((b = new wn(b, e, null, n, a)),
                                    l.push({ event: b, listeners: y }),
                                    v ? (b.data = v) : null !== (v = Un(n)) && (b.data = v))),
                                (v = Dn
                                    ? (function (e, t) {
                                          switch (e) {
                                              case 'compositionend':
                                                  return Un(t);
                                              case 'keypress':
                                                  return 32 !== t.which ? null : ((Bn = !0), An);
                                              case 'textInput':
                                                  return (e = t.data) === An && Bn ? null : e;
                                              default:
                                                  return null;
                                          }
                                      })(e, n)
                                    : (function (e, t) {
                                          if ($n)
                                              return 'compositionend' === e || (!Mn && jn(e, t))
                                                  ? ((e = en()), (Jt = Gt = Xt = null), ($n = !1), e)
                                                  : null;
                                          switch (e) {
                                              case 'paste':
                                              default:
                                                  return null;
                                              case 'keypress':
                                                  if (
                                                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                                                      (t.ctrlKey && t.altKey)
                                                  ) {
                                                      if (t.char && 1 < t.char.length) return t.char;
                                                      if (t.which) return String.fromCharCode(t.which);
                                                  }
                                                  return null;
                                              case 'compositionend':
                                                  return Fn && 'ko' !== t.locale ? null : t.data;
                                          }
                                      })(e, n)) &&
                                    0 < (r = Qr(r, 'onBeforeInput')).length &&
                                    ((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
                                    l.push({ event: a, listeners: r }),
                                    (a.data = v));
                        }
                        Ar(l, t);
                    });
                }
                function Wr(e, t, n) {
                    return { instance: e, listener: t, currentTarget: n };
                }
                function Qr(e, t) {
                    for (var n = t + 'Capture', r = []; null !== e; ) {
                        var a = e,
                            o = a.stateNode;
                        5 === a.tag &&
                            null !== o &&
                            ((a = o),
                            null != (o = ze(e, n)) && r.unshift(Wr(e, o, a)),
                            null != (o = ze(e, t)) && r.push(Wr(e, o, a))),
                            (e = e.return);
                    }
                    return r;
                }
                function qr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return;
                    } while (e && 5 !== e.tag);
                    return e || null;
                }
                function Kr(e, t, n, r, a) {
                    for (var o = t._reactName, l = []; null !== n && n !== r; ) {
                        var i = n,
                            u = i.alternate,
                            s = i.stateNode;
                        if (null !== u && u === r) break;
                        5 === i.tag &&
                            null !== s &&
                            ((i = s),
                            a
                                ? null != (u = ze(n, o)) && l.unshift(Wr(n, u, i))
                                : a || (null != (u = ze(n, o)) && l.push(Wr(n, u, i)))),
                            (n = n.return);
                    }
                    0 !== l.length && e.push({ event: t, listeners: l });
                }
                var Yr = /\r\n?/g,
                    Zr = /\u0000|\uFFFD/g;
                function Xr(e) {
                    return ('string' == typeof e ? e : '' + e).replace(Yr, '\n').replace(Zr, '');
                }
                function Gr(e, t, n) {
                    if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
                }
                function Jr() {}
                var ea = null,
                    ta = null;
                function na(e, t) {
                    return (
                        'textarea' === e ||
                        'noscript' === e ||
                        'string' == typeof t.children ||
                        'number' == typeof t.children ||
                        ('object' == typeof t.dangerouslySetInnerHTML &&
                            null !== t.dangerouslySetInnerHTML &&
                            null != t.dangerouslySetInnerHTML.__html)
                    );
                }
                var ra = 'function' == typeof setTimeout ? setTimeout : void 0,
                    aa = 'function' == typeof clearTimeout ? clearTimeout : void 0,
                    oa = 'function' == typeof Promise ? Promise : void 0,
                    la =
                        'function' == typeof queueMicrotask
                            ? queueMicrotask
                            : void 0 !== oa
                            ? function (e) {
                                  return oa.resolve(null).then(e).catch(ia);
                              }
                            : ra;
                function ia(e) {
                    setTimeout(function () {
                        throw e;
                    });
                }
                function ua(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if ((e.removeChild(n), a && 8 === a.nodeType))
                            if ('/$' === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void $t(t);
                                r--;
                            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
                        n = a;
                    } while (n);
                    $t(t);
                }
                function sa(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
                            if ('/$' === t) return null;
                        }
                    }
                    return e;
                }
                function ca(e) {
                    e = e.previousSibling;
                    for (var t = 0; e; ) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ('$' === n || '$!' === n || '$?' === n) {
                                if (0 === t) return e;
                                t--;
                            } else '/$' === n && t++;
                        }
                        e = e.previousSibling;
                    }
                    return null;
                }
                var da = Math.random().toString(36).slice(2),
                    fa = '__reactFiber$' + da,
                    pa = '__reactProps$' + da,
                    ma = '__reactContainer$' + da,
                    ha = '__reactEvents$' + da,
                    ga = '__reactListeners$' + da,
                    ya = '__reactHandles$' + da;
                function va(e) {
                    var t = e[fa];
                    if (t) return t;
                    for (var n = e.parentNode; n; ) {
                        if ((t = n[ma] || n[fa])) {
                            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                                for (e = ca(e); null !== e; ) {
                                    if ((n = e[fa])) return n;
                                    e = ca(e);
                                }
                            return t;
                        }
                        n = (e = n).parentNode;
                    }
                    return null;
                }
                function ba(e) {
                    return !(e = e[fa] || e[ma]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
                        ? null
                        : e;
                }
                function wa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33));
                }
                function ka(e) {
                    return e[pa] || null;
                }
                var _a = [],
                    Sa = -1;
                function xa(e) {
                    return { current: e };
                }
                function Ea(e) {
                    0 > Sa || ((e.current = _a[Sa]), (_a[Sa] = null), Sa--);
                }
                function Ca(e, t) {
                    Sa++, (_a[Sa] = e.current), (e.current = t);
                }
                var Ta = {},
                    Na = xa(Ta),
                    Pa = xa(!1),
                    La = Ta;
                function Ia(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Ta;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                        return r.__reactInternalMemoizedMaskedChildContext;
                    var a,
                        o = {};
                    for (a in n) o[a] = t[a];
                    return (
                        r &&
                            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
                            (e.__reactInternalMemoizedMaskedChildContext = o)),
                        o
                    );
                }
                function za(e) {
                    return null != (e = e.childContextTypes);
                }
                function Oa() {
                    Ea(Pa), Ea(Na);
                }
                function Ma(e, t, n) {
                    if (Na.current !== Ta) throw Error(o(168));
                    Ca(Na, t), Ca(Pa, n);
                }
                function Ra(e, t, n) {
                    var r = e.stateNode;
                    if (((t = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
                    for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(o(108, H(e) || 'Unknown', a));
                    return F({}, n, r);
                }
                function Da(e) {
                    return (
                        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ta),
                        (La = Na.current),
                        Ca(Na, e),
                        Ca(Pa, Pa.current),
                        !0
                    );
                }
                function Fa(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(o(169));
                    n
                        ? ((e = Ra(e, t, La)),
                          (r.__reactInternalMemoizedMergedChildContext = e),
                          Ea(Pa),
                          Ea(Na),
                          Ca(Na, e))
                        : Ea(Pa),
                        Ca(Pa, n);
                }
                var Aa = null,
                    Ba = !1,
                    ja = !1;
                function Ua(e) {
                    null === Aa ? (Aa = [e]) : Aa.push(e);
                }
                function $a() {
                    if (!ja && null !== Aa) {
                        ja = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Aa;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0);
                                } while (null !== r);
                            }
                            (Aa = null), (Ba = !1);
                        } catch (t) {
                            throw (null !== Aa && (Aa = Aa.slice(e + 1)), qe(Je, $a), t);
                        } finally {
                            (bt = t), (ja = !1);
                        }
                    }
                    return null;
                }
                var Ha = [],
                    Va = 0,
                    Wa = null,
                    Qa = 0,
                    qa = [],
                    Ka = 0,
                    Ya = null,
                    Za = 1,
                    Xa = '';
                function Ga(e, t) {
                    (Ha[Va++] = Qa), (Ha[Va++] = Wa), (Wa = e), (Qa = t);
                }
                function Ja(e, t, n) {
                    (qa[Ka++] = Za), (qa[Ka++] = Xa), (qa[Ka++] = Ya), (Ya = e);
                    var r = Za;
                    e = Xa;
                    var a = 32 - lt(r) - 1;
                    (r &= ~(1 << a)), (n += 1);
                    var o = 32 - lt(t) + a;
                    if (30 < o) {
                        var l = a - (a % 5);
                        (o = (r & ((1 << l) - 1)).toString(32)),
                            (r >>= l),
                            (a -= l),
                            (Za = (1 << (32 - lt(t) + a)) | (n << a) | r),
                            (Xa = o + e);
                    } else (Za = (1 << o) | (n << a) | r), (Xa = e);
                }
                function eo(e) {
                    null !== e.return && (Ga(e, 1), Ja(e, 1, 0));
                }
                function to(e) {
                    for (; e === Wa; ) (Wa = Ha[--Va]), (Ha[Va] = null), (Qa = Ha[--Va]), (Ha[Va] = null);
                    for (; e === Ya; )
                        (Ya = qa[--Ka]),
                            (qa[Ka] = null),
                            (Xa = qa[--Ka]),
                            (qa[Ka] = null),
                            (Za = qa[--Ka]),
                            (qa[Ka] = null);
                }
                var no = null,
                    ro = null,
                    ao = !1,
                    oo = null;
                function lo(e, t) {
                    var n = zs(5, null, null, 0);
                    (n.elementType = 'DELETED'),
                        (n.stateNode = t),
                        (n.return = e),
                        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
                }
                function io(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return (
                                null !==
                                    (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
                            );
                        case 6:
                            return (
                                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                                ((e.stateNode = t), (no = e), (ro = null), !0)
                            );
                        case 13:
                            return (
                                null !== (t = 8 !== t.nodeType ? null : t) &&
                                ((n = null !== Ya ? { id: Za, overflow: Xa } : null),
                                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                                ((n = zs(18, null, null, 0)).stateNode = t),
                                (n.return = e),
                                (e.child = n),
                                (no = e),
                                (ro = null),
                                !0)
                            );
                        default:
                            return !1;
                    }
                }
                function uo(e) {
                    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
                }
                function so(e) {
                    if (ao) {
                        var t = ro;
                        if (t) {
                            var n = t;
                            if (!io(e, t)) {
                                if (uo(e)) throw Error(o(418));
                                t = sa(n.nextSibling);
                                var r = no;
                                t && io(e, t) ? lo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
                            }
                        } else {
                            if (uo(e)) throw Error(o(418));
                            (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
                        }
                    }
                }
                function co(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
                    no = e;
                }
                function fo(e) {
                    if (e !== no) return !1;
                    if (!ao) return co(e), (ao = !0), !1;
                    var t;
                    if (
                        ((t = 3 !== e.tag) &&
                            !(t = 5 !== e.tag) &&
                            (t = 'head' !== (t = e.type) && 'body' !== t && !na(e.type, e.memoizedProps)),
                        t && (t = ro))
                    ) {
                        if (uo(e)) throw (po(), Error(o(418)));
                        for (; t; ) lo(e, t), (t = sa(t.nextSibling));
                    }
                    if ((co(e), 13 === e.tag)) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e; ) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ('/$' === n) {
                                        if (0 === t) {
                                            ro = sa(e.nextSibling);
                                            break e;
                                        }
                                        t--;
                                    } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                                }
                                e = e.nextSibling;
                            }
                            ro = null;
                        }
                    } else ro = no ? sa(e.stateNode.nextSibling) : null;
                    return !0;
                }
                function po() {
                    for (var e = ro; e; ) e = sa(e.nextSibling);
                }
                function mo() {
                    (ro = no = null), (ao = !1);
                }
                function ho(e) {
                    null === oo ? (oo = [e]) : oo.push(e);
                }
                var go = w.ReactCurrentBatchConfig;
                function yo(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in ((t = F({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
                        return t;
                    }
                    return t;
                }
                var vo = xa(null),
                    bo = null,
                    wo = null,
                    ko = null;
                function _o() {
                    ko = wo = bo = null;
                }
                function So(e) {
                    var t = vo.current;
                    Ea(vo), (e._currentValue = t);
                }
                function xo(e, t, n) {
                    for (; null !== e; ) {
                        var r = e.alternate;
                        if (
                            ((e.childLanes & t) !== t
                                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                            e === n)
                        )
                            break;
                        e = e.return;
                    }
                }
                function Eo(e, t) {
                    (bo = e),
                        (ko = wo = null),
                        null !== (e = e.dependencies) &&
                            null !== e.firstContext &&
                            (0 != (e.lanes & t) && (wi = !0), (e.firstContext = null));
                }
                function Co(e) {
                    var t = e._currentValue;
                    if (ko !== e)
                        if (((e = { context: e, memoizedValue: t, next: null }), null === wo)) {
                            if (null === bo) throw Error(o(308));
                            (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
                        } else wo = wo.next = e;
                    return t;
                }
                var To = null;
                function No(e) {
                    null === To ? (To = [e]) : To.push(e);
                }
                function Po(e, t, n, r) {
                    var a = t.interleaved;
                    return (
                        null === a ? ((n.next = n), No(t)) : ((n.next = a.next), (a.next = n)),
                        (t.interleaved = n),
                        Lo(e, r)
                    );
                }
                function Lo(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
                        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
                    return 3 === n.tag ? n.stateNode : null;
                }
                var Io = !1;
                function zo(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: { pending: null, interleaved: null, lanes: 0 },
                        effects: null,
                    };
                }
                function Oo(e, t) {
                    (e = e.updateQueue),
                        t.updateQueue === e &&
                            (t.updateQueue = {
                                baseState: e.baseState,
                                firstBaseUpdate: e.firstBaseUpdate,
                                lastBaseUpdate: e.lastBaseUpdate,
                                shared: e.shared,
                                effects: e.effects,
                            });
                }
                function Mo(e, t) {
                    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
                }
                function Ro(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (((r = r.shared), 0 != (2 & Pu))) {
                        var a = r.pending;
                        return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Lo(e, n);
                    }
                    return (
                        null === (a = r.interleaved) ? ((t.next = t), No(r)) : ((t.next = a.next), (a.next = t)),
                        (r.interleaved = t),
                        Lo(e, n)
                    );
                }
                function Do(e, t, n) {
                    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
                        var r = t.lanes;
                        (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
                    }
                }
                function Fo(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var l = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null,
                                };
                                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
                            } while (null !== n);
                            null === o ? (a = o = t) : (o = o.next = t);
                        } else a = o = t;
                        return (
                            (n = {
                                baseState: r.baseState,
                                firstBaseUpdate: a,
                                lastBaseUpdate: o,
                                shared: r.shared,
                                effects: r.effects,
                            }),
                            void (e.updateQueue = n)
                        );
                    }
                    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
                }
                function Ao(e, t, n, r) {
                    var a = e.updateQueue;
                    Io = !1;
                    var o = a.firstBaseUpdate,
                        l = a.lastBaseUpdate,
                        i = a.shared.pending;
                    if (null !== i) {
                        a.shared.pending = null;
                        var u = i,
                            s = u.next;
                        (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
                        var c = e.alternate;
                        null !== c &&
                            (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
                            (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
                    }
                    if (null !== o) {
                        var d = a.baseState;
                        for (l = 0, c = s = u = null, i = o; ; ) {
                            var f = i.lane,
                                p = i.eventTime;
                            if ((r & f) === f) {
                                null !== c &&
                                    (c = c.next =
                                        {
                                            eventTime: p,
                                            lane: 0,
                                            tag: i.tag,
                                            payload: i.payload,
                                            callback: i.callback,
                                            next: null,
                                        });
                                e: {
                                    var m = e,
                                        h = i;
                                    switch (((f = t), (p = n), h.tag)) {
                                        case 1:
                                            if ('function' == typeof (m = h.payload)) {
                                                d = m.call(p, d, f);
                                                break e;
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = (-65537 & m.flags) | 128;
                                        case 0:
                                            if (
                                                null == (f = 'function' == typeof (m = h.payload) ? m.call(p, d, f) : m)
                                            )
                                                break e;
                                            d = F({}, d, f);
                                            break e;
                                        case 2:
                                            Io = !0;
                                    }
                                }
                                null !== i.callback &&
                                    0 !== i.lane &&
                                    ((e.flags |= 64), null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
                            } else
                                (p = {
                                    eventTime: p,
                                    lane: f,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null,
                                }),
                                    null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                                    (l |= f);
                            if (null === (i = i.next)) {
                                if (null === (i = a.shared.pending)) break;
                                (i = (f = i).next), (f.next = null), (a.lastBaseUpdate = f), (a.shared.pending = null);
                            }
                        }
                        if (
                            (null === c && (u = d),
                            (a.baseState = u),
                            (a.firstBaseUpdate = s),
                            (a.lastBaseUpdate = c),
                            null !== (t = a.shared.interleaved))
                        ) {
                            a = t;
                            do {
                                (l |= a.lane), (a = a.next);
                            } while (a !== t);
                        } else null === o && (a.shared.lanes = 0);
                        (Fu |= l), (e.lanes = l), (e.memoizedState = d);
                    }
                }
                function Bo(e, t, n) {
                    if (((e = t.effects), (t.effects = null), null !== e))
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (((r.callback = null), (r = n), 'function' != typeof a)) throw Error(o(191, a));
                                a.call(r);
                            }
                        }
                }
                var jo = new r.Component().refs;
                function Uo(e, t, n, r) {
                    (n = null == (n = n(r, (t = e.memoizedState))) ? t : F({}, t, n)),
                        (e.memoizedState = n),
                        0 === e.lanes && (e.updateQueue.baseState = n);
                }
                var $o = {
                    isMounted: function (e) {
                        return !!(e = e._reactInternals) && $e(e) === e;
                    },
                    enqueueSetState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = ts(),
                            a = ns(e),
                            o = Mo(r, a);
                        (o.payload = t),
                            null != n && (o.callback = n),
                            null !== (t = Ro(e, o, a)) && (rs(t, e, a, r), Do(t, e, a));
                    },
                    enqueueReplaceState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = ts(),
                            a = ns(e),
                            o = Mo(r, a);
                        (o.tag = 1),
                            (o.payload = t),
                            null != n && (o.callback = n),
                            null !== (t = Ro(e, o, a)) && (rs(t, e, a, r), Do(t, e, a));
                    },
                    enqueueForceUpdate: function (e, t) {
                        e = e._reactInternals;
                        var n = ts(),
                            r = ns(e),
                            a = Mo(n, r);
                        (a.tag = 2),
                            null != t && (a.callback = t),
                            null !== (t = Ro(e, a, r)) && (rs(t, e, r, n), Do(t, e, r));
                    },
                };
                function Ho(e, t, n, r, a, o, l) {
                    return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
                        ? e.shouldComponentUpdate(r, o, l)
                        : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(a, o);
                }
                function Vo(e, t, n) {
                    var r = !1,
                        a = Ta,
                        o = t.contextType;
                    return (
                        'object' == typeof o && null !== o
                            ? (o = Co(o))
                            : ((a = za(t) ? La : Na.current), (o = (r = null != (r = t.contextTypes)) ? Ia(e, a) : Ta)),
                        (t = new t(n, o)),
                        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
                        (t.updater = $o),
                        (e.stateNode = t),
                        (t._reactInternals = e),
                        r &&
                            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
                            (e.__reactInternalMemoizedMaskedChildContext = o)),
                        t
                    );
                }
                function Wo(e, t, n, r) {
                    (e = t.state),
                        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                        'function' == typeof t.UNSAFE_componentWillReceiveProps &&
                            t.UNSAFE_componentWillReceiveProps(n, r),
                        t.state !== e && $o.enqueueReplaceState(t, t.state, null);
                }
                function Qo(e, t, n, r) {
                    var a = e.stateNode;
                    (a.props = n), (a.state = e.memoizedState), (a.refs = jo), zo(e);
                    var o = t.contextType;
                    'object' == typeof o && null !== o
                        ? (a.context = Co(o))
                        : ((o = za(t) ? La : Na.current), (a.context = Ia(e, o))),
                        (a.state = e.memoizedState),
                        'function' == typeof (o = t.getDerivedStateFromProps) &&
                            (Uo(e, t, o, n), (a.state = e.memoizedState)),
                        'function' == typeof t.getDerivedStateFromProps ||
                            'function' == typeof a.getSnapshotBeforeUpdate ||
                            ('function' != typeof a.UNSAFE_componentWillMount &&
                                'function' != typeof a.componentWillMount) ||
                            ((t = a.state),
                            'function' == typeof a.componentWillMount && a.componentWillMount(),
                            'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                            t !== a.state && $o.enqueueReplaceState(a, a.state, null),
                            Ao(e, n, a, r),
                            (a.state = e.memoizedState)),
                        'function' == typeof a.componentDidMount && (e.flags |= 4194308);
                }
                function qo(e, t, n) {
                    if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
                        if (n._owner) {
                            if ((n = n._owner)) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode;
                            }
                            if (!r) throw Error(o(147, e));
                            var a = r,
                                l = '' + e;
                            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === l
                                ? t.ref
                                : ((t = function (e) {
                                      var t = a.refs;
                                      t === jo && (t = a.refs = {}), null === e ? delete t[l] : (t[l] = e);
                                  }),
                                  (t._stringRef = l),
                                  t);
                        }
                        if ('string' != typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e));
                    }
                    return e;
                }
                function Ko(e, t) {
                    throw (
                        ((e = Object.prototype.toString.call(t)),
                        Error(
                            o(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
                        ))
                    );
                }
                function Yo(e) {
                    return (0, e._init)(e._payload);
                }
                function Zo(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
                        }
                    }
                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r; ) t(n, r), (r = r.sibling);
                        return null;
                    }
                    function r(e, t) {
                        for (e = new Map(); null !== t; )
                            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
                        return e;
                    }
                    function a(e, t) {
                        return ((e = Ms(e, t)).index = 0), (e.sibling = null), e;
                    }
                    function l(t, n, r) {
                        return (
                            (t.index = r),
                            e
                                ? null !== (r = t.alternate)
                                    ? (r = r.index) < n
                                        ? ((t.flags |= 2), n)
                                        : r
                                    : ((t.flags |= 2), n)
                                : ((t.flags |= 1048576), n)
                        );
                    }
                    function i(t) {
                        return e && null === t.alternate && (t.flags |= 2), t;
                    }
                    function u(e, t, n, r) {
                        return null === t || 6 !== t.tag
                            ? (((t = As(n, e.mode, r)).return = e), t)
                            : (((t = a(t, n)).return = e), t);
                    }
                    function s(e, t, n, r) {
                        var o = n.type;
                        return o === S
                            ? d(e, t, n.props.children, r, n.key)
                            : null !== t &&
                              (t.elementType === o ||
                                  ('object' == typeof o && null !== o && o.$$typeof === z && Yo(o) === t.type))
                            ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
                            : (((r = Rs(n.type, n.key, n.props, null, e.mode, r)).ref = qo(e, t, n)),
                              (r.return = e),
                              r);
                    }
                    function c(e, t, n, r) {
                        return null === t ||
                            4 !== t.tag ||
                            t.stateNode.containerInfo !== n.containerInfo ||
                            t.stateNode.implementation !== n.implementation
                            ? (((t = Bs(n, e.mode, r)).return = e), t)
                            : (((t = a(t, n.children || [])).return = e), t);
                    }
                    function d(e, t, n, r, o) {
                        return null === t || 7 !== t.tag
                            ? (((t = Ds(n, e.mode, r, o)).return = e), t)
                            : (((t = a(t, n)).return = e), t);
                    }
                    function f(e, t, n) {
                        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
                            return ((t = As('' + t, e.mode, n)).return = e), t;
                        if ('object' == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case k:
                                    return (
                                        ((n = Rs(t.type, t.key, t.props, null, e.mode, n)).ref = qo(e, null, t)),
                                        (n.return = e),
                                        n
                                    );
                                case _:
                                    return ((t = Bs(t, e.mode, n)).return = e), t;
                                case z:
                                    return f(e, (0, t._init)(t._payload), n);
                            }
                            if (te(t) || R(t)) return ((t = Ds(t, e.mode, n, null)).return = e), t;
                            Ko(e, t);
                        }
                        return null;
                    }
                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if (('string' == typeof n && '' !== n) || 'number' == typeof n)
                            return null !== a ? null : u(e, t, '' + n, r);
                        if ('object' == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case k:
                                    return n.key === a ? s(e, t, n, r) : null;
                                case _:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case z:
                                    return p(e, t, (a = n._init)(n._payload), r);
                            }
                            if (te(n) || R(n)) return null !== a ? null : d(e, t, n, r, null);
                            Ko(e, n);
                        }
                        return null;
                    }
                    function m(e, t, n, r, a) {
                        if (('string' == typeof r && '' !== r) || 'number' == typeof r)
                            return u(t, (e = e.get(n) || null), '' + r, a);
                        if ('object' == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case k:
                                    return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                                case _:
                                    return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                                case z:
                                    return m(e, t, n, (0, r._init)(r._payload), a);
                            }
                            if (te(r) || R(r)) return d(t, (e = e.get(n) || null), r, a, null);
                            Ko(t, r);
                        }
                        return null;
                    }
                    function h(a, o, i, u) {
                        for (var s = null, c = null, d = o, h = (o = 0), g = null; null !== d && h < i.length; h++) {
                            d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
                            var y = p(a, d, i[h], u);
                            if (null === y) {
                                null === d && (d = g);
                                break;
                            }
                            e && d && null === y.alternate && t(a, d),
                                (o = l(y, o, h)),
                                null === c ? (s = y) : (c.sibling = y),
                                (c = y),
                                (d = g);
                        }
                        if (h === i.length) return n(a, d), ao && Ga(a, h), s;
                        if (null === d) {
                            for (; h < i.length; h++)
                                null !== (d = f(a, i[h], u)) &&
                                    ((o = l(d, o, h)), null === c ? (s = d) : (c.sibling = d), (c = d));
                            return ao && Ga(a, h), s;
                        }
                        for (d = r(a, d); h < i.length; h++)
                            null !== (g = m(d, a, h, i[h], u)) &&
                                (e && null !== g.alternate && d.delete(null === g.key ? h : g.key),
                                (o = l(g, o, h)),
                                null === c ? (s = g) : (c.sibling = g),
                                (c = g));
                        return (
                            e &&
                                d.forEach(function (e) {
                                    return t(a, e);
                                }),
                            ao && Ga(a, h),
                            s
                        );
                    }
                    function g(a, i, u, s) {
                        var c = R(u);
                        if ('function' != typeof c) throw Error(o(150));
                        if (null == (u = c.call(u))) throw Error(o(151));
                        for (
                            var d = (c = null), h = i, g = (i = 0), y = null, v = u.next();
                            null !== h && !v.done;
                            g++, v = u.next()
                        ) {
                            h.index > g ? ((y = h), (h = null)) : (y = h.sibling);
                            var b = p(a, h, v.value, s);
                            if (null === b) {
                                null === h && (h = y);
                                break;
                            }
                            e && h && null === b.alternate && t(a, h),
                                (i = l(b, i, g)),
                                null === d ? (c = b) : (d.sibling = b),
                                (d = b),
                                (h = y);
                        }
                        if (v.done) return n(a, h), ao && Ga(a, g), c;
                        if (null === h) {
                            for (; !v.done; g++, v = u.next())
                                null !== (v = f(a, v.value, s)) &&
                                    ((i = l(v, i, g)), null === d ? (c = v) : (d.sibling = v), (d = v));
                            return ao && Ga(a, g), c;
                        }
                        for (h = r(a, h); !v.done; g++, v = u.next())
                            null !== (v = m(h, a, g, v.value, s)) &&
                                (e && null !== v.alternate && h.delete(null === v.key ? g : v.key),
                                (i = l(v, i, g)),
                                null === d ? (c = v) : (d.sibling = v),
                                (d = v));
                        return (
                            e &&
                                h.forEach(function (e) {
                                    return t(a, e);
                                }),
                            ao && Ga(a, g),
                            c
                        );
                    }
                    return function e(r, o, l, u) {
                        if (
                            ('object' == typeof l &&
                                null !== l &&
                                l.type === S &&
                                null === l.key &&
                                (l = l.props.children),
                            'object' == typeof l && null !== l)
                        ) {
                            switch (l.$$typeof) {
                                case k:
                                    e: {
                                        for (var s = l.key, c = o; null !== c; ) {
                                            if (c.key === s) {
                                                if ((s = l.type) === S) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling),
                                                            ((o = a(c, l.props.children)).return = r),
                                                            (r = o);
                                                        break e;
                                                    }
                                                } else if (
                                                    c.elementType === s ||
                                                    ('object' == typeof s &&
                                                        null !== s &&
                                                        s.$$typeof === z &&
                                                        Yo(s) === c.type)
                                                ) {
                                                    n(r, c.sibling),
                                                        ((o = a(c, l.props)).ref = qo(r, c, l)),
                                                        (o.return = r),
                                                        (r = o);
                                                    break e;
                                                }
                                                n(r, c);
                                                break;
                                            }
                                            t(r, c), (c = c.sibling);
                                        }
                                        l.type === S
                                            ? (((o = Ds(l.props.children, r.mode, u, l.key)).return = r), (r = o))
                                            : (((u = Rs(l.type, l.key, l.props, null, r.mode, u)).ref = qo(r, o, l)),
                                              (u.return = r),
                                              (r = u));
                                    }
                                    return i(r);
                                case _:
                                    e: {
                                        for (c = l.key; null !== o; ) {
                                            if (o.key === c) {
                                                if (
                                                    4 === o.tag &&
                                                    o.stateNode.containerInfo === l.containerInfo &&
                                                    o.stateNode.implementation === l.implementation
                                                ) {
                                                    n(r, o.sibling), ((o = a(o, l.children || [])).return = r), (r = o);
                                                    break e;
                                                }
                                                n(r, o);
                                                break;
                                            }
                                            t(r, o), (o = o.sibling);
                                        }
                                        ((o = Bs(l, r.mode, u)).return = r), (r = o);
                                    }
                                    return i(r);
                                case z:
                                    return e(r, o, (c = l._init)(l._payload), u);
                            }
                            if (te(l)) return h(r, o, l, u);
                            if (R(l)) return g(r, o, l, u);
                            Ko(r, l);
                        }
                        return ('string' == typeof l && '' !== l) || 'number' == typeof l
                            ? ((l = '' + l),
                              null !== o && 6 === o.tag
                                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                                  : (n(r, o), ((o = As(l, r.mode, u)).return = r), (r = o)),
                              i(r))
                            : n(r, o);
                    };
                }
                var Xo = Zo(!0),
                    Go = Zo(!1),
                    Jo = {},
                    el = xa(Jo),
                    tl = xa(Jo),
                    nl = xa(Jo);
                function rl(e) {
                    if (e === Jo) throw Error(o(174));
                    return e;
                }
                function al(e, t) {
                    switch ((Ca(nl, t), Ca(tl, e), Ca(el, Jo), (e = t.nodeType))) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
                            break;
                        default:
                            t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
                    }
                    Ea(el), Ca(el, t);
                }
                function ol() {
                    Ea(el), Ea(tl), Ea(nl);
                }
                function ll(e) {
                    rl(nl.current);
                    var t = rl(el.current),
                        n = ue(t, e.type);
                    t !== n && (Ca(tl, e), Ca(el, n));
                }
                function il(e) {
                    tl.current === e && (Ea(el), Ea(tl));
                }
                var ul = xa(0);
                function sl(e) {
                    for (var t = e; null !== t; ) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                                return t;
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 != (128 & t.flags)) return t;
                        } else if (null !== t.child) {
                            (t.child.return = t), (t = t.child);
                            continue;
                        }
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                    return null;
                }
                var cl = [];
                function dl() {
                    for (var e = 0; e < cl.length; e++) cl[e]._workInProgressVersionPrimary = null;
                    cl.length = 0;
                }
                var fl = w.ReactCurrentDispatcher,
                    pl = w.ReactCurrentBatchConfig,
                    ml = 0,
                    hl = null,
                    gl = null,
                    yl = null,
                    vl = !1,
                    bl = !1,
                    wl = 0,
                    kl = 0;
                function _l() {
                    throw Error(o(321));
                }
                function Sl(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
                    return !0;
                }
                function xl(e, t, n, r, a, l) {
                    if (
                        ((ml = l),
                        (hl = t),
                        (t.memoizedState = null),
                        (t.updateQueue = null),
                        (t.lanes = 0),
                        (fl.current = null === e || null === e.memoizedState ? ii : ui),
                        (e = n(r, a)),
                        bl)
                    ) {
                        l = 0;
                        do {
                            if (((bl = !1), (wl = 0), 25 <= l)) throw Error(o(301));
                            (l += 1), (yl = gl = null), (t.updateQueue = null), (fl.current = si), (e = n(r, a));
                        } while (bl);
                    }
                    if (
                        ((fl.current = li),
                        (t = null !== gl && null !== gl.next),
                        (ml = 0),
                        (yl = gl = hl = null),
                        (vl = !1),
                        t)
                    )
                        throw Error(o(300));
                    return e;
                }
                function El() {
                    var e = 0 !== wl;
                    return (wl = 0), e;
                }
                function Cl() {
                    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                    return null === yl ? (hl.memoizedState = yl = e) : (yl = yl.next = e), yl;
                }
                function Tl() {
                    if (null === gl) {
                        var e = hl.alternate;
                        e = null !== e ? e.memoizedState : null;
                    } else e = gl.next;
                    var t = null === yl ? hl.memoizedState : yl.next;
                    if (null !== t) (yl = t), (gl = e);
                    else {
                        if (null === e) throw Error(o(310));
                        (e = {
                            memoizedState: (gl = e).memoizedState,
                            baseState: gl.baseState,
                            baseQueue: gl.baseQueue,
                            queue: gl.queue,
                            next: null,
                        }),
                            null === yl ? (hl.memoizedState = yl = e) : (yl = yl.next = e);
                    }
                    return yl;
                }
                function Nl(e, t) {
                    return 'function' == typeof t ? t(e) : t;
                }
                function Pl(e) {
                    var t = Tl(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = gl,
                        a = r.baseQueue,
                        l = n.pending;
                    if (null !== l) {
                        if (null !== a) {
                            var i = a.next;
                            (a.next = l.next), (l.next = i);
                        }
                        (r.baseQueue = a = l), (n.pending = null);
                    }
                    if (null !== a) {
                        (l = a.next), (r = r.baseState);
                        var u = (i = null),
                            s = null,
                            c = l;
                        do {
                            var d = c.lane;
                            if ((ml & d) === d)
                                null !== s &&
                                    (s = s.next =
                                        {
                                            lane: 0,
                                            action: c.action,
                                            hasEagerState: c.hasEagerState,
                                            eagerState: c.eagerState,
                                            next: null,
                                        }),
                                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
                            else {
                                var f = {
                                    lane: d,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null,
                                };
                                null === s ? ((u = s = f), (i = r)) : (s = s.next = f), (hl.lanes |= d), (Fu |= d);
                            }
                            c = c.next;
                        } while (null !== c && c !== l);
                        null === s ? (i = r) : (s.next = u),
                            ir(r, t.memoizedState) || (wi = !0),
                            (t.memoizedState = r),
                            (t.baseState = i),
                            (t.baseQueue = s),
                            (n.lastRenderedState = r);
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            (l = a.lane), (hl.lanes |= l), (Fu |= l), (a = a.next);
                        } while (a !== e);
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch];
                }
                function Ll(e) {
                    var t = Tl(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        l = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var i = (a = a.next);
                        do {
                            (l = e(l, i.action)), (i = i.next);
                        } while (i !== a);
                        ir(l, t.memoizedState) || (wi = !0),
                            (t.memoizedState = l),
                            null === t.baseQueue && (t.baseState = l),
                            (n.lastRenderedState = l);
                    }
                    return [l, r];
                }
                function Il() {}
                function zl(e, t) {
                    var n = hl,
                        r = Tl(),
                        a = t(),
                        l = !ir(r.memoizedState, a);
                    if (
                        (l && ((r.memoizedState = a), (wi = !0)),
                        (r = r.queue),
                        Vl(Rl.bind(null, n, r, e), [e]),
                        r.getSnapshot !== t || l || (null !== yl && 1 & yl.memoizedState.tag))
                    ) {
                        if (((n.flags |= 2048), Bl(9, Ml.bind(null, n, r, a, t), void 0, null), null === Lu))
                            throw Error(o(349));
                        0 != (30 & ml) || Ol(n, t, a);
                    }
                    return a;
                }
                function Ol(e, t, n) {
                    (e.flags |= 16384),
                        (e = { getSnapshot: t, value: n }),
                        null === (t = hl.updateQueue)
                            ? ((t = { lastEffect: null, stores: null }), (hl.updateQueue = t), (t.stores = [e]))
                            : null === (n = t.stores)
                            ? (t.stores = [e])
                            : n.push(e);
                }
                function Ml(e, t, n, r) {
                    (t.value = n), (t.getSnapshot = r), Dl(t) && Fl(e);
                }
                function Rl(e, t, n) {
                    return n(function () {
                        Dl(t) && Fl(e);
                    });
                }
                function Dl(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !ir(e, n);
                    } catch (e) {
                        return !0;
                    }
                }
                function Fl(e) {
                    var t = Lo(e, 1);
                    null !== t && rs(t, e, 1, -1);
                }
                function Al(e) {
                    var t = Cl();
                    return (
                        'function' == typeof e && (e = e()),
                        (t.memoizedState = t.baseState = e),
                        (e = {
                            pending: null,
                            interleaved: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: Nl,
                            lastRenderedState: e,
                        }),
                        (t.queue = e),
                        (e = e.dispatch = ni.bind(null, hl, e)),
                        [t.memoizedState, e]
                    );
                }
                function Bl(e, t, n, r) {
                    return (
                        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                        null === (t = hl.updateQueue)
                            ? ((t = { lastEffect: null, stores: null }),
                              (hl.updateQueue = t),
                              (t.lastEffect = e.next = e))
                            : null === (n = t.lastEffect)
                            ? (t.lastEffect = e.next = e)
                            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
                        e
                    );
                }
                function jl() {
                    return Tl().memoizedState;
                }
                function Ul(e, t, n, r) {
                    var a = Cl();
                    (hl.flags |= e), (a.memoizedState = Bl(1 | t, n, void 0, void 0 === r ? null : r));
                }
                function $l(e, t, n, r) {
                    var a = Tl();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== gl) {
                        var l = gl.memoizedState;
                        if (((o = l.destroy), null !== r && Sl(r, l.deps)))
                            return void (a.memoizedState = Bl(t, n, o, r));
                    }
                    (hl.flags |= e), (a.memoizedState = Bl(1 | t, n, o, r));
                }
                function Hl(e, t) {
                    return Ul(8390656, 8, e, t);
                }
                function Vl(e, t) {
                    return $l(2048, 8, e, t);
                }
                function Wl(e, t) {
                    return $l(4, 2, e, t);
                }
                function Ql(e, t) {
                    return $l(4, 4, e, t);
                }
                function ql(e, t) {
                    return 'function' == typeof t
                        ? ((e = e()),
                          t(e),
                          function () {
                              t(null);
                          })
                        : null != t
                        ? ((e = e()),
                          (t.current = e),
                          function () {
                              t.current = null;
                          })
                        : void 0;
                }
                function Kl(e, t, n) {
                    return (n = null != n ? n.concat([e]) : null), $l(4, 4, ql.bind(null, t, e), n);
                }
                function Yl() {}
                function Zl(e, t) {
                    var n = Tl();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Sl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
                }
                function Xl(e, t) {
                    var n = Tl();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Sl(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
                }
                function Gl(e, t, n) {
                    return 0 == (21 & ml)
                        ? (e.baseState && ((e.baseState = !1), (wi = !0)), (e.memoizedState = n))
                        : (ir(n, t) || ((n = ht()), (hl.lanes |= n), (Fu |= n), (e.baseState = !0)), t);
                }
                function Jl(e, t) {
                    var n = bt;
                    (bt = 0 !== n && 4 > n ? n : 4), e(!0);
                    var r = pl.transition;
                    pl.transition = {};
                    try {
                        e(!1), t();
                    } finally {
                        (bt = n), (pl.transition = r);
                    }
                }
                function ei() {
                    return Tl().memoizedState;
                }
                function ti(e, t, n) {
                    var r = ns(e);
                    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ri(e)))
                        ai(t, n);
                    else if (null !== (n = Po(e, t, n, r))) {
                        rs(n, e, r, ts()), oi(n, t, r);
                    }
                }
                function ni(e, t, n) {
                    var r = ns(e),
                        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
                    if (ri(e)) ai(t, a);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                            try {
                                var l = t.lastRenderedState,
                                    i = o(l, n);
                                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                                    var u = t.interleaved;
                                    return (
                                        null === u ? ((a.next = a), No(t)) : ((a.next = u.next), (u.next = a)),
                                        void (t.interleaved = a)
                                    );
                                }
                            } catch (e) {}
                        null !== (n = Po(e, t, a, r)) && (rs(n, e, r, (a = ts())), oi(n, t, r));
                    }
                }
                function ri(e) {
                    var t = e.alternate;
                    return e === hl || (null !== t && t === hl);
                }
                function ai(e, t) {
                    bl = vl = !0;
                    var n = e.pending;
                    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
                }
                function oi(e, t, n) {
                    if (0 != (4194240 & n)) {
                        var r = t.lanes;
                        (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
                    }
                }
                var li = {
                        readContext: Co,
                        useCallback: _l,
                        useContext: _l,
                        useEffect: _l,
                        useImperativeHandle: _l,
                        useInsertionEffect: _l,
                        useLayoutEffect: _l,
                        useMemo: _l,
                        useReducer: _l,
                        useRef: _l,
                        useState: _l,
                        useDebugValue: _l,
                        useDeferredValue: _l,
                        useTransition: _l,
                        useMutableSource: _l,
                        useSyncExternalStore: _l,
                        useId: _l,
                        unstable_isNewReconciler: !1,
                    },
                    ii = {
                        readContext: Co,
                        useCallback: function (e, t) {
                            return (Cl().memoizedState = [e, void 0 === t ? null : t]), e;
                        },
                        useContext: Co,
                        useEffect: Hl,
                        useImperativeHandle: function (e, t, n) {
                            return (n = null != n ? n.concat([e]) : null), Ul(4194308, 4, ql.bind(null, t, e), n);
                        },
                        useLayoutEffect: function (e, t) {
                            return Ul(4194308, 4, e, t);
                        },
                        useInsertionEffect: function (e, t) {
                            return Ul(4, 2, e, t);
                        },
                        useMemo: function (e, t) {
                            var n = Cl();
                            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
                        },
                        useReducer: function (e, t, n) {
                            var r = Cl();
                            return (
                                (t = void 0 !== n ? n(t) : t),
                                (r.memoizedState = r.baseState = t),
                                (e = {
                                    pending: null,
                                    interleaved: null,
                                    lanes: 0,
                                    dispatch: null,
                                    lastRenderedReducer: e,
                                    lastRenderedState: t,
                                }),
                                (r.queue = e),
                                (e = e.dispatch = ti.bind(null, hl, e)),
                                [r.memoizedState, e]
                            );
                        },
                        useRef: function (e) {
                            return (e = { current: e }), (Cl().memoizedState = e);
                        },
                        useState: Al,
                        useDebugValue: Yl,
                        useDeferredValue: function (e) {
                            return (Cl().memoizedState = e);
                        },
                        useTransition: function () {
                            var e = Al(!1),
                                t = e[0];
                            return (e = Jl.bind(null, e[1])), (Cl().memoizedState = e), [t, e];
                        },
                        useMutableSource: function () {},
                        useSyncExternalStore: function (e, t, n) {
                            var r = hl,
                                a = Cl();
                            if (ao) {
                                if (void 0 === n) throw Error(o(407));
                                n = n();
                            } else {
                                if (((n = t()), null === Lu)) throw Error(o(349));
                                0 != (30 & ml) || Ol(r, t, n);
                            }
                            a.memoizedState = n;
                            var l = { value: n, getSnapshot: t };
                            return (
                                (a.queue = l),
                                Hl(Rl.bind(null, r, l, e), [e]),
                                (r.flags |= 2048),
                                Bl(9, Ml.bind(null, r, l, n, t), void 0, null),
                                n
                            );
                        },
                        useId: function () {
                            var e = Cl(),
                                t = Lu.identifierPrefix;
                            if (ao) {
                                var n = Xa;
                                (t = ':' + t + 'R' + (n = (Za & ~(1 << (32 - lt(Za) - 1))).toString(32) + n)),
                                    0 < (n = wl++) && (t += 'H' + n.toString(32)),
                                    (t += ':');
                            } else t = ':' + t + 'r' + (n = kl++).toString(32) + ':';
                            return (e.memoizedState = t);
                        },
                        unstable_isNewReconciler: !1,
                    },
                    ui = {
                        readContext: Co,
                        useCallback: Zl,
                        useContext: Co,
                        useEffect: Vl,
                        useImperativeHandle: Kl,
                        useInsertionEffect: Wl,
                        useLayoutEffect: Ql,
                        useMemo: Xl,
                        useReducer: Pl,
                        useRef: jl,
                        useState: function () {
                            return Pl(Nl);
                        },
                        useDebugValue: Yl,
                        useDeferredValue: function (e) {
                            return Gl(Tl(), gl.memoizedState, e);
                        },
                        useTransition: function () {
                            return [Pl(Nl)[0], Tl().memoizedState];
                        },
                        useMutableSource: Il,
                        useSyncExternalStore: zl,
                        useId: ei,
                        unstable_isNewReconciler: !1,
                    },
                    si = {
                        readContext: Co,
                        useCallback: Zl,
                        useContext: Co,
                        useEffect: Vl,
                        useImperativeHandle: Kl,
                        useInsertionEffect: Wl,
                        useLayoutEffect: Ql,
                        useMemo: Xl,
                        useReducer: Ll,
                        useRef: jl,
                        useState: function () {
                            return Ll(Nl);
                        },
                        useDebugValue: Yl,
                        useDeferredValue: function (e) {
                            var t = Tl();
                            return null === gl ? (t.memoizedState = e) : Gl(t, gl.memoizedState, e);
                        },
                        useTransition: function () {
                            return [Ll(Nl)[0], Tl().memoizedState];
                        },
                        useMutableSource: Il,
                        useSyncExternalStore: zl,
                        useId: ei,
                        unstable_isNewReconciler: !1,
                    };
                function ci(e, t) {
                    try {
                        var n = '',
                            r = t;
                        do {
                            (n += U(r)), (r = r.return);
                        } while (r);
                        var a = n;
                    } catch (e) {
                        a = '\nError generating stack: ' + e.message + '\n' + e.stack;
                    }
                    return { value: e, source: t, stack: a, digest: null };
                }
                function di(e, t, n) {
                    return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
                }
                function fi(e, t) {
                    try {
                        console.error(t.value);
                    } catch (e) {
                        setTimeout(function () {
                            throw e;
                        });
                    }
                }
                var pi = 'function' == typeof WeakMap ? WeakMap : Map;
                function mi(e, t, n) {
                    ((n = Mo(-1, n)).tag = 3), (n.payload = { element: null });
                    var r = t.value;
                    return (
                        (n.callback = function () {
                            Wu || ((Wu = !0), (Qu = r)), fi(0, t);
                        }),
                        n
                    );
                }
                function hi(e, t, n) {
                    (n = Mo(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ('function' == typeof r) {
                        var a = t.value;
                        (n.payload = function () {
                            return r(a);
                        }),
                            (n.callback = function () {
                                fi(0, t);
                            });
                    }
                    var o = e.stateNode;
                    return (
                        null !== o &&
                            'function' == typeof o.componentDidCatch &&
                            (n.callback = function () {
                                fi(0, t),
                                    'function' != typeof r && (null === qu ? (qu = new Set([this])) : qu.add(this));
                                var e = t.stack;
                                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
                            }),
                        n
                    );
                }
                function gi(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new pi();
                        var a = new Set();
                        r.set(t, a);
                    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
                    a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
                }
                function yi(e) {
                    do {
                        var t;
                        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t))
                            return e;
                        e = e.return;
                    } while (null !== e);
                    return null;
                }
                function vi(e, t, n, r, a) {
                    return 0 == (1 & e.mode)
                        ? (e === t
                              ? (e.flags |= 65536)
                              : ((e.flags |= 128),
                                (n.flags |= 131072),
                                (n.flags &= -52805),
                                1 === n.tag &&
                                    (null === n.alternate ? (n.tag = 17) : (((t = Mo(-1, 1)).tag = 2), Ro(n, t, 1))),
                                (n.lanes |= 1)),
                          e)
                        : ((e.flags |= 65536), (e.lanes = a), e);
                }
                var bi = w.ReactCurrentOwner,
                    wi = !1;
                function ki(e, t, n, r) {
                    t.child = null === e ? Go(t, null, n, r) : Xo(t, e.child, n, r);
                }
                function _i(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    return (
                        Eo(t, a),
                        (r = xl(e, t, n, r, o, a)),
                        (n = El()),
                        null === e || wi
                            ? (ao && n && eo(t), (t.flags |= 1), ki(e, t, r, a), t.child)
                            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wi(e, t, a))
                    );
                }
                function Si(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return 'function' != typeof o ||
                            Os(o) ||
                            void 0 !== o.defaultProps ||
                            null !== n.compare ||
                            void 0 !== n.defaultProps
                            ? (((e = Rs(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
                            : ((t.tag = 15), (t.type = o), xi(e, t, o, r, a));
                    }
                    if (((o = e.child), 0 == (e.lanes & a))) {
                        var l = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : ur)(l, r) && e.ref === t.ref) return Wi(e, t, a);
                    }
                    return (t.flags |= 1), ((e = Ms(o, r)).ref = t.ref), (e.return = t), (t.child = e);
                }
                function xi(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (ur(o, r) && e.ref === t.ref) {
                            if (((wi = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
                                return (t.lanes = e.lanes), Wi(e, t, a);
                            0 != (131072 & e.flags) && (wi = !0);
                        }
                    }
                    return Ti(e, t, n, r, a);
                }
                function Ei(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ('hidden' === r.mode)
                        if (0 == (1 & t.mode))
                            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                                Ca(Mu, Ou),
                                (Ou |= n);
                        else {
                            if (0 == (1073741824 & n))
                                return (
                                    (e = null !== o ? o.baseLanes | n : n),
                                    (t.lanes = t.childLanes = 1073741824),
                                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                                    (t.updateQueue = null),
                                    Ca(Mu, Ou),
                                    (Ou |= e),
                                    null
                                );
                            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                                (r = null !== o ? o.baseLanes : n),
                                Ca(Mu, Ou),
                                (Ou |= r);
                        }
                    else
                        null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), Ca(Mu, Ou), (Ou |= r);
                    return ki(e, t, a, n), t.child;
                }
                function Ci(e, t) {
                    var n = t.ref;
                    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
                        ((t.flags |= 512), (t.flags |= 2097152));
                }
                function Ti(e, t, n, r, a) {
                    var o = za(n) ? La : Na.current;
                    return (
                        (o = Ia(t, o)),
                        Eo(t, a),
                        (n = xl(e, t, n, r, o, a)),
                        (r = El()),
                        null === e || wi
                            ? (ao && r && eo(t), (t.flags |= 1), ki(e, t, n, a), t.child)
                            : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wi(e, t, a))
                    );
                }
                function Ni(e, t, n, r, a) {
                    if (za(n)) {
                        var o = !0;
                        Da(t);
                    } else o = !1;
                    if ((Eo(t, a), null === t.stateNode)) Vi(e, t), Vo(t, n, r), Qo(t, n, r, a), (r = !0);
                    else if (null === e) {
                        var l = t.stateNode,
                            i = t.memoizedProps;
                        l.props = i;
                        var u = l.context,
                            s = n.contextType;
                        'object' == typeof s && null !== s ? (s = Co(s)) : (s = Ia(t, (s = za(n) ? La : Na.current)));
                        var c = n.getDerivedStateFromProps,
                            d = 'function' == typeof c || 'function' == typeof l.getSnapshotBeforeUpdate;
                        d ||
                            ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
                                'function' != typeof l.componentWillReceiveProps) ||
                            ((i !== r || u !== s) && Wo(t, l, r, s)),
                            (Io = !1);
                        var f = t.memoizedState;
                        (l.state = f),
                            Ao(t, r, l, a),
                            (u = t.memoizedState),
                            i !== r || f !== u || Pa.current || Io
                                ? ('function' == typeof c && (Uo(t, n, c, r), (u = t.memoizedState)),
                                  (i = Io || Ho(t, n, i, r, f, u, s))
                                      ? (d ||
                                            ('function' != typeof l.UNSAFE_componentWillMount &&
                                                'function' != typeof l.componentWillMount) ||
                                            ('function' == typeof l.componentWillMount && l.componentWillMount(),
                                            'function' == typeof l.UNSAFE_componentWillMount &&
                                                l.UNSAFE_componentWillMount()),
                                        'function' == typeof l.componentDidMount && (t.flags |= 4194308))
                                      : ('function' == typeof l.componentDidMount && (t.flags |= 4194308),
                                        (t.memoizedProps = r),
                                        (t.memoizedState = u)),
                                  (l.props = r),
                                  (l.state = u),
                                  (l.context = s),
                                  (r = i))
                                : ('function' == typeof l.componentDidMount && (t.flags |= 4194308), (r = !1));
                    } else {
                        (l = t.stateNode),
                            Oo(e, t),
                            (i = t.memoizedProps),
                            (s = t.type === t.elementType ? i : yo(t.type, i)),
                            (l.props = s),
                            (d = t.pendingProps),
                            (f = l.context),
                            'object' == typeof (u = n.contextType) && null !== u
                                ? (u = Co(u))
                                : (u = Ia(t, (u = za(n) ? La : Na.current)));
                        var p = n.getDerivedStateFromProps;
                        (c = 'function' == typeof p || 'function' == typeof l.getSnapshotBeforeUpdate) ||
                            ('function' != typeof l.UNSAFE_componentWillReceiveProps &&
                                'function' != typeof l.componentWillReceiveProps) ||
                            ((i !== d || f !== u) && Wo(t, l, r, u)),
                            (Io = !1),
                            (f = t.memoizedState),
                            (l.state = f),
                            Ao(t, r, l, a);
                        var m = t.memoizedState;
                        i !== d || f !== m || Pa.current || Io
                            ? ('function' == typeof p && (Uo(t, n, p, r), (m = t.memoizedState)),
                              (s = Io || Ho(t, n, s, r, f, m, u) || !1)
                                  ? (c ||
                                        ('function' != typeof l.UNSAFE_componentWillUpdate &&
                                            'function' != typeof l.componentWillUpdate) ||
                                        ('function' == typeof l.componentWillUpdate && l.componentWillUpdate(r, m, u),
                                        'function' == typeof l.UNSAFE_componentWillUpdate &&
                                            l.UNSAFE_componentWillUpdate(r, m, u)),
                                    'function' == typeof l.componentDidUpdate && (t.flags |= 4),
                                    'function' == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
                                  : ('function' != typeof l.componentDidUpdate ||
                                        (i === e.memoizedProps && f === e.memoizedState) ||
                                        (t.flags |= 4),
                                    'function' != typeof l.getSnapshotBeforeUpdate ||
                                        (i === e.memoizedProps && f === e.memoizedState) ||
                                        (t.flags |= 1024),
                                    (t.memoizedProps = r),
                                    (t.memoizedState = m)),
                              (l.props = r),
                              (l.state = m),
                              (l.context = u),
                              (r = s))
                            : ('function' != typeof l.componentDidUpdate ||
                                  (i === e.memoizedProps && f === e.memoizedState) ||
                                  (t.flags |= 4),
                              'function' != typeof l.getSnapshotBeforeUpdate ||
                                  (i === e.memoizedProps && f === e.memoizedState) ||
                                  (t.flags |= 1024),
                              (r = !1));
                    }
                    return Pi(e, t, n, r, o, a);
                }
                function Pi(e, t, n, r, a, o) {
                    Ci(e, t);
                    var l = 0 != (128 & t.flags);
                    if (!r && !l) return a && Fa(t, n, !1), Wi(e, t, o);
                    (r = t.stateNode), (bi.current = t);
                    var i = l && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
                    return (
                        (t.flags |= 1),
                        null !== e && l
                            ? ((t.child = Xo(t, e.child, null, o)), (t.child = Xo(t, null, i, o)))
                            : ki(e, t, i, o),
                        (t.memoizedState = r.state),
                        a && Fa(t, n, !0),
                        t.child
                    );
                }
                function Li(e) {
                    var t = e.stateNode;
                    t.pendingContext
                        ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
                        : t.context && Ma(0, t.context, !1),
                        al(e, t.containerInfo);
                }
                function Ii(e, t, n, r, a) {
                    return mo(), ho(a), (t.flags |= 256), ki(e, t, n, r), t.child;
                }
                var zi,
                    Oi,
                    Mi,
                    Ri,
                    Di = { dehydrated: null, treeContext: null, retryLane: 0 };
                function Fi(e) {
                    return { baseLanes: e, cachePool: null, transitions: null };
                }
                function Ai(e, t, n) {
                    var r,
                        a = t.pendingProps,
                        l = ul.current,
                        i = !1,
                        u = 0 != (128 & t.flags);
                    if (
                        ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
                        r ? ((i = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (l |= 1),
                        Ca(ul, 1 & l),
                        null === e)
                    )
                        return (
                            so(t),
                            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                                ? (0 == (1 & t.mode)
                                      ? (t.lanes = 1)
                                      : '$!' === e.data
                                      ? (t.lanes = 8)
                                      : (t.lanes = 1073741824),
                                  null)
                                : ((u = a.children),
                                  (e = a.fallback),
                                  i
                                      ? ((a = t.mode),
                                        (i = t.child),
                                        (u = { mode: 'hidden', children: u }),
                                        0 == (1 & a) && null !== i
                                            ? ((i.childLanes = 0), (i.pendingProps = u))
                                            : (i = Fs(u, a, 0, null)),
                                        (e = Ds(e, a, n, null)),
                                        (i.return = t),
                                        (e.return = t),
                                        (i.sibling = e),
                                        (t.child = i),
                                        (t.child.memoizedState = Fi(n)),
                                        (t.memoizedState = Di),
                                        e)
                                      : Bi(t, u))
                        );
                    if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
                        return (function (e, t, n, r, a, l, i) {
                            if (n)
                                return 256 & t.flags
                                    ? ((t.flags &= -257), ji(e, t, i, (r = di(Error(o(422))))))
                                    : null !== t.memoizedState
                                    ? ((t.child = e.child), (t.flags |= 128), null)
                                    : ((l = r.fallback),
                                      (a = t.mode),
                                      (r = Fs({ mode: 'visible', children: r.children }, a, 0, null)),
                                      ((l = Ds(l, a, i, null)).flags |= 2),
                                      (r.return = t),
                                      (l.return = t),
                                      (r.sibling = l),
                                      (t.child = r),
                                      0 != (1 & t.mode) && Xo(t, e.child, null, i),
                                      (t.child.memoizedState = Fi(i)),
                                      (t.memoizedState = Di),
                                      l);
                            if (0 == (1 & t.mode)) return ji(e, t, i, null);
                            if ('$!' === a.data) {
                                if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst;
                                return (r = u), ji(e, t, i, (r = di((l = Error(o(419))), r, void 0)));
                            }
                            if (((u = 0 != (i & e.childLanes)), wi || u)) {
                                if (null !== (r = Lu)) {
                                    switch (i & -i) {
                                        case 4:
                                            a = 2;
                                            break;
                                        case 16:
                                            a = 8;
                                            break;
                                        case 64:
                                        case 128:
                                        case 256:
                                        case 512:
                                        case 1024:
                                        case 2048:
                                        case 4096:
                                        case 8192:
                                        case 16384:
                                        case 32768:
                                        case 65536:
                                        case 131072:
                                        case 262144:
                                        case 524288:
                                        case 1048576:
                                        case 2097152:
                                        case 4194304:
                                        case 8388608:
                                        case 16777216:
                                        case 33554432:
                                        case 67108864:
                                            a = 32;
                                            break;
                                        case 536870912:
                                            a = 268435456;
                                            break;
                                        default:
                                            a = 0;
                                    }
                                    0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) &&
                                        a !== l.retryLane &&
                                        ((l.retryLane = a), Lo(e, a), rs(r, e, a, -1));
                                }
                                return gs(), ji(e, t, i, (r = di(Error(o(421)))));
                            }
                            return '$?' === a.data
                                ? ((t.flags |= 128),
                                  (t.child = e.child),
                                  (t = Ns.bind(null, e)),
                                  (a._reactRetry = t),
                                  null)
                                : ((e = l.treeContext),
                                  (ro = sa(a.nextSibling)),
                                  (no = t),
                                  (ao = !0),
                                  (oo = null),
                                  null !== e &&
                                      ((qa[Ka++] = Za),
                                      (qa[Ka++] = Xa),
                                      (qa[Ka++] = Ya),
                                      (Za = e.id),
                                      (Xa = e.overflow),
                                      (Ya = t)),
                                  (t = Bi(t, r.children)),
                                  (t.flags |= 4096),
                                  t);
                        })(e, t, u, a, r, l, n);
                    if (i) {
                        (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
                        var s = { mode: 'hidden', children: a.children };
                        return (
                            0 == (1 & u) && t.child !== l
                                ? (((a = t.child).childLanes = 0), (a.pendingProps = s), (t.deletions = null))
                                : ((a = Ms(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
                            null !== r ? (i = Ms(r, i)) : ((i = Ds(i, u, n, null)).flags |= 2),
                            (i.return = t),
                            (a.return = t),
                            (a.sibling = i),
                            (t.child = a),
                            (a = i),
                            (i = t.child),
                            (u =
                                null === (u = e.child.memoizedState)
                                    ? Fi(n)
                                    : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
                            (i.memoizedState = u),
                            (i.childLanes = e.childLanes & ~n),
                            (t.memoizedState = Di),
                            a
                        );
                    }
                    return (
                        (e = (i = e.child).sibling),
                        (a = Ms(i, { mode: 'visible', children: a.children })),
                        0 == (1 & t.mode) && (a.lanes = n),
                        (a.return = t),
                        (a.sibling = null),
                        null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
                        (t.child = a),
                        (t.memoizedState = null),
                        a
                    );
                }
                function Bi(e, t) {
                    return ((t = Fs({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
                }
                function ji(e, t, n, r) {
                    return (
                        null !== r && ho(r),
                        Xo(t, e.child, null, n),
                        ((e = Bi(t, t.pendingProps.children)).flags |= 2),
                        (t.memoizedState = null),
                        e
                    );
                }
                function Ui(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), xo(e.return, t, n);
                }
                function $i(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o
                        ? (e.memoizedState = {
                              isBackwards: t,
                              rendering: null,
                              renderingStartTime: 0,
                              last: r,
                              tail: n,
                              tailMode: a,
                          })
                        : ((o.isBackwards = t),
                          (o.rendering = null),
                          (o.renderingStartTime = 0),
                          (o.last = r),
                          (o.tail = n),
                          (o.tailMode = a));
                }
                function Hi(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if ((ki(e, t, r.children, n), 0 != (2 & (r = ul.current)))) (r = (1 & r) | 2), (t.flags |= 128);
                    else {
                        if (null !== e && 0 != (128 & e.flags))
                            e: for (e = t.child; null !== e; ) {
                                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                                else if (19 === e.tag) Ui(e, n, t);
                                else if (null !== e.child) {
                                    (e.child.return = e), (e = e.child);
                                    continue;
                                }
                                if (e === t) break e;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === t) break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        r &= 1;
                    }
                    if ((Ca(ul, r), 0 == (1 & t.mode))) t.memoizedState = null;
                    else
                        switch (a) {
                            case 'forwards':
                                for (n = t.child, a = null; null !== n; )
                                    null !== (e = n.alternate) && null === sl(e) && (a = n), (n = n.sibling);
                                null === (n = a)
                                    ? ((a = t.child), (t.child = null))
                                    : ((a = n.sibling), (n.sibling = null)),
                                    $i(t, !1, a, n, o);
                                break;
                            case 'backwards':
                                for (n = null, a = t.child, t.child = null; null !== a; ) {
                                    if (null !== (e = a.alternate) && null === sl(e)) {
                                        t.child = a;
                                        break;
                                    }
                                    (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                                }
                                $i(t, !0, n, null, o);
                                break;
                            case 'together':
                                $i(t, !1, null, null, void 0);
                                break;
                            default:
                                t.memoizedState = null;
                        }
                    return t.child;
                }
                function Vi(e, t) {
                    0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
                }
                function Wi(e, t, n) {
                    if ((null !== e && (t.dependencies = e.dependencies), (Fu |= t.lanes), 0 == (n & t.childLanes)))
                        return null;
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Ms((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                            (e = e.sibling), ((n = n.sibling = Ms(e, e.pendingProps)).return = t);
                        n.sibling = null;
                    }
                    return t.child;
                }
                function Qi(e, t) {
                    if (!ao)
                        switch (e.tailMode) {
                            case 'hidden':
                                t = e.tail;
                                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                                null === n ? (e.tail = null) : (n.sibling = null);
                                break;
                            case 'collapsed':
                                n = e.tail;
                                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                                null === r
                                    ? t || null === e.tail
                                        ? (e.tail = null)
                                        : (e.tail.sibling = null)
                                    : (r.sibling = null);
                        }
                }
                function qi(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a; )
                            (n |= a.lanes | a.childLanes),
                                (r |= 14680064 & a.subtreeFlags),
                                (r |= 14680064 & a.flags),
                                (a.return = e),
                                (a = a.sibling);
                    else
                        for (a = e.child; null !== a; )
                            (n |= a.lanes | a.childLanes),
                                (r |= a.subtreeFlags),
                                (r |= a.flags),
                                (a.return = e),
                                (a = a.sibling);
                    return (e.subtreeFlags |= r), (e.childLanes = n), t;
                }
                function Ki(e, t, n) {
                    var r = t.pendingProps;
                    switch ((to(t), t.tag)) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return qi(t), null;
                        case 1:
                        case 17:
                            return za(t.type) && Oa(), qi(t), null;
                        case 3:
                            return (
                                (r = t.stateNode),
                                ol(),
                                Ea(Pa),
                                Ea(Na),
                                dl(),
                                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                                (null !== e && null !== e.child) ||
                                    (fo(t)
                                        ? (t.flags |= 4)
                                        : null === e ||
                                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                                          ((t.flags |= 1024), null !== oo && (is(oo), (oo = null)))),
                                Oi(e, t),
                                qi(t),
                                null
                            );
                        case 5:
                            il(t);
                            var a = rl(nl.current);
                            if (((n = t.type), null !== e && null != t.stateNode))
                                Mi(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return qi(t), null;
                                }
                                if (((e = rl(el.current)), fo(t))) {
                                    (r = t.stateNode), (n = t.type);
                                    var l = t.memoizedProps;
                                    switch (((r[fa] = t), (r[pa] = l), (e = 0 != (1 & t.mode)), n)) {
                                        case 'dialog':
                                            Br('cancel', r), Br('close', r);
                                            break;
                                        case 'iframe':
                                        case 'object':
                                        case 'embed':
                                            Br('load', r);
                                            break;
                                        case 'video':
                                        case 'audio':
                                            for (a = 0; a < Rr.length; a++) Br(Rr[a], r);
                                            break;
                                        case 'source':
                                            Br('error', r);
                                            break;
                                        case 'img':
                                        case 'image':
                                        case 'link':
                                            Br('error', r), Br('load', r);
                                            break;
                                        case 'details':
                                            Br('toggle', r);
                                            break;
                                        case 'input':
                                            Z(r, l), Br('invalid', r);
                                            break;
                                        case 'select':
                                            (r._wrapperState = { wasMultiple: !!l.multiple }), Br('invalid', r);
                                            break;
                                        case 'textarea':
                                            ae(r, l), Br('invalid', r);
                                    }
                                    for (var u in (ve(n, l), (a = null), l))
                                        if (l.hasOwnProperty(u)) {
                                            var s = l[u];
                                            'children' === u
                                                ? 'string' == typeof s
                                                    ? r.textContent !== s &&
                                                      (!0 !== l.suppressHydrationWarning && Gr(r.textContent, s, e),
                                                      (a = ['children', s]))
                                                    : 'number' == typeof s &&
                                                      r.textContent !== '' + s &&
                                                      (!0 !== l.suppressHydrationWarning && Gr(r.textContent, s, e),
                                                      (a = ['children', '' + s]))
                                                : i.hasOwnProperty(u) &&
                                                  null != s &&
                                                  'onScroll' === u &&
                                                  Br('scroll', r);
                                        }
                                    switch (n) {
                                        case 'input':
                                            Q(r), J(r, l, !0);
                                            break;
                                        case 'textarea':
                                            Q(r), le(r);
                                            break;
                                        case 'select':
                                        case 'option':
                                            break;
                                        default:
                                            'function' == typeof l.onClick && (r.onclick = Jr);
                                    }
                                    (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                                } else {
                                    (u = 9 === a.nodeType ? a : a.ownerDocument),
                                        'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                                        'http://www.w3.org/1999/xhtml' === e
                                            ? 'script' === n
                                                ? (((e = u.createElement('div')).innerHTML = '<script></script>'),
                                                  (e = e.removeChild(e.firstChild)))
                                                : 'string' == typeof r.is
                                                ? (e = u.createElement(n, { is: r.is }))
                                                : ((e = u.createElement(n)),
                                                  'select' === n &&
                                                      ((u = e),
                                                      r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                                            : (e = u.createElementNS(e, n)),
                                        (e[fa] = t),
                                        (e[pa] = r),
                                        zi(e, t, !1, !1),
                                        (t.stateNode = e);
                                    e: {
                                        switch (((u = be(n, r)), n)) {
                                            case 'dialog':
                                                Br('cancel', e), Br('close', e), (a = r);
                                                break;
                                            case 'iframe':
                                            case 'object':
                                            case 'embed':
                                                Br('load', e), (a = r);
                                                break;
                                            case 'video':
                                            case 'audio':
                                                for (a = 0; a < Rr.length; a++) Br(Rr[a], e);
                                                a = r;
                                                break;
                                            case 'source':
                                                Br('error', e), (a = r);
                                                break;
                                            case 'img':
                                            case 'image':
                                            case 'link':
                                                Br('error', e), Br('load', e), (a = r);
                                                break;
                                            case 'details':
                                                Br('toggle', e), (a = r);
                                                break;
                                            case 'input':
                                                Z(e, r), (a = Y(e, r)), Br('invalid', e);
                                                break;
                                            case 'option':
                                            default:
                                                a = r;
                                                break;
                                            case 'select':
                                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                                    (a = F({}, r, { value: void 0 })),
                                                    Br('invalid', e);
                                                break;
                                            case 'textarea':
                                                ae(e, r), (a = re(e, r)), Br('invalid', e);
                                        }
                                        for (l in (ve(n, a), (s = a)))
                                            if (s.hasOwnProperty(l)) {
                                                var c = s[l];
                                                'style' === l
                                                    ? ge(e, c)
                                                    : 'dangerouslySetInnerHTML' === l
                                                    ? null != (c = c ? c.__html : void 0) && de(e, c)
                                                    : 'children' === l
                                                    ? 'string' == typeof c
                                                        ? ('textarea' !== n || '' !== c) && fe(e, c)
                                                        : 'number' == typeof c && fe(e, '' + c)
                                                    : 'suppressContentEditableWarning' !== l &&
                                                      'suppressHydrationWarning' !== l &&
                                                      'autoFocus' !== l &&
                                                      (i.hasOwnProperty(l)
                                                          ? null != c && 'onScroll' === l && Br('scroll', e)
                                                          : null != c && b(e, l, c, u));
                                            }
                                        switch (n) {
                                            case 'input':
                                                Q(e), J(e, r, !1);
                                                break;
                                            case 'textarea':
                                                Q(e), le(e);
                                                break;
                                            case 'option':
                                                null != r.value && e.setAttribute('value', '' + V(r.value));
                                                break;
                                            case 'select':
                                                (e.multiple = !!r.multiple),
                                                    null != (l = r.value)
                                                        ? ne(e, !!r.multiple, l, !1)
                                                        : null != r.defaultValue &&
                                                          ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                'function' == typeof a.onClick && (e.onclick = Jr);
                                        }
                                        switch (n) {
                                            case 'button':
                                            case 'input':
                                            case 'select':
                                            case 'textarea':
                                                r = !!r.autoFocus;
                                                break e;
                                            case 'img':
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1;
                                        }
                                    }
                                    r && (t.flags |= 4);
                                }
                                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                            }
                            return qi(t), null;
                        case 6:
                            if (e && null != t.stateNode) Ri(e, t, e.memoizedProps, r);
                            else {
                                if ('string' != typeof r && null === t.stateNode) throw Error(o(166));
                                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                                    if (
                                        ((r = t.stateNode),
                                        (n = t.memoizedProps),
                                        (r[fa] = t),
                                        (l = r.nodeValue !== n) && null !== (e = no))
                                    )
                                        switch (e.tag) {
                                            case 3:
                                                Gr(r.nodeValue, n, 0 != (1 & e.mode));
                                                break;
                                            case 5:
                                                !0 !== e.memoizedProps.suppressHydrationWarning &&
                                                    Gr(r.nodeValue, n, 0 != (1 & e.mode));
                                        }
                                    l && (t.flags |= 4);
                                } else
                                    ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t),
                                        (t.stateNode = r);
                            }
                            return qi(t), null;
                        case 13:
                            if (
                                (Ea(ul),
                                (r = t.memoizedState),
                                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
                            ) {
                                if (ao && null !== ro && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                                    po(), mo(), (t.flags |= 98560), (l = !1);
                                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                                    if (null === e) {
                                        if (!l) throw Error(o(318));
                                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                                            throw Error(o(317));
                                        l[fa] = t;
                                    } else mo(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                                    qi(t), (l = !1);
                                } else null !== oo && (is(oo), (oo = null)), (l = !0);
                                if (!l) return 65536 & t.flags ? t : null;
                            }
                            return 0 != (128 & t.flags)
                                ? ((t.lanes = n), t)
                                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                                      r &&
                                      ((t.child.flags |= 8192),
                                      0 != (1 & t.mode) &&
                                          (null === e || 0 != (1 & ul.current) ? 0 === Ru && (Ru = 3) : gs())),
                                  null !== t.updateQueue && (t.flags |= 4),
                                  qi(t),
                                  null);
                        case 4:
                            return ol(), Oi(e, t), null === e && $r(t.stateNode.containerInfo), qi(t), null;
                        case 10:
                            return So(t.type._context), qi(t), null;
                        case 19:
                            if ((Ea(ul), null === (l = t.memoizedState))) return qi(t), null;
                            if (((r = 0 != (128 & t.flags)), null === (u = l.rendering)))
                                if (r) Qi(l, !1);
                                else {
                                    if (0 !== Ru || (null !== e && 0 != (128 & e.flags)))
                                        for (e = t.child; null !== e; ) {
                                            if (null !== (u = sl(e))) {
                                                for (
                                                    t.flags |= 128,
                                                        Qi(l, !1),
                                                        null !== (r = u.updateQueue) &&
                                                            ((t.updateQueue = r), (t.flags |= 4)),
                                                        t.subtreeFlags = 0,
                                                        r = n,
                                                        n = t.child;
                                                    null !== n;

                                                )
                                                    (e = r),
                                                        ((l = n).flags &= 14680066),
                                                        null === (u = l.alternate)
                                                            ? ((l.childLanes = 0),
                                                              (l.lanes = e),
                                                              (l.child = null),
                                                              (l.subtreeFlags = 0),
                                                              (l.memoizedProps = null),
                                                              (l.memoizedState = null),
                                                              (l.updateQueue = null),
                                                              (l.dependencies = null),
                                                              (l.stateNode = null))
                                                            : ((l.childLanes = u.childLanes),
                                                              (l.lanes = u.lanes),
                                                              (l.child = u.child),
                                                              (l.subtreeFlags = 0),
                                                              (l.deletions = null),
                                                              (l.memoizedProps = u.memoizedProps),
                                                              (l.memoizedState = u.memoizedState),
                                                              (l.updateQueue = u.updateQueue),
                                                              (l.type = u.type),
                                                              (e = u.dependencies),
                                                              (l.dependencies =
                                                                  null === e
                                                                      ? null
                                                                      : {
                                                                            lanes: e.lanes,
                                                                            firstContext: e.firstContext,
                                                                        })),
                                                        (n = n.sibling);
                                                return Ca(ul, (1 & ul.current) | 2), t.child;
                                            }
                                            e = e.sibling;
                                        }
                                    null !== l.tail &&
                                        Xe() > Hu &&
                                        ((t.flags |= 128), (r = !0), Qi(l, !1), (t.lanes = 4194304));
                                }
                            else {
                                if (!r)
                                    if (null !== (e = sl(u))) {
                                        if (
                                            ((t.flags |= 128),
                                            (r = !0),
                                            null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                                            Qi(l, !0),
                                            null === l.tail && 'hidden' === l.tailMode && !u.alternate && !ao)
                                        )
                                            return qi(t), null;
                                    } else
                                        2 * Xe() - l.renderingStartTime > Hu &&
                                            1073741824 !== n &&
                                            ((t.flags |= 128), (r = !0), Qi(l, !1), (t.lanes = 4194304));
                                l.isBackwards
                                    ? ((u.sibling = t.child), (t.child = u))
                                    : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u), (l.last = u));
                            }
                            return null !== l.tail
                                ? ((t = l.tail),
                                  (l.rendering = t),
                                  (l.tail = t.sibling),
                                  (l.renderingStartTime = Xe()),
                                  (t.sibling = null),
                                  (n = ul.current),
                                  Ca(ul, r ? (1 & n) | 2 : 1 & n),
                                  t)
                                : (qi(t), null);
                        case 22:
                        case 23:
                            return (
                                fs(),
                                (r = null !== t.memoizedState),
                                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                                r && 0 != (1 & t.mode)
                                    ? 0 != (1073741824 & Ou) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                                    : qi(t),
                                null
                            );
                        case 24:
                        case 25:
                            return null;
                    }
                    throw Error(o(156, t.tag));
                }
                function Yi(e, t) {
                    switch ((to(t), t.tag)) {
                        case 1:
                            return (
                                za(t.type) && Oa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
                            );
                        case 3:
                            return (
                                ol(),
                                Ea(Pa),
                                Ea(Na),
                                dl(),
                                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                                    ? ((t.flags = (-65537 & e) | 128), t)
                                    : null
                            );
                        case 5:
                            return il(t), null;
                        case 13:
                            if ((Ea(ul), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                                if (null === t.alternate) throw Error(o(340));
                                mo();
                            }
                            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
                        case 19:
                            return Ea(ul), null;
                        case 4:
                            return ol(), null;
                        case 10:
                            return So(t.type._context), null;
                        case 22:
                        case 23:
                            return fs(), null;
                        default:
                            return null;
                    }
                }
                (zi = function (e, t) {
                    for (var n = t.child; null !== n; ) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            (n.child.return = n), (n = n.child);
                            continue;
                        }
                        if (n === t) break;
                        for (; null === n.sibling; ) {
                            if (null === n.return || n.return === t) return;
                            n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                    }
                }),
                    (Oi = function () {}),
                    (Mi = function (e, t, n, r) {
                        var a = e.memoizedProps;
                        if (a !== r) {
                            (e = t.stateNode), rl(el.current);
                            var o,
                                l = null;
                            switch (n) {
                                case 'input':
                                    (a = Y(e, a)), (r = Y(e, r)), (l = []);
                                    break;
                                case 'select':
                                    (a = F({}, a, { value: void 0 })), (r = F({}, r, { value: void 0 })), (l = []);
                                    break;
                                case 'textarea':
                                    (a = re(e, a)), (r = re(e, r)), (l = []);
                                    break;
                                default:
                                    'function' != typeof a.onClick &&
                                        'function' == typeof r.onClick &&
                                        (e.onclick = Jr);
                            }
                            for (c in (ve(n, r), (n = null), a))
                                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                                    if ('style' === c) {
                                        var u = a[c];
                                        for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                                    } else
                                        'dangerouslySetInnerHTML' !== c &&
                                            'children' !== c &&
                                            'suppressContentEditableWarning' !== c &&
                                            'suppressHydrationWarning' !== c &&
                                            'autoFocus' !== c &&
                                            (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
                            for (c in r) {
                                var s = r[c];
                                if (
                                    ((u = null != a ? a[c] : void 0),
                                    r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                                )
                                    if ('style' === c)
                                        if (u) {
                                            for (o in u)
                                                !u.hasOwnProperty(o) ||
                                                    (s && s.hasOwnProperty(o)) ||
                                                    (n || (n = {}), (n[o] = ''));
                                            for (o in s)
                                                s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
                                        } else n || (l || (l = []), l.push(c, n)), (n = s);
                                    else
                                        'dangerouslySetInnerHTML' === c
                                            ? ((s = s ? s.__html : void 0),
                                              (u = u ? u.__html : void 0),
                                              null != s && u !== s && (l = l || []).push(c, s))
                                            : 'children' === c
                                            ? ('string' != typeof s && 'number' != typeof s) ||
                                              (l = l || []).push(c, '' + s)
                                            : 'suppressContentEditableWarning' !== c &&
                                              'suppressHydrationWarning' !== c &&
                                              (i.hasOwnProperty(c)
                                                  ? (null != s && 'onScroll' === c && Br('scroll', e),
                                                    l || u === s || (l = []))
                                                  : (l = l || []).push(c, s));
                            }
                            n && (l = l || []).push('style', n);
                            var c = l;
                            (t.updateQueue = c) && (t.flags |= 4);
                        }
                    }),
                    (Ri = function (e, t, n, r) {
                        n !== r && (t.flags |= 4);
                    });
                var Zi = !1,
                    Xi = !1,
                    Gi = 'function' == typeof WeakSet ? WeakSet : Set,
                    Ji = null;
                function eu(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ('function' == typeof n)
                            try {
                                n(null);
                            } catch (n) {
                                Es(e, t, n);
                            }
                        else n.current = null;
                }
                function tu(e, t, n) {
                    try {
                        n();
                    } catch (n) {
                        Es(e, t, n);
                    }
                }
                var nu = !1;
                function ru(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = (r = r.next);
                        do {
                            if ((a.tag & e) === e) {
                                var o = a.destroy;
                                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
                            }
                            a = a.next;
                        } while (a !== r);
                    }
                }
                function au(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = (t = t.next);
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r();
                            }
                            n = n.next;
                        } while (n !== t);
                    }
                }
                function ou(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
                    }
                }
                function lu(e) {
                    var t = e.alternate;
                    null !== t && ((e.alternate = null), lu(t)),
                        (e.child = null),
                        (e.deletions = null),
                        (e.sibling = null),
                        5 === e.tag &&
                            null !== (t = e.stateNode) &&
                            (delete t[fa], delete t[pa], delete t[ha], delete t[ga], delete t[ya]),
                        (e.stateNode = null),
                        (e.return = null),
                        (e.dependencies = null),
                        (e.memoizedProps = null),
                        (e.memoizedState = null),
                        (e.pendingProps = null),
                        (e.stateNode = null),
                        (e.updateQueue = null);
                }
                function iu(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
                }
                function uu(e) {
                    e: for (;;) {
                        for (; null === e.sibling; ) {
                            if (null === e.return || iu(e.return)) return null;
                            e = e.return;
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            (e.child.return = e), (e = e.child);
                        }
                        if (!(2 & e.flags)) return e.stateNode;
                    }
                }
                function su(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r)
                        (e = e.stateNode),
                            t
                                ? 8 === n.nodeType
                                    ? n.parentNode.insertBefore(e, t)
                                    : n.insertBefore(e, t)
                                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr));
                    else if (4 !== r && null !== (e = e.child))
                        for (su(e, t, n), e = e.sibling; null !== e; ) su(e, t, n), (e = e.sibling);
                }
                function cu(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (cu(e, t, n), e = e.sibling; null !== e; ) cu(e, t, n), (e = e.sibling);
                }
                var du = null,
                    fu = !1;
                function pu(e, t, n) {
                    for (n = n.child; null !== n; ) mu(e, t, n), (n = n.sibling);
                }
                function mu(e, t, n) {
                    if (ot && 'function' == typeof ot.onCommitFiberUnmount)
                        try {
                            ot.onCommitFiberUnmount(at, n);
                        } catch (e) {}
                    switch (n.tag) {
                        case 5:
                            Xi || eu(n, t);
                        case 6:
                            var r = du,
                                a = fu;
                            (du = null),
                                pu(e, t, n),
                                (fu = a),
                                null !== (du = r) &&
                                    (fu
                                        ? ((e = du),
                                          (n = n.stateNode),
                                          8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                                        : du.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== du &&
                                (fu
                                    ? ((e = du),
                                      (n = n.stateNode),
                                      8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n),
                                      $t(e))
                                    : ua(du, n.stateNode));
                            break;
                        case 4:
                            (r = du),
                                (a = fu),
                                (du = n.stateNode.containerInfo),
                                (fu = !0),
                                pu(e, t, n),
                                (du = r),
                                (fu = a);
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Xi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                                a = r = r.next;
                                do {
                                    var o = a,
                                        l = o.destroy;
                                    (o = o.tag),
                                        void 0 !== l && (0 != (2 & o) || 0 != (4 & o)) && tu(n, t, l),
                                        (a = a.next);
                                } while (a !== r);
                            }
                            pu(e, t, n);
                            break;
                        case 1:
                            if (!Xi && (eu(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
                                try {
                                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                                } catch (e) {
                                    Es(n, t, e);
                                }
                            pu(e, t, n);
                            break;
                        case 21:
                            pu(e, t, n);
                            break;
                        case 22:
                            1 & n.mode
                                ? ((Xi = (r = Xi) || null !== n.memoizedState), pu(e, t, n), (Xi = r))
                                : pu(e, t, n);
                            break;
                        default:
                            pu(e, t, n);
                    }
                }
                function hu(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Gi()),
                            t.forEach(function (t) {
                                var r = Ps.bind(null, e, t);
                                n.has(t) || (n.add(t), t.then(r, r));
                            });
                    }
                }
                function gu(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var l = e,
                                    i = t,
                                    u = i;
                                e: for (; null !== u; ) {
                                    switch (u.tag) {
                                        case 5:
                                            (du = u.stateNode), (fu = !1);
                                            break e;
                                        case 3:
                                        case 4:
                                            (du = u.stateNode.containerInfo), (fu = !0);
                                            break e;
                                    }
                                    u = u.return;
                                }
                                if (null === du) throw Error(o(160));
                                mu(l, i, a), (du = null), (fu = !1);
                                var s = a.alternate;
                                null !== s && (s.return = null), (a.return = null);
                            } catch (e) {
                                Es(a, t, e);
                            }
                        }
                    if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
                }
                function yu(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if ((gu(t, e), vu(e), 4 & r)) {
                                try {
                                    ru(3, e, e.return), au(3, e);
                                } catch (t) {
                                    Es(e, e.return, t);
                                }
                                try {
                                    ru(5, e, e.return);
                                } catch (t) {
                                    Es(e, e.return, t);
                                }
                            }
                            break;
                        case 1:
                            gu(t, e), vu(e), 512 & r && null !== n && eu(n, n.return);
                            break;
                        case 5:
                            if ((gu(t, e), vu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags)) {
                                var a = e.stateNode;
                                try {
                                    fe(a, '');
                                } catch (t) {
                                    Es(e, e.return, t);
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var l = e.memoizedProps,
                                    i = null !== n ? n.memoizedProps : l,
                                    u = e.type,
                                    s = e.updateQueue;
                                if (((e.updateQueue = null), null !== s))
                                    try {
                                        'input' === u && 'radio' === l.type && null != l.name && X(a, l), be(u, i);
                                        var c = be(u, l);
                                        for (i = 0; i < s.length; i += 2) {
                                            var d = s[i],
                                                f = s[i + 1];
                                            'style' === d
                                                ? ge(a, f)
                                                : 'dangerouslySetInnerHTML' === d
                                                ? de(a, f)
                                                : 'children' === d
                                                ? fe(a, f)
                                                : b(a, d, f, c);
                                        }
                                        switch (u) {
                                            case 'input':
                                                G(a, l);
                                                break;
                                            case 'textarea':
                                                oe(a, l);
                                                break;
                                            case 'select':
                                                var p = a._wrapperState.wasMultiple;
                                                a._wrapperState.wasMultiple = !!l.multiple;
                                                var m = l.value;
                                                null != m
                                                    ? ne(a, !!l.multiple, m, !1)
                                                    : p !== !!l.multiple &&
                                                      (null != l.defaultValue
                                                          ? ne(a, !!l.multiple, l.defaultValue, !0)
                                                          : ne(a, !!l.multiple, l.multiple ? [] : '', !1));
                                        }
                                        a[pa] = l;
                                    } catch (t) {
                                        Es(e, e.return, t);
                                    }
                            }
                            break;
                        case 6:
                            if ((gu(t, e), vu(e), 4 & r)) {
                                if (null === e.stateNode) throw Error(o(162));
                                (a = e.stateNode), (l = e.memoizedProps);
                                try {
                                    a.nodeValue = l;
                                } catch (t) {
                                    Es(e, e.return, t);
                                }
                            }
                            break;
                        case 3:
                            if ((gu(t, e), vu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                                try {
                                    $t(t.containerInfo);
                                } catch (t) {
                                    Es(e, e.return, t);
                                }
                            break;
                        case 4:
                        default:
                            gu(t, e), vu(e);
                            break;
                        case 13:
                            gu(t, e),
                                vu(e),
                                8192 & (a = e.child).flags &&
                                    ((l = null !== a.memoizedState),
                                    (a.stateNode.isHidden = l),
                                    !l || (null !== a.alternate && null !== a.alternate.memoizedState) || ($u = Xe())),
                                4 & r && hu(e);
                            break;
                        case 22:
                            if (
                                ((d = null !== n && null !== n.memoizedState),
                                1 & e.mode ? ((Xi = (c = Xi) || d), gu(t, e), (Xi = c)) : gu(t, e),
                                vu(e),
                                8192 & r)
                            ) {
                                if (
                                    ((c = null !== e.memoizedState),
                                    (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                                )
                                    for (Ji = e, d = e.child; null !== d; ) {
                                        for (f = Ji = d; null !== Ji; ) {
                                            switch (((m = (p = Ji).child), p.tag)) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    ru(4, p, p.return);
                                                    break;
                                                case 1:
                                                    eu(p, p.return);
                                                    var h = p.stateNode;
                                                    if ('function' == typeof h.componentWillUnmount) {
                                                        (r = p), (n = p.return);
                                                        try {
                                                            (t = r),
                                                                (h.props = t.memoizedProps),
                                                                (h.state = t.memoizedState),
                                                                h.componentWillUnmount();
                                                        } catch (e) {
                                                            Es(r, n, e);
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    eu(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        _u(f);
                                                        continue;
                                                    }
                                            }
                                            null !== m ? ((m.return = p), (Ji = m)) : _u(f);
                                        }
                                        d = d.sibling;
                                    }
                                e: for (d = null, f = e; ; ) {
                                    if (5 === f.tag) {
                                        if (null === d) {
                                            d = f;
                                            try {
                                                (a = f.stateNode),
                                                    c
                                                        ? 'function' == typeof (l = a.style).setProperty
                                                            ? l.setProperty('display', 'none', 'important')
                                                            : (l.display = 'none')
                                                        : ((u = f.stateNode),
                                                          (i =
                                                              null != (s = f.memoizedProps.style) &&
                                                              s.hasOwnProperty('display')
                                                                  ? s.display
                                                                  : null),
                                                          (u.style.display = he('display', i)));
                                            } catch (t) {
                                                Es(e, e.return, t);
                                            }
                                        }
                                    } else if (6 === f.tag) {
                                        if (null === d)
                                            try {
                                                f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                                            } catch (t) {
                                                Es(e, e.return, t);
                                            }
                                    } else if (
                                        ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                                        null !== f.child
                                    ) {
                                        (f.child.return = f), (f = f.child);
                                        continue;
                                    }
                                    if (f === e) break e;
                                    for (; null === f.sibling; ) {
                                        if (null === f.return || f.return === e) break e;
                                        d === f && (d = null), (f = f.return);
                                    }
                                    d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                                }
                            }
                            break;
                        case 19:
                            gu(t, e), vu(e), 4 & r && hu(e);
                        case 21:
                    }
                }
                function vu(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n; ) {
                                    if (iu(n)) {
                                        var r = n;
                                        break e;
                                    }
                                    n = n.return;
                                }
                                throw Error(o(160));
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (fe(a, ''), (r.flags &= -33)), cu(e, uu(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var l = r.stateNode.containerInfo;
                                    su(e, uu(e), l);
                                    break;
                                default:
                                    throw Error(o(161));
                            }
                        } catch (t) {
                            Es(e, e.return, t);
                        }
                        e.flags &= -3;
                    }
                    4096 & t && (e.flags &= -4097);
                }
                function bu(e, t, n) {
                    (Ji = e), wu(e, t, n);
                }
                function wu(e, t, n) {
                    for (var r = 0 != (1 & e.mode); null !== Ji; ) {
                        var a = Ji,
                            o = a.child;
                        if (22 === a.tag && r) {
                            var l = null !== a.memoizedState || Zi;
                            if (!l) {
                                var i = a.alternate,
                                    u = (null !== i && null !== i.memoizedState) || Xi;
                                i = Zi;
                                var s = Xi;
                                if (((Zi = l), (Xi = u) && !s))
                                    for (Ji = a; null !== Ji; )
                                        (u = (l = Ji).child),
                                            22 === l.tag && null !== l.memoizedState
                                                ? Su(a)
                                                : null !== u
                                                ? ((u.return = l), (Ji = u))
                                                : Su(a);
                                for (; null !== o; ) (Ji = o), wu(o, t, n), (o = o.sibling);
                                (Ji = a), (Zi = i), (Xi = s);
                            }
                            ku(e);
                        } else 0 != (8772 & a.subtreeFlags) && null !== o ? ((o.return = a), (Ji = o)) : ku(e);
                    }
                }
                function ku(e) {
                    for (; null !== Ji; ) {
                        var t = Ji;
                        if (0 != (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 != (8772 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xi || au(5, t);
                                            break;
                                        case 1:
                                            var r = t.stateNode;
                                            if (4 & t.flags && !Xi)
                                                if (null === n) r.componentDidMount();
                                                else {
                                                    var a =
                                                        t.elementType === t.type
                                                            ? n.memoizedProps
                                                            : yo(t.type, n.memoizedProps);
                                                    r.componentDidUpdate(
                                                        a,
                                                        n.memoizedState,
                                                        r.__reactInternalSnapshotBeforeUpdate,
                                                    );
                                                }
                                            var l = t.updateQueue;
                                            null !== l && Bo(t, l, r);
                                            break;
                                        case 3:
                                            var i = t.updateQueue;
                                            if (null !== i) {
                                                if (((n = null), null !== t.child))
                                                    switch (t.child.tag) {
                                                        case 5:
                                                        case 1:
                                                            n = t.child.stateNode;
                                                    }
                                                Bo(t, i, n);
                                            }
                                            break;
                                        case 5:
                                            var u = t.stateNode;
                                            if (null === n && 4 & t.flags) {
                                                n = u;
                                                var s = t.memoizedProps;
                                                switch (t.type) {
                                                    case 'button':
                                                    case 'input':
                                                    case 'select':
                                                    case 'textarea':
                                                        s.autoFocus && n.focus();
                                                        break;
                                                    case 'img':
                                                        s.src && (n.src = s.src);
                                                }
                                            }
                                            break;
                                        case 6:
                                        case 4:
                                        case 12:
                                        case 19:
                                        case 17:
                                        case 21:
                                        case 22:
                                        case 23:
                                        case 25:
                                            break;
                                        case 13:
                                            if (null === t.memoizedState) {
                                                var c = t.alternate;
                                                if (null !== c) {
                                                    var d = c.memoizedState;
                                                    if (null !== d) {
                                                        var f = d.dehydrated;
                                                        null !== f && $t(f);
                                                    }
                                                }
                                            }
                                            break;
                                        default:
                                            throw Error(o(163));
                                    }
                                Xi || (512 & t.flags && ou(t));
                            } catch (e) {
                                Es(t, t.return, e);
                            }
                        }
                        if (t === e) {
                            Ji = null;
                            break;
                        }
                        if (null !== (n = t.sibling)) {
                            (n.return = t.return), (Ji = n);
                            break;
                        }
                        Ji = t.return;
                    }
                }
                function _u(e) {
                    for (; null !== Ji; ) {
                        var t = Ji;
                        if (t === e) {
                            Ji = null;
                            break;
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            (n.return = t.return), (Ji = n);
                            break;
                        }
                        Ji = t.return;
                    }
                }
                function Su(e) {
                    for (; null !== Ji; ) {
                        var t = Ji;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        au(4, t);
                                    } catch (e) {
                                        Es(t, n, e);
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ('function' == typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount();
                                        } catch (e) {
                                            Es(t, a, e);
                                        }
                                    }
                                    var o = t.return;
                                    try {
                                        ou(t);
                                    } catch (e) {
                                        Es(t, o, e);
                                    }
                                    break;
                                case 5:
                                    var l = t.return;
                                    try {
                                        ou(t);
                                    } catch (e) {
                                        Es(t, l, e);
                                    }
                            }
                        } catch (e) {
                            Es(t, t.return, e);
                        }
                        if (t === e) {
                            Ji = null;
                            break;
                        }
                        var i = t.sibling;
                        if (null !== i) {
                            (i.return = t.return), (Ji = i);
                            break;
                        }
                        Ji = t.return;
                    }
                }
                var xu,
                    Eu = Math.ceil,
                    Cu = w.ReactCurrentDispatcher,
                    Tu = w.ReactCurrentOwner,
                    Nu = w.ReactCurrentBatchConfig,
                    Pu = 0,
                    Lu = null,
                    Iu = null,
                    zu = 0,
                    Ou = 0,
                    Mu = xa(0),
                    Ru = 0,
                    Du = null,
                    Fu = 0,
                    Au = 0,
                    Bu = 0,
                    ju = null,
                    Uu = null,
                    $u = 0,
                    Hu = 1 / 0,
                    Vu = null,
                    Wu = !1,
                    Qu = null,
                    qu = null,
                    Ku = !1,
                    Yu = null,
                    Zu = 0,
                    Xu = 0,
                    Gu = null,
                    Ju = -1,
                    es = 0;
                function ts() {
                    return 0 != (6 & Pu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
                }
                function ns(e) {
                    return 0 == (1 & e.mode)
                        ? 1
                        : 0 != (2 & Pu) && 0 !== zu
                        ? zu & -zu
                        : null !== go.transition
                        ? (0 === es && (es = ht()), es)
                        : 0 !== (e = bt)
                        ? e
                        : (e = void 0 === (e = window.event) ? 16 : Zt(e.type));
                }
                function rs(e, t, n, r) {
                    if (50 < Xu) throw ((Xu = 0), (Gu = null), Error(o(185)));
                    yt(e, n, r),
                        (0 != (2 & Pu) && e === Lu) ||
                            (e === Lu && (0 == (2 & Pu) && (Au |= n), 4 === Ru && us(e, zu)),
                            as(e, r),
                            1 === n && 0 === Pu && 0 == (1 & t.mode) && ((Hu = Xe() + 500), Ba && $a()));
                }
                function as(e, t) {
                    var n = e.callbackNode;
                    !(function (e, t) {
                        for (
                            var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes;
                            0 < o;

                        ) {
                            var l = 31 - lt(o),
                                i = 1 << l,
                                u = a[l];
                            -1 === u
                                ? (0 != (i & n) && 0 == (i & r)) || (a[l] = pt(i, t))
                                : u <= t && (e.expiredLanes |= i),
                                (o &= ~i);
                        }
                    })(e, t);
                    var r = ft(e, e === Lu ? zu : 0);
                    if (0 === r) null !== n && Ke(n), (e.callbackNode = null), (e.callbackPriority = 0);
                    else if (((t = r & -r), e.callbackPriority !== t)) {
                        if ((null != n && Ke(n), 1 === t))
                            0 === e.tag
                                ? (function (e) {
                                      (Ba = !0), Ua(e);
                                  })(ss.bind(null, e))
                                : Ua(ss.bind(null, e)),
                                la(function () {
                                    0 == (6 & Pu) && $a();
                                }),
                                (n = null);
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Je;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt;
                            }
                            n = Ls(n, os.bind(null, e));
                        }
                        (e.callbackPriority = t), (e.callbackNode = n);
                    }
                }
                function os(e, t) {
                    if (((Ju = -1), (es = 0), 0 != (6 & Pu))) throw Error(o(327));
                    var n = e.callbackNode;
                    if (Ss() && e.callbackNode !== n) return null;
                    var r = ft(e, e === Lu ? zu : 0);
                    if (0 === r) return null;
                    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = ys(e, r);
                    else {
                        t = r;
                        var a = Pu;
                        Pu |= 2;
                        var l = hs();
                        for ((Lu === e && zu === t) || ((Vu = null), (Hu = Xe() + 500), ps(e, t)); ; )
                            try {
                                bs();
                                break;
                            } catch (t) {
                                ms(e, t);
                            }
                        _o(), (Cu.current = l), (Pu = a), null !== Iu ? (t = 0) : ((Lu = null), (zu = 0), (t = Ru));
                    }
                    if (0 !== t) {
                        if ((2 === t && 0 !== (a = mt(e)) && ((r = a), (t = ls(e, a))), 1 === t))
                            throw ((n = Du), ps(e, 0), us(e, r), as(e, Xe()), n);
                        if (6 === t) us(e, r);
                        else {
                            if (
                                ((a = e.current.alternate),
                                0 == (30 & r) &&
                                    !(function (e) {
                                        for (var t = e; ; ) {
                                            if (16384 & t.flags) {
                                                var n = t.updateQueue;
                                                if (null !== n && null !== (n = n.stores))
                                                    for (var r = 0; r < n.length; r++) {
                                                        var a = n[r],
                                                            o = a.getSnapshot;
                                                        a = a.value;
                                                        try {
                                                            if (!ir(o(), a)) return !1;
                                                        } catch (e) {
                                                            return !1;
                                                        }
                                                    }
                                            }
                                            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                                                (n.return = t), (t = n);
                                            else {
                                                if (t === e) break;
                                                for (; null === t.sibling; ) {
                                                    if (null === t.return || t.return === e) return !0;
                                                    t = t.return;
                                                }
                                                (t.sibling.return = t.return), (t = t.sibling);
                                            }
                                        }
                                        return !0;
                                    })(a) &&
                                    (2 === (t = ys(e, r)) && 0 !== (l = mt(e)) && ((r = l), (t = ls(e, l))), 1 === t))
                            )
                                throw ((n = Du), ps(e, 0), us(e, r), as(e, Xe()), n);
                            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                                case 0:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                case 5:
                                    _s(e, Uu, Vu);
                                    break;
                                case 3:
                                    if ((us(e, r), (130023424 & r) === r && 10 < (t = $u + 500 - Xe()))) {
                                        if (0 !== ft(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            ts(), (e.pingedLanes |= e.suspendedLanes & a);
                                            break;
                                        }
                                        e.timeoutHandle = ra(_s.bind(null, e, Uu, Vu), t);
                                        break;
                                    }
                                    _s(e, Uu, Vu);
                                    break;
                                case 4:
                                    if ((us(e, r), (4194240 & r) === r)) break;
                                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                                        var i = 31 - lt(r);
                                        (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                                    }
                                    if (
                                        ((r = a),
                                        10 <
                                            (r =
                                                (120 > (r = Xe() - r)
                                                    ? 120
                                                    : 480 > r
                                                    ? 480
                                                    : 1080 > r
                                                    ? 1080
                                                    : 1920 > r
                                                    ? 1920
                                                    : 3e3 > r
                                                    ? 3e3
                                                    : 4320 > r
                                                    ? 4320
                                                    : 1960 * Eu(r / 1960)) - r))
                                    ) {
                                        e.timeoutHandle = ra(_s.bind(null, e, Uu, Vu), r);
                                        break;
                                    }
                                    _s(e, Uu, Vu);
                                    break;
                                default:
                                    throw Error(o(329));
                            }
                        }
                    }
                    return as(e, Xe()), e.callbackNode === n ? os.bind(null, e) : null;
                }
                function ls(e, t) {
                    var n = ju;
                    return (
                        e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
                        2 !== (e = ys(e, t)) && ((t = Uu), (Uu = n), null !== t && is(t)),
                        e
                    );
                }
                function is(e) {
                    null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
                }
                function us(e, t) {
                    for (
                        t &= ~Bu, t &= ~Au, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
                        0 < t;

                    ) {
                        var n = 31 - lt(t),
                            r = 1 << n;
                        (e[n] = -1), (t &= ~r);
                    }
                }
                function ss(e) {
                    if (0 != (6 & Pu)) throw Error(o(327));
                    Ss();
                    var t = ft(e, 0);
                    if (0 == (1 & t)) return as(e, Xe()), null;
                    var n = ys(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = mt(e);
                        0 !== r && ((t = r), (n = ls(e, r)));
                    }
                    if (1 === n) throw ((n = Du), ps(e, 0), us(e, t), as(e, Xe()), n);
                    if (6 === n) throw Error(o(345));
                    return (
                        (e.finishedWork = e.current.alternate), (e.finishedLanes = t), _s(e, Uu, Vu), as(e, Xe()), null
                    );
                }
                function cs(e, t) {
                    var n = Pu;
                    Pu |= 1;
                    try {
                        return e(t);
                    } finally {
                        0 === (Pu = n) && ((Hu = Xe() + 500), Ba && $a());
                    }
                }
                function ds(e) {
                    null !== Yu && 0 === Yu.tag && 0 == (6 & Pu) && Ss();
                    var t = Pu;
                    Pu |= 1;
                    var n = Nu.transition,
                        r = bt;
                    try {
                        if (((Nu.transition = null), (bt = 1), e)) return e();
                    } finally {
                        (bt = r), (Nu.transition = n), 0 == (6 & (Pu = t)) && $a();
                    }
                }
                function fs() {
                    (Ou = Mu.current), Ea(Mu);
                }
                function ps(e, t) {
                    (e.finishedWork = null), (e.finishedLanes = 0);
                    var n = e.timeoutHandle;
                    if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Iu))
                        for (n = Iu.return; null !== n; ) {
                            var r = n;
                            switch ((to(r), r.tag)) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && Oa();
                                    break;
                                case 3:
                                    ol(), Ea(Pa), Ea(Na), dl();
                                    break;
                                case 5:
                                    il(r);
                                    break;
                                case 4:
                                    ol();
                                    break;
                                case 13:
                                case 19:
                                    Ea(ul);
                                    break;
                                case 10:
                                    So(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fs();
                            }
                            n = n.return;
                        }
                    if (
                        ((Lu = e),
                        (Iu = e = Ms(e.current, null)),
                        (zu = Ou = t),
                        (Ru = 0),
                        (Du = null),
                        (Bu = Au = Fu = 0),
                        (Uu = ju = null),
                        null !== To)
                    ) {
                        for (t = 0; t < To.length; t++)
                            if (null !== (r = (n = To[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    o = n.pending;
                                if (null !== o) {
                                    var l = o.next;
                                    (o.next = a), (r.next = l);
                                }
                                n.pending = r;
                            }
                        To = null;
                    }
                    return e;
                }
                function ms(e, t) {
                    for (;;) {
                        var n = Iu;
                        try {
                            if ((_o(), (fl.current = li), vl)) {
                                for (var r = hl.memoizedState; null !== r; ) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), (r = r.next);
                                }
                                vl = !1;
                            }
                            if (
                                ((ml = 0),
                                (yl = gl = hl = null),
                                (bl = !1),
                                (wl = 0),
                                (Tu.current = null),
                                null === n || null === n.return)
                            ) {
                                (Ru = 1), (Du = t), (Iu = null);
                                break;
                            }
                            e: {
                                var l = e,
                                    i = n.return,
                                    u = n,
                                    s = t;
                                if (
                                    ((t = zu),
                                    (u.flags |= 32768),
                                    null !== s && 'object' == typeof s && 'function' == typeof s.then)
                                ) {
                                    var c = s,
                                        d = u,
                                        f = d.tag;
                                    if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                        var p = d.alternate;
                                        p
                                            ? ((d.updateQueue = p.updateQueue),
                                              (d.memoizedState = p.memoizedState),
                                              (d.lanes = p.lanes))
                                            : ((d.updateQueue = null), (d.memoizedState = null));
                                    }
                                    var m = yi(i);
                                    if (null !== m) {
                                        (m.flags &= -257), vi(m, i, u, 0, t), 1 & m.mode && gi(l, c, t), (s = c);
                                        var h = (t = m).updateQueue;
                                        if (null === h) {
                                            var g = new Set();
                                            g.add(s), (t.updateQueue = g);
                                        } else h.add(s);
                                        break e;
                                    }
                                    if (0 == (1 & t)) {
                                        gi(l, c, t), gs();
                                        break e;
                                    }
                                    s = Error(o(426));
                                } else if (ao && 1 & u.mode) {
                                    var y = yi(i);
                                    if (null !== y) {
                                        0 == (65536 & y.flags) && (y.flags |= 256), vi(y, i, u, 0, t), ho(ci(s, u));
                                        break e;
                                    }
                                }
                                (l = s = ci(s, u)),
                                    4 !== Ru && (Ru = 2),
                                    null === ju ? (ju = [l]) : ju.push(l),
                                    (l = i);
                                do {
                                    switch (l.tag) {
                                        case 3:
                                            (l.flags |= 65536), (t &= -t), (l.lanes |= t), Fo(l, mi(0, s, t));
                                            break e;
                                        case 1:
                                            u = s;
                                            var v = l.type,
                                                b = l.stateNode;
                                            if (
                                                0 == (128 & l.flags) &&
                                                ('function' == typeof v.getDerivedStateFromError ||
                                                    (null !== b &&
                                                        'function' == typeof b.componentDidCatch &&
                                                        (null === qu || !qu.has(b))))
                                            ) {
                                                (l.flags |= 65536), (t &= -t), (l.lanes |= t), Fo(l, hi(l, u, t));
                                                break e;
                                            }
                                    }
                                    l = l.return;
                                } while (null !== l);
                            }
                            ks(n);
                        } catch (e) {
                            (t = e), Iu === n && null !== n && (Iu = n = n.return);
                            continue;
                        }
                        break;
                    }
                }
                function hs() {
                    var e = Cu.current;
                    return (Cu.current = li), null === e ? li : e;
                }
                function gs() {
                    (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
                        null === Lu || (0 == (268435455 & Fu) && 0 == (268435455 & Au)) || us(Lu, zu);
                }
                function ys(e, t) {
                    var n = Pu;
                    Pu |= 2;
                    var r = hs();
                    for ((Lu === e && zu === t) || ((Vu = null), ps(e, t)); ; )
                        try {
                            vs();
                            break;
                        } catch (t) {
                            ms(e, t);
                        }
                    if ((_o(), (Pu = n), (Cu.current = r), null !== Iu)) throw Error(o(261));
                    return (Lu = null), (zu = 0), Ru;
                }
                function vs() {
                    for (; null !== Iu; ) ws(Iu);
                }
                function bs() {
                    for (; null !== Iu && !Ye(); ) ws(Iu);
                }
                function ws(e) {
                    var t = xu(e.alternate, e, Ou);
                    (e.memoizedProps = e.pendingProps), null === t ? ks(e) : (Iu = t), (Tu.current = null);
                }
                function ks(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (((e = t.return), 0 == (32768 & t.flags))) {
                            if (null !== (n = Ki(n, t, Ou))) return void (Iu = n);
                        } else {
                            if (null !== (n = Yi(n, t))) return (n.flags &= 32767), void (Iu = n);
                            if (null === e) return (Ru = 6), void (Iu = null);
                            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
                        }
                        if (null !== (t = t.sibling)) return void (Iu = t);
                        Iu = t = e;
                    } while (null !== t);
                    0 === Ru && (Ru = 5);
                }
                function _s(e, t, n) {
                    var r = bt,
                        a = Nu.transition;
                    try {
                        (Nu.transition = null),
                            (bt = 1),
                            (function (e, t, n, r) {
                                do {
                                    Ss();
                                } while (null !== Yu);
                                if (0 != (6 & Pu)) throw Error(o(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                                    throw Error(o(177));
                                (e.callbackNode = null), (e.callbackPriority = 0);
                                var l = n.lanes | n.childLanes;
                                if (
                                    ((function (e, t) {
                                        var n = e.pendingLanes & ~t;
                                        (e.pendingLanes = t),
                                            (e.suspendedLanes = 0),
                                            (e.pingedLanes = 0),
                                            (e.expiredLanes &= t),
                                            (e.mutableReadLanes &= t),
                                            (e.entangledLanes &= t),
                                            (t = e.entanglements);
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n; ) {
                                            var a = 31 - lt(n),
                                                o = 1 << a;
                                            (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                                        }
                                    })(e, l),
                                    e === Lu && ((Iu = Lu = null), (zu = 0)),
                                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                                        Ku ||
                                        ((Ku = !0),
                                        Ls(tt, function () {
                                            return Ss(), null;
                                        })),
                                    (l = 0 != (15990 & n.flags)),
                                    0 != (15990 & n.subtreeFlags) || l)
                                ) {
                                    (l = Nu.transition), (Nu.transition = null);
                                    var i = bt;
                                    bt = 1;
                                    var u = Pu;
                                    (Pu |= 4),
                                        (Tu.current = null),
                                        (function (e, t) {
                                            if (((ea = Vt), pr((e = fr())))) {
                                                if ('selectionStart' in e)
                                                    var n = { start: e.selectionStart, end: e.selectionEnd };
                                                else
                                                    e: {
                                                        var r =
                                                            (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                                                .getSelection && n.getSelection();
                                                        if (r && 0 !== r.rangeCount) {
                                                            n = r.anchorNode;
                                                            var a = r.anchorOffset,
                                                                l = r.focusNode;
                                                            r = r.focusOffset;
                                                            try {
                                                                n.nodeType, l.nodeType;
                                                            } catch (e) {
                                                                n = null;
                                                                break e;
                                                            }
                                                            var i = 0,
                                                                u = -1,
                                                                s = -1,
                                                                c = 0,
                                                                d = 0,
                                                                f = e,
                                                                p = null;
                                                            t: for (;;) {
                                                                for (
                                                                    var m;
                                                                    f !== n ||
                                                                        (0 !== a && 3 !== f.nodeType) ||
                                                                        (u = i + a),
                                                                        f !== l ||
                                                                            (0 !== r && 3 !== f.nodeType) ||
                                                                            (s = i + r),
                                                                        3 === f.nodeType && (i += f.nodeValue.length),
                                                                        null !== (m = f.firstChild);

                                                                )
                                                                    (p = f), (f = m);
                                                                for (;;) {
                                                                    if (f === e) break t;
                                                                    if (
                                                                        (p === n && ++c === a && (u = i),
                                                                        p === l && ++d === r && (s = i),
                                                                        null !== (m = f.nextSibling))
                                                                    )
                                                                        break;
                                                                    p = (f = p).parentNode;
                                                                }
                                                                f = m;
                                                            }
                                                            n = -1 === u || -1 === s ? null : { start: u, end: s };
                                                        } else n = null;
                                                    }
                                                n = n || { start: 0, end: 0 };
                                            } else n = null;
                                            for (
                                                ta = { focusedElem: e, selectionRange: n }, Vt = !1, Ji = t;
                                                null !== Ji;

                                            )
                                                if (((e = (t = Ji).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                                                    (e.return = t), (Ji = e);
                                                else
                                                    for (; null !== Ji; ) {
                                                        t = Ji;
                                                        try {
                                                            var h = t.alternate;
                                                            if (0 != (1024 & t.flags))
                                                                switch (t.tag) {
                                                                    case 0:
                                                                    case 11:
                                                                    case 15:
                                                                    case 5:
                                                                    case 6:
                                                                    case 4:
                                                                    case 17:
                                                                        break;
                                                                    case 1:
                                                                        if (null !== h) {
                                                                            var g = h.memoizedProps,
                                                                                y = h.memoizedState,
                                                                                v = t.stateNode,
                                                                                b = v.getSnapshotBeforeUpdate(
                                                                                    t.elementType === t.type
                                                                                        ? g
                                                                                        : yo(t.type, g),
                                                                                    y,
                                                                                );
                                                                            v.__reactInternalSnapshotBeforeUpdate = b;
                                                                        }
                                                                        break;
                                                                    case 3:
                                                                        var w = t.stateNode.containerInfo;
                                                                        1 === w.nodeType
                                                                            ? (w.textContent = '')
                                                                            : 9 === w.nodeType &&
                                                                              w.documentElement &&
                                                                              w.removeChild(w.documentElement);
                                                                        break;
                                                                    default:
                                                                        throw Error(o(163));
                                                                }
                                                        } catch (e) {
                                                            Es(t, t.return, e);
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            (e.return = t.return), (Ji = e);
                                                            break;
                                                        }
                                                        Ji = t.return;
                                                    }
                                            (h = nu), (nu = !1);
                                        })(e, n),
                                        yu(n, e),
                                        mr(ta),
                                        (Vt = !!ea),
                                        (ta = ea = null),
                                        (e.current = n),
                                        bu(n, e, a),
                                        Ze(),
                                        (Pu = u),
                                        (bt = i),
                                        (Nu.transition = l);
                                } else e.current = n;
                                if (
                                    (Ku && ((Ku = !1), (Yu = e), (Zu = a)),
                                    (l = e.pendingLanes),
                                    0 === l && (qu = null),
                                    (function (e) {
                                        if (ot && 'function' == typeof ot.onCommitFiberRoot)
                                            try {
                                                ot.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags));
                                            } catch (e) {}
                                    })(n.stateNode),
                                    as(e, Xe()),
                                    null !== t)
                                )
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                                        (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                                if (Wu) throw ((Wu = !1), (e = Qu), (Qu = null), e);
                                0 != (1 & Zu) && 0 !== e.tag && Ss(),
                                    (l = e.pendingLanes),
                                    0 != (1 & l) ? (e === Gu ? Xu++ : ((Xu = 0), (Gu = e))) : (Xu = 0),
                                    $a();
                            })(e, t, n, r);
                    } finally {
                        (Nu.transition = a), (bt = r);
                    }
                    return null;
                }
                function Ss() {
                    if (null !== Yu) {
                        var e = wt(Zu),
                            t = Nu.transition,
                            n = bt;
                        try {
                            if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Yu)) var r = !1;
                            else {
                                if (((e = Yu), (Yu = null), (Zu = 0), 0 != (6 & Pu))) throw Error(o(331));
                                var a = Pu;
                                for (Pu |= 4, Ji = e.current; null !== Ji; ) {
                                    var l = Ji,
                                        i = l.child;
                                    if (0 != (16 & Ji.flags)) {
                                        var u = l.deletions;
                                        if (null !== u) {
                                            for (var s = 0; s < u.length; s++) {
                                                var c = u[s];
                                                for (Ji = c; null !== Ji; ) {
                                                    var d = Ji;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            ru(8, d, l);
                                                    }
                                                    var f = d.child;
                                                    if (null !== f) (f.return = d), (Ji = f);
                                                    else
                                                        for (; null !== Ji; ) {
                                                            var p = (d = Ji).sibling,
                                                                m = d.return;
                                                            if ((lu(d), d === c)) {
                                                                Ji = null;
                                                                break;
                                                            }
                                                            if (null !== p) {
                                                                (p.return = m), (Ji = p);
                                                                break;
                                                            }
                                                            Ji = m;
                                                        }
                                                }
                                            }
                                            var h = l.alternate;
                                            if (null !== h) {
                                                var g = h.child;
                                                if (null !== g) {
                                                    h.child = null;
                                                    do {
                                                        var y = g.sibling;
                                                        (g.sibling = null), (g = y);
                                                    } while (null !== g);
                                                }
                                            }
                                            Ji = l;
                                        }
                                    }
                                    if (0 != (2064 & l.subtreeFlags) && null !== i) (i.return = l), (Ji = i);
                                    else
                                        e: for (; null !== Ji; ) {
                                            if (0 != (2048 & (l = Ji).flags))
                                                switch (l.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        ru(9, l, l.return);
                                                }
                                            var v = l.sibling;
                                            if (null !== v) {
                                                (v.return = l.return), (Ji = v);
                                                break e;
                                            }
                                            Ji = l.return;
                                        }
                                }
                                var b = e.current;
                                for (Ji = b; null !== Ji; ) {
                                    var w = (i = Ji).child;
                                    if (0 != (2064 & i.subtreeFlags) && null !== w) (w.return = i), (Ji = w);
                                    else
                                        e: for (i = b; null !== Ji; ) {
                                            if (0 != (2048 & (u = Ji).flags))
                                                try {
                                                    switch (u.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            au(9, u);
                                                    }
                                                } catch (e) {
                                                    Es(u, u.return, e);
                                                }
                                            if (u === i) {
                                                Ji = null;
                                                break e;
                                            }
                                            var k = u.sibling;
                                            if (null !== k) {
                                                (k.return = u.return), (Ji = k);
                                                break e;
                                            }
                                            Ji = u.return;
                                        }
                                }
                                if (((Pu = a), $a(), ot && 'function' == typeof ot.onPostCommitFiberRoot))
                                    try {
                                        ot.onPostCommitFiberRoot(at, e);
                                    } catch (e) {}
                                r = !0;
                            }
                            return r;
                        } finally {
                            (bt = n), (Nu.transition = t);
                        }
                    }
                    return !1;
                }
                function xs(e, t, n) {
                    (e = Ro(e, (t = mi(0, (t = ci(n, t)), 1)), 1)), (t = ts()), null !== e && (yt(e, 1, t), as(e, t));
                }
                function Es(e, t, n) {
                    if (3 === e.tag) xs(e, e, n);
                    else
                        for (; null !== t; ) {
                            if (3 === t.tag) {
                                xs(t, e, n);
                                break;
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if (
                                    'function' == typeof t.type.getDerivedStateFromError ||
                                    ('function' == typeof r.componentDidCatch && (null === qu || !qu.has(r)))
                                ) {
                                    (t = Ro(t, (e = hi(t, (e = ci(n, e)), 1)), 1)),
                                        (e = ts()),
                                        null !== t && (yt(t, 1, e), as(t, e));
                                    break;
                                }
                            }
                            t = t.return;
                        }
                }
                function Cs(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t),
                        (t = ts()),
                        (e.pingedLanes |= e.suspendedLanes & n),
                        Lu === e &&
                            (zu & n) === n &&
                            (4 === Ru || (3 === Ru && (130023424 & zu) === zu && 500 > Xe() - $u)
                                ? ps(e, 0)
                                : (Bu |= n)),
                        as(e, t);
                }
                function Ts(e, t) {
                    0 === t &&
                        (0 == (1 & e.mode) ? (t = 1) : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = ts();
                    null !== (e = Lo(e, t)) && (yt(e, t, n), as(e, n));
                }
                function Ns(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Ts(e, n);
                }
                function Ps(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(o(314));
                    }
                    null !== r && r.delete(t), Ts(e, n);
                }
                function Ls(e, t) {
                    return qe(e, t);
                }
                function Is(e, t, n, r) {
                    (this.tag = e),
                        (this.key = n),
                        (this.sibling =
                            this.child =
                            this.return =
                            this.stateNode =
                            this.type =
                            this.elementType =
                                null),
                        (this.index = 0),
                        (this.ref = null),
                        (this.pendingProps = t),
                        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                        (this.mode = r),
                        (this.subtreeFlags = this.flags = 0),
                        (this.deletions = null),
                        (this.childLanes = this.lanes = 0),
                        (this.alternate = null);
                }
                function zs(e, t, n, r) {
                    return new Is(e, t, n, r);
                }
                function Os(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent);
                }
                function Ms(e, t) {
                    var n = e.alternate;
                    return (
                        null === n
                            ? (((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                              (n.type = e.type),
                              (n.stateNode = e.stateNode),
                              (n.alternate = e),
                              (e.alternate = n))
                            : ((n.pendingProps = t),
                              (n.type = e.type),
                              (n.flags = 0),
                              (n.subtreeFlags = 0),
                              (n.deletions = null)),
                        (n.flags = 14680064 & e.flags),
                        (n.childLanes = e.childLanes),
                        (n.lanes = e.lanes),
                        (n.child = e.child),
                        (n.memoizedProps = e.memoizedProps),
                        (n.memoizedState = e.memoizedState),
                        (n.updateQueue = e.updateQueue),
                        (t = e.dependencies),
                        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
                        (n.sibling = e.sibling),
                        (n.index = e.index),
                        (n.ref = e.ref),
                        n
                    );
                }
                function Rs(e, t, n, r, a, l) {
                    var i = 2;
                    if (((r = e), 'function' == typeof e)) Os(e) && (i = 1);
                    else if ('string' == typeof e) i = 5;
                    else
                        e: switch (e) {
                            case S:
                                return Ds(n.children, a, l, t);
                            case x:
                                (i = 8), (a |= 8);
                                break;
                            case E:
                                return ((e = zs(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e;
                            case P:
                                return ((e = zs(13, n, t, a)).elementType = P), (e.lanes = l), e;
                            case L:
                                return ((e = zs(19, n, t, a)).elementType = L), (e.lanes = l), e;
                            case O:
                                return Fs(n, a, l, t);
                            default:
                                if ('object' == typeof e && null !== e)
                                    switch (e.$$typeof) {
                                        case C:
                                            i = 10;
                                            break e;
                                        case T:
                                            i = 9;
                                            break e;
                                        case N:
                                            i = 11;
                                            break e;
                                        case I:
                                            i = 14;
                                            break e;
                                        case z:
                                            (i = 16), (r = null);
                                            break e;
                                    }
                                throw Error(o(130, null == e ? e : typeof e, ''));
                        }
                    return ((t = zs(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
                }
                function Ds(e, t, n, r) {
                    return ((e = zs(7, e, r, t)).lanes = n), e;
                }
                function Fs(e, t, n, r) {
                    return ((e = zs(22, e, r, t)).elementType = O), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
                }
                function As(e, t, n) {
                    return ((e = zs(6, e, null, t)).lanes = n), e;
                }
                function Bs(e, t, n) {
                    return (
                        ((t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
                        (t.stateNode = {
                            containerInfo: e.containerInfo,
                            pendingChildren: null,
                            implementation: e.implementation,
                        }),
                        t
                    );
                }
                function js(e, t, n, r, a) {
                    (this.tag = t),
                        (this.containerInfo = e),
                        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
                        (this.timeoutHandle = -1),
                        (this.callbackNode = this.pendingContext = this.context = null),
                        (this.callbackPriority = 0),
                        (this.eventTimes = gt(0)),
                        (this.expirationTimes = gt(-1)),
                        (this.entangledLanes =
                            this.finishedLanes =
                            this.mutableReadLanes =
                            this.expiredLanes =
                            this.pingedLanes =
                            this.suspendedLanes =
                            this.pendingLanes =
                                0),
                        (this.entanglements = gt(0)),
                        (this.identifierPrefix = r),
                        (this.onRecoverableError = a),
                        (this.mutableSourceEagerHydrationData = null);
                }
                function Us(e, t, n, r, a, o, l, i, u) {
                    return (
                        (e = new js(e, t, n, i, u)),
                        1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
                        (o = zs(3, null, null, t)),
                        (e.current = o),
                        (o.stateNode = e),
                        (o.memoizedState = {
                            element: r,
                            isDehydrated: n,
                            cache: null,
                            transitions: null,
                            pendingSuspenseBoundaries: null,
                        }),
                        zo(o),
                        e
                    );
                }
                function $s(e) {
                    if (!e) return Ta;
                    e: {
                        if ($e((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(o(170));
                        var t = e;
                        do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (za(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e;
                                    }
                            }
                            t = t.return;
                        } while (null !== t);
                        throw Error(o(171));
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (za(n)) return Ra(e, n, t);
                    }
                    return t;
                }
                function Hs(e, t, n, r, a, o, l, i, u) {
                    return (
                        ((e = Us(n, r, !0, e, 0, o, 0, i, u)).context = $s(null)),
                        (n = e.current),
                        ((o = Mo((r = ts()), (a = ns(n)))).callback = null != t ? t : null),
                        Ro(n, o, a),
                        (e.current.lanes = a),
                        yt(e, a, r),
                        as(e, r),
                        e
                    );
                }
                function Vs(e, t, n, r) {
                    var a = t.current,
                        o = ts(),
                        l = ns(a);
                    return (
                        (n = $s(n)),
                        null === t.context ? (t.context = n) : (t.pendingContext = n),
                        ((t = Mo(o, l)).payload = { element: e }),
                        null !== (r = void 0 === r ? null : r) && (t.callback = r),
                        null !== (e = Ro(a, t, l)) && (rs(e, a, l, o), Do(e, a, l)),
                        l
                    );
                }
                function Ws(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
                }
                function Qs(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t;
                    }
                }
                function qs(e, t) {
                    Qs(e, t), (e = e.alternate) && Qs(e, t);
                }
                xu = function (e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Pa.current) wi = !0;
                        else {
                            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                                return (
                                    (wi = !1),
                                    (function (e, t, n) {
                                        switch (t.tag) {
                                            case 3:
                                                Li(t), mo();
                                                break;
                                            case 5:
                                                ll(t);
                                                break;
                                            case 1:
                                                za(t.type) && Da(t);
                                                break;
                                            case 4:
                                                al(t, t.stateNode.containerInfo);
                                                break;
                                            case 10:
                                                var r = t.type._context,
                                                    a = t.memoizedProps.value;
                                                Ca(vo, r._currentValue), (r._currentValue = a);
                                                break;
                                            case 13:
                                                if (null !== (r = t.memoizedState))
                                                    return null !== r.dehydrated
                                                        ? (Ca(ul, 1 & ul.current), (t.flags |= 128), null)
                                                        : 0 != (n & t.child.childLanes)
                                                        ? Ai(e, t, n)
                                                        : (Ca(ul, 1 & ul.current),
                                                          null !== (e = Wi(e, t, n)) ? e.sibling : null);
                                                Ca(ul, 1 & ul.current);
                                                break;
                                            case 19:
                                                if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                                    if (r) return Hi(e, t, n);
                                                    t.flags |= 128;
                                                }
                                                if (
                                                    (null !== (a = t.memoizedState) &&
                                                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                                                    Ca(ul, ul.current),
                                                    r)
                                                )
                                                    break;
                                                return null;
                                            case 22:
                                            case 23:
                                                return (t.lanes = 0), Ei(e, t, n);
                                        }
                                        return Wi(e, t, n);
                                    })(e, t, n)
                                );
                            wi = 0 != (131072 & e.flags);
                        }
                    else (wi = !1), ao && 0 != (1048576 & t.flags) && Ja(t, Qa, t.index);
                    switch (((t.lanes = 0), t.tag)) {
                        case 2:
                            var r = t.type;
                            Vi(e, t), (e = t.pendingProps);
                            var a = Ia(t, Na.current);
                            Eo(t, n), (a = xl(null, t, r, e, a, n));
                            var l = El();
                            return (
                                (t.flags |= 1),
                                'object' == typeof a &&
                                null !== a &&
                                'function' == typeof a.render &&
                                void 0 === a.$$typeof
                                    ? ((t.tag = 1),
                                      (t.memoizedState = null),
                                      (t.updateQueue = null),
                                      za(r) ? ((l = !0), Da(t)) : (l = !1),
                                      (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                                      zo(t),
                                      (a.updater = $o),
                                      (t.stateNode = a),
                                      (a._reactInternals = t),
                                      Qo(t, r, e, n),
                                      (t = Pi(null, t, r, !0, l, n)))
                                    : ((t.tag = 0), ao && l && eo(t), ki(null, t, a, n), (t = t.child)),
                                t
                            );
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (
                                    (Vi(e, t),
                                    (e = t.pendingProps),
                                    (r = (a = r._init)(r._payload)),
                                    (t.type = r),
                                    (a = t.tag =
                                        (function (e) {
                                            if ('function' == typeof e) return Os(e) ? 1 : 0;
                                            if (null != e) {
                                                if ((e = e.$$typeof) === N) return 11;
                                                if (e === I) return 14;
                                            }
                                            return 2;
                                        })(r)),
                                    (e = yo(r, e)),
                                    a)
                                ) {
                                    case 0:
                                        t = Ti(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Ni(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = _i(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Si(null, t, r, yo(r.type, e), n);
                                        break e;
                                }
                                throw Error(o(306, r, ''));
                            }
                            return t;
                        case 0:
                            return (
                                (r = t.type),
                                (a = t.pendingProps),
                                Ti(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
                            );
                        case 1:
                            return (
                                (r = t.type),
                                (a = t.pendingProps),
                                Ni(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
                            );
                        case 3:
                            e: {
                                if ((Li(t), null === e)) throw Error(o(387));
                                (r = t.pendingProps), (a = (l = t.memoizedState).element), Oo(e, t), Ao(t, r, null, n);
                                var i = t.memoizedState;
                                if (((r = i.element), l.isDehydrated)) {
                                    if (
                                        ((l = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: i.cache,
                                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                            transitions: i.transitions,
                                        }),
                                        (t.updateQueue.baseState = l),
                                        (t.memoizedState = l),
                                        256 & t.flags)
                                    ) {
                                        t = Ii(e, t, r, n, (a = ci(Error(o(423)), t)));
                                        break e;
                                    }
                                    if (r !== a) {
                                        t = Ii(e, t, r, n, (a = ci(Error(o(424)), t)));
                                        break e;
                                    }
                                    for (
                                        ro = sa(t.stateNode.containerInfo.firstChild),
                                            no = t,
                                            ao = !0,
                                            oo = null,
                                            n = Go(t, null, r, n),
                                            t.child = n;
                                        n;

                                    )
                                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                                } else {
                                    if ((mo(), r === a)) {
                                        t = Wi(e, t, n);
                                        break e;
                                    }
                                    ki(e, t, r, n);
                                }
                                t = t.child;
                            }
                            return t;
                        case 5:
                            return (
                                ll(t),
                                null === e && so(t),
                                (r = t.type),
                                (a = t.pendingProps),
                                (l = null !== e ? e.memoizedProps : null),
                                (i = a.children),
                                na(r, a) ? (i = null) : null !== l && na(r, l) && (t.flags |= 32),
                                Ci(e, t),
                                ki(e, t, i, n),
                                t.child
                            );
                        case 6:
                            return null === e && so(t), null;
                        case 13:
                            return Ai(e, t, n);
                        case 4:
                            return (
                                al(t, t.stateNode.containerInfo),
                                (r = t.pendingProps),
                                null === e ? (t.child = Xo(t, null, r, n)) : ki(e, t, r, n),
                                t.child
                            );
                        case 11:
                            return (
                                (r = t.type),
                                (a = t.pendingProps),
                                _i(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
                            );
                        case 7:
                            return ki(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return ki(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (
                                    ((r = t.type._context),
                                    (a = t.pendingProps),
                                    (l = t.memoizedProps),
                                    (i = a.value),
                                    Ca(vo, r._currentValue),
                                    (r._currentValue = i),
                                    null !== l)
                                )
                                    if (ir(l.value, i)) {
                                        if (l.children === a.children && !Pa.current) {
                                            t = Wi(e, t, n);
                                            break e;
                                        }
                                    } else
                                        for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                                            var u = l.dependencies;
                                            if (null !== u) {
                                                i = l.child;
                                                for (var s = u.firstContext; null !== s; ) {
                                                    if (s.context === r) {
                                                        if (1 === l.tag) {
                                                            (s = Mo(-1, n & -n)).tag = 2;
                                                            var c = l.updateQueue;
                                                            if (null !== c) {
                                                                var d = (c = c.shared).pending;
                                                                null === d
                                                                    ? (s.next = s)
                                                                    : ((s.next = d.next), (d.next = s)),
                                                                    (c.pending = s);
                                                            }
                                                        }
                                                        (l.lanes |= n),
                                                            null !== (s = l.alternate) && (s.lanes |= n),
                                                            xo(l.return, n, t),
                                                            (u.lanes |= n);
                                                        break;
                                                    }
                                                    s = s.next;
                                                }
                                            } else if (10 === l.tag) i = l.type === t.type ? null : l.child;
                                            else if (18 === l.tag) {
                                                if (null === (i = l.return)) throw Error(o(341));
                                                (i.lanes |= n),
                                                    null !== (u = i.alternate) && (u.lanes |= n),
                                                    xo(i, n, t),
                                                    (i = l.sibling);
                                            } else i = l.child;
                                            if (null !== i) i.return = l;
                                            else
                                                for (i = l; null !== i; ) {
                                                    if (i === t) {
                                                        i = null;
                                                        break;
                                                    }
                                                    if (null !== (l = i.sibling)) {
                                                        (l.return = i.return), (i = l);
                                                        break;
                                                    }
                                                    i = i.return;
                                                }
                                            l = i;
                                        }
                                ki(e, t, a.children, n), (t = t.child);
                            }
                            return t;
                        case 9:
                            return (
                                (a = t.type),
                                (r = t.pendingProps.children),
                                Eo(t, n),
                                (r = r((a = Co(a)))),
                                (t.flags |= 1),
                                ki(e, t, r, n),
                                t.child
                            );
                        case 14:
                            return (a = yo((r = t.type), t.pendingProps)), Si(e, t, r, (a = yo(r.type, a)), n);
                        case 15:
                            return xi(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return (
                                (r = t.type),
                                (a = t.pendingProps),
                                (a = t.elementType === r ? a : yo(r, a)),
                                Vi(e, t),
                                (t.tag = 1),
                                za(r) ? ((e = !0), Da(t)) : (e = !1),
                                Eo(t, n),
                                Vo(t, r, a),
                                Qo(t, r, a, n),
                                Pi(null, t, r, !0, e, n)
                            );
                        case 19:
                            return Hi(e, t, n);
                        case 22:
                            return Ei(e, t, n);
                    }
                    throw Error(o(156, t.tag));
                };
                var Ks =
                    'function' == typeof reportError
                        ? reportError
                        : function (e) {
                              console.error(e);
                          };
                function Ys(e) {
                    this._internalRoot = e;
                }
                function Zs(e) {
                    this._internalRoot = e;
                }
                function Xs(e) {
                    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
                }
                function Gs(e) {
                    return !(
                        !e ||
                        (1 !== e.nodeType &&
                            9 !== e.nodeType &&
                            11 !== e.nodeType &&
                            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
                    );
                }
                function Js() {}
                function ec(e, t, n, r, a) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var l = o;
                        if ('function' == typeof a) {
                            var i = a;
                            a = function () {
                                var e = Ws(l);
                                i.call(e);
                            };
                        }
                        Vs(t, l, e, a);
                    } else
                        l = (function (e, t, n, r, a) {
                            if (a) {
                                if ('function' == typeof r) {
                                    var o = r;
                                    r = function () {
                                        var e = Ws(l);
                                        o.call(e);
                                    };
                                }
                                var l = Hs(t, r, e, 0, null, !1, 0, '', Js);
                                return (
                                    (e._reactRootContainer = l),
                                    (e[ma] = l.current),
                                    $r(8 === e.nodeType ? e.parentNode : e),
                                    ds(),
                                    l
                                );
                            }
                            for (; (a = e.lastChild); ) e.removeChild(a);
                            if ('function' == typeof r) {
                                var i = r;
                                r = function () {
                                    var e = Ws(u);
                                    i.call(e);
                                };
                            }
                            var u = Us(e, 0, !1, null, 0, !1, 0, '', Js);
                            return (
                                (e._reactRootContainer = u),
                                (e[ma] = u.current),
                                $r(8 === e.nodeType ? e.parentNode : e),
                                ds(function () {
                                    Vs(t, u, n, r);
                                }),
                                u
                            );
                        })(n, t, e, a, r);
                    return Ws(l);
                }
                (Zs.prototype.render = Ys.prototype.render =
                    function (e) {
                        var t = this._internalRoot;
                        if (null === t) throw Error(o(409));
                        Vs(e, t, null, null);
                    }),
                    (Zs.prototype.unmount = Ys.prototype.unmount =
                        function () {
                            var e = this._internalRoot;
                            if (null !== e) {
                                this._internalRoot = null;
                                var t = e.containerInfo;
                                ds(function () {
                                    Vs(null, e, null, null);
                                }),
                                    (t[ma] = null);
                            }
                        }),
                    (Zs.prototype.unstable_scheduleHydration = function (e) {
                        if (e) {
                            var t = xt();
                            e = { blockedOn: null, target: e, priority: t };
                            for (var n = 0; n < Ot.length && 0 !== t && t < Ot[n].priority; n++);
                            Ot.splice(n, 0, e), 0 === n && Ft(e);
                        }
                    }),
                    (kt = function (e) {
                        switch (e.tag) {
                            case 3:
                                var t = e.stateNode;
                                if (t.current.memoizedState.isDehydrated) {
                                    var n = dt(t.pendingLanes);
                                    0 !== n && (vt(t, 1 | n), as(t, Xe()), 0 == (6 & Pu) && ((Hu = Xe() + 500), $a()));
                                }
                                break;
                            case 13:
                                ds(function () {
                                    var t = Lo(e, 1);
                                    if (null !== t) {
                                        var n = ts();
                                        rs(t, e, 1, n);
                                    }
                                }),
                                    qs(e, 1);
                        }
                    }),
                    (_t = function (e) {
                        if (13 === e.tag) {
                            var t = Lo(e, 134217728);
                            if (null !== t) rs(t, e, 134217728, ts());
                            qs(e, 134217728);
                        }
                    }),
                    (St = function (e) {
                        if (13 === e.tag) {
                            var t = ns(e),
                                n = Lo(e, t);
                            if (null !== n) rs(n, e, t, ts());
                            qs(e, t);
                        }
                    }),
                    (xt = function () {
                        return bt;
                    }),
                    (Et = function (e, t) {
                        var n = bt;
                        try {
                            return (bt = e), t();
                        } finally {
                            bt = n;
                        }
                    }),
                    (_e = function (e, t, n) {
                        switch (t) {
                            case 'input':
                                if ((G(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                                    for (n = e; n.parentNode; ) n = n.parentNode;
                                    for (
                                        n = n.querySelectorAll(
                                            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
                                        ),
                                            t = 0;
                                        t < n.length;
                                        t++
                                    ) {
                                        var r = n[t];
                                        if (r !== e && r.form === e.form) {
                                            var a = ka(r);
                                            if (!a) throw Error(o(90));
                                            q(r), G(r, a);
                                        }
                                    }
                                }
                                break;
                            case 'textarea':
                                oe(e, n);
                                break;
                            case 'select':
                                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
                        }
                    }),
                    (Ne = cs),
                    (Pe = ds);
                var tc = { usingClientEntryPoint: !1, Events: [ba, wa, ka, Ce, Te, cs] },
                    nc = {
                        findFiberByHostInstance: va,
                        bundleType: 0,
                        version: '18.2.0',
                        rendererPackageName: 'react-dom',
                    },
                    rc = {
                        bundleType: nc.bundleType,
                        version: nc.version,
                        rendererPackageName: nc.rendererPackageName,
                        rendererConfig: nc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = We(e)) ? null : e.stateNode;
                        },
                        findFiberByHostInstance:
                            nc.findFiberByHostInstance ||
                            function () {
                                return null;
                            },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
                    };
                if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ac.isDisabled && ac.supportsFiber)
                        try {
                            (at = ac.inject(rc)), (ot = ac);
                        } catch (ce) {}
                }
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
                    (t.createPortal = function (e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        if (!Xs(t)) throw Error(o(200));
                        return (function (e, t, n) {
                            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                            return {
                                $$typeof: _,
                                key: null == r ? null : '' + r,
                                children: e,
                                containerInfo: t,
                                implementation: n,
                            };
                        })(e, t, null, n);
                    }),
                    (t.createRoot = function (e, t) {
                        if (!Xs(e)) throw Error(o(299));
                        var n = !1,
                            r = '',
                            a = Ks;
                        return (
                            null != t &&
                                (!0 === t.unstable_strictMode && (n = !0),
                                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
                            (t = Us(e, 1, !1, null, 0, n, 0, r, a)),
                            (e[ma] = t.current),
                            $r(8 === e.nodeType ? e.parentNode : e),
                            new Ys(t)
                        );
                    }),
                    (t.findDOMNode = function (e) {
                        if (null == e) return null;
                        if (1 === e.nodeType) return e;
                        var t = e._reactInternals;
                        if (void 0 === t) {
                            if ('function' == typeof e.render) throw Error(o(188));
                            throw ((e = Object.keys(e).join(',')), Error(o(268, e)));
                        }
                        return (e = null === (e = We(t)) ? null : e.stateNode);
                    }),
                    (t.flushSync = function (e) {
                        return ds(e);
                    }),
                    (t.hydrate = function (e, t, n) {
                        if (!Gs(t)) throw Error(o(200));
                        return ec(null, e, t, !0, n);
                    }),
                    (t.hydrateRoot = function (e, t, n) {
                        if (!Xs(e)) throw Error(o(405));
                        var r = (null != n && n.hydratedSources) || null,
                            a = !1,
                            l = '',
                            i = Ks;
                        if (
                            (null != n &&
                                (!0 === n.unstable_strictMode && (a = !0),
                                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
                            (t = Hs(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
                            (e[ma] = t.current),
                            $r(e),
                            r)
                        )
                            for (e = 0; e < r.length; e++)
                                (a = (a = (n = r[e])._getVersion)(n._source)),
                                    null == t.mutableSourceEagerHydrationData
                                        ? (t.mutableSourceEagerHydrationData = [n, a])
                                        : t.mutableSourceEagerHydrationData.push(n, a);
                        return new Zs(t);
                    }),
                    (t.render = function (e, t, n) {
                        if (!Gs(t)) throw Error(o(200));
                        return ec(null, e, t, !1, n);
                    }),
                    (t.unmountComponentAtNode = function (e) {
                        if (!Gs(e)) throw Error(o(40));
                        return (
                            !!e._reactRootContainer &&
                            (ds(function () {
                                ec(null, null, e, !1, function () {
                                    (e._reactRootContainer = null), (e[ma] = null);
                                });
                            }),
                            !0)
                        );
                    }),
                    (t.unstable_batchedUpdates = cs),
                    (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                        if (!Gs(n)) throw Error(o(200));
                        if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                        return ec(e, t, n, !1, r);
                    }),
                    (t.version = '18.2.0-next-9e3b772b8-20220608');
            },
            745: (e, t, n) => {
                var r = n(935);
                (t.s = r.createRoot), r.hydrateRoot;
            },
            935: (e, t, n) => {
                !(function e() {
                    if (
                        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
                    )
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                        } catch (e) {
                            console.error(e);
                        }
                })(),
                    (e.exports = n(448));
            },
            251: (e, t, n) => {
                var r = n(294),
                    a = Symbol.for('react.element'),
                    o = Symbol.for('react.fragment'),
                    l = Object.prototype.hasOwnProperty,
                    i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = { key: !0, ref: !0, __self: !0, __source: !0 };
                function s(e, t, n) {
                    var r,
                        o = {},
                        s = null,
                        c = null;
                    for (r in (void 0 !== n && (s = '' + n),
                    void 0 !== t.key && (s = '' + t.key),
                    void 0 !== t.ref && (c = t.ref),
                    t))
                        l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
                    return { $$typeof: a, type: e, key: s, ref: c, props: o, _owner: i.current };
                }
                (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
            },
            408: (e, t) => {
                var n = Symbol.for('react.element'),
                    r = Symbol.for('react.portal'),
                    a = Symbol.for('react.fragment'),
                    o = Symbol.for('react.strict_mode'),
                    l = Symbol.for('react.profiler'),
                    i = Symbol.for('react.provider'),
                    u = Symbol.for('react.context'),
                    s = Symbol.for('react.forward_ref'),
                    c = Symbol.for('react.suspense'),
                    d = Symbol.for('react.memo'),
                    f = Symbol.for('react.lazy'),
                    p = Symbol.iterator;
                var m = {
                        isMounted: function () {
                            return !1;
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {},
                    },
                    h = Object.assign,
                    g = {};
                function y(e, t, n) {
                    (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || m);
                }
                function v() {}
                function b(e, t, n) {
                    (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || m);
                }
                (y.prototype.isReactComponent = {}),
                    (y.prototype.setState = function (e, t) {
                        if ('object' != typeof e && 'function' != typeof e && null != e)
                            throw Error(
                                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
                            );
                        this.updater.enqueueSetState(this, e, t, 'setState');
                    }),
                    (y.prototype.forceUpdate = function (e) {
                        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
                    }),
                    (v.prototype = y.prototype);
                var w = (b.prototype = new v());
                (w.constructor = b), h(w, y.prototype), (w.isPureReactComponent = !0);
                var k = Array.isArray,
                    _ = Object.prototype.hasOwnProperty,
                    S = { current: null },
                    x = { key: !0, ref: !0, __self: !0, __source: !0 };
                function E(e, t, r) {
                    var a,
                        o = {},
                        l = null,
                        i = null;
                    if (null != t)
                        for (a in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = '' + t.key), t))
                            _.call(t, a) && !x.hasOwnProperty(a) && (o[a] = t[a]);
                    var u = arguments.length - 2;
                    if (1 === u) o.children = r;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        o.children = s;
                    }
                    if (e && e.defaultProps) for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
                    return { $$typeof: n, type: e, key: l, ref: i, props: o, _owner: S.current };
                }
                function C(e) {
                    return 'object' == typeof e && null !== e && e.$$typeof === n;
                }
                var T = /\/+/g;
                function N(e, t) {
                    return 'object' == typeof e && null !== e && null != e.key
                        ? (function (e) {
                              var t = { '=': '=0', ':': '=2' };
                              return (
                                  '$' +
                                  e.replace(/[=:]/g, function (e) {
                                      return t[e];
                                  })
                              );
                          })('' + e.key)
                        : t.toString(36);
                }
                function P(e, t, a, o, l) {
                    var i = typeof e;
                    ('undefined' !== i && 'boolean' !== i) || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else
                        switch (i) {
                            case 'string':
                            case 'number':
                                u = !0;
                                break;
                            case 'object':
                                switch (e.$$typeof) {
                                    case n:
                                    case r:
                                        u = !0;
                                }
                        }
                    if (u)
                        return (
                            (l = l((u = e))),
                            (e = '' === o ? '.' + N(u, 0) : o),
                            k(l)
                                ? ((a = ''),
                                  null != e && (a = e.replace(T, '$&/') + '/'),
                                  P(l, t, a, '', function (e) {
                                      return e;
                                  }))
                                : null != l &&
                                  (C(l) &&
                                      (l = (function (e, t) {
                                          return {
                                              $$typeof: n,
                                              type: e.type,
                                              key: t,
                                              ref: e.ref,
                                              props: e.props,
                                              _owner: e._owner,
                                          };
                                      })(
                                          l,
                                          a +
                                              (!l.key || (u && u.key === l.key)
                                                  ? ''
                                                  : ('' + l.key).replace(T, '$&/') + '/') +
                                              e,
                                      )),
                                  t.push(l)),
                            1
                        );
                    if (((u = 0), (o = '' === o ? '.' : o + ':'), k(e)))
                        for (var s = 0; s < e.length; s++) {
                            var c = o + N((i = e[s]), s);
                            u += P(i, t, a, c, l);
                        }
                    else if (
                        ((c = (function (e) {
                            return null === e || 'object' != typeof e
                                ? null
                                : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
                                ? e
                                : null;
                        })(e)),
                        'function' == typeof c)
                    )
                        for (e = c.call(e), s = 0; !(i = e.next()).done; )
                            u += P((i = i.value), t, a, (c = o + N(i, s++)), l);
                    else if ('object' === i)
                        throw (
                            ((t = String(e)),
                            Error(
                                'Objects are not valid as a React child (found: ' +
                                    ('[object Object]' === t
                                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                                        : t) +
                                    '). If you meant to render a collection of children, use an array instead.',
                            ))
                        );
                    return u;
                }
                function L(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return (
                        P(e, r, '', '', function (e) {
                            return t.call(n, e, a++);
                        }),
                        r
                    );
                }
                function I(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(
                            function (t) {
                                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
                            },
                            function (t) {
                                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
                            },
                        ),
                            -1 === e._status && ((e._status = 0), (e._result = t));
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result;
                }
                var z = { current: null },
                    O = { transition: null },
                    M = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: O, ReactCurrentOwner: S };
                (t.Children = {
                    map: L,
                    forEach: function (e, t, n) {
                        L(
                            e,
                            function () {
                                t.apply(this, arguments);
                            },
                            n,
                        );
                    },
                    count: function (e) {
                        var t = 0;
                        return (
                            L(e, function () {
                                t++;
                            }),
                            t
                        );
                    },
                    toArray: function (e) {
                        return (
                            L(e, function (e) {
                                return e;
                            }) || []
                        );
                    },
                    only: function (e) {
                        if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.');
                        return e;
                    },
                }),
                    (t.Component = y),
                    (t.Fragment = a),
                    (t.Profiler = l),
                    (t.PureComponent = b),
                    (t.StrictMode = o),
                    (t.Suspense = c),
                    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
                    (t.cloneElement = function (e, t, r) {
                        if (null == e)
                            throw Error(
                                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                                    e +
                                    '.',
                            );
                        var a = h({}, e.props),
                            o = e.key,
                            l = e.ref,
                            i = e._owner;
                        if (null != t) {
                            if (
                                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                                void 0 !== t.key && (o = '' + t.key),
                                e.type && e.type.defaultProps)
                            )
                                var u = e.type.defaultProps;
                            for (s in t)
                                _.call(t, s) &&
                                    !x.hasOwnProperty(s) &&
                                    (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
                        }
                        var s = arguments.length - 2;
                        if (1 === s) a.children = r;
                        else if (1 < s) {
                            u = Array(s);
                            for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
                            a.children = u;
                        }
                        return { $$typeof: n, type: e.type, key: o, ref: l, props: a, _owner: i };
                    }),
                    (t.createContext = function (e) {
                        return (
                            ((e = {
                                $$typeof: u,
                                _currentValue: e,
                                _currentValue2: e,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null,
                                _defaultValue: null,
                                _globalName: null,
                            }).Provider = { $$typeof: i, _context: e }),
                            (e.Consumer = e)
                        );
                    }),
                    (t.createElement = E),
                    (t.createFactory = function (e) {
                        var t = E.bind(null, e);
                        return (t.type = e), t;
                    }),
                    (t.createRef = function () {
                        return { current: null };
                    }),
                    (t.forwardRef = function (e) {
                        return { $$typeof: s, render: e };
                    }),
                    (t.isValidElement = C),
                    (t.lazy = function (e) {
                        return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: I };
                    }),
                    (t.memo = function (e, t) {
                        return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
                    }),
                    (t.startTransition = function (e) {
                        var t = O.transition;
                        O.transition = {};
                        try {
                            e();
                        } finally {
                            O.transition = t;
                        }
                    }),
                    (t.unstable_act = function () {
                        throw Error('act(...) is not supported in production builds of React.');
                    }),
                    (t.useCallback = function (e, t) {
                        return z.current.useCallback(e, t);
                    }),
                    (t.useContext = function (e) {
                        return z.current.useContext(e);
                    }),
                    (t.useDebugValue = function () {}),
                    (t.useDeferredValue = function (e) {
                        return z.current.useDeferredValue(e);
                    }),
                    (t.useEffect = function (e, t) {
                        return z.current.useEffect(e, t);
                    }),
                    (t.useId = function () {
                        return z.current.useId();
                    }),
                    (t.useImperativeHandle = function (e, t, n) {
                        return z.current.useImperativeHandle(e, t, n);
                    }),
                    (t.useInsertionEffect = function (e, t) {
                        return z.current.useInsertionEffect(e, t);
                    }),
                    (t.useLayoutEffect = function (e, t) {
                        return z.current.useLayoutEffect(e, t);
                    }),
                    (t.useMemo = function (e, t) {
                        return z.current.useMemo(e, t);
                    }),
                    (t.useReducer = function (e, t, n) {
                        return z.current.useReducer(e, t, n);
                    }),
                    (t.useRef = function (e) {
                        return z.current.useRef(e);
                    }),
                    (t.useState = function (e) {
                        return z.current.useState(e);
                    }),
                    (t.useSyncExternalStore = function (e, t, n) {
                        return z.current.useSyncExternalStore(e, t, n);
                    }),
                    (t.useTransition = function () {
                        return z.current.useTransition();
                    }),
                    (t.version = '18.2.0');
            },
            294: (e, t, n) => {
                e.exports = n(408);
            },
            893: (e, t, n) => {
                e.exports = n(251);
            },
            53: (e, t) => {
                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n; ) {
                        var r = (n - 1) >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        (e[r] = t), (e[n] = a), (n = r);
                    }
                }
                function r(e) {
                    return 0 === e.length ? null : e[0];
                }
                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
                            var i = 2 * (r + 1) - 1,
                                u = e[i],
                                s = i + 1,
                                c = e[s];
                            if (0 > o(u, n))
                                s < a && 0 > o(c, u)
                                    ? ((e[r] = c), (e[s] = n), (r = s))
                                    : ((e[r] = u), (e[i] = n), (r = i));
                            else {
                                if (!(s < a && 0 > o(c, n))) break e;
                                (e[r] = c), (e[s] = n), (r = s);
                            }
                        }
                    }
                    return t;
                }
                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id;
                }
                if ('object' == typeof performance && 'function' == typeof performance.now) {
                    var l = performance;
                    t.unstable_now = function () {
                        return l.now();
                    };
                } else {
                    var i = Date,
                        u = i.now();
                    t.unstable_now = function () {
                        return i.now() - u;
                    };
                }
                var s = [],
                    c = [],
                    d = 1,
                    f = null,
                    p = 3,
                    m = !1,
                    h = !1,
                    g = !1,
                    y = 'function' == typeof setTimeout ? setTimeout : null,
                    v = 'function' == typeof clearTimeout ? clearTimeout : null,
                    b = 'undefined' != typeof setImmediate ? setImmediate : null;
                function w(e) {
                    for (var t = r(c); null !== t; ) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), (t.sortIndex = t.expirationTime), n(s, t);
                        }
                        t = r(c);
                    }
                }
                function k(e) {
                    if (((g = !1), w(e), !h))
                        if (null !== r(s)) (h = !0), O(_);
                        else {
                            var t = r(c);
                            null !== t && M(k, t.startTime - e);
                        }
                }
                function _(e, n) {
                    (h = !1), g && ((g = !1), v(C), (C = -1)), (m = !0);
                    var o = p;
                    try {
                        for (w(n), f = r(s); null !== f && (!(f.expirationTime > n) || (e && !P())); ) {
                            var l = f.callback;
                            if ('function' == typeof l) {
                                (f.callback = null), (p = f.priorityLevel);
                                var i = l(f.expirationTime <= n);
                                (n = t.unstable_now()),
                                    'function' == typeof i ? (f.callback = i) : f === r(s) && a(s),
                                    w(n);
                            } else a(s);
                            f = r(s);
                        }
                        if (null !== f) var u = !0;
                        else {
                            var d = r(c);
                            null !== d && M(k, d.startTime - n), (u = !1);
                        }
                        return u;
                    } finally {
                        (f = null), (p = o), (m = !1);
                    }
                }
                'undefined' != typeof navigator &&
                    void 0 !== navigator.scheduling &&
                    void 0 !== navigator.scheduling.isInputPending &&
                    navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var S,
                    x = !1,
                    E = null,
                    C = -1,
                    T = 5,
                    N = -1;
                function P() {
                    return !(t.unstable_now() - N < T);
                }
                function L() {
                    if (null !== E) {
                        var e = t.unstable_now();
                        N = e;
                        var n = !0;
                        try {
                            n = E(!0, e);
                        } finally {
                            n ? S() : ((x = !1), (E = null));
                        }
                    } else x = !1;
                }
                if ('function' == typeof b)
                    S = function () {
                        b(L);
                    };
                else if ('undefined' != typeof MessageChannel) {
                    var I = new MessageChannel(),
                        z = I.port2;
                    (I.port1.onmessage = L),
                        (S = function () {
                            z.postMessage(null);
                        });
                } else
                    S = function () {
                        y(L, 0);
                    };
                function O(e) {
                    (E = e), x || ((x = !0), S());
                }
                function M(e, n) {
                    C = y(function () {
                        e(t.unstable_now());
                    }, n);
                }
                (t.unstable_IdlePriority = 5),
                    (t.unstable_ImmediatePriority = 1),
                    (t.unstable_LowPriority = 4),
                    (t.unstable_NormalPriority = 3),
                    (t.unstable_Profiling = null),
                    (t.unstable_UserBlockingPriority = 2),
                    (t.unstable_cancelCallback = function (e) {
                        e.callback = null;
                    }),
                    (t.unstable_continueExecution = function () {
                        h || m || ((h = !0), O(_));
                    }),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                              )
                            : (T = 0 < e ? Math.floor(1e3 / e) : 5);
                    }),
                    (t.unstable_getCurrentPriorityLevel = function () {
                        return p;
                    }),
                    (t.unstable_getFirstCallbackNode = function () {
                        return r(s);
                    }),
                    (t.unstable_next = function (e) {
                        switch (p) {
                            case 1:
                            case 2:
                            case 3:
                                var t = 3;
                                break;
                            default:
                                t = p;
                        }
                        var n = p;
                        p = t;
                        try {
                            return e();
                        } finally {
                            p = n;
                        }
                    }),
                    (t.unstable_pauseExecution = function () {}),
                    (t.unstable_requestPaint = function () {}),
                    (t.unstable_runWithPriority = function (e, t) {
                        switch (e) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                e = 3;
                        }
                        var n = p;
                        p = e;
                        try {
                            return t();
                        } finally {
                            p = n;
                        }
                    }),
                    (t.unstable_scheduleCallback = function (e, a, o) {
                        var l = t.unstable_now();
                        switch (
                            ('object' == typeof o && null !== o
                                ? (o = 'number' == typeof (o = o.delay) && 0 < o ? l + o : l)
                                : (o = l),
                            e)
                        ) {
                            case 1:
                                var i = -1;
                                break;
                            case 2:
                                i = 250;
                                break;
                            case 5:
                                i = 1073741823;
                                break;
                            case 4:
                                i = 1e4;
                                break;
                            default:
                                i = 5e3;
                        }
                        return (
                            (e = {
                                id: d++,
                                callback: a,
                                priorityLevel: e,
                                startTime: o,
                                expirationTime: (i = o + i),
                                sortIndex: -1,
                            }),
                            o > l
                                ? ((e.sortIndex = o),
                                  n(c, e),
                                  null === r(s) && e === r(c) && (g ? (v(C), (C = -1)) : (g = !0), M(k, o - l)))
                                : ((e.sortIndex = i), n(s, e), h || m || ((h = !0), O(_))),
                            e
                        );
                    }),
                    (t.unstable_shouldYield = P),
                    (t.unstable_wrapCallback = function (e) {
                        var t = p;
                        return function () {
                            var n = p;
                            p = t;
                            try {
                                return e.apply(this, arguments);
                            } finally {
                                p = n;
                            }
                        };
                    });
            },
            840: (e, t, n) => {
                e.exports = n(53);
            },
            379: (e) => {
                var t = [];
                function n(e) {
                    for (var n = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === e) {
                            n = r;
                            break;
                        }
                    return n;
                }
                function r(e, r) {
                    for (var o = {}, l = [], i = 0; i < e.length; i++) {
                        var u = e[i],
                            s = r.base ? u[0] + r.base : u[0],
                            c = o[s] || 0,
                            d = ''.concat(s, ' ').concat(c);
                        o[s] = c + 1;
                        var f = n(d),
                            p = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] };
                        if (-1 !== f) t[f].references++, t[f].updater(p);
                        else {
                            var m = a(p, r);
                            (r.byIndex = i), t.splice(i, 0, { identifier: d, updater: m, references: 1 });
                        }
                        l.push(d);
                    }
                    return l;
                }
                function a(e, t) {
                    var n = t.domAPI(t);
                    n.update(e);
                    return function (t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap &&
                                t.supports === e.supports &&
                                t.layer === e.layer
                            )
                                return;
                            n.update((e = t));
                        } else n.remove();
                    };
                }
                e.exports = function (e, a) {
                    var o = r((e = e || []), (a = a || {}));
                    return function (e) {
                        e = e || [];
                        for (var l = 0; l < o.length; l++) {
                            var i = n(o[l]);
                            t[i].references--;
                        }
                        for (var u = r(e, a), s = 0; s < o.length; s++) {
                            var c = n(o[s]);
                            0 === t[c].references && (t[c].updater(), t.splice(c, 1));
                        }
                        o = u;
                    };
                };
            },
            569: (e) => {
                var t = {};
                e.exports = function (e, n) {
                    var r = (function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    })(e);
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    r.appendChild(n);
                };
            },
            216: (e) => {
                e.exports = function (e) {
                    var t = document.createElement('style');
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
                };
            },
            565: (e, t, n) => {
                e.exports = function (e) {
                    var t = n.nc;
                    t && e.setAttribute('nonce', t);
                };
            },
            795: (e) => {
                e.exports = function (e) {
                    if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
                    var t = e.insertStyleElement(e);
                    return {
                        update: function (n) {
                            !(function (e, t, n) {
                                var r = '';
                                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                                    n.media && (r += '@media '.concat(n.media, ' {'));
                                var a = void 0 !== n.layer;
                                a && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
                                    (r += n.css),
                                    a && (r += '}'),
                                    n.media && (r += '}'),
                                    n.supports && (r += '}');
                                var o = n.sourceMap;
                                o &&
                                    'undefined' != typeof btoa &&
                                    (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                                        ' */',
                                    )),
                                    t.styleTagTransform(r, e, t.options);
                            })(t, e, n);
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(t);
                        },
                    };
                };
            },
            589: (e) => {
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e));
                    }
                };
            },
            250: (e, t, n) => {
                var r = n(294);
                var a =
                        'function' == typeof Object.is
                            ? Object.is
                            : function (e, t) {
                                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                              },
                    o = r.useState,
                    l = r.useEffect,
                    i = r.useLayoutEffect,
                    u = r.useDebugValue;
                function s(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !a(e, n);
                    } catch (e) {
                        return !0;
                    }
                }
                var c =
                    'undefined' == typeof window ||
                    void 0 === window.document ||
                    void 0 === window.document.createElement
                        ? function (e, t) {
                              return t();
                          }
                        : function (e, t) {
                              var n = t(),
                                  r = o({ inst: { value: n, getSnapshot: t } }),
                                  a = r[0].inst,
                                  c = r[1];
                              return (
                                  i(
                                      function () {
                                          (a.value = n), (a.getSnapshot = t), s(a) && c({ inst: a });
                                      },
                                      [e, n, t],
                                  ),
                                  l(
                                      function () {
                                          return (
                                              s(a) && c({ inst: a }),
                                              e(function () {
                                                  s(a) && c({ inst: a });
                                              })
                                          );
                                      },
                                      [e],
                                  ),
                                  u(n),
                                  n
                              );
                          };
                t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
            },
            139: (e, t, n) => {
                var r = n(294),
                    a = n(688);
                var o =
                        'function' == typeof Object.is
                            ? Object.is
                            : function (e, t) {
                                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                              },
                    l = a.useSyncExternalStore,
                    i = r.useRef,
                    u = r.useEffect,
                    s = r.useMemo,
                    c = r.useDebugValue;
                t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
                    var d = i(null);
                    if (null === d.current) {
                        var f = { hasValue: !1, value: null };
                        d.current = f;
                    } else f = d.current;
                    d = s(
                        function () {
                            function e(e) {
                                if (!u) {
                                    if (((u = !0), (l = e), (e = r(e)), void 0 !== a && f.hasValue)) {
                                        var t = f.value;
                                        if (a(t, e)) return (i = t);
                                    }
                                    return (i = e);
                                }
                                if (((t = i), o(l, e))) return t;
                                var n = r(e);
                                return void 0 !== a && a(t, n) ? t : ((l = e), (i = n));
                            }
                            var l,
                                i,
                                u = !1,
                                s = void 0 === n ? null : n;
                            return [
                                function () {
                                    return e(t());
                                },
                                null === s
                                    ? void 0
                                    : function () {
                                          return e(s());
                                      },
                            ];
                        },
                        [t, n, r, a],
                    );
                    var p = l(e, d[0], d[1]);
                    return (
                        u(
                            function () {
                                (f.hasValue = !0), (f.value = p);
                            },
                            [p],
                        ),
                        c(p),
                        p
                    );
                };
            },
            688: (e, t, n) => {
                e.exports = n(250);
            },
            798: (e, t, n) => {
                e.exports = n(139);
            },
            283: (e, t, n) => {
                e.exports = n.p + '7c365dca831ccd4122ac.woff2';
            },
        },
        t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = (t[r] = { id: r, exports: {} });
        return e[r](o, o.exports, n), o.exports;
    }
    (n.m = e),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (() => {
            var e;
            n.g.importScripts && (e = n.g.location + '');
            var t = n.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script');
                if (r.length) for (var a = r.length - 1; a > -1 && !e; ) e = r[a--].src;
            }
            if (!e) throw new Error('Automatic publicPath is not supported in this browser');
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (n.p = e);
        })(),
        (n.b = document.baseURI || self.location.href),
        (n.nc = void 0),
        (() => {
            var e = {};
            n.r(e),
                n.d(e, {
                    createCategory: () => H,
                    createTodo: () => Q,
                    deleteCategory: () => W,
                    deleteTodo: () => K,
                    getTodoStore: () => $,
                    log: () => Y,
                    updateCategory: () => V,
                    updateTodo: () => q,
                });
            var t = {};
            n.r(t), n.d(t, { error: () => te, info: () => J, warn: () => ee });
            var r = {};
            n.r(r), n.d(r, { clear: () => oe, get: () => ne, remove: () => ae, set: () => re });
            var a = {};
            n.r(a),
                n.d(a, {
                    joyfullyGilling: () => St,
                    notifyError: () => bt,
                    notifyInfo: () => wt,
                    notifyWarning: () => kt,
                    vibrate: () => gt,
                });
            var o = n(294),
                l = n(745);
            function i(e) {
                var t,
                    n,
                    r = '';
                if ('string' == typeof e || 'number' == typeof e) r += e;
                else if ('object' == typeof e)
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (n = i(e[t])) && (r && (r += ' '), (r += n));
                    else for (t in e) e[t] && (r && (r += ' '), (r += t));
                return r;
            }
            const u = function () {
                    for (var e, t, n = 0, r = ''; n < arguments.length; )
                        (e = arguments[n++]) && (t = i(e)) && (r && (r += ' '), (r += t));
                    return r;
                },
                s = (e) => 'number' == typeof e && !isNaN(e),
                c = (e) => 'string' == typeof e,
                d = (e) => 'function' == typeof e,
                f = (e) => (c(e) || d(e) ? e : null),
                p = (e) => (0, o.isValidElement)(e) || c(e) || d(e) || s(e);
            function m(e) {
                let { enter: t, exit: n, appendPosition: r = !1, collapse: a = !0, collapseDuration: l = 300 } = e;
                return function (e) {
                    let { children: i, position: u, preventExitTransition: s, done: c, nodeRef: d, isIn: f } = e;
                    const p = r ? `${t}--${u}` : t,
                        m = r ? `${n}--${u}` : n,
                        h = (0, o.useRef)(0);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            const e = d.current,
                                t = p.split(' '),
                                n = (r) => {
                                    r.target === d.current &&
                                        (e.dispatchEvent(new Event('d')),
                                        e.removeEventListener('animationend', n),
                                        e.removeEventListener('animationcancel', n),
                                        0 === h.current && 'animationcancel' !== r.type && e.classList.remove(...t));
                                };
                            e.classList.add(...t),
                                e.addEventListener('animationend', n),
                                e.addEventListener('animationcancel', n);
                        }, []),
                        (0, o.useEffect)(() => {
                            const e = d.current,
                                t = () => {
                                    e.removeEventListener('animationend', t),
                                        a
                                            ? (function (e, t, n) {
                                                  void 0 === n && (n = 300);
                                                  const { scrollHeight: r, style: a } = e;
                                                  requestAnimationFrame(() => {
                                                      (a.minHeight = 'initial'),
                                                          (a.height = r + 'px'),
                                                          (a.transition = `all ${n}ms`),
                                                          requestAnimationFrame(() => {
                                                              (a.height = '0'),
                                                                  (a.padding = '0'),
                                                                  (a.margin = '0'),
                                                                  setTimeout(t, n);
                                                          });
                                                  });
                                              })(e, c, l)
                                            : c();
                                };
                            f ||
                                (s
                                    ? t()
                                    : ((h.current = 1),
                                      (e.className += ` ${m}`),
                                      e.addEventListener('animationend', t)));
                        }, [f]),
                        o.createElement(o.Fragment, null, i)
                    );
                };
            }
            function h(e, t) {
                return null != e
                    ? {
                          content: e.content,
                          containerId: e.props.containerId,
                          id: e.props.toastId,
                          theme: e.props.theme,
                          type: e.props.type,
                          data: e.props.data || {},
                          isLoading: e.props.isLoading,
                          icon: e.props.icon,
                          status: t,
                      }
                    : {};
            }
            const g = {
                    list: new Map(),
                    emitQueue: new Map(),
                    on(e, t) {
                        return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
                    },
                    off(e, t) {
                        if (t) {
                            const n = this.list.get(e).filter((e) => e !== t);
                            return this.list.set(e, n), this;
                        }
                        return this.list.delete(e), this;
                    },
                    cancelEmit(e) {
                        const t = this.emitQueue.get(e);
                        return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
                    },
                    emit(e) {
                        this.list.has(e) &&
                            this.list.get(e).forEach((t) => {
                                const n = setTimeout(() => {
                                    t(...[].slice.call(arguments, 1));
                                }, 0);
                                this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n);
                            });
                    },
                },
                y = (e) => {
                    let { theme: t, type: n, ...r } = e;
                    return o.createElement('svg', {
                        viewBox: '0 0 24 24',
                        width: '100%',
                        height: '100%',
                        fill: 'colored' === t ? 'currentColor' : `var(--toastify-icon-color-${n})`,
                        ...r,
                    });
                },
                v = {
                    info: function (e) {
                        return o.createElement(
                            y,
                            { ...e },
                            o.createElement('path', {
                                d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
                            }),
                        );
                    },
                    warning: function (e) {
                        return o.createElement(
                            y,
                            { ...e },
                            o.createElement('path', {
                                d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
                            }),
                        );
                    },
                    success: function (e) {
                        return o.createElement(
                            y,
                            { ...e },
                            o.createElement('path', {
                                d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
                            }),
                        );
                    },
                    error: function (e) {
                        return o.createElement(
                            y,
                            { ...e },
                            o.createElement('path', {
                                d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
                            }),
                        );
                    },
                    spinner: function () {
                        return o.createElement('div', { className: 'Toastify__spinner' });
                    },
                };
            function b(e) {
                const [, t] = (0, o.useReducer)((e) => e + 1, 0),
                    [n, r] = (0, o.useState)([]),
                    a = (0, o.useRef)(null),
                    l = (0, o.useRef)(new Map()).current,
                    i = (e) => -1 !== n.indexOf(e),
                    u = (0, o.useRef)({
                        toastKey: 1,
                        displayedToast: 0,
                        count: 0,
                        queue: [],
                        props: e,
                        containerId: null,
                        isToastActive: i,
                        getToast: (e) => l.get(e),
                    }).current;
                function m(e) {
                    let { containerId: t } = e;
                    const { limit: n } = u.props;
                    !n || (t && u.containerId !== t) || ((u.count -= u.queue.length), (u.queue = []));
                }
                function y(e) {
                    r((t) => (null == e ? [] : t.filter((t) => t !== e)));
                }
                function b() {
                    const { toastContent: e, toastProps: t, staleId: n } = u.queue.shift();
                    k(e, t, n);
                }
                function w(e, n) {
                    let { delay: r, staleId: i, ...m } = n;
                    if (
                        !p(e) ||
                        (function (e) {
                            return (
                                !a.current ||
                                (u.props.enableMultiContainer && e.containerId !== u.props.containerId) ||
                                (l.has(e.toastId) && null == e.updateId)
                            );
                        })(m)
                    )
                        return;
                    const { toastId: w, updateId: _, data: S } = m,
                        { props: x } = u,
                        E = () => y(w),
                        C = null == _;
                    C && u.count++;
                    const T = {
                        ...x,
                        style: x.toastStyle,
                        key: u.toastKey++,
                        ...Object.fromEntries(
                            Object.entries(m).filter((e) => {
                                let [t, n] = e;
                                return null != n;
                            }),
                        ),
                        toastId: w,
                        updateId: _,
                        data: S,
                        closeToast: E,
                        isIn: !1,
                        className: f(m.className || x.toastClassName),
                        bodyClassName: f(m.bodyClassName || x.bodyClassName),
                        progressClassName: f(m.progressClassName || x.progressClassName),
                        autoClose:
                            !m.isLoading && ((N = m.autoClose), (P = x.autoClose), !1 === N || (s(N) && N > 0) ? N : P),
                        deleteToast() {
                            const e = h(l.get(w), 'removed');
                            l.delete(w), g.emit(4, e);
                            const n = u.queue.length;
                            if (
                                ((u.count = null == w ? u.count - u.displayedToast : u.count - 1),
                                u.count < 0 && (u.count = 0),
                                n > 0)
                            ) {
                                const e = null == w ? u.props.limit : 1;
                                if (1 === n || 1 === e) u.displayedToast++, b();
                                else {
                                    const t = e > n ? n : e;
                                    u.displayedToast = t;
                                    for (let e = 0; e < t; e++) b();
                                }
                            } else t();
                        },
                    };
                    var N, P;
                    (T.iconOut = (function (e) {
                        let { theme: t, type: n, isLoading: r, icon: a } = e,
                            l = null;
                        const i = { theme: t, type: n };
                        return (
                            !1 === a ||
                                (d(a)
                                    ? (l = a(i))
                                    : (0, o.isValidElement)(a)
                                    ? (l = (0, o.cloneElement)(a, i))
                                    : c(a) || s(a)
                                    ? (l = a)
                                    : r
                                    ? (l = v.spinner())
                                    : ((e) => e in v)(n) && (l = v[n](i))),
                            l
                        );
                    })(T)),
                        d(m.onOpen) && (T.onOpen = m.onOpen),
                        d(m.onClose) && (T.onClose = m.onClose),
                        (T.closeButton = x.closeButton),
                        !1 === m.closeButton || p(m.closeButton)
                            ? (T.closeButton = m.closeButton)
                            : !0 === m.closeButton && (T.closeButton = !p(x.closeButton) || x.closeButton);
                    let L = e;
                    (0, o.isValidElement)(e) && !c(e.type)
                        ? (L = (0, o.cloneElement)(e, { closeToast: E, toastProps: T, data: S }))
                        : d(e) && (L = e({ closeToast: E, toastProps: T, data: S })),
                        x.limit && x.limit > 0 && u.count > x.limit && C
                            ? u.queue.push({ toastContent: L, toastProps: T, staleId: i })
                            : s(r)
                            ? setTimeout(() => {
                                  k(L, T, i);
                              }, r)
                            : k(L, T, i);
                }
                function k(e, t, n) {
                    const { toastId: a } = t;
                    n && l.delete(n);
                    const o = { content: e, props: t };
                    l.set(a, o),
                        r((e) => [...e, a].filter((e) => e !== n)),
                        g.emit(4, h(o, null == o.props.updateId ? 'added' : 'updated'));
                }
                return (
                    (0, o.useEffect)(
                        () => (
                            (u.containerId = e.containerId),
                            g
                                .cancelEmit(3)
                                .on(0, w)
                                .on(1, (e) => a.current && y(e))
                                .on(5, m)
                                .emit(2, u),
                            () => {
                                l.clear(), g.emit(3, u);
                            }
                        ),
                        [],
                    ),
                    (0, o.useEffect)(() => {
                        (u.props = e), (u.isToastActive = i), (u.displayedToast = n.length);
                    }),
                    {
                        getToastToRender: function (t) {
                            const n = new Map(),
                                r = Array.from(l.values());
                            return (
                                e.newestOnTop && r.reverse(),
                                r.forEach((e) => {
                                    const { position: t } = e.props;
                                    n.has(t) || n.set(t, []), n.get(t).push(e);
                                }),
                                Array.from(n, (e) => t(e[0], e[1]))
                            );
                        },
                        containerRef: a,
                        isToastActive: i,
                    }
                );
            }
            function w(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
            }
            function k(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
            }
            function _(e) {
                const [t, n] = (0, o.useState)(!1),
                    [r, a] = (0, o.useState)(!1),
                    l = (0, o.useRef)(null),
                    i = (0, o.useRef)({
                        start: 0,
                        x: 0,
                        y: 0,
                        delta: 0,
                        removalDistance: 0,
                        canCloseOnClick: !0,
                        canDrag: !1,
                        boundingRect: null,
                        didMove: !1,
                    }).current,
                    u = (0, o.useRef)(e),
                    { autoClose: s, pauseOnHover: c, closeToast: f, onClick: p, closeOnClick: m } = e;
                function h(t) {
                    if (e.draggable) {
                        'touchstart' === t.nativeEvent.type && t.nativeEvent.preventDefault(),
                            (i.didMove = !1),
                            document.addEventListener('mousemove', b),
                            document.addEventListener('mouseup', _),
                            document.addEventListener('touchmove', b),
                            document.addEventListener('touchend', _);
                        const n = l.current;
                        (i.canCloseOnClick = !0),
                            (i.canDrag = !0),
                            (i.boundingRect = n.getBoundingClientRect()),
                            (n.style.transition = ''),
                            (i.x = w(t.nativeEvent)),
                            (i.y = k(t.nativeEvent)),
                            'x' === e.draggableDirection
                                ? ((i.start = i.x), (i.removalDistance = n.offsetWidth * (e.draggablePercent / 100)))
                                : ((i.start = i.y),
                                  (i.removalDistance =
                                      n.offsetHeight *
                                      (80 === e.draggablePercent
                                          ? 1.5 * e.draggablePercent
                                          : e.draggablePercent / 100)));
                    }
                }
                function g(t) {
                    if (i.boundingRect) {
                        const { top: n, bottom: r, left: a, right: o } = i.boundingRect;
                        'touchend' !== t.nativeEvent.type &&
                        e.pauseOnHover &&
                        i.x >= a &&
                        i.x <= o &&
                        i.y >= n &&
                        i.y <= r
                            ? v()
                            : y();
                    }
                }
                function y() {
                    n(!0);
                }
                function v() {
                    n(!1);
                }
                function b(n) {
                    const r = l.current;
                    i.canDrag &&
                        r &&
                        ((i.didMove = !0),
                        t && v(),
                        (i.x = w(n)),
                        (i.y = k(n)),
                        (i.delta = 'x' === e.draggableDirection ? i.x - i.start : i.y - i.start),
                        i.start !== i.x && (i.canCloseOnClick = !1),
                        (r.style.transform = `translate${e.draggableDirection}(${i.delta}px)`),
                        (r.style.opacity = '' + (1 - Math.abs(i.delta / i.removalDistance))));
                }
                function _() {
                    document.removeEventListener('mousemove', b),
                        document.removeEventListener('mouseup', _),
                        document.removeEventListener('touchmove', b),
                        document.removeEventListener('touchend', _);
                    const t = l.current;
                    if (i.canDrag && i.didMove && t) {
                        if (((i.canDrag = !1), Math.abs(i.delta) > i.removalDistance))
                            return a(!0), void e.closeToast();
                        (t.style.transition = 'transform 0.2s, opacity 0.2s'),
                            (t.style.transform = `translate${e.draggableDirection}(0)`),
                            (t.style.opacity = '1');
                    }
                }
                (0, o.useEffect)(() => {
                    u.current = e;
                }),
                    (0, o.useEffect)(
                        () => (
                            l.current && l.current.addEventListener('d', y, { once: !0 }),
                            d(e.onOpen) && e.onOpen((0, o.isValidElement)(e.children) && e.children.props),
                            () => {
                                const e = u.current;
                                d(e.onClose) && e.onClose((0, o.isValidElement)(e.children) && e.children.props);
                            }
                        ),
                        [],
                    ),
                    (0, o.useEffect)(
                        () => (
                            e.pauseOnFocusLoss &&
                                (document.hasFocus() || v(),
                                window.addEventListener('focus', y),
                                window.addEventListener('blur', v)),
                            () => {
                                e.pauseOnFocusLoss &&
                                    (window.removeEventListener('focus', y), window.removeEventListener('blur', v));
                            }
                        ),
                        [e.pauseOnFocusLoss],
                    );
                const S = { onMouseDown: h, onTouchStart: h, onMouseUp: g, onTouchEnd: g };
                return (
                    s && c && ((S.onMouseEnter = v), (S.onMouseLeave = y)),
                    m &&
                        (S.onClick = (e) => {
                            p && p(e), i.canCloseOnClick && f();
                        }),
                    {
                        playToast: y,
                        pauseToast: v,
                        isRunning: t,
                        preventExitTransition: r,
                        toastRef: l,
                        eventHandlers: S,
                    }
                );
            }
            function S(e) {
                let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
                return o.createElement(
                    'button',
                    {
                        className: `Toastify__close-button Toastify__close-button--${n}`,
                        type: 'button',
                        onClick: (e) => {
                            e.stopPropagation(), t(e);
                        },
                        'aria-label': r,
                    },
                    o.createElement(
                        'svg',
                        { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
                        o.createElement('path', {
                            fillRule: 'evenodd',
                            d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
                        }),
                    ),
                );
            }
            function x(e) {
                let {
                    delay: t,
                    isRunning: n,
                    closeToast: r,
                    type: a = 'default',
                    hide: l,
                    className: i,
                    style: s,
                    controlledProgress: c,
                    progress: f,
                    rtl: p,
                    isIn: m,
                    theme: h,
                } = e;
                const g = l || (c && 0 === f),
                    y = {
                        ...s,
                        animationDuration: `${t}ms`,
                        animationPlayState: n ? 'running' : 'paused',
                        opacity: g ? 0 : 1,
                    };
                c && (y.transform = `scaleX(${f})`);
                const v = u(
                        'Toastify__progress-bar',
                        c ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
                        `Toastify__progress-bar-theme--${h}`,
                        `Toastify__progress-bar--${a}`,
                        { 'Toastify__progress-bar--rtl': p },
                    ),
                    b = d(i) ? i({ rtl: p, type: a, defaultClassName: v }) : u(v, i);
                return o.createElement('div', {
                    role: 'progressbar',
                    'aria-hidden': g ? 'true' : 'false',
                    'aria-label': 'notification timer',
                    className: b,
                    style: y,
                    [c && f >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
                        c && f < 1
                            ? null
                            : () => {
                                  m && r();
                              },
                });
            }
            const E = (e) => {
                    const { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: a } = _(e),
                        {
                            closeButton: l,
                            children: i,
                            autoClose: s,
                            onClick: c,
                            type: f,
                            hideProgressBar: p,
                            closeToast: m,
                            transition: h,
                            position: g,
                            className: y,
                            style: v,
                            bodyClassName: b,
                            bodyStyle: w,
                            progressClassName: k,
                            progressStyle: E,
                            updateId: C,
                            role: T,
                            progress: N,
                            rtl: P,
                            toastId: L,
                            deleteToast: I,
                            isIn: z,
                            isLoading: O,
                            iconOut: M,
                            closeOnClick: R,
                            theme: D,
                        } = e,
                        F = u(
                            'Toastify__toast',
                            `Toastify__toast-theme--${D}`,
                            `Toastify__toast--${f}`,
                            { 'Toastify__toast--rtl': P },
                            { 'Toastify__toast--close-on-click': R },
                        ),
                        A = d(y) ? y({ rtl: P, position: g, type: f, defaultClassName: F }) : u(F, y),
                        B = !!N || !s,
                        j = { closeToast: m, type: f, theme: D };
                    let U = null;
                    return (
                        !1 === l || (U = d(l) ? l(j) : (0, o.isValidElement)(l) ? (0, o.cloneElement)(l, j) : S(j)),
                        o.createElement(
                            h,
                            { isIn: z, done: I, position: g, preventExitTransition: n, nodeRef: r },
                            o.createElement(
                                'div',
                                { id: L, onClick: c, className: A, ...a, style: v, ref: r },
                                o.createElement(
                                    'div',
                                    {
                                        ...(z && { role: T }),
                                        className: d(b) ? b({ type: f }) : u('Toastify__toast-body', b),
                                        style: w,
                                    },
                                    null != M &&
                                        o.createElement(
                                            'div',
                                            {
                                                className: u('Toastify__toast-icon', {
                                                    'Toastify--animate-icon Toastify__zoom-enter': !O,
                                                }),
                                            },
                                            M,
                                        ),
                                    o.createElement('div', null, i),
                                ),
                                U,
                                o.createElement(x, {
                                    ...(C && !B ? { key: `pb-${C}` } : {}),
                                    rtl: P,
                                    theme: D,
                                    delay: s,
                                    isRunning: t,
                                    isIn: z,
                                    closeToast: m,
                                    hide: p,
                                    type: f,
                                    style: E,
                                    className: k,
                                    controlledProgress: B,
                                    progress: N || 0,
                                }),
                            ),
                        )
                    );
                },
                C = function (e, t) {
                    return (
                        void 0 === t && (t = !1),
                        {
                            enter: `Toastify--animate Toastify__${e}-enter`,
                            exit: `Toastify--animate Toastify__${e}-exit`,
                            appendPosition: t,
                        }
                    );
                },
                T = m(C('bounce', !0)),
                N =
                    (m(C('slide', !0)),
                    m(C('zoom')),
                    m(C('flip')),
                    (0, o.forwardRef)((e, t) => {
                        const { getToastToRender: n, containerRef: r, isToastActive: a } = b(e),
                            { className: l, style: i, rtl: s, containerId: c } = e;
                        function p(e) {
                            const t = u('Toastify__toast-container', `Toastify__toast-container--${e}`, {
                                'Toastify__toast-container--rtl': s,
                            });
                            return d(l) ? l({ position: e, rtl: s, defaultClassName: t }) : u(t, f(l));
                        }
                        return (
                            (0, o.useEffect)(() => {
                                t && (t.current = r.current);
                            }, []),
                            o.createElement(
                                'div',
                                { ref: r, className: 'Toastify', id: c },
                                n((e, t) => {
                                    const n = t.length ? { ...i } : { ...i, pointerEvents: 'none' };
                                    return o.createElement(
                                        'div',
                                        { className: p(e), style: n, key: `container-${e}` },
                                        t.map((e, n) => {
                                            let { content: r, props: l } = e;
                                            return o.createElement(
                                                E,
                                                {
                                                    ...l,
                                                    isIn: a(l.toastId),
                                                    style: { ...l.style, '--nth': n + 1, '--len': t.length },
                                                    key: `toast-${l.key}`,
                                                },
                                                r,
                                            );
                                        }),
                                    );
                                }),
                            )
                        );
                    }));
            (N.displayName = 'ToastContainer'),
                (N.defaultProps = {
                    position: 'top-right',
                    transition: T,
                    autoClose: 5e3,
                    closeButton: S,
                    pauseOnHover: !0,
                    pauseOnFocusLoss: !0,
                    closeOnClick: !0,
                    draggable: !0,
                    draggablePercent: 80,
                    draggableDirection: 'x',
                    role: 'alert',
                    theme: 'light',
                });
            let P,
                L = new Map(),
                I = [],
                z = 1;
            function O() {
                return '' + z++;
            }
            function M(e) {
                return e && (c(e.toastId) || s(e.toastId)) ? e.toastId : O();
            }
            function R(e, t) {
                return L.size > 0 ? g.emit(0, e, t) : I.push({ content: e, options: t }), t.toastId;
            }
            function D(e, t) {
                return { ...t, type: (t && t.type) || e, toastId: M(t) };
            }
            function F(e) {
                return (t, n) => R(t, D(e, n));
            }
            function A(e, t) {
                return R(e, D('default', t));
            }
            (A.loading = (e, t) =>
                R(
                    e,
                    D('default', {
                        isLoading: !0,
                        autoClose: !1,
                        closeOnClick: !1,
                        closeButton: !1,
                        draggable: !1,
                        ...t,
                    }),
                )),
                (A.promise = function (e, t, n) {
                    let r,
                        { pending: a, error: o, success: l } = t;
                    a && (r = c(a) ? A.loading(a, n) : A.loading(a.render, { ...n, ...a }));
                    const i = {
                            isLoading: null,
                            autoClose: null,
                            closeOnClick: null,
                            closeButton: null,
                            draggable: null,
                        },
                        u = (e, t, a) => {
                            if (null == t) return void A.dismiss(r);
                            const o = { type: e, ...i, ...n, data: a },
                                l = c(t) ? { render: t } : t;
                            return r ? A.update(r, { ...o, ...l }) : A(l.render, { ...o, ...l }), a;
                        },
                        s = d(e) ? e() : e;
                    return s.then((e) => u('success', l, e)).catch((e) => u('error', o, e)), s;
                }),
                (A.success = F('success')),
                (A.info = F('info')),
                (A.error = F('error')),
                (A.warning = F('warning')),
                (A.warn = A.warning),
                (A.dark = (e, t) => R(e, D('default', { theme: 'dark', ...t }))),
                (A.dismiss = (e) => {
                    L.size > 0 ? g.emit(1, e) : (I = I.filter((t) => null != e && t.options.toastId !== e));
                }),
                (A.clearWaitingQueue = function (e) {
                    return void 0 === e && (e = {}), g.emit(5, e);
                }),
                (A.isActive = (e) => {
                    let t = !1;
                    return (
                        L.forEach((n) => {
                            n.isToastActive && n.isToastActive(e) && (t = !0);
                        }),
                        t
                    );
                }),
                (A.update = function (e, t) {
                    void 0 === t && (t = {}),
                        setTimeout(() => {
                            const n = (function (e, t) {
                                let { containerId: n } = t;
                                const r = L.get(n || P);
                                return r && r.getToast(e);
                            })(e, t);
                            if (n) {
                                const { props: r, content: a } = n,
                                    o = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: O() };
                                o.toastId !== e && (o.staleId = e);
                                const l = o.render || a;
                                delete o.render, R(l, o);
                            }
                        }, 0);
                }),
                (A.done = (e) => {
                    A.update(e, { progress: 1 });
                }),
                (A.onChange = (e) => (
                    g.on(4, e),
                    () => {
                        g.off(4, e);
                    }
                )),
                (A.POSITION = {
                    TOP_LEFT: 'top-left',
                    TOP_RIGHT: 'top-right',
                    TOP_CENTER: 'top-center',
                    BOTTOM_LEFT: 'bottom-left',
                    BOTTOM_RIGHT: 'bottom-right',
                    BOTTOM_CENTER: 'bottom-center',
                }),
                (A.TYPE = { INFO: 'info', SUCCESS: 'success', WARNING: 'warning', ERROR: 'error', DEFAULT: 'default' }),
                g
                    .on(2, (e) => {
                        (P = e.containerId || e),
                            L.set(P, e),
                            I.forEach((e) => {
                                g.emit(0, e.content, e.options);
                            }),
                            (I = []);
                    })
                    .on(3, (e) => {
                        L.delete(e.containerId || e), 0 === L.size && g.off(0).off(1).off(5);
                    });
            const B = (e) => e.json(),
                j = (e) => ({ error: { code: 500, error: e.message, data: e } }),
                U = { 'Content-Type': 'application/json; charset=utf-8' };
            async function $() {
                return fetch('/api/get_todos').then(B).catch(j);
            }
            async function H(e) {
                return fetch('/api/create_category', { method: 'POST', body: JSON.stringify(e), headers: U })
                    .then(B)
                    .catch(j);
            }
            async function V(e) {
                return fetch('/api/update_category', { method: 'PATCH', body: JSON.stringify(e), headers: U })
                    .then(B)
                    .catch(j);
            }
            async function W(e) {
                return fetch('/api/delete_category', { method: 'DELETE', body: JSON.stringify(e), headers: U })
                    .then(B)
                    .catch(j);
            }
            async function Q(e) {
                return fetch('/api/create_todo', { method: 'POST', body: JSON.stringify(e), headers: U })
                    .then(B)
                    .catch(j);
            }
            async function q(e) {
                return fetch('/api/update_todo', { method: 'PATCH', body: JSON.stringify(e), headers: U })
                    .then(B)
                    .catch(j);
            }
            async function K(e) {
                return fetch('/api/delete_todo', { method: 'DELETE', body: JSON.stringify(e), headers: U })
                    .then(B)
                    .catch(j);
            }
            function Y(e) {
                fetch('/api/log', { method: 'POST', body: JSON.stringify(e), headers: U }).catch((t) => {
                    const { error: n } = console;
                    return n('API error:', t, e), { error: t };
                });
            }
            function Z() {
                return e;
            }
            function X(e) {
                return 'string' == typeof e;
            }
            function G(e, t) {
                const n = Z(),
                    r = X(e) ? { type: t, message: e } : { ...e, type: t };
                n.log(r);
            }
            function J(e) {
                G(e, 'info');
            }
            function ee(e) {
                G(e, 'warn');
            }
            function te(e) {
                G(e, 'error');
            }
            function ne(e) {
                return window.localStorage.getItem(e) || void 0;
            }
            function re(e, t) {
                window.localStorage.setItem(e, t);
            }
            function ae(e) {
                window.localStorage.removeItem(e);
            }
            function oe() {
                window.localStorage.clear();
            }
            var le = n(935);
            const ie = (e) => {
                    let t;
                    const n = new Set(),
                        r = (e, r) => {
                            const a = 'function' == typeof e ? e(t) : e;
                            if (!Object.is(a, t)) {
                                const e = t;
                                (t = (null != r ? r : 'object' != typeof a) ? a : Object.assign({}, t, a)),
                                    n.forEach((n) => n(t, e));
                            }
                        },
                        a = () => t,
                        o = {
                            setState: r,
                            getState: a,
                            subscribe: (e) => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn(
                                    '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
                                ),
                                    n.clear();
                            },
                        };
                    return (t = e(r, a, o)), o;
                },
                ue = (e) => (e ? ie(e) : ie);
            var se = n(798);
            const { useSyncExternalStoreWithSelector: ce } = se;
            const de = (e) => {
                    'function' != typeof e &&
                        console.warn(
                            "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
                        );
                    const t = 'function' == typeof e ? ue(e) : e,
                        n = (e, n) =>
                            (function (e, t = e.getState, n) {
                                const r = ce(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
                                return (0, o.useDebugValue)(r), r;
                            })(t, e, n);
                    return Object.assign(n, t), n;
                },
                fe = (e) => (e ? de(e) : de);
            function pe(e) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate());
            }
            const me = { filter: 'filter', category: 'category', calendar: 'calendar' },
                he = 'inbox',
                ge = 'recycleBin',
                ye = 'overdue';
            function ve(e) {
                return 'number' == typeof e && Number.isInteger(e);
            }
            function be(e) {
                return null != e;
            }
            function we(e, t, n) {
                return e >= t && e <= n;
            }
            function ke(e, t) {
                const n = Object.keys(t);
                for (let r = 0; r < n.length; r++) {
                    const a = t[n[r]],
                        [o, l] = a;
                    if (!1 === o(e)) return { error: l };
                }
                return { entity: e };
            }
            const _e = {
                icon_id: [
                    (e) => be(e.icon_id) && ve(e.icon_id),
                    'обязательное поле icon_id должно быть целочисленным числом',
                ],
                name: [
                    function (e) {
                        return !!X(e.icon_name) && we(e.icon_name.length, 5, 20);
                    },
                    'обязательное icon_name должно быть строкой',
                ],
            };
            function Se(e, t) {
                const n = (function (e) {
                    return ke(
                        (function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const { icon_id: t, icon_name: n } = e;
                            return { icon_id: t, icon_name: n };
                        })(e),
                        _e,
                    );
                })(e);
                if (!n.entity) return n;
                const { entity: r } = n;
                return !0 === t.icons.ids.includes(r.icon_id)
                    ? { error: 'Нарушение уникальностиидентификатора icons.icon_id!' }
                    : Object.values(t.icons.byId).find((e) => e.icon_name === r.icon_name && e.icon_id !== r.icon_id)
                    ? { error: 'Нарушение уникальности имени иконки в  icons!' }
                    : { entity: r };
            }
            function xe(e) {
                const t = ct.getState(),
                    { entity: n, error: r } = Se(e, t);
                if (n) {
                    if (!0 === t.icons.ids.includes(n.icon_id))
                        return { error: { code: 500, error: 'Нарушение уникальностиидентификатора icons', data: e } };
                    const r = { ...t };
                    return (
                        (r.icons.byId = { ...t.icons.byId, [n.icon_id]: n }),
                        (r.icons.ids = [...t.icons.ids, n.icon_id]),
                        ct.setState(r),
                        { result: n }
                    );
                }
                return { error: { code: 500, error: r, data: e } };
            }
            const Ee = {
                status_id: [
                    (e) => be(e.status_id) && ve(e.status_id),
                    'обязательное поле status_id должно быть целочисленным числом',
                ],
                status: [
                    function (e) {
                        return !!X(e.status) && we(e.status.length, 3, 20);
                    },
                    'Длина названия статуса должна быть более 3 символов и не превышать 20 символов',
                ],
                color: [
                    (e) => X(e.color) && 7 === e.color.length && '#' === e.color[0],
                    'обязательное поле color должно быть строкой из 7 символов',
                ],
            };
            function Ce(e, t) {
                const n = (function (e) {
                    return ke(
                        (function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const { status_id: t, status: n, color: r } = e;
                            return { status_id: t, status: n, color: r };
                        })(e),
                        Ee,
                    );
                })(e);
                if (!n.entity) return n;
                const { entity: r } = n;
                return Object.values(t.statuses.byId).find((t) => t.status === e.status && t.status_id !== e.status_id)
                    ? { error: `Статус с названием ${r.status} уже существует! Название должно быть уникальным.` }
                    : { entity: r };
            }
            function Te(e) {
                const t = ct.getState(),
                    { entity: n, error: r } = Ce(e, t);
                if (n) {
                    if (!0 === t.statuses.ids.includes(n.status_id))
                        return {
                            error: { code: 500, error: 'Нарушение уникальностиидентификатора statuses!', data: e },
                        };
                    const r = { ...t };
                    return (
                        (r.statuses.byId = { ...t.statuses.byId, [n.status_id]: n }),
                        (r.statuses.ids = [...t.statuses.ids, n.status_id]),
                        ct.setState(r),
                        { result: n }
                    );
                }
                return { error: { code: 500, error: r, data: e } };
            }
            const Ne = [
                    (e) => be(e.category_id) && ve(e.category_id),
                    'Category обязан иметь category_id целым числомr',
                ],
                Pe = [
                    function (e) {
                        return !!X(e.category) && we(e.category.length, 3, 20);
                    },
                    'Длина названия категории должна быть более 3 символов и не превышать 20 символов',
                ],
                Le = [(e) => be(e.icon_id) && ve(e.icon_id), 'Category обязан иметь icon_id целым числом'];
            function Ie() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const { category_id: t, category: n, icon_id: r } = e;
                return { category_id: t, category: n, icon_id: r };
            }
            const ze = { category_id: Ne, category: Pe, icon_id: Le };
            function Oe(e, t) {
                const n = (function (e) {
                    return ke(Ie(e), ze);
                })(e);
                if (!n.entity) return n;
                const { entity: r } = n;
                return !1 === t.icons.ids.includes(r.icon_id)
                    ? { error: 'Идентификатор иконки отсутствует в справочнике!' }
                    : Object.values(t.categories.byId).find(
                          (e) => e.category === r.category && e.category_id !== r.category_id,
                      )
                    ? { error: `Категория с названием ${r.category} уже существует! Название должно быть уникальным.` }
                    : { entity: r };
            }
            function Me(e) {
                const t = ct.getState(),
                    { entity: n, error: r } = Oe(e, t);
                if (n) {
                    if (!0 === t.categories.ids.includes(n.category_id))
                        return {
                            error: { code: 500, error: 'Нарушение уникальностиидентификатора categories', data: e },
                        };
                    const r = { ...t };
                    return (
                        (r.categories.byId = { ...t.categories.byId, [n.category_id]: n }),
                        (r.categories.ids = [...t.categories.ids, n.category_id]),
                        ct.setState(r),
                        { result: n }
                    );
                }
                return { error: { code: 500, error: r, data: e } };
            }
            function Re(e) {
                const t = ct.getState(),
                    { entity: n, error: r } = Oe(e, t);
                if (n) {
                    const e = { ...t };
                    return (
                        (e.categories.byId[n.category_id] = { ...t.categories.byId[n.category_id], ...n }),
                        ct.setState(e),
                        { result: n }
                    );
                }
                return { error: { code: 500, error: r } };
            }
            function De(e) {
                const t = ct.getState(),
                    { [e]: n, ...r } = t.categories.byId;
                if (Object.keys(t.todos.idsByCategoryId).includes(String(e)))
                    return {
                        error: {
                            code: 500,
                            error: `Нельзя удалить категорию "${n.category}": в этой категории есть задачи!`,
                            data: e,
                        },
                    };
                const a = { ...t };
                a.categories.byId = r;
                const o = t.categories.ids;
                o.indexOf(e) > -1 && (a.categories.ids = o.filter((t) => t !== e));
                const { [e]: l, ...i } = t.todos.idsByCategoryId;
                return (a.todos.idsByCategoryId = i), ct.setState(a), { result: e };
            }
            function Fe(e) {
                return 'boolean' == typeof e;
            }
            function Ae(e) {
                return null == e;
            }
            function Be(e) {
                return !be(e);
            }
            const je =
                ((Ue = !1),
                (e) => {
                    if (Fe(e)) return e;
                    if (X(e))
                        switch (e.toLowerCase()) {
                            case 'true':
                                return !0;
                            case 'false':
                                return !1;
                            default:
                                return;
                        }
                    return Ae(e) ? Ue : void 0;
                });
            var Ue;
            const $e = [(e) => be(e.todo_id) && ve(e.todo_id), 'обязательное поле todo_id должно быть целым числом'],
                He = [
                    (e) => be(e.status_id) && ve(e.status_id),
                    'обязательное поле status_id должно быть целым числом',
                ],
                Ve = [
                    (e) => Ae(e.category_id) || ve(e.category_id),
                    'необязательное поле category_id должно быть целым числом',
                ],
                We = [
                    function (e) {
                        return !!X(e.todo) && we(e.todo.length, 5, 100);
                    },
                    'длина названия todo должна быть более 5 символов и не превышать 100 символов',
                ],
                Qe = [
                    function (e) {
                        return !!Ae(e.description) || (!!X(e.description) && we(e.description.length, 10, 1e3));
                    },
                    'длина description должна быть более 10 символов и не превышать 1000 символов',
                ],
                qe = [
                    (e) => Be(e.due_date) || X(e.due_date),
                    'необязательное поле due_date должно быть строкой ISO 8086',
                ],
                Ke = [(e) => Fe(e.completed), 'поле completed должно быть boolean'],
                Ye = [(e) => Ae(e.deleted) || Fe(e.deleted), 'поле deleted должно быть boolean'];
            function Ze(e) {
                const {
                    todo_id: t,
                    todo: n,
                    status_id: r,
                    category_id: a,
                    description: o,
                    due_date: l,
                    deleted: i,
                    completed: u,
                } = e;
                return {
                    todo_id: t,
                    todo: ((s = n), 'string' == typeof s ? s[0].toUpperCase() + s.slice(1) : void 0),
                    status_id: r,
                    category_id: a,
                    description: o,
                    due_date: l,
                    deleted: je(i),
                    completed: je(u),
                };
                var s;
            }
            const Xe = {
                todo_id: $e,
                status_id: He,
                category_id: Ve,
                todo: We,
                description: Qe,
                due_date: qe,
                completed: Ke,
                deleted: Ye,
            };
            function Ge(e, t) {
                const n = (function (e) {
                    return ke(Ze(e), Xe);
                })(e);
                if (!n.entity) return n;
                const { entity: r } = n;
                return !1 === t.statuses.ids.includes(r.status_id)
                    ? { error: 'Статус задачи не обнаружен в стправочнике!' }
                    : r.category_id && !1 === t.categories.ids.includes(r.category_id)
                    ? { error: 'Категория задачи не обнаружена в стправочнике!' }
                    : { entity: r };
            }
            function Je(e, t, n) {
                if (n && n.category_id === t.category_id) return;
                const r = e.idsByCategoryId;
                if (n && n.category_id && (n.category_id !== t.category_id || t.deleted || Be(t.category_id))) {
                    const e = [...r[n.category_id]];
                    e.splice(e.indexOf(n.category_id)), (r[n.category_id] = e);
                }
                t.category_id &&
                    (r[t.category_id]
                        ? -1 === r[t.category_id].indexOf(t.todo_id) &&
                          (r[t.category_id] = [...r[t.category_id], t.todo_id])
                        : (r[t.category_id] = [t.todo_id]));
            }
            function et(e) {
                return pe(new Date(e)).valueOf();
            }
            function tt(e, t) {
                const n = e.idsByFilterId[ye],
                    r = n.indexOf(t.todo_id);
                if (
                    (function (e) {
                        const t = new Date().valueOf();
                        return null != e.due_date && e.due_date_time_ts < t && !1 === e.completed;
                    })(t)
                ) {
                    if (r > -1) return;
                    e.idsByFilterId[ye] = [...n, t.todo_id];
                } else if (r > -1) {
                    const t = [...n];
                    t.splice(r, 1), (e.idsByFilterId[ye] = t);
                }
            }
            function nt(e, t) {
                const n = e.idsByFilterId[ge],
                    r = n.indexOf(t.todo_id);
                if (
                    (function (e) {
                        return !!e.deleted;
                    })(t)
                ) {
                    if (r > -1) return;
                    e.idsByFilterId[ge] = [...n, t.todo_id];
                } else if (r > -1) {
                    const t = [...n];
                    t.splice(r, 1), (e.idsByFilterId[ge] = t);
                }
            }
            function rt(e, t, n) {
                if (n && !1 === n.deleted && !0 === t.deleted)
                    return (
                        (function (e, t, n) {
                            t.forEach((t) => {
                                const r = e.idsByFilterId[t],
                                    a = r.indexOf(n.todo_id);
                                if (a > -1) {
                                    const n = [...r];
                                    n.splice(a, 1), (e.idsByFilterId[t] = n);
                                }
                            });
                        })(e, [he, ye], n),
                        void nt(e, t)
                    );
                (Be(n) || n.due_date !== t.due_date) && tt(e, t),
                    (function (e, t) {
                        const n = e.idsByFilterId[he],
                            r = n.indexOf(t.todo_id);
                        if (
                            (function (e) {
                                return void 0 === e.due_date && void 0 === e.category_id && !e.deleted && !e.completed;
                            })(t)
                        ) {
                            if (r > -1) return;
                            e.idsByFilterId[he] = [...n, t.todo_id];
                        } else if (r > -1) {
                            const t = [...n];
                            t.splice(r, 1), (e.idsByFilterId[he] = t);
                        }
                    })(e, t),
                    nt(e, t);
            }
            function at(e, t, n) {
                if (!((n && n.due_date === t.due_date) || Be(t.due_date))) {
                    if (null != n && n.due_date) {
                        const t = [...e.idsByDueDate[n.due_date_ts]];
                        t.splice(t.indexOf(n.todo_id), 1), (e.idsByDueDate[n.due_date_ts] = t);
                    }
                    t.due_date &&
                        (Be(e.idsByDueDate[t.due_date_ts])
                            ? (e.idsByDueDate[t.due_date_ts] = [t.todo_id])
                            : !1 === e.idsByDueDate[t.due_date_ts].includes(t.todo_id) &&
                              (e.idsByDueDate[t.due_date_ts] = [...e.idsByDueDate[t.due_date_ts], t.todo_id]));
                }
            }
            function ot(e) {
                const t = ct.getState(),
                    { entity: n, error: r } = Ge(e, t);
                if (n) {
                    if (!0 === t.todos.ids.includes(n.todo_id))
                        return { error: { code: 500, error: 'Нарушение уникальностиидентификатора todos!', data: e } };
                    const r = { ...t },
                        a = n;
                    return (
                        a.due_date && ((a.due_date_ts = et(a.due_date)), (a.due_date_time_ts = Date.parse(a.due_date))),
                        rt(r.todos, a),
                        Je(r.todos, a),
                        at(r.todos, a),
                        (r.todos.byId = { ...t.todos.byId, [a.todo_id]: a }),
                        (r.todos.ids = [...t.todos.ids, a.todo_id]),
                        ct.setState(r),
                        { result: n }
                    );
                }
                return { error: { code: 500, error: r, data: e } };
            }
            function lt(e) {
                const t = ct.getState(),
                    { entity: n, error: r } = Ge(e, t);
                if (n) {
                    const e = { ...t },
                        r = t.todos.byId[n.todo_id],
                        a = { ...t.todos.byId[n.todo_id], ...n };
                    return (
                        a.due_date && ((a.due_date_ts = et(a.due_date)), (a.due_date_time_ts = Date.parse(a.due_date))),
                        rt(e.todos, a, r),
                        Je(e.todos, a, r),
                        at(e.todos, a, r),
                        (e.todos.byId[n.todo_id] = a),
                        ct.setState(e),
                        { result: n }
                    );
                }
                return { error: { code: 500, error: r, data: e } };
            }
            function it(e) {
                const t = ct.getState(),
                    n = { ...ct.getState() },
                    { [e]: r, ...a } = t.todos.byId;
                n.todos.byId = a;
                const o = t.todos.ids;
                return o.indexOf(e) > -1 && (n.todos.ids = o.filter((t) => t !== e)), ct.setState(n), { result: e };
            }
            function ut(e) {
                const t = { ...ct.getState() };
                return (t.todos.idsByFilterId[ye] = [...t.todos.idsByFilterId[ye], e]), ct.setState(t), { result: e };
            }
            function st(e) {
                const t = ct.getState();
                if (t.navigationFilter.key === e.key) return { result: e };
                const n = { ...t };
                return (n.navigationFilter = e), ct.setState(n), { result: e };
            }
            const ct = fe()(() => {
                    return {
                        icons: {
                            byId: {
                                1: { icon_id: 1, icon_name: 'page.png' },
                                2: { icon_id: 2, icon_name: 'home.png' },
                                3: { icon_id: 3, icon_name: 'other.png' },
                                4: { icon_id: 4, icon_name: 'warning.png' },
                                5: { icon_id: 5, icon_name: 'alert.png' },
                                6: { icon_id: 6, icon_name: 'ball.png' },
                                7: { icon_id: 7, icon_name: 'bug.png' },
                                8: { icon_id: 8, icon_name: 'cart.png' },
                                9: { icon_id: 9, icon_name: 'favorite.png' },
                                10: { icon_id: 10, icon_name: 'inbox.png' },
                                11: { icon_id: 11, icon_name: 'life.png' },
                                12: { icon_id: 12, icon_name: 'mail.png' },
                                13: { icon_id: 13, icon_name: 'twitter.png' },
                                14: { icon_id: 14, icon_name: 'note.png' },
                            },
                            ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                        },
                        statuses: {
                            byId: {
                                1: { status_id: 1, status: 'низкий', color: '#808080' },
                                2: { status_id: 2, status: 'нормальный', color: '#000000' },
                                3: { status_id: 3, status: 'повышенный', color: '#008000' },
                                4: { status_id: 4, status: 'высокий', color: '#E56353' },
                            },
                            ids: [1, 2, 3, 4],
                        },
                        categories: {
                            byId: {
                                1: { category_id: 1, icon_id: 2, category: 'Дом' },
                                2: { category_id: 2, icon_id: 3, category: 'Работа' },
                                3: { category_id: 3, icon_id: 6, category: 'Спорт' },
                                4: { category_id: 4, icon_id: 7, category: 'Покупки' },
                            },
                            ids: [1, 2, 3, 4],
                        },
                        todos: {
                            byId: {},
                            ids: [],
                            idsByDueDate: {},
                            idsByCategoryId: {},
                            idsByFilterId: { [he]: [], [ge]: [], [ye]: [] },
                        },
                        navigationFilter:
                            ((e = pe(new Date())),
                            {
                                type: 'calendar',
                                title: `${e.toLocaleDateString('ru-Ru', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}`,
                                key: pe(e).valueOf(),
                            }),
                        _addIcon: xe,
                        _addStatus: Te,
                        _addCategory: Me,
                        _updateCategory: Re,
                        _deleteCategory: De,
                        _addTodo: ot,
                        _updateTodo: lt,
                        _deleteTodo: it,
                        _addToOverdueTodos: ut,
                        setNavigationFilter: st,
                    };
                    var e;
                }),
                dt = n.p + '8ad17092b67f41ed6f08.mp3';
            function ft(e) {
                return new Promise((t) => {
                    setTimeout(t, e);
                });
            }
            const pt = 1.45,
                mt = !0 === window.matchMedia('(hover: none) and (pointer: coarse)').matches && 'vibrate' in navigator,
                ht = new Audio(dt);
            ht.volume = 0.25;
            const gt = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [5];
                mt && window.navigator.vibrate(e);
            };
            function yt() {
                ht.pause();
            }
            function vt() {
                ft(250).then(() => {
                    mt ? gt() : ht.play();
                });
            }
            const bt = (e, t) =>
                    A.error(e, {
                        ...t,
                        onOpen: vt,
                        onClose: yt,
                        autoClose: !1,
                        style: { border: '2px solid var(--toastify-color-error)', lineHeight: pt },
                    }),
                wt = (e, t) =>
                    A.info(e, { ...t, style: { border: '2px solid var(--toastify-color-info)', lineHeight: pt } }),
                kt = (e, t) =>
                    A.warning(e, {
                        ...t,
                        style: { border: '2px solid var(--toastify-color-warning)', lineHeight: pt },
                    });
            function _t() {
                ft(250).then(() => {
                    ht.play(), gt([100, 30, 100, 30, 100]);
                });
            }
            const St = (e, t) =>
                A.success(e, {
                    ...t,
                    style: { border: '2px solid var(--primaryDarkColor)', lineHeight: pt },
                    autoClose: !1,
                    onOpen: _t,
                });
            var xt = n(893);
            function Et(e) {
                let t = !1;
                const { todos: n } = e,
                    { _addTodo: r } = ct.getState();
                if (
                    ((0, le.unstable_batchedUpdates)(() => {
                        null == n ||
                            n.forEach((e) => {
                                const n = r(e);
                                n.error && (console.error(n.error), (t = !0));
                            });
                    }),
                    t)
                ) {
                    a.notifyWarning(
                        (0, xt.jsxs)('span', {
                            children: [
                                'Во время получения данных обнаружены ошибки - возможно часть данных будет отображена не корректно.',
                                (0, xt.jsx)('br', {}),
                                'Мы уже работаем над проблемой.',
                                (0, xt.jsx)('br', {}),
                                'Попробуйте обновить данные позже.',
                            ],
                        }),
                    );
                }
            }
            const Ct = 12e4;
            function Tt() {
                const e = document.createElement('script');
                (e.type = 'module'),
                    (e.src = 'https://cdn.jsdelivr.net/gh/khmyznikov/pwa-install@latest/dist/pwa-install.bundle.js');
                const t = document.createElement('pwa-install');
                (t.id = 'pwa-install'),
                    t.setAttribute('manifest-url', 'manifest.json'),
                    t.setAttribute('manual-apple', 'true'),
                    t.setAttribute('manual-chrome', 'true'),
                    document.body.appendChild(e),
                    document.body.appendChild(t);
            }
            async function Nt() {
                const { todos: e } = ct.getState();
                if ('setAppBadge' in navigator) {
                    const t = Object.values(e.idsByDueDate).reduce((e, t) => e + t.length, 0);
                    t ? await navigator.setAppBadge(t) : await navigator.clearAppBadge();
                }
            }
            'undefined' != typeof window ? o.useLayoutEffect : o.useEffect;
            const Pt = function (e) {
                const t = (e) => 'undefined' != typeof window && window.matchMedia(e).matches,
                    [n, r] = (0, o.useState)(t(e));
                function a() {
                    r(t(e));
                }
                return (
                    (0, o.useEffect)(() => {
                        const t = window.matchMedia(e);
                        return (
                            a(),
                            t.addListener ? t.addListener(a) : t.addEventListener('change', a),
                            () => {
                                t.removeListener ? t.removeListener(a) : t.removeEventListener('change', a);
                            }
                        );
                    }, [e]),
                    n
                );
            };
            function Lt() {
                var e, t, n;
                window.scriptLoadError &&
                    (window.removeEventListener('error', window.scriptLoadError), (window.scriptLoadError = void 0)),
                    null === (e = document.querySelector('#loading')) || void 0 === e || e.remove(),
                    null === (t = document.getElementById('initialScript')) || void 0 === t || t.remove(),
                    null === (n = document.querySelector('#root')) || void 0 === n || n.classList.remove('hidden');
            }
            const It = (0, n(504).withNaming)({ n: '', e: '__', m: '_' });
            const zt = function (e) {
                const { className: t } = e;
                return (0, xt.jsx)('svg', {
                    className: t,
                    width: '100%',
                    height: '100%',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: (0, xt.jsx)('path', {
                        d: 'M4 17H20M4 12H20M4 7H20',
                        stroke: 'currentColor',
                        strokeWidth: '1.5',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                });
            };
            const Ot = function (e) {
                const { className: t } = e;
                return (0, xt.jsx)('svg', {
                    className: t,
                    width: '100%',
                    height: '100%',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: (0, xt.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z',
                        fill: 'currentColor',
                    }),
                });
            };
            var Mt = n(379),
                Rt = n.n(Mt),
                Dt = n(795),
                Ft = n.n(Dt),
                At = n(569),
                Bt = n.n(At),
                jt = n(565),
                Ut = n.n(jt),
                $t = n(216),
                Ht = n.n($t),
                Vt = n(589),
                Wt = n.n(Vt),
                Qt = n(815),
                qt = {};
            (qt.styleTagTransform = Wt()),
                (qt.setAttributes = Ut()),
                (qt.insert = Bt().bind(null, 'head')),
                (qt.domAPI = Ft()),
                (qt.insertStyleElement = Ht());
            Rt()(Qt.Z, qt);
            Qt.Z && Qt.Z.locals && Qt.Z.locals;
            const Kt = function (e) {
                    const { className: t, checked: n, unCheckedIcon: r, checkedIcon: a, onClick: o, title: l } = e;
                    return (0, xt.jsx)('button', {
                        className: `CheckButton ${t}`,
                        'area-role': 'menu',
                        'aria-expanded': n,
                        onClick: o,
                        title: l,
                        children: n ? a : r,
                    });
                },
                Yt = n.p + '7c6d2e8a35ab9fe33a8f.svg';
            var Zt = n(982),
                Xt = {};
            (Xt.styleTagTransform = Wt()),
                (Xt.setAttributes = Ut()),
                (Xt.insert = Bt().bind(null, 'head')),
                (Xt.domAPI = Ft()),
                (Xt.insertStyleElement = Ht());
            Rt()(Zt.Z, Xt);
            Zt.Z && Zt.Z.locals && Zt.Z.locals;
            const Gt = (e) => {
                const { isSmallScreen: t, isNavPanelVisible: n, onToggleNavPane: r } = e;
                return (0, xt.jsxs)('div', {
                    className: 'AppHeader',
                    children: [
                        (0, xt.jsx)('img', {
                            className: 'AppHeader__Icon',
                            src: Yt,
                            width: 32,
                            height: 32,
                            alt: 'App logo',
                        }),
                        (0, xt.jsx)('h1', { className: 'AppHeader__Title', children: 'Мои Задачи' }),
                        t
                            ? (0, xt.jsx)(Kt, {
                                  className: 'AppHeader__MenuButton',
                                  checked: n,
                                  unCheckedIcon: (0, xt.jsx)(zt, {}),
                                  checkedIcon: (0, xt.jsx)(Ot, {}),
                                  onClick: r,
                                  title: (n ? 'Скрыть' : 'Показать') + ' панель навигации',
                              })
                            : null,
                    ],
                });
            };
            var Jt = n(396),
                en = {};
            (en.styleTagTransform = Wt()),
                (en.setAttributes = Ut()),
                (en.insert = Bt().bind(null, 'head')),
                (en.domAPI = Ft()),
                (en.insertStyleElement = Ht());
            Rt()(Jt.Z, en);
            Jt.Z && Jt.Z.locals && Jt.Z.locals;
            const tn = It('App__Container'),
                nn = (e) => {
                    const t = e.target;
                    t.className = tn({ scrolled: t.scrollTop > 0 });
                },
                rn = (e) => {
                    const {
                        isNavPanelVisible: t,
                        isSmallScreen: n,
                        navigationPanel: r,
                        todoListView: a,
                        onToggleNavPane: o,
                    } = e;
                    return (0, xt.jsxs)('main', {
                        className: 'App',
                        children: [
                            (0, xt.jsx)(Gt, { isSmallScreen: n, isNavPanelVisible: t, onToggleNavPane: o }),
                            (0, xt.jsxs)('div', {
                                className: 'App__Container',
                                onScroll: nn,
                                children: [
                                    (0, xt.jsx)('div', { className: 'App__NavPanel', children: r }),
                                    (0, xt.jsx)('div', { className: 'App__TodoList', children: a }),
                                ],
                            }),
                        ],
                    });
                };
            var an = n(873),
                on = {};
            (on.styleTagTransform = Wt()),
                (on.setAttributes = Ut()),
                (on.insert = Bt().bind(null, 'head')),
                (on.domAPI = Ft()),
                (on.insertStyleElement = Ht());
            Rt()(an.Z, on);
            an.Z && an.Z.locals && an.Z.locals;
            let ln = !0;
            window && (ln = window.innerWidth > 640);
            const un = () => {
                    const e = Pt('(max-width: 640px)'),
                        [t, n] = (0, o.useState)(ln),
                        r = (0, o.useCallback)(() => n((e) => !e), []);
                    return (
                        (0, o.useEffect)(Lt, []),
                        (0, xt.jsx)(rn, {
                            isSmallScreen: e,
                            isNavPanelVisible: t,
                            onToggleNavPane: r,
                            navigationPanel: (0, xt.jsx)('div', { children: 'Nav' }),
                            todoListView: (0, xt.jsx)('div', { children: 'TodoList' }),
                        })
                    );
                },
                sn = Z(),
                cn = t;
            (async function () {
                if ('serviceWorker' in navigator)
                    if (navigator.serviceWorker.controller) {
                        const e = await navigator.serviceWorker.ready;
                        e.update(),
                            await new Promise((t) => {
                                const n = e.waiting;
                                if (n) {
                                    const r = () => {
                                        'activated' === n.state && (e.removeEventListener('statechange', r), t(!0));
                                    };
                                    e.addEventListener('statechange', r);
                                } else t(!0);
                            });
                    } else
                        await new Promise((e) => {
                            navigator.serviceWorker.addEventListener('controllerchange', e);
                        });
            })().then(async function () {
                sn.getTodoStore()
                    .then((e) => {
                        Et(e), Nt();
                        const t = (function (e, t) {
                            let n;
                            return (
                                (n = setTimeout(function r() {
                                    e(), (n = setTimeout(r, t));
                                }, t)),
                                {
                                    stop: function () {
                                        clearTimeout(n);
                                    },
                                }
                            );
                        })(() => {
                            !(function () {
                                const e = Date.now(),
                                    { todos: t, _addToOverdueTodos: n, setNavigationFilter: r } = ct.getState(),
                                    a = t.idsByFilterId[ye];
                                for (const o of Object.values(t.byId))
                                    if (o.due_date) {
                                        const t = e - o.due_date_time_ts;
                                        t > 0 &&
                                            !a.includes(o.todo_id) &&
                                            !o.completed &&
                                            !o.deleted &&
                                            Math.abs(t) < Ct &&
                                            St(`lalala: ${o.todo}`, {
                                                toastId: 'due_date:' + o.todo,
                                                onClose: async () => {
                                                    var e, t;
                                                    r(
                                                        ((e = 'Просроченные'),
                                                        (t = ye),
                                                        { type: me.filter, title: t, key: e }),
                                                    ),
                                                        n(o.todo_id),
                                                        Nt();
                                                },
                                            });
                                    }
                            })();
                        }, 6e4);
                        window.addEventListener('beforeunload', () => {
                            t.stop();
                        });
                    })
                    .then(() => window.loadingPromise)
                    .then(() => {
                        const e = r,
                            t =
                                document.getElementById('root') ||
                                (function () {
                                    const e = document.createElement('div');
                                    return (e.id = 'root'), document.body.appendChild(e), e;
                                })();
                        (0, l.s)(t).render(
                            (0, xt.jsxs)(xt.Fragment, {
                                children: [
                                    (0, xt.jsx)(o.StrictMode, { children: (0, xt.jsx)(un, {}) }),
                                    (0, xt.jsx)(N, { limit: 3, hideProgressBar: !0 }),
                                ],
                            }),
                        ),
                            e.remove('reloadOnError');
                    })
                    .then(() => {
                        'serviceWorker' in navigator &&
                            (['iPhone', 'iPad', 'iPod'].includes(navigator.userAgent) ||
                                (navigator.userAgent.match(/Mac/) &&
                                    navigator.maxTouchPoints &&
                                    navigator.maxTouchPoints > 2)) &&
                            !1 ===
                                (window.matchMedia('(display-mode: standalone)').matches ||
                                    ('standalone' in navigator && !0 === navigator.standalone)) &&
                            setTimeout(Tt, 3e3);
                    })
                    .catch((e) => {
                        cn.error({ error: e, stack: e.stack });
                    });
            }),
                'BeforeInstallPromptEvent' in window && window.addEventListener('beforeinstallprompt', Tt);
        })();
})();
