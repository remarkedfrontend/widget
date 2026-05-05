!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.datepicker = t() : e.datepicker = t() }(window, (function () { return function (e) { var t = {}; function n(a) { if (t[a]) return t[a].exports; var r = t[a] = { i: a, l: !1, exports: {} }; return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = e, n.c = t, n.d = function (e, t, a) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var a = Object.create(null); if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function (t) { return e[t] }.bind(null, r)); return a }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0) }([function (e, t, n) { "use strict"; n.r(t); var a = [], r = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], i = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], o = { t: "top", r: "right", b: "bottom", l: "left", c: "centered" }; function s() { } var l = ["click", "focusin", "keydown", "input"]; function d(e) { l.forEach((function (t) { e.addEventListener(t, e === document ? L : Y) })) } function c(e) { return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce((function (t, n) { return t[n] = c(e[n]), t }), {}) : e } function u(e, t) { var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden"); t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [h(t, e, a), f(t, e, a), v(e, a)].join(""), a && window.requestAnimationFrame((function () { M(!0, e) })) } function h(e, t, n) { return ['<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>"].join("") } function f(e, t, n) { var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0; p.setMonth(p.getMonth() + 1), p.setDate(0); var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0); S += (w + b) % 7 ? 7 : 0; for (var M = 1; M <= S; M++) { var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, P = j ? C < 1 ? -1 : 1 : 0, k = j && !l, O = k ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x; Y && !k && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !k && (A += " qs-disabled"), +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), k && (A += " qs-empty", O = ""), q.push('<div class="' + A + '" data-direction="' + P + '">' + O + "</div>") } var R = d.map((function (e) { return '<div class="qs-square qs-day">' + e + "</div>" })).concat(q); return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), R.join("") } function v(e, t) { var n = e.overlayPlaceholder, a = e.overlayButton; return ['<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function (e, t) { return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>" })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>"].join("") } function m(e, t, n) { var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling; (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), n || q(t), o && (y({ instance: t, deselect: n }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected))) } function y(e) { var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling; t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected } function p(e, t, n) { if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString()) } function w(e, t, n, a) { n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t) } function D(e) { if (!e.noPosition) { var t = e.position.top, n = e.position.right; if (e.position.centered) return e.calendarContainer.classList.add("qs-centered"); var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px"; e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s) } } function b(e) { return "[object Date]" === x(e) && "Invalid Date" !== e.toString() } function g(e) { if (b(e) || "number" == typeof e && !isNaN(e)) { var t = new Date(+e); return new Date(t.getFullYear(), t.getMonth(), t.getDate()) } } function q(e) { e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), e.calendarContainer.classList.add("qs-hidden"), e.onHide(e)) } function S(e) { e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), D(e), e.onShow(e)) } function M(e, t) { var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares"); e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), r.focus()) } function E(e, t, n, a) { var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value; if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) { n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled") } } function x(e) { return {}.toString.call(e) } function C(e) { a.forEach((function (t) { t !== e && q(t) })) } function L(e) { if (!e.__qs_shadow_dom) { var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter((function (e) { return e.calendar.contains(r) || e.el === r }))[0], l = s && s.calendar.contains(r); if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) { if (!s) return a.forEach(q); if (s.disabled) return; var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum; if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else { if (o.contains("qs-disabled")) return; if (o.contains("qs-num")) { var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b); if (g) { s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], u(s); for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L;) { var P = Y[j]; P.textContent === b && (L = P), j++ } r = L } return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s)) } o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s)) } } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) { var k = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden"); 13 === t && k && l ? E(e, r, s) : 27 === t && k && l && M(!0, s) } else if ("input" === n) { if (!s || !s.calendar.contains(r)) return; var O = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce((function (e, t) { return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "" }), "").slice(0, 4); r.value = N, O.classList[4 === N.length ? "remove" : "add"]("qs-disabled") } } } function Y(e) { L(e), e.__qs_shadow_dom = !0 } function j(e, t) { l.forEach((function (n) { e.removeEventListener(n, t) })) } function P() { S(this) } function k() { q(this) } function O(e, t) { var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling; if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({ instance: this, deselect: !0 }), u(i)), u(this), this; if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object."); if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled."); this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({ instance: this }), u(i)); var o = a === n.getFullYear() && r === n.getMonth(); return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this } function N(e) { return I(this, e, !0) } function _(e) { return I(this, e) } function I(e, t, n) { var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max"; function c() { return "original" + d + "Date" } function h() { return d.toLowerCase() + "Date" } function f() { return "set" + d } function v() { throw new Error("Out-of-range date passed to " + f()) } if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, i.maxDate = void 0)) : e[h()] = void 0; else { if (!b(t)) throw new Error("Invalid date passed to " + f()); i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l) } return i && u(i), u(e), e } function A() { var e = this.first ? this : this.sibling, t = e.sibling; return { start: e.dateSelected, end: t.dateSelected } } function R() { var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this; this.inlinePosition && (a.some((function (e) { return e !== i && e.positionedEl === t })) || t.style.setProperty("position", null)); n.remove(), a = a.filter((function (e) { return e !== i })), r && delete r.sibling, a.length || j(document, L); var o = a.some((function (t) { return t.shadowDom === e })); for (var s in e && !o && j(e, Y), this) delete this[s]; a.length || l.forEach((function (e) { document.removeEventListener(e, L) })) } function F(e, t) { var n = new Date(e); if (!b(n)) throw new Error("Invalid date passed to `navigate`"); this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this) } function B() { var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden"); e && M(t, this) } t.default = function (e, t) { var n = function (e, t) { var n, l, d = function (e) { var t = c(e); t.events && (t.events = t.events.reduce((function (e, t) { if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.'); return e[+g(t)] = !0, e }), {}));["startDate", "dateSelected", "minDate", "maxDate"].forEach((function (e) { var n = t[e]; if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.'); t[e] = g(n) })); var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id; if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce((function (e, t) { var n = +g(t); if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".'); if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".'); return e[n] = 1, e }), {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`"); if (null != v) { var m = a.filter((function (e) { return e.id === v })); if (m.length > 1) throw new Error("Only two datepickers can share an id."); m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0 } var y = ["tr", "tl", "br", "bl", "c"].some((function (e) { return n === e })); if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.'); function p(e) { throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".') } if (t.position = function (e) { var t = e[0], n = e[1], a = {}; a[o[t]] = 1, n && (a[o[n]] = 1); return a }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".'); d && (l > d && p("min"), i < d && p()); if (["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach((function (e) { "function" != typeof t[e] && (t[e] = s) })), ["customDays", "customMonths", "customOverlayMonths"].forEach((function (e, n) { var a = t[e], r = n ? 12 : 7; if (a) { if (!Array.isArray(a) || a.length !== r || a.some((function (e) { return "string" != typeof e }))) throw new Error('"' + e + '" must be an array with ' + r + " strings."); t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a } })), f && f > 0 && f < 7) { var w = (t.customDays || r).slice(), D = w.splice(0, f); t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [w.length - 1, w.length] } else t.startDay = 0, t.weekendIndices = [6, 0]; "string" != typeof u && delete t.overlayPlaceholder; "string" != typeof h && delete t.overlayButton; var q = t.defaultView; if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".'); return t.defaultView = q || "calendar", t }(t || { startDate: g(new Date), position: "bl", defaultView: "calendar" }), u = e; if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else { if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported."); for (var h, f = u.parentNode; !h;) { var v = x(f); "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, n = f, l = f.host) : f = f.parentNode } } if (!u) throw new Error("No selector / element found."); if (a.some((function (e) { return e.el === u }))) throw new Error("A datepicker already exists on that element."); var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div"); D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker"; var M = { shadowDom: n, customElement: l, positionedEl: w, el: u, parent: y, nonInput: "INPUT" !== u.nodeName, noPosition: m, position: !m && d.position, startDate: d.startDate, dateSelected: d.dateSelected, disabledDates: d.disabledDates, minDate: d.minDate, maxDate: d.maxDate, noWeekends: !!d.noWeekends, weekendIndices: d.weekendIndices, calendarContainer: D, calendar: q, currentMonth: (d.startDate || d.dateSelected).getMonth(), currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()], currentYear: (d.startDate || d.dateSelected).getFullYear(), events: d.events || {}, defaultView: d.defaultView, setDate: O, remove: R, setMin: N, setMax: _, show: P, hide: k, navigate: F, toggleOverlay: B, onSelect: d.onSelect, onShow: d.onShow, onHide: d.onHide, onMonthChange: d.onMonthChange, formatter: d.formatter, disabler: d.disabler, months: d.months || i, days: d.customDays || r, startDay: d.startDay, overlayMonths: d.overlayMonths || (d.months || i).map((function (e) { return e.slice(0, 3) })), overlayPlaceholder: d.overlayPlaceholder || "4-digit year", overlayButton: d.overlayButton || "Submit", disableYearOverlay: !!d.disableYearOverlay, disableMobile: !!d.disableMobile, isMobile: "ontouchstart" in window, alwaysShow: !!d.alwaysShow, id: d.id, showAllDates: !!d.showAllDates, respectDisabledReadOnly: !!d.respectDisabledReadOnly, first: d.first, second: d.second }; if (d.sibling) { var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate; C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, E.getRange = A, C.getRange = A } d.dateSelected && p(u, M); var j = getComputedStyle(w).position; m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative")); var I = a.filter((function (e) { return e.positionedEl === M.positionedEl })); I.some((function (e) { return e.inlinePosition })) && (M.inlinePosition = !0, I.forEach((function (e) { e.inlinePosition = !0 }))); D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M); return M }(e, t); if (a.length || d(document), n.shadowDom && (a.some((function (e) { return e.shadowDom === n.shadowDom })) || d(n.shadowDom)), a.push(n), n.second) { var l = n.sibling; y({ instance: n, deselect: !n.dateSelected }), y({ instance: l, deselect: !l.dateSelected }), u(l) } return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n } }]).default }));

function widgetArea(params) {
  if (!document.querySelector('meta[name="format-detection"]')) {
  	document.querySelector('head').insertAdjacentHTML('beforeend', '<meta name="format-detection" content="telephone=no" />');
  }
  if (!params.lang) {
    params.lang = {};
  }
  if (!params.lang['ru-RU']) {
    params.lang['ru-RU'] = {}
  }
  if (!params.lang['en-US']) {
    params.lang['en-US'] = {}
  }
  //const remarkedReqUrl = "https://app2.remarked.ru/api/v1/ApiReservesWidget";
  const remarkedReqUrl =
  window.location.hostname === "po-tihomu.ru" ||
  window.location.hostname.endsWith(".po-tihomu.ru")
    ? "https://app3.remarked.ru/api/v1/ApiReservesWidget"
    : "https://app.remarked.ru/api/v1/ApiReservesWidget";
  // const remarkedReqUrl = "https://app.remarked.ru/api/v1/ApiReservesWidget";
  let remarkedToken;
  let dateBool = true;
  let lang = document.querySelector('html').getAttribute('lang');

  if (lang === 'en' || lang === 'en-GB') lang = 'en-US';
  if (lang === 'ru') lang = 'ru-RU';

  if (params.changeLang === 'en') lang = 'en-US';
  if (params.changeLang === 'ru') lang = 'ru-RU';

  let options = {
    minDate: params.minDate ? {
      yyyy: params.minDate.split('-')[0],
      dd: params.minDate.split('-')[2],
      mm: params.minDate.split('-')[1] - 1,
      full: params.minDate,
      maxDate: params.maxDate ? new Date(params.maxDate).getTime() : getToday().maxDate,
    } : getToday(params.maxDate),
    showErrorNoticeValidate: params.showErrorNoticeValidate ? params.showErrorNoticeValidate : false,
    inline: params.inline ? params.inline : false,
    inlineContainer: params.inline ? params.inlineContainer : 'body',
    time: params.time == false ? false : true,
    booking: params.booking,
    customValidation: params.customValidation ? params.customValidation : false,
    qtyMin: params.qtyMin ? params.qtyMin : 1,
    qtyMax: params.qtyMax ? params.qtyMax : 10,
    qtyInput: params.qtyInput ? params.qtyInput : false,
    linkPolicy: params.linkPolicy ? params.linkPolicy : 'https://remarked.ru/widget/new/css/privancy.html',
    linkPolicyChecked: params.linkPolicyChecked ? params.linkPolicyChecked : false,
    linkPolicyEnforced: params.linkPolicyEnforced ? params.linkPolicyEnforced : false,
    accentColor: params.accentColor ? params.accentColor : '#f07048',
    textColor: params.textColor ? params.textColor : '#4A4A4A',
    calendar: params.calendar ? params.calendar : 7,
    button: params.button ? params.button : '.open__primary__widget',
    textSuccess: params.textSuccess ? params.textSuccess : "Ваша бронь успешна!<br> Ресторан свяжется с вами и подтвердит детали резерва.",
    textSuccessWithDates: params.textSuccessFunction ? params.textSuccessFunction : false,
    useCustomTextSuccessFunction: params.useCustomTextSuccessFunction ? params.useCustomTextSuccessFunction : false,
    customTextSuccessFunction: params.customTextSuccessFunction ? params.customTextSuccessFunction : function() {},
    email: params.email ? params.email : false,
    emailRequired: params.emailRequired ? params.emailRequired : false,
    telegramUsername: params.telegramUsername ? params.telegramUsername : false,
    telegramUsernameRequired: params.telegramUsernameRequired ? params.telegramUsernameRequired : false,
    lastName: params.lastName ? params.lastName : false,
    phoneMask: params.phoneMask ? params.phoneMask : true,
    customMask: params.customMask ? params.customMask : '',
    phoneCodeMask: params.phoneCodeMask ? params.phoneCodeMask : false,
    multi: params.multilanguage ? params.multilanguage : false,
    selectAdd: params.selectAdd ? params.selectAdd : {},
    secondSelectAdd: params.secondSelectAdd ? params.secondSelectAdd : {},
    selectNoEmpty: params.selectNoEmpty ? params.selectNoEmpty : false,
    secondSelectNoEmpty: params.secondSelectNoEmpty ? params.secondSelectNoEmpty : false,
    dateNextHour: params.dateNextHour || params.dateNextHour === 0 ? params.dateNextHour : 3600000,
    сhildСhair: params.сhildСhair ? params.сhildСhair : false,
    birthdayTable: params.birthdayTable ? params.birthdayTable : false,
    newSlotsTime: params.newSlotsTime ? params.newSlotsTime : false,
    newSlotsTimeOpenTime: params.newSlotsTimeOpenTime ? params.newSlotsTimeOpenTime : false,
    alwaysShowTimeRange: params.alwaysShowTimeRange ? params.alwaysShowTimeRange : false,
    rangeSlotsTime: params.rangeSlotsTime ? params.rangeSlotsTime : false,
    useSelectForTimeSlots: params.useSelectForTimeSlots ? params.useSelectForTimeSlots : false,
    rangeSlotsTimeEnd: params.rangeSlotsTimeEnd ? params.rangeSlotsTimeEnd : false,
    rangeSlotsTimeEndDuration: params.rangeSlotsTimeEndDuration ? params.rangeSlotsTimeEndDuration : 4,
    showDisabledTime: params.showDisabledTime ? params.showDisabledTime : false,
    room_id: params.room_id ? params.room_id : 0,
    sendAfterMessage: params.sendAfterMessage ? params.sendAfterMessage : false,
    withRoomsTimes: params.withRoomsTimes ? params.withRoomsTimes : false,
    oneGuestOneTable: params.oneGuestOneTable ? params.oneGuestOneTable : false,
    includeTime: params.includeTime ? params.includeTime : [],
    includeTables: params.includeTables ? params.includeTables : [],
    excludeRooms: params.excludeRooms ? params.excludeRooms : [],
    excludeTimesRooms: params.excludeTimesRooms ? params.excludeTimesRooms : [],
    includeTimesRooms: params.includeTimesRooms ? params.includeTimesRooms : [],
    newIncludeTimesRooms: params.newIncludeTimesRooms ? params.newIncludeTimesRooms : [],
    messageBusy: params.messageBusy ? params.messageBusy : 'К сожалению, свободных столов не осталось',
    getPaymentLink: params.getPaymentLink ? params.getPaymentLink : false,
    customWidgetId: params.customWidgetId ? params.customWidgetId : false,
    customWidgetClass: params.customWidgetClass ? params.customWidgetClass : false,
    isBusyHallMessage: params.isBusyHallMessage ? params.isBusyHallMessage : 'На эту дату свободных столов не осталось',
    children: params.children ? params.children : false,
    childrenQtyMin: params.childrenQtyMin ?? 1,
    childrenQtyMax: params.childrenQtyMax ? params.childrenQtyMax : 10,
    childrenQtyInput: params.childrenQtyInput ? params.childrenQtyInput : false,
    minQtyYears: params.minQtyYears ? params.minQtyYears : 18,
    lang: {
      'ru-RU': {
        headTitle: params.lang['ru-RU'].headTitle ? params.lang['ru-RU'].headTitle : 'Забронировать',
        headText: params.lang['ru-RU'].headText ? params.lang['ru-RU'].headText : 'Какой ресторан вы хотели бы посетить?',
        labelName: params.lang['ru-RU'].labelName ? params.lang['ru-RU'].labelName : 'На какое имя бронируем?',
        placeholderName: params.lang['ru-RU'].placeholderName ? params.lang['ru-RU'].placeholderName : 'Имя',
        labelLastName: params.lang['ru-RU'].labelLastName ? params.lang['ru-RU'].labelLastName : 'На какую фамилию бронируем?',
        placeholderLastName: params.lang['ru-RU'].placeholderLastName ? params.lang['ru-RU'].placeholderLastName : 'Фамилия',
        labelPhone: params.lang['ru-RU'].labelPhone ? params.lang['ru-RU'].labelPhone : 'Номер телефона',
        placeholderPhone: params.lang['ru-RU'].placeholderPhone ? params.lang['ru-RU'].placeholderPhone : 'Телефон',
        labelEmail: params.lang['ru-RU'].labelEmail ? params.lang['ru-RU'].labelEmail : 'Электронная почта',
        placeholderEmail: params.lang['ru-RU'].placeholderEmail ? params.lang['ru-RU'].placeholderEmail : 'e-mail',
        labelCountGuest: params.lang['ru-RU'].labelCountGuest ? params.lang['ru-RU'].labelCountGuest : 'Количество персон',
        labelDate: params.lang['ru-RU'].labelDate ? params.lang['ru-RU'].labelDate : 'Дата посещения',
        placeholderDate: params.lang['ru-RU'].placeholderDate ? params.lang['ru-RU'].placeholderDate : 'Выберите дату',
        labelTime: params.lang['ru-RU'].labelTime ? params.lang['ru-RU'].labelTime : 'Свободное время',
        noticeTime: params.lang['ru-RU'].noticeTime ? params.lang['ru-RU'].noticeTime : 'Выберите время',
        labelComment: params.lang['ru-RU'].labelComment ? params.lang['ru-RU'].labelComment : 'Комментарий',
        placeholderComment: params.lang['ru-RU'].placeholderComment ? params.lang['ru-RU'].placeholderComment : 'Текст вашего сообщения',
        textPolicy: params.lang['ru-RU'].textPolicy ? params.lang['ru-RU'].textPolicy : 'Согласен(-сна) на обработку персональных данных и с',
        textLinkPolicy: params.lang['ru-RU'].textLinkPolicy ? params.lang['ru-RU'].textLinkPolicy : 'пользовательским соглашением.',
        thanksTitle: params.lang['ru-RU'].thanksTitle ? params.lang['ru-RU'].thanksTitle : 'Спасибо',
        thanksText: params.lang['ru-RU'].thanksText ? params.lang['ru-RU'].thanksText : 'Ваша бронь успешна!<br> Ресторан свяжется с вами и подтвердит детали резерва.',
        textSubmit: params.lang['ru-RU'].textSubmit ? params.lang['ru-RU'].textSubmit : 'Забронировать',
        tags: params.lang['ru-RU'].tags ? params.lang['ru-RU'].tags : 'Теги',
        eventTags: params.lang['ru-RU'].eventTags ? params.lang['ru-RU'].eventTags : 'Событие',
        labelBirthday: params.lang['ru-RU'].labelBirthday ? params.lang['ru-RU'].labelBirthday : 'Дата рождения',
        placeholderBirthday: params.lang['ru-RU'].placeholderBirthday ? params.lang['ru-RU'].placeholderBirthday : 'Укажите дату рождения',
        bookingNewOption: params.lang['ru-RU'].bookingNewOption ? params.lang['ru-RU'].bookingNewOption : 'Выберите ресторан',
        extraPolicyCheckboxText: params.lang['ru-RU'].extraPolicyCheckboxText ? params.lang['ru-RU'].extraPolicyCheckboxText : 'С правилами посещения',
        extraPolicyCheckboxLink: params.lang['ru-RU'].extraPolicyCheckboxLink ? params.lang['ru-RU'].extraPolicyCheckboxLink : 'ознакомлен.',
        subcsriptionCheckboxText: params.lang['ru-RU'].subcsriptionCheckboxText ? params.lang['ru-RU'].subcsriptionCheckboxText : 'Согласен(-сна) на получение рекламных рассылок, с',
        subcsriptionCheckboxLink: params.lang['ru-RU'].subcsriptionCheckboxLink ? params.lang['ru-RU'].subcsriptionCheckboxLink : 'правилами ознакомлен(a).',
        labelchildren: params.lang['ru-RU'].labelchildren ? params.lang['ru-RU'].labelchildren : 'Количество детей',
        labelAddSelect: params.lang['ru-RU'].labelAddSelect ? params.lang['ru-RU'].labelAddSelect : 'Выберите зал',
        errorName: params.lang['ru-RU'].errorName ? params.lang['ru-RU'].errorName : 'Не заполнено поле Имя',
        errorLastName: params.lang['ru-RU'].errorLastName ? params.lang['ru-RU'].errorLastName : 'Не заполнено поле Фамилия',
        errorPhone: params.lang['ru-RU'].errorPhone ? params.lang['ru-RU'].errorPhone : 'Не заполнено поле Телефон',
        errorBirthday: params.lang['ru-RU'].errorBirthday ? params.lang['ru-RU'].errorBirthday : 'Не заполнено поле День рождения',
        errorEmail: params.lang['ru-RU'].errorEmail ? params.lang['ru-RU'].errorEmail : 'Не заполнено поле Email',
        errorDate: params.lang['ru-RU'].errorDate ? params.lang['ru-RU'].errorDate : 'Не заполнено поле Дата',
        placeholderTelegramUsername: params.lang['ru-RU'].placeholderTelegramUsername ? params.lang['ru-RU'].placeholderTelegramUsername : '@телеграм',
        labelTelegramUsername: params.lang['ru-RU'].labelTelegramUsername ? params.lang['ru-RU'].labelTelegramUsername : 'Телеграм',
        errorTelegramUsername: params.lang['ru-RU'].errorTelegramUsername ? params.lang['ru-RU'].errorTelegramUsername : 'Не заполнено поле телеграм',
      },
      'en-US': {
        headTitle: params.lang['en-US'].headTitle ? params.lang['en-US'].headTitle : 'Booking',
        headText: params.lang['en-US'].headText ? params.lang['en-US'].headText : 'Which restaurant would you like to visit?',
        labelName: params.lang['en-US'].labelName ? params.lang['en-US'].labelName : 'What is the name for the booking?',
        placeholderName: params.lang['en-US'].placeholderName ? params.lang['en-US'].placeholderName : 'Name',
        labelLastName: params.lang['en-US'].labelLastName ? params.lang['en-US'].labelLastName : 'What is the surname for the booking?',
        placeholderLastName: params.lang['en-US'].placeholderLastName ? params.lang['en-US'].placeholderLastName : 'Surname',
        labelPhone: params.lang['en-US'].labelPhone ? params.lang['en-US'].labelPhone : 'Phone number',
        placeholderPhone: params.lang['en-US'].placeholderPhone ? params.lang['en-US'].placeholderPhone : 'Phone',
        labelEmail: params.lang['en-US'].labelEmail ? params.lang['en-US'].labelEmail : 'E-mail',
        placeholderEmail: params.lang['en-US'].placeholderEmail ? params.lang['en-US'].placeholderEmail : 'e-mail',
        labelCountGuest: params.lang['en-US'].labelCountGuest ? params.lang['en-US'].labelCountGuest : 'Number of guests',
        labelDate: params.lang['en-US'].labelDate ? params.lang['en-US'].labelDate : 'Date of visit',
        placeholderDate: params.lang['en-US'].placeholderDate ? params.lang['en-US'].placeholderDate : 'Pick a date',
        labelTime: params.lang['en-US'].labelTime ? params.lang['en-US'].labelTime : 'Free time',
        noticeTime: params.lang['en-US'].noticeTime ? params.lang['en-US'].noticeTime : 'Pick a time',
        labelComment: params.lang['en-US'].labelComment ? params.lang['en-US'].labelComment : 'Comment',
        placeholderComment: params.lang['en-US'].placeholderComment ? params.lang['en-US'].placeholderComment : 'The text of your message',
        textPolicy: params.lang['en-US'].textPolicy ? params.lang['en-US'].textPolicy : 'I agree with the processing of personal data and with ',
        textLinkPolicy: params.lang['en-US'].textLinkPolicy ? params.lang['en-US'].textLinkPolicy : 'the user agreement.',
        thanksTitle: params.lang['en-US'].thanksTitle ? params.lang['en-US'].thanksTitle : 'Thanks',
        thanksText: params.lang['en-US'].thanksText ? params.lang['en-US'].thanksText : 'We will contact you soon <br> to get the details of your visit',
        textSubmit: params.lang['en-US'].textSubmit ? params.lang['en-US'].textSubmit : 'Book',
        tags: params.lang['en-US'].tags ? params.lang['en-US'].tags : 'Tags',
        eventTags: params.lang['en-US'].eventTags ? params.lang['en-US'].eventTags : 'Event',
        labelBirthday: params.lang['en-US'].labelBirthday ? params.lang['en-US'].labelBirthday : 'Date of birth',
        placeholderBirthday: params.lang['en-US'].placeholderBirthday ? params.lang['en-US'].placeholderBirthday : 'Date of birth',
        extraPolicyCheckboxText: params.lang['en-US'].extraPolicyCheckboxText ? params.lang['en-US'].extraPolicyCheckboxText : 'I agree to show the documents confirming the age when ordering',
        extraPolicyCheckboxLink: params.lang['en-US'].extraPolicyCheckboxLink ? params.lang['en-US'].extraPolicyCheckboxLink : 'alcoholic beverages.',
        subcsriptionCheckboxText: params.lang['ru-RU'].subcsriptionCheckboxText ? params.lang['ru-RU'].subcsriptionCheckboxText : 'I agree to receive advertising mailings and',
        subcsriptionCheckboxLink: params.lang['ru-RU'].subcsriptionCheckboxLink ? params.lang['ru-RU'].subcsriptionCheckboxLink : ' have read the rules.',
        labelchildren: params.lang['en-US'].labelchildren ? params.lang['en-US'].labelchildren : 'Number of children',
        labelAddSelect: params.lang['en-US'].labelAddSelect ? params.lang['en-US'].labelAddSelect : 'Select hall',
        errorName: params.lang['en-US'].errorName ? params.lang['en-US'].errorName : 'The Name field is not filled in',
        errorLastName: params.lang['en-US'].errorLastName ? params.lang['en-US'].errorLastName : 'The Last Name field is not filled in',
        errorPhone: params.lang['en-US'].errorPhone ? params.lang['en-US'].errorPhone : 'The Phone field is not filled in',
        errorBirthday: params.lang['en-US'].errorBirthday ? params.lang['en-US'].errorBirthday : 'The Birthday field is not filled in',
        errorEmail: params.lang['en-US'].errorEmail ? params.lang['en-US'].errorEmail : 'Email field is not filled in',
        errorDate: params.lang['en-US'].errorDate ? params.lang['en-US'].errorDate : 'The Date field is not filled in',
        placeholderTelegramUsername: params.lang['en-US'].placeholderTelegramUsername ? params.lang['en-US'].placeholderTelegramUsername : '@telegram',
        labelTelegramUsername: params.lang['en-US'].labelTelegramUsername ? params.lang['en-US'].labelTelegramUsername : 'Telegram',
        errorTelegramUsername: params.lang['en-US'].errorTelegramUsername ? params.lang['en-US'].errorTelegramUsername : 'Telegram field is not filled in',
      },
    },
    language: params.addLang ? params.addLang : {},
    qtyMaxWarning: params.qtyMaxWarning ? params.qtyMaxWarning : '',
    qtyMaxWarningMessage: params.qtyMaxWarningMessage ? params.qtyMaxWarningMessage : '',
    beforeSendReserves: params.beforeSendReserves ? params.beforeSendReserves : function () { },
    successCreateReserve: params.successCreateReserve ? params.successCreateReserve : function () { },
    afterHeadTitleHtml: params.afterHeadTitleHtml ? params.afterHeadTitleHtml : function () { return ''; },
    hookAfterDivTimes: params.hookAfterDivTimes ? params.hookAfterDivTimes : function () { return ''; },
    hookAfterButton: params.hookAfterButton ? params.hookAfterButton : function () { return ''; },
    hookAfterDate: params.hookAfterDate ? params.hookAfterDate : function () { return ''; },
    hookAfterComment: params.hookAfterComment ? params.hookAfterComment : function () { return ''; },
    hookAfterRestaurant: params.hookAfterRestaurant ? params.hookAfterRestaurant : function () { return ''; },
    hookAfterRooms: params.hookAfterRooms ? params.hookAfterRooms : function () { return ''; },
    hookBeforeRooms: params.hookBeforeRooms ? params.hookBeforeRooms : function () { return ''; },
    widgetCompleted: params.widgetCompleted ? params.widgetCompleted : function () { },
    changeDateCalendarBefore: params.changeDateCalendarBefore ? params.changeDateCalendarBefore : function () { },
    filterSlots: params.filterSlots ? params.filterSlots : function () { },
    changeDateCalendar: params.changeDateCalendar ? params.changeDateCalendar : function () { },
    changeQtyNumber: params.changeQtyNumber ? params.changeQtyNumber : function () { },
    changeSelectPoints: params.changeSelectPoints ? params.changeSelectPoints : function () { },
    changeSelectedRoom: params.changeSelectedRoom ? params.changeSelectedRoom : function () { },
    CustomOpenFunction: params.CustomOpenFunction ? params.CustomOpenFunction : function () { },
    CustomCloseFunction: params.CustomCloseFunction ? params.CustomCloseFunction : function () { },
    afterRenderSlots: params.afterRenderSlots ? params.afterRenderSlots : function () { },
    checkboxs: params.checkboxs ? params.checkboxs : [],
    multiplePolicyCheckboxes: params.multiplePolicyCheckboxes ? params.multiplePolicyCheckboxes : [],
    newMultiplePolicyCheckboxes: params.newMultiplePolicyCheckboxes ? params.newMultiplePolicyCheckboxes : [],
    inputs: params.inputs ? params.inputs : [],
    tags: params.tags ? params.tags : false,
    tagsButtons: params.tagsButtons ? params.tagsButtons : false,
    eventTags: params.eventTags ? params.eventTags : false,
    eventTagsRequired: params.eventTagsRequired ? params.eventTagsRequired : false,
    hallSelected: params.hallSelected ? params.hallSelected : false,
    newHallSelected: params.newHallSelected ? params.newHallSelected : false,
    disableWeekDay: params.disableWeekDay ? params.disableWeekDay : [],
    customDisabledDate: params.customDisabledDate ? params.customDisabledDate : false,
    redirect: params.redirect ? params.redirect : false,
    redirectLink: params.redirectLink ? params.redirectLink : '',
    redirectTimeout: params.redirectTimeout ? params.redirectTimeout : 5000,
    commentRequired: params.commentRequired ? params.commentRequired : false,
    lastNameNotRequired: params.lastNameNotRequired ? params.lastNameNotRequired : false,
    selectableDates: params.selectableDates ? params.selectableDates : false,
    qtySelectableDates: params.qtySelectableDates ? params.qtySelectableDates : 30,
    birthDate: params.birthDate ? params.birthDate : false,
    birthDateInput: params.birthDateInput ? params.birthDateInput : false,
    birthDateNotRequired: params.birthDateNotRequired ? params.birthDateNotRequired : false,
    validateNotEmptyBirthdateInput: params.validateNotEmptyBirthdateInput ? params.validateNotEmptyBirthdateInput : false,
    timesItemInterval: params.timesItemInterval ? params.timesItemInterval : false,
    timeSlotsInfo: params.timeSlotsInfo ? params.timeSlotsInfo : [],
    errorColor: params.errorColor ? params.errorColor : '#F07048',
    selectedPhoneCodeCountry: params.selectedPhoneCodeCountry ? params.selectedPhoneCodeCountry : '',
    selectedPhoneCodeValue: params.selectedPhoneCodeValue ? params.selectedPhoneCodeValue : '',
    defaultDate: params.defaultDate ? params.defaultDate : '',
    useCustomGetTimes: params.useCustomGetTimes ? params.useCustomGetTimes : false,
    customGetTimes: params.customGetTimes ? params.customGetTimes : function () { },
    blockedOpenTime: params.blockedOpenTime ? params.blockedOpenTime : false,
    blockedAutoLanding: params.blockedAutoLanding ? params.blockedAutoLanding : false,
    customInfo: params.customInfo ? params.customInfo : false,
    customInfoContent: params.customInfoContent ? params.customInfoContent : '',
    requiredSelect: params.requiredSelect ? params.requiredSelect : false,
    getSlotsDuration: params.getSlotsDuration ? params.getSlotsDuration : function () { },
    getSlotsDurationData: params.getSlotsDurationData ? params.getSlotsDurationData : false,
    guestCountSelect: params.guestCountSelect ? params.guestCountSelect : false,
    optionalRemarkedServer: params.optionalRemarkedServer ? params.optionalRemarkedServer : "https://app.remarked.ru/api/v1/ApiReservesWidget",
    amLang: params.amLang ? params.amLang : false,
    extraPolicyCheckbox: params.extraPolicyCheckbox ? params.extraPolicyCheckbox : false,
    extraPolicyCheckboxLink: params.extraPolicyCheckboxLink ? params.extraPolicyCheckboxLink : '',
    extraPolicyCheckboxNotRequired: params.extraPolicyCheckboxNotRequired ? params.extraPolicyCheckboxNotRequired : false,
    extraLinkPolicyChecked: params.extraLinkPolicyChecked ? params.extraLinkPolicyChecked : false,
    subcsriptionCheckbox: params.subcsriptionCheckbox ? params.subcsriptionCheckbox : false,
    subcsriptionCheckboxLink: params.subcsriptionCheckboxLink ? params.subcsriptionCheckboxLink : '#',
    subcsriptionCheckboxNotRequired: params.subcsriptionCheckboxNotRequired ? params.subcsriptionCheckboxNotRequired : false,
    subcsriptionCheckboxChecked: params.subcsriptionCheckboxChecked ? params.subcsriptionCheckboxChecked : false,
    checkFreeDates: params.checkFreeDates ? params.checkFreeDates : false,
    defaultRoomTab: params.defaultRoomTab ? params.defaultRoomTab : false,
    defaultRoomTabID: params.defaultRoomTabID ? params.defaultRoomTabID : '',
    customCommentText: params.customCommentText ? params.customCommentText : false,
    session_id: `session_${Date.now()}_${Math.random()}`,
    utmSourceToReserveSource: params.utmSourceToReserveSource ? params.utmSourceToReserveSource : false,
    utmMediumToReserveSource: params.utmMediumToReserveSource ? params.utmMediumToReserveSource : false,
    resetAfterHeadText: params.resetAfterHeadText ? params.resetAfterHeadText : false,
	  childrenCountSelect: params.childrenCountSelect ? params.childrenCountSelect : false,
    childrenQtyMaxWarning: params.childrenQtyMaxWarning ? params.childrenQtyMaxWarning : '',
    childrenQtyMaxWarningMessage: params.childrenQtyMaxWarningMessage ? params.childrenQtyMaxWarningMessage : '',
    eventsWidget: params.eventsWidget ? params.eventsWidget : false,
    getEventsData: params.getEventsData ? params.getEventsData : async function () { },
    eventsWidgetOptions: params.eventsWidgetOptions ? params.eventsWidgetOptions : '',
    createEventsWidgetBanners: params.createEventsWidgetBanners ? params.createEventsWidgetBanners : function () { },
    createEventsWidgetMarkup: params.createEventsWidgetMarkup ? params.createEventsWidgetMarkup : function () { },
    eventsWidgetCloseFunc: params.eventsWidgetCloseFunc ? params.eventsWidgetCloseFunc : function () { },
    showThemeChangeBtn: params.showThemeChangeBtn ? params.showThemeChangeBtn : false,
    defaultThemeDark: params.defaultThemeDark ? params.defaultThemeDark : false,
    addToWaitList: params.addToWaitList ? params.addToWaitList : false,
    customClickerOnWidget: params.customClickerOnWidget ? params.customClickerOnWidget : false,
    addSearchRest: params.addSearchRest ? params.addSearchRest : false,
  };

  if (options.newSlotsTime || (!options.newSlotsTime && !options.rangeSlotsTime)) {
    options.newSlotsTime = false;
    options.rangeSlotsTime = true;
    options.blockedOpenTime = true;
    options.blockedAutoLanding = true;
  }

  if (options.newSlotsTime && options.newSlotsTimeOpenTime) {
    options.blockedOpenTime = false;
  }

  let translate;
  if (options.lang[lang]) {
    translate = options.lang[lang];
  } else if (options.language[lang]) {
    translate = options.language[lang];
  } else {
    translate = options.lang['ru-RU'];
    lang = 'ru-RU';
  }

  let tagsData;
  let tagsInstance;

  let eventTagsData;
  let eventTagsInstance;

  //console.log(options);
  let remarkedPrimaryWidgetWrap = document.createElement('div');
  remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget__wrap');
  if (params.customWidgetClass) {
    remarkedPrimaryWidgetWrap.classList.add(params.customWidgetClass)
  }

  if (params.customWidgetId) {
    remarkedPrimaryWidgetWrap.setAttribute('id', params.customWidgetId);
  }

  if (options.email) {
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget__wrap--email');
  }

  if (options.lastName) {
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget__wrap--lastname');
  }

  if (options.birthDate) {
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget__wrap--birthday');
  }

  if (options.oneGuestOneTable) {
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget__wrap--oneGuestOneTable');
  }

  let remarkedPrimaryWidgetClose = document.createElement('div');
  remarkedPrimaryWidgetClose.classList.add('remarked-primary-widget__close')
  remarkedPrimaryWidgetClose.innerHTML += '<svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="#f07048" fill-rule="evenodd"> <rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect> <rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect> </g> </svg>'
  remarkedPrimaryWidgetWrap.append(remarkedPrimaryWidgetClose);

  let remarkedPrimaryWidget = document.createElement('div');
  remarkedPrimaryWidget.classList.add('remarked-primary-widget');

  if (options.showThemeChangeBtn) {
    let toggleThemeContainer = document.createElement('div');
    toggleThemeContainer.classList.add('remarked-primary-widget__toggleTheme-container');

    function updateSavedTheme(newTheme) {
      localStorage.setItem('remarked-widget-reserve-theme', newTheme);
    }

    let themeSaved = localStorage.getItem('remarked-widget-reserve-theme');

    switch(themeSaved) {
      case 'dark':
        remarkedPrimaryWidget.classList.toggle('remarked-primary-widget_darkTheme');
        toggleThemeContainer.innerHTML = `<div class="remarked-primary-widget__toggleTheme-button remarked-primary-widget__toggleTheme-button--active"></div>`;
      break;
      case 'light':
        toggleThemeContainer.innerHTML = `<div class="remarked-primary-widget__toggleTheme-button"></div>`;
      break;
      default:
        if (options.defaultThemeDark) remarkedPrimaryWidget.classList.toggle('remarked-primary-widget_darkTheme');
        toggleThemeContainer.innerHTML = `<div class="remarked-primary-widget__toggleTheme-button ${options.defaultThemeDark ? 'remarked-primary-widget__toggleTheme-button--active' : ''}"></div>`
    }

    toggleThemeContainer.addEventListener('click', function() {
      remarkedPrimaryWidget.classList.toggle('remarked-primary-widget_darkTheme');
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__toggleTheme-button').classList.toggle('remarked-primary-widget__toggleTheme-button--active');
      updateSavedTheme(remarkedPrimaryWidget.classList.contains('remarked-primary-widget_darkTheme') ? 'dark' : 'light');
    });

    remarkedPrimaryWidget.append(toggleThemeContainer);
  }

  let remarkedPrimaryWidgetContainer = document.createElement('div');
  remarkedPrimaryWidgetContainer.classList.add('remarked-primary-widget__container');

  remarkedPrimaryWidget.append(remarkedPrimaryWidgetContainer);

  let remarkedPrimaryWidgetHeader = document.createElement('div');
  remarkedPrimaryWidgetHeader.classList.add('remarked-primary-widget__header');
  remarkedPrimaryWidgetHeader.innerHTML += '<div class="remarked-primary-widget__title">' + translate.headTitle + '</div>' + options.afterHeadTitleHtml();

  if (options.customInfo) {
    remarkedPrimaryWidgetHeader.querySelector('.remarked-primary-widget__title').insertAdjacentHTML('beforeend', `
  		<span class="remarked-primary-widget__info-icon"></span>
  	`);
    remarkedPrimaryWidgetHeader.querySelector('.remarked-primary-widget__title').insertAdjacentHTML('afterend', `
  		<div class="remarked-primary-widget__info">
  			<div class="remarked-primary-widget__info-close"></div>
  			<div class="remarked-primary-widget__info-container">
  				${options.customInfoContent}
  			</div>
  		</div>
  	`);
  }

  remarkedPrimaryWidgetContainer.append(remarkedPrimaryWidgetHeader);

  let remarkedPrimaryWidgetBody = document.createElement('div');
  remarkedPrimaryWidgetBody.classList.add('remarked-primary-widget__body');

  remarkedPrimaryWidgetContainer.append(remarkedPrimaryWidgetBody);

  let bookingList = options.booking;
  let bookingListHTML = document.createElement('div');
  bookingListHTML.classList.add('remarked-primary-widget__restaurant');


  if (bookingList.length < 2) {
    let name = typeof (bookingList[0].name) == 'object' ? bookingList[0].name[lang] : bookingList[0].name;
    bookingListHTML.innerHTML += '<div class="remarked-primary-widget__restaurant-item" data-point="' + bookingList[0].point + '">' + name + '</div>';
    bookingListHTML.classList.add('remarked-primary-widget__restaurant--not');
    remarkedPrimaryWidgetBody.append(bookingListHTML);
    getToken(bookingList[0].point);
  } else {
    let select = document.createElement('select');
    select.classList.add('remarked-primary-widget__restaurant-select');
    bookingList.forEach(element => {
      let name = typeof (element.name) == 'object' ? element.name[lang] : element.name;
      select.innerHTML += '<option value="' + element.point + '">' + name + '</option>';
    });
    bookingListHTML.innerHTML += '<label>' + translate.headText + '</label>';
    bookingListHTML.append(select);
    remarkedPrimaryWidgetBody.append(bookingListHTML);
     if (options.requiredSelect) {
      let newOption = new Option(translate.bookingNewOption, '', true, true);
      newOption.disabled = true;
      select.prepend(newOption);
    }
    if (bookingList.length >= 10 && options.addSearchRest) {
      select.classList.add('remarked-primary-widget__restaurant-select-chosen');
      async function loadScripts() {
          try {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://remarked.ru/widget/new/css/chosenStylesheet.css';
            document.head.appendChild(link);
            await import('https://remarked.ru/widget/new/js/chosen/jquery.min.js');
            await import('https://remarked.ru/widget/new/js/chosen/chosen.jquery.min.js');

            $('.remarked-primary-widget__restaurant-select').chosen({
                width: '100%',
                no_results_text: 'Совпадений не найдено',
                placeholder_text_single: 'Поиск'
            });
          } catch (error) {
            console.error('Ошибка загрузки:', error);
          }
      }

      loadScripts();
    }
    getToken(bookingList[0].point);
  }

  remarkedPrimaryWidgetBody.innerHTML += `
    ${options.hookAfterRestaurant()}
    <div class="remarked-primary-widget__form-row remarked-primary-widget__form-row-custom">
      <div class="remarked-primary-widget__form-col remarked-primary-widget__form-col-name">
        <div class="remarked-primary-widget__input">
          <label for="name_${options.session_id}">${translate.labelName}</label>
          <input id="name_${options.session_id}" type="text" placeholder="${translate.placeholderName}" name="remarked-primary-widget-name" maxlength="50" minlength="2" autocomplete="off">
          ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorName}</span>` : ''}
        </div>
      </div>
      <div class="remarked-primary-widget__form-col remarked-primary-widget__form-col-lastname">
        <div class="remarked-primary-widget__input">
          <label for="lastname_${options.session_id}">${translate.labelLastName}</label>
          <input id="lastname_${options.session_id}" type="text" placeholder="${translate.placeholderLastName}" name="remarked-primary-widget-lastname" maxlength="50" minlength="2" autocomplete="off">
          ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorLastName}</span>` : ''}
        </div>
      </div>
      <div class="remarked-primary-widget__form-col remarked-primary-widget__form-col-phone">
        <div class="remarked-primary-widget__input">
          <label for="phone_${options.session_id}">${translate.labelPhone}</label>
          <input id="phone_${options.session_id}" type="tel" placeholder="${translate.placeholderPhone}" name="remarked-primary-widget-phone" autocomplete="off">
          ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorPhone}</span>` : ''}
        </div>
      </div>
      <div class="remarked-primary-widget__form-col remarked-primary-widget__form-col-birthday">
        <div class="remarked-primary-widget__input">
          <label for="birthday_${options.session_id}">${translate.labelBirthday}</label>
          <input id="birthday_${options.session_id}" type="text" placeholder="${translate.placeholderBirthday}" ${!options.birthDateInput ? 'readonly' : ''} name="remarked-primary-widget-birthday" class="remarked-primary-widget-birthday" autocomplete="off">
          ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorBirthday}</span>` : ''}
        </div>
      </div>
      <div class="remarked-primary-widget__form-col remarked-primary-widget__form-col-email">
        <div class="remarked-primary-widget__input">
          <label for="email_${options.session_id}">${translate.labelEmail}</label>
          <input id="email_${options.session_id}" type="email" placeholder="${translate.placeholderEmail}" name="remarked-primary-widget-email" autocomplete="off">
          ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorEmail}</span>` : ''}
        </div>
      </div>
      ${options.telegramUsername ? `
        <div class="remarked-primary-widget__form-col remarked-primary-widget__form-col-telegram-username">
          <div class="remarked-primary-widget__input">
            <label for="telegram-username_${options.session_id}">${translate.labelTelegramUsername}</label>
            <input id="telegram-username_${options.session_id}" type="text" placeholder="${translate.placeholderTelegramUsername}" name="remarked-primary-widget-telegram-username" autocomplete="off">
            ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorTelegramUsername}</span>` : ''}
          </div>
        </div>
      ` : ''}
    </div>
    <div class="remarked-primary-widget__form-row remarked-primary-widget__form-row-date-count-guest">
      <div class="remarked-primary-widget__form-col">
        <div class="remarked-primary-widget__qty">
          <label for="remarked-primary-widget__qty">${translate.labelCountGuest}</label>
          <div class="remarked-primary-widget__qty-wrap"></div>
        </div>
      </div>
      <div class="remarked-primary-widget__form-col">
        <div class="remarked-primary-widget__date">
          <label for="date_${options.session_id}">${translate.labelDate}</label>
          <div class="remarked-primary-widget__date-wrap">
            <input id="date_${options.session_id}" type="text" placeholder="${translate.placeholderDate}" readonly name="remarked-primary-widget-date" class="remarked-primary-widget__date-select">
            ${options.showErrorNoticeValidate ? `<span class="remarked-primary-widget__input-error-notice">${translate.errorDate}</span>` : ''}
          </div>
        </div>
      </div>
      ${options.hookAfterDate()}
    </div>
    <div class="remarked-primary-widget__times">
      <label>${translate.labelTime}</label>
      <input type="hidden" class="remarked-primary-widget__times-input">
      <div class="remarked-primary-widget__times-wrap"></div>
      <div class="remarked-primary-widget__times-notice">${translate.noticeTime}</div>
    </div>
    ${options.hookAfterDivTimes()}
    <div class="remarked-multiplay-select-wrapper"></div>
    <div class="remarked-multiplay-select-single-wrapper"></div>
    <div class="remarked-primary-widget__comment">
      <label for="comment_${options.session_id}" ${options.commentRequired ? '' : ' class="__not-required"'}>${translate.labelComment}</label>
      <textarea id="comment_${options.session_id}" maxlength="500" name="remarked-primary-widget__textarea" placeholder="${translate.placeholderComment}"></textarea>
    </div>
    ${options.hookAfterComment()}
    <div class="remarked-primary-widget__submit-wrap">
      <div class="remarked-primary-widget__submit">${translate.textSubmit}</div>
      <div class="remarked-primary-widget__policy">
        <div class="remarked-primary-widget__policy-checkbox">
          <input type="checkbox">
        </div>
        <div class="remarked-primary-widget__policy-text">
          ${translate.textPolicy} <a href="${options.linkPolicy}"> ${translate.textLinkPolicy} </a>
        </div>
      </div>
    </div>
    ${options.hookAfterButton()}
  `;

  let guestQtyWrap = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qty-wrap');
  if (!options.guestCountSelect) {
    guestQtyWrap.innerHTML = ` <button class="remarked-primary-widget__qtyminus" aria-hidden="true">&minus;</button>
    <input type="text" readonly readonly name="remarked-primary-widget__qty" id="remarked-primary-widget__qty" min="${options.qtyMin}" max="${options.qtyMax}" step="1" value="${options.qtyMin}">
    <button class="remarked-primary-widget__qtyplus" aria-hidden="true">&plus;</button>`;
  } else {
    let qtySelect = document.createElement('select');
    qtySelect.name = 'remarked-primary-widget__qty';
    qtySelect.id = 'remarked-primary-widget__qty';
    guestQtyWrap.append(qtySelect);

    for (let i = options.qtyMin; i <= options.qtyMax; i++) {
      let option = document.createElement('option');
      option.classList.add('remarked-primary-widget__qty-option');
      option.value = i;
      option.textContent = i;
      qtySelect.append(option);
    }
  }

  let guestsBlock = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qty');

  if (options.children && !options.childrenCountSelect) {
    guestsBlock.insertAdjacentHTML("afterend", `<div class="remarked-primary-widget__children-qty">
          <label for="remarked-primary-widget__children-qty">${translate.labelchildren}</label>
          <div class="remarked-primary-widget__children-qty-wrap"></div>
        </div>`);

    let childrenQtyWrap = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qty-wrap');

    childrenQtyWrap.innerHTML = ` <button class="remarked-primary-widget__children-qtyminus" aria-hidden="true">&minus;</button>
    <input type="text" readonly name="remarked-primary-widget__children-qty" id="remarked-primary-widget__children-qty" min="${options.childrenQtyMin}" max="${options.childrenQtyMax}" step="1" value="${options.childrenQtyMin}">
    <button class="remarked-primary-widget__children-qtyplus" aria-hidden="true">&plus;</button>`;
  } else if (options.children && options.childrenCountSelect) {
    guestsBlock.insertAdjacentHTML("afterend", `<div class="remarked-primary-widget__children-qty">
      <label for="remarked-primary-widget__children-qty">${translate.labelchildren}</label>
      <div class="remarked-primary-widget__children-qty-wrap"></div>
    </div>`);

    let childrenQtyWrap = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qty-wrap');

    let childrenQtySelect = document.createElement('select');
    childrenQtySelect.name = 'remarked-primary-widget__children-qty';
    childrenQtySelect.id = 'remarked-primary-widget__children-qty';
    childrenQtyWrap.append(childrenQtySelect);

    for (let i = options.childrenQtyMin; i <= options.childrenQtyMax; i++) {
      let childrenOption = document.createElement('option');
      childrenOption.classList.add('remarked-primary-widget__children-qty-option');
      childrenOption.value = i;
      childrenOption.textContent = i;
      childrenQtySelect.append(childrenOption);
    }
  }


  if (options.birthdayTable) {
    let birthdayTable = document.createElement('div');
    birthdayTable.classList.add('remarked-primary-widget__switch', 'remarked-primary-widget__birthdayTable');
    birthdayTable.innerHTML += `
  		<div class="remarked-primary-widget__switch-checkbox">
        <input type="checkbox" id="remarked-primary-widget__birthdayTable-input">
      </div>
      <div class="remarked-primary-widget__switch-text">
        За столом будет именинник
      </div>
  	`;
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').before(birthdayTable);
  }

  if (options.сhildСhair) {
    let сhildСhair = document.createElement('div');
    сhildСhair.classList.add('remarked-primary-widget__switch', 'remarked-primary-widget__сhildСhair');
    сhildСhair.innerHTML += `
  		<div class="remarked-primary-widget__switch-checkbox">
        <input type="checkbox" id="remarked-primary-widget__сhildСhair-input">
      </div>
      <div class="remarked-primary-widget__switch-text">
        Понадобится детский стульчик?
      </div>
  	`;
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').before(сhildСhair);
  }

  if (options.sendAfterMessage) {
    let sendAfterMessage = document.createElement('div');
    sendAfterMessage.classList.add('remarked-primary-widget__sendAfterMessage');
    sendAfterMessage.innerHTML += `
  		<label>Отправить подтверждение</label>
  		<label class="__not-required">
  			<input type="radio" name="sendAfterMessage" value="whatsapp" checked>
  			whatsapp
  		</label>
  		<label class="__not-required">
  			<input type="radio" name="sendAfterMessage" value="sms">
  			sms
  		</label>
  	`;
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').after(sendAfterMessage);
  }

  if (!options.emailRequired && options.email) {
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__form-col-email label').classList.add('__not-required');
  }

  if (!options.telegramUsernameRequired && options.telegramUsername) {
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__form-col-telegram-username label').classList.add('__not-required');
  }

  if (options.checkboxs.length > 0) {
    let checkboxs = options.checkboxs;
    for (let i = 0; i < checkboxs.length; i++) {
      let item = checkboxs[i];
      let { name, id } = item;
      let checkbox = document.createElement('div');
      checkbox.setAttribute('data-checkboxs-index', i);
      checkbox.classList.add('remarked-primary-widget__switch', 'remarked-primary-widget__' + id);
      checkbox.innerHTML += `
      	${item.beforeHTML ? item.beforeHTML : ''}
	  		<div class="remarked-primary-widget__switch-checkbox">
	        <input type="checkbox" id="remarked-primary-widget__${id}-input">
	      </div>
	      <div class="remarked-primary-widget__switch-text">
	        ${name}
	      </div>
	      ${item.afterHTML ? item.afterHTML : ''}
	  	`;
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').before(checkbox);
    }
  }

  if (options.customClickerOnWidget) {
		remarkedPrimaryWidgetContainer.addEventListener('click', (e) => {
			options.customClickerOnWidget(e, options);
		})
	}

  if (options.multiplePolicyCheckboxes && options.multiplePolicyCheckboxes.length > 0) {
    let wrapper = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit-wrap');

    options.multiplePolicyCheckboxes.forEach(checkbox => {
      let policyCheckbox = document.createElement('div');
      policyCheckbox.classList.add('remarked-primary-widget__policy');
      policyCheckbox.innerHTML = `
        <div class="remarked-primary-widget__policy-checkbox">
          <input type="checkbox" id="remarked-primary-widget__${checkbox.id}-input">
        </div>
        <div class="remarked-primary-widget__policy-text">
          ${checkbox.text}
        </div>
      `;
      wrapper.insertAdjacentElement('beforeend', policyCheckbox);
    });
  }



  if (options.inputs.length > 0) {
    let inputs = options.inputs;
    for (let i = 0; i < inputs.length; i++) {
      let item = inputs[i];
      let { name, POSTname, id, type, required, placeholder, maxlength, minlength } = item;
      let input = document.createElement('div');
      input.classList.add('remarked-primary-widget__custom-input', 'remarked-primary-widget__' + id);

      if (maxlength) {
        maxlength = 'maxlength="' + maxlength + '"';
      } else {
        maxlength = 'maxlength="50"';
      }

      if (minlength) {
        minlength = 'minlength="' + minlength + '"';
      } else {
        minlength = '';
      }

      let requiredClass = '';
      if (required) {
        required = 'required="required"';
      } else {
        required = '';
        requiredClass = 'class="__not-required"';
      }

      if (!type) type = 'text';

      input.innerHTML += `
  			<label ${requiredClass}>${name}</label>
	  		<input type="${type}" placeholder="${placeholder}" name="remarked-primary-widget-${id}" ${maxlength} ${minlength} ${required} autocomplete="off">
	  	`;
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').before(input);
    }
  }

  if (options.linkPolicyChecked) {
    remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__policy-checkbox input').checked = true;
    remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__policy-checkbox').classList.add('remarked-primary-widget__policy-checkbox--active');
  }

  if (options.linkPolicyEnforced) {
    const checkbox = remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__policy-checkbox input');
    checkbox.checked = true;      // Устанавливаем галочку
    checkbox.disabled = true;     // Блокируем чекбокс
  }

  let remarkedPrimaryWidgetSucces = document.createElement('div');
  remarkedPrimaryWidgetSucces.classList.add('remarked-primary-widget__success');
  let textSuccessEnd = options.multi ? translate.thanksText : options.textSuccess;
  remarkedPrimaryWidgetSucces.innerHTML += `
    <div class="remarked-primary-widget__title">${translate.thanksTitle}</div>
    ${textSuccessEnd}
  `;

  remarkedPrimaryWidgetContainer.append(remarkedPrimaryWidgetSucces);

  if (options.lastNameNotRequired) {
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__form-col-lastname label').classList.add('__not-required');
  }

  if (options.birthDateNotRequired) {
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__form-col-birthday label').classList.add('__not-required');
  }

  if (Object.keys(options.selectAdd).length != 0) {
    let selectAddHtml = document.createElement('div');
    selectAddHtml.classList.add('remarked-primary-widget__first-select')

    let selectOptions = options.selectAdd.options || []; // Исправлено: используем данные из options.booking[0].rooms
    let arrOpt = []

    selectOptions.forEach(function (item) {
      let name = item.name;
      let value = item.id; // Используем id как value для опции
      if (!value) value = item.value;
      let opt = document.createElement('option');
      opt.textContent = name;
      opt.setAttribute('value', value);
      arrOpt.push(opt.outerHTML);

    });
    let requiredAttr = options.selectAdd.required ? 'required' : '';
    selectAddHtml.innerHTML = `
  		<label id="remarked-add-name" for="remarked-add-select">${options.selectAdd.name}</label>
  		<select id="remarked-add-select">${arrOpt.join('')}</select>
  	`;

    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').before(selectAddHtml);

  }

  if (Object.keys(options.secondSelectAdd).length != 0) {
    let secondSelectAddHtml = document.createElement('div');
    secondSelectAddHtml.classList.add('remarked-primary-widget__second-select')

    let secondSelectOptions = options.secondSelectAdd.options || [];
    let secondArrOpt = [];

    secondSelectOptions.forEach(function (item) {
        let name = item.name;
        let value = item.value;
        let selected = item.selected;

        let opt = document.createElement('option');
        opt.textContent = name;
        opt.setAttribute('value', value);
        if (selected) {
            opt.setAttribute('selected', 'selected');
        }

        secondArrOpt.push(opt.outerHTML);
    });

    secondSelectAddHtml.innerHTML = `
        <label id="remarked-second-add-name" for="remarked-second-add-select">${options.secondSelectAdd.name}</label>
        <select id="remarked-second-add-select">${secondArrOpt.join('')}</select>
    `;

    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment').before(secondSelectAddHtml);
}

  if (options.customInfo) {
    const modal = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__info');
    const info = remarkedPrimaryWidget.querySelectorAll('.remarked-primary-widget__info-icon');
    for (let i = 0; i < info.length; i++) {
      info[i].addEventListener('click', function () {
        modal.classList.add('remarked-primary-widget__info--active');
      });
    }

    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__info-close').addEventListener('click', function () {
      modal.classList.add('remarked-primary-widget__info--none');
      setTimeout(function () {
        modal.classList.remove('remarked-primary-widget__info--active');
        modal.classList.remove('remarked-primary-widget__info--none');
      }, 450);
    });
  }

  if (options.extraPolicyCheckbox) {
    let checkbox = document.createElement('div');
    checkbox.classList.add('remarked-primary-widget__extraPolicyCheck');
    checkbox.innerHTML += `
      <div class="remarked-primary-widget__extraPolicyCheck-checkbox">
        <input type="checkbox">
      </div>
      <div class="remarked-primary-widget__extraPolicyCheck-text">
        ${translate.extraPolicyCheckboxText} <a href="${options.extraPolicyCheckboxLink}" target="_blank"> ${translate.extraPolicyCheckboxLink} </a>
      </div>
    `;

    let policy = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy');

    let wrapper = document.createElement('div');
    wrapper.classList.add('remarked-primary-widget__chekbox-wrap');
    wrapper.appendChild(policy);
    wrapper.appendChild(checkbox);

    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit-wrap').appendChild(wrapper);
  }

  if (options.subcsriptionCheckbox) {
    let checkbox = document.createElement('div');
    checkbox.classList.add('remarked-primary-widget__subcsriptionCheckbox');
    checkbox.innerHTML += `
      <div class="remarked-primary-widget__subcsriptionCheckbox-checkbox">
        <input type="checkbox">
      </div>
      <div class="remarked-primary-widget__subcsriptionCheckbox-text">
        ${translate.subcsriptionCheckboxText} <a href="${options.subcsriptionCheckboxLink}" target="_blank"> ${translate.subcsriptionCheckboxLink} </a>
      </div>
    `;

    let policy = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy');

    let wrapper = document.createElement('div');
    wrapper.classList.add('remarked-primary-widget__chekbox-wrap');
    wrapper.appendChild(policy);
    wrapper.appendChild(checkbox);

    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit-wrap').appendChild(wrapper);

    if (options.subcsriptionCheckboxChecked) {
      remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox input').checked = true;
      remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox').classList.add('remarked-primary-widget__subcsriptionCheckbox-checkbox--active');
    }
  }

  if (options.extraLinkPolicyChecked) {
    remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox input').checked = true;
    remarkedPrimaryWidgetBody.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox').classList.add('remarked-primary-widget__extraPolicyCheck-checkbox--active');
  }

  if (options.newMultiplePolicyCheckboxes && options.newMultiplePolicyCheckboxes.length > 0) {
    options.newMultiplePolicyCheckboxes.forEach(checkbox => {
      let policyCheckbox = document.createElement('div');
      policyCheckbox.classList.add('remarked-primary-widget__new-policy');
      policyCheckbox.classList.add('remarked-primary-widget__policy');
      policyCheckbox.innerHTML = `
        <div class="remarked-primary-widget__policy-checkbox">
          <input type="checkbox" id="remarked-primary-widget__${checkbox.id}-input">
        </div>
        <div class="remarked-primary-widget__policy-text">
          ${checkbox.text}
        </div>
      `;
      let wrapper = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__chekbox-wrap');
      wrapper.appendChild(policyCheckbox);
    });
  }

  async function getToken(point) {
    startPreloader();
    const remarkedXHR = new XMLHttpRequest();

    const remarkedBody = {
      method: 'GetToken',
      point: point,
      request_id: new Date().getTime(),
      session_id: options.session_id,
    }

    let remarkedBodyJSON = JSON.stringify(remarkedBody);

    remarkedXHR.open('POST', remarkedReqUrl);

    remarkedXHR.responseType = 'json';
    remarkedXHR.setRequestHeader('Content-Type', 'application/json');

    remarkedXHR.onload = async function () {
      if (remarkedXHR.response.status == "error") {
        endPreloader(); // Добавляем вызов endPreloader в случае ошибки
        return false;
      }
      remarkedToken = remarkedXHR.response.token;
      if (options.tags) {
        getTags();
      }
      if (options.eventTags) {
        getEventTags();
      }

      await checkFreeDates();

      if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').value != "") {
        getTimes();
      } else {
        endPreloader();
      }
    }

    remarkedXHR.onreadystatechange = function () {
      if (remarkedXHR.readyState == 4) {
        remarkedToken = remarkedXHR.response.token;
        //remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').value = "none";
      }
    }
    remarkedXHR.onerror = function() { // Добавляем обработчик ошибок для XHR
      endPreloader();
      console.error('XHR request failed in getToken');
    };
    remarkedXHR.send(remarkedBodyJSON);
  }

  async function getTags() {
    await fetch(remarkedReqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        method: "GetGuestsTags",
        token: remarkedToken,
        request_id: new Date().getTime()
      })
    }).then((response) => {
      return response.json();
    })
      .then((data) => {
        tagsData = data.guest_tags;
        if (options.tagsButtons) {
					renderTagsButton(tagsData);
				} else {
					try {
	          if (tagsInstance instanceof remarkedMultiplaySelect) {
	            tagsInstance.update(tagsData);
	          } else {
	            tagsInstance = new remarkedMultiplaySelect(remarkedPrimaryWidget.querySelector('.remarked-multiplay-select-wrapper'), tagsData, translate.tags);
	            tagsInstance.render();
	          }
	        } catch (e) {
	          console.log(e);
	          options.tags = false;
	        }
				}
      });
  }

  function renderTagsButton(data = []) {

		const prev = remarkedPrimaryWidget.querySelector('.remarked-tags-wrapper');
		if (prev) {
			prev.remove();
		}

		let tagsMarkup = '';

		for (const tag of data) {
			const template = `<div class="remarked-tags-button-item" data-id="${tag.id}" data-color="${tag.color}">${tag.name}</div>`;
			if (options.tagsIncludeType) {
				const tagType = tag.type;
				if (options.tagsIncludeType.includes(tagType)) {
					tagsMarkup += template;
				}
			} else {
				tagsMarkup += template;
			}
		}

		if (!tagsMarkup.length) return;

		remarkedPrimaryWidget.querySelector('.remarked-tags-button').insertAdjacentHTML('beforeend', `<div class="remarked-tags-wrapper">${tagsMarkup}</div>`);

		const wrapper = remarkedPrimaryWidget.querySelector('.remarked-tags-button');
		wrapper.addEventListener('click', (e) => {
			const target = e.target;

			if (target.closest('.remarked-tags-button-item')) {
				const item = target.closest('.remarked-tags-button-item');

				if (item.classList.contains('remarked-tags-button-item--active')) {
					item.classList.remove('remarked-tags-button-item--active');
				} else {
					item.classList.add('remarked-tags-button-item--active');
				}
			}
		});
	}

  async function getEventTags() {
    await fetch(remarkedReqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        method: "GetEventTags",
        token: remarkedToken,
        request_id: new Date().getTime()
      })
    }).then((response) => {
      return response.json();
    })
      .then((data) => {
        eventTagsData = data.eventTags;
        try {
          if (eventTagsInstance instanceof remarkedMultiplaySelect) {
            eventTagsInstance.update(eventTagsData);
          } else {
            eventTagsInstance = new remarkedMultiplaySelect(remarkedPrimaryWidget.querySelector('.remarked-multiplay-select-single-wrapper'), eventTagsData, translate.eventTags, true, options.eventTagsRequired);
            eventTagsInstance.render();
          }
        } catch (e) {
          console.log(e);
          options.eventTags = false;
        }
      });
  }

  function remarkedPrimaryWidgetQty() {
    let input = remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty');

    function warning(count) {
      if (options.qtyMaxWarning == '' || options.qtyMaxWarningMessage == '') return false;
      let message = document.createElement('div');
      message.classList.add('remarked-primary-widget__qty--warning');
      message.innerHTML = options.qtyMaxWarningMessage;
      if (count >= options.qtyMaxWarning) {
        if (!remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qty--warning')) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qty').parentElement.parentElement.append(message);
        }
      } else {
        if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qty--warning')) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qty--warning').remove();
        }
      }
    }

    if (!options.guestCountSelect) {
      let btnminus = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qtyminus');
      let btnplus = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__qtyplus');

      if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

        function qtyminus(e) {

          let min = Number(input.getAttribute('min'));
          let max = Number(input.getAttribute('max'));
          let step = Number(input.getAttribute('step'));

          let current = Number(input.value);
          let newval = (current - step);
          if (newval < min) {
            newval = min;
          } else if (newval > max) {
            newval = max;
          }
          input.value = Number(newval);
          e.preventDefault();
          warning(newval);
          options.changeQtyNumber(newval, remarkedPrimaryWidgetWrap, options);
          checkFreeDates(newval);
          getTimes();
        }

        function qtyplus(e) {

          let min = Number(input.getAttribute('min'));
          let max = Number(input.getAttribute('max'));
          let step = Number(input.getAttribute('step'));

          let current = Number(input.value);
          let newval = (current + step);
          if (newval > max) newval = max;
          input.value = Number(newval);
          e.preventDefault();
          warning(newval);
          options.changeQtyNumber(newval, remarkedPrimaryWidgetWrap, options);
          checkFreeDates(newval);
          getTimes();
        }

        // btnminus.addEventListener('click', qtyminus);
        // btnplus.addEventListener('click', qtyplus);

        let timeoutId;
        btnminus.addEventListener('click', function (e) {
          timeoutId = setTimeout(qtyminus(e), 100);
          clearTimeout(timeoutId);
        });

        btnplus.addEventListener('click', function (e) {
          timeoutId = setTimeout(qtyplus(e), 100);
          clearTimeout(timeoutId);
        });

        if (options.qtyInput) {
          input.removeAttribute('readonly');
          input.setAttribute('type', 'number');

          let timer = null;

          input.addEventListener('input', function () {
            clearTimeout(timer);
            let value = +this.value.replace(/\D/g, "");
            let max = Number(input.getAttribute('max'));

            if (value > max) value = max;
            this.value = value;
            if (value) {
              timer = setTimeout(() => {
                checkFreeDates(value);
                options.changeQtyNumber(value, remarkedPrimaryWidgetWrap, options);
                warning(value);
                getTimes();
              }, 500);
            }
          });
        }

      }
    } else {
      if (input !== undefined && input !== null) {
        input.addEventListener('change', function () {
          checkFreeDates(input.value);
          warning(input.value);
          timeoutId = setTimeout(getTimes(), 100);
          clearTimeout(timeoutId);
        })

      }
    }
  }

  remarkedPrimaryWidgetQty();

  function remarkedPrimaryWidgetChildrenQty() {
    let input = remarkedPrimaryWidget.querySelector('#remarked-primary-widget__children-qty');

    function warning(count) {
      if (options.childrenQtyMaxWarning == '' || options.childrenQtyMaxWarningMessage == '') return false;
      let message = document.createElement('div');
      message.classList.add('remarked-primary-widget__children-qty--warning');
      message.innerHTML = options.childrenQtyMaxWarningMessage;
      if (count >= options.childrenQtyMaxWarning) {
        if (!remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qty--warning')) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qty').parentElement.parentElement.append(message);
        }
      } else {
        if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qty--warning')) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qty--warning').remove();
        }
      }
    }

    if (!options.childrenCountSelect) {
      let btnminus = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qtyminus');
      let btnplus = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__children-qtyplus');

      if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

        function qtyminus(e) {

          let min = Number(input.getAttribute('min'));
          let max = Number(input.getAttribute('max'));
          let step = Number(input.getAttribute('step'));

          let current = Number(input.value);
          let newval = (current - step);
          if (newval < min) {
            newval = min;
          } else if (newval > max) {
            newval = max;
          }
          input.value = Number(newval);
          e.preventDefault();
          warning(newval);
          options.changeQtyNumber(newval, remarkedPrimaryWidgetWrap, options);
          getTimes();
        }

        function qtyplus(e) {

          let min = Number(input.getAttribute('min'));
          let max = Number(input.getAttribute('max'));
          let step = Number(input.getAttribute('step'));

          let current = Number(input.value);
          let newval = (current + step);
          if (newval > max) newval = max;
          input.value = Number(newval);
          e.preventDefault();
          warning(newval);
          options.changeQtyNumber(newval, remarkedPrimaryWidgetWrap, options);
          getTimes();
        }

        // btnminus.addEventListener('click', qtyminus);
        // btnplus.addEventListener('click', qtyplus);

        let timeoutId;
        btnminus.addEventListener('click', function (e) {
          timeoutId = setTimeout(qtyminus(e), 100);
          clearTimeout(timeoutId);
        });

        btnplus.addEventListener('click', function (e) {
          timeoutId = setTimeout(qtyplus(e), 100);
          clearTimeout(timeoutId);
        });

        if (options.childrenQtyInput) {
          input.removeAttribute('readonly');
          input.setAttribute('type', 'number');

          let timer = null;

          input.addEventListener('input', function () {
            clearTimeout(timer);
            let value = +this.value.replace(/\D/g, "");
            if (value > max) value = max;
            this.value = value;
            if (value) {
              timer = setTimeout(() => {
                options.changeQtyNumber(value, remarkedPrimaryWidgetWrap, options);
                warning(value);
                getTimes();
              }, 500);
            }
          });
        }

      }
    } else {
      if (input !== undefined && input !== null) {
        input.addEventListener('change', function () {
          warning(input.value);
          timeoutId = setTimeout(getTimes(), 100);
          clearTimeout(timeoutId);
        })

      }
    }
  }

  remarkedPrimaryWidgetChildrenQty();

  remarkedPrimaryWidgetWrap.append(remarkedPrimaryWidget)

  if (options.inline) {
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget__wrap--inline')
    document.querySelector(options.inlineContainer).append(remarkedPrimaryWidgetWrap);
  } else {
    document.querySelector('body').append(remarkedPrimaryWidgetWrap);
  }

  if (options.eventsWidget) {
    options.getEventsData(options).then(() => {
      options.createEventsWidgetBanners(options.eventsWidgetOptions);
    }).then(() => {
      let buttonOpen = document.querySelectorAll(options.button);

      for (var i = 0; i < buttonOpen.length; i++) {
        buttonOpen[i].addEventListener('click', openModalReserve);
      }
    })
  }

  if (options.tagsButtons) {
		let markup = `
			<div class="remarked-tags-button">
				<label>${translate.tags}</label>
			</div>
		`;

		remarkedPrimaryWidget.querySelector('.remarked-multiplay-select-wrapper').insertAdjacentHTML('beforebegin', markup);
	}

  options.widgetCompleted(remarkedPrimaryWidgetWrap, options);

  let checkboxPolicies = remarkedPrimaryWidget.querySelectorAll('.remarked-primary-widget__policy-checkbox input')
  checkboxPolicies.forEach(checkboPolicy => {
    checkboPolicy.addEventListener('change', function () {
      if (this.checked) {
        this.parentElement.classList.add('remarked-primary-widget__policy-checkbox--active');
      } else {
        this.parentElement.classList.remove('remarked-primary-widget__policy-checkbox--active');
      }
    });
  })


  if (options.extraPolicyCheckbox) {
    let extraPolicyCheckbox = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox input')
    extraPolicyCheckbox.addEventListener('change', function () {
      if (this.checked) {
        this.parentElement.classList.add('remarked-primary-widget__extraPolicyCheck-checkbox--active');
      } else {
        this.parentElement.classList.remove('remarked-primary-widget__extraPolicyCheck-checkbox--active');
      }
    });
  }

  if (options.subcsriptionCheckbox) {
    let subcsriptionCheckbox = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox input')
    subcsriptionCheckbox.addEventListener('change', function () {
      if (this.checked) {
        this.parentElement.classList.add('remarked-primary-widget__subcsriptionCheckbox-checkbox--active');
      } else {
        this.parentElement.classList.remove('remarked-primary-widget__subcsriptionCheckbox-checkbox--active');
      }
    });
  }

  let switchChecks = remarkedPrimaryWidget.querySelectorAll('.remarked-primary-widget__switch');
  for (var i = 0; i < switchChecks.length; i++) {
    let input = switchChecks[i].querySelector('input');
    let text = switchChecks[i].querySelector('.remarked-primary-widget__switch-text');
    input.addEventListener('change', function (e) {
       if (this.checked) {
       	this.parentElement.classList.add('remarked-primary-widget__switch-checkbox--active')
       } else {
       	this.parentElement.classList.remove('remarked-primary-widget__switch-checkbox--active');
       }

      if (
      	this.closest('.remarked-primary-widget__switch')
      	&& this.closest('.remarked-primary-widget__switch').dataset.checkboxsIndex
      	&& options.checkboxs[this.closest('.remarked-primary-widget__switch').dataset.checkboxsIndex]
      ) {
				const checkbox = options.checkboxs[this.closest('.remarked-primary-widget__switch').dataset.checkboxsIndex];

				const trigger = checkbox.triggerChange;
				if (trigger) trigger.apply(this, [e, options, remarkedToken]);
			}
    });
    text.addEventListener('click', function () {
      let event = new Event('change');
      input.checked ? input.checked = false : input.checked = true;
      input.dispatchEvent(event);
    });
  }

  function getToday(paramsMaxDate = 0) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let date = new Date();
    let maxDate;
    if (location.hostname == 'hachapuriivino.ru') {
      maxDate = date.setMonth(date.getMonth() + 1);
    } else {
      maxDate = date.setFullYear(date.getFullYear() + 1);
    }

    if (paramsMaxDate) maxDate = paramsMaxDate;

    return {
      full: today,
      dd: new Date().getDate(),
      mm: new Date().getMonth(),
      yyyy: new Date().getFullYear(),
      maxDate: maxDate
    }
  }

  function dateReplacer(elementClass) {
    let dateInput = remarkedPrimaryWidget.querySelector(elementClass).value.split('/');
    if (dateInput.length === 1) return remarkedPrimaryWidget.querySelector(elementClass).value;
    dateInput = dateInput[2] + '-' + dateInput[1] + '-' + dateInput[0];
    return dateInput;
  }

  function startPreloader() {
    //console.log('startPreloader called');
    if (!remarkedPrimaryWidget.querySelector('.remarked-widget-classic__preloader')) {
      let div = document.createElement('div');
      div.classList.add('remarked-widget-classic__preloader');
      div.innerHTML += '<div class="remarked-widget-classic__preloader-block"><span></span><span></span><span></span><span></span></div >'
      remarkedPrimaryWidget.append(div);
      //console.log('Preloader element appended');
    }
  }
  function endPreloader() {
    //console.log('endPreloader called');
    try {
      const preloader = remarkedPrimaryWidget.querySelector('.remarked-widget-classic__preloader');
      if (preloader) {
        preloader.remove();
        //console.log('Preloader element removed');
      } else {
        //console.log('Preloader element not found for removal');
      }
    } catch (error) {
      //console.log('Error removing preloader:', error);
    }
  }

  function clickerTimeSlot(div, text) {
    if (div.classList.contains('remarked-primary-widget__times-item--active')) return;
    //console.log(div, text);
    let time = text.replace(/\s/g, '');

    remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__times-notice').style.opacity = 0;
    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item--active')) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item--active').classList.remove('remarked-primary-widget__times-item--active');
    }

    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__notice-custom')) {
    	remarkedPrimaryWidget.querySelector('.remarked-primary-widget__notice-custom').remove();
    }

    if (options.timeSlotsInfo) {
      for (const info of options.timeSlotsInfo) {
        if (info.timeSlots.includes(text)) {
          const notice = document.createElement('div');
          notice.classList.add('remarked-primary-widget__notice-custom');
          notice.innerHTML = info.slotsText;
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').after(notice);
          break;
        }
      }
    }

    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item.--col-2') && !options.alwaysShowTimeRange) {
      const item = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item.--col-2');
      item.textContent = item.getAttribute('data-temp');
      item.classList.remove('--col-2');
    }

    div.classList.add('remarked-primary-widget__times-item--active');

    if (!options.blockedOpenTime && !options.alwaysShowTimeRange) {
      div.classList.add('--col-2');
      // setTimeout(() => {
      //   div.textContent = div.getAttribute('data-open');
      // }, 300);

      let divTitle = div.getAttribute('data-open').split('—')[1];
      divTitle = [' ', '—', ...divTitle.split('')];

      divTitle.forEach((item, i) => {
        setTimeout(() => {
          div.textContent = div.textContent + item;
        }, i * 50);
      });
    }

    const input = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input');
    input.value = text;

    if (div.hasAttribute('data-duration')) {
      input.setAttribute('data-duration', div.getAttribute('data-duration'));
    } else {
      if (input.hasAttribute('data-duration')) input.removeAttribute('data-duration');
    }

    if (div.hasAttribute('data-reserve-date')) {
      input.setAttribute('data-reserve-date', div.getAttribute('data-reserve-date'));
    } else {
      if (input.hasAttribute('data-reserve-date')) input.removeAttribute('data-reserve-date');
    }

    if (div.hasAttribute('data-table')) {
      input.setAttribute('data-table', div.getAttribute('data-table'));
    } else {
      if (input.hasAttribute('data-table')) input.removeAttribute('data-table');
    }
  }

  function checkArray(array1 = [], array2 = []) {
    const result = [];
    for (const tableID of array1) {
      if (array2.includes(tableID)) result.push(tableID);
    }

    return result;
  }

  function formatterDateTime(datetime = '') {
    if (!datetime) return;
    const [date, time] = datetime.split(' ');
    const [hh, mm] = time.split(':');

    return `${hh}:${mm}`;
  }

  async function checkFreeDates(count = 1, loader = false) {
    if (!options.checkFreeDates) return;

    if (loader) startPreloader();

    let from = new Date();
    let to = new Date(new Date().setDate(new Date().getDate() + 30));

    let fromMonth = from.getMonth() + 1;
    let fromDay = from.getDate() < 10 ? '0' + from.getDate() : from.getDate();
    if (fromMonth < 10) fromMonth = '0' + fromMonth;
    from = from.getFullYear() + '-' + fromMonth + '-' + fromDay;

    let toMonth = to.getMonth() + 1;
    let toDay = to.getDate() < 10 ? '0' + to.getDate() : to.getDate();
    if (toMonth < 10) toMonth = '0' + toMonth;
    to = to.getFullYear() + '-' + toMonth + '-' + toDay;

    if (options.oneGuestOneTable) {
    	count = 1;
    }

    const response = await fetch(remarkedReqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "method": "GetDaysStates",
        "token": remarkedToken,
        "reserve_date_period": {
          "from": from,
          "to": to
        },
        "guests_count": count,
      }),
    });

    //console.log('response', response);

    const res = await response.json();

    const slots = res.slots ? res.slots : {};

    const disabledDates = [];

    for (const key in slots) {
      if (Object.hasOwnProperty.call(slots, key)) {
        const element = slots[key];
        if (element.is_free) continue;

        let [yyyy, mm, dd] = key.split('-');

        if (mm) mm = mm - 1;

        disabledDates.push(new Date(yyyy, mm, dd));
      }
    }

    options.pickerOptions.disabledDates = [];

    options.picker.remove();

    let calendar = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select');
    let daysLang = lang == 'ru-RU' ? ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let daysMonths = lang == 'ru-RU' ? ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    options.pickerOptions.disabledDates = disabledDates;

    options.picker = datepicker(calendar, options.pickerOptions);

    if (loader) endPreloader();
  }

  async function getTimes() {
    startPreloader();
    if (options.useCustomGetTimes) {
      await options.customGetTimes(remarkedToken, remarkedPrimaryWidget, remarkedReqUrl);
      endPreloader();
      return;
    }

    let guestsCount = remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty').value;

    let childrenCount = options.children ? remarkedPrimaryWidget.querySelector('#remarked-primary-widget__children-qty').value : 0;

    //Количество детей учитывается при выборе времени
    if (options.children) guestsCount = Number(guestsCount) + Number(childrenCount);

    if (options.oneGuestOneTable) guestsCount = 1;

    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').value != '' && options.time) {
      let remarkedGetDays = {};

      if (options.newSlotsTime) {
        remarkedGetDays = {
          method: 'GetTimeSlots',
          token: remarkedToken,
          request_id: new Date().getTime(),
          reserve_date: dateReplacer('.remarked-primary-widget__date-select'),
          guests_count: guestsCount,
          session_id: options.session_id,
        };
      } else if (options.rangeSlotsTime) {
        remarkedGetDays = {
          method: 'GetSlots',
          token: remarkedToken,
          request_id: new Date().getTime(),
          reserve_date_period: {
            from: dateReplacer('.remarked-primary-widget__date-select'),
            to: dateReplacer('.remarked-primary-widget__date-select')
          },
          guests_count: guestsCount,
          session_id: options.session_id,
        };
        if (options.getSlotsDurationData) {
          let guests = remarkedGetDays.guests_count;
          remarkedGetDays.slot_duration = options.getSlotsDuration(guests, remarkedGetDays);
        }

        if (options.withRoomsTimes) remarkedGetDays.with_rooms = true;
        if (options.room_id) remarkedGetDays.room_id = options.room_id;

      } else {
        remarkedGetDays = {
          method: 'GetTimes',
          token: remarkedToken,
          request_id: new Date().getTime(),
          reserve_date: dateReplacer('.remarked-primary-widget__date-select'),
          guests_count: remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty').value,
          session_id: options.session_id,
        };
      }

      const remarkedXHRDays = new XMLHttpRequest();

      let remarkedGetDaysJSON = JSON.stringify(remarkedGetDays);

      remarkedXHRDays.open('POST', remarkedReqUrl);

      remarkedXHRDays.responseType = 'json';
      remarkedXHRDays.setRequestHeader('Content-Type', 'application/json');

      remarkedXHRDays.onload = async function () {

        remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times').classList.add('remarked-primary-widget__times--active');
        remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').value = "";

        let roomActiveId = 0;

        if (options.withRoomsTimes) {
          if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap .remarked-primary-widget__times-tabs-button.__active')) {
            roomActiveId = +remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap .remarked-primary-widget__times-tabs-button.__active').getAttribute('data-id');
          } else if (options.defaultRoomTab) {
            roomActiveId = options.defaultRoomTabID;
          }
        }

        remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').innerHTML = "";
        //console.log(remarkedXHRDays.response)
        let today = getToday();
        //let dateNextHour = new Date().getTime() + options.dateNextHour;
        let dateNextHour = 0;
        let notBusy = [];
        // if (bool && new Date().getTime() > (time[0].timestamp * 1000 - 3600000)) {
        //   remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').classList.add('remarked-primary-widget__times-wrap--today');
        // } else {
        //   if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').classList.contains('remarked-primary-widget__times-wrap--today')) {
        //     remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').classList.remove('remarked-primary-widget__times-wrap--today');
        //   }
        // }

        let slots = remarkedXHRDays.response.slots;
        options.filterSlots(remarkedPrimaryWidget, options, slots);
        remarkedXHRDays.response.slots = slots;

        if (options.rangeSlotsTime) {
          if (options.rangeSlotsTimeEnd) {
            let slots = remarkedXHRDays.response.slots;
            const input = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input');

            if (input.hasAttribute('data-table')) input.removeAttribute('data-table');
            if (input.hasAttribute('data-reserve-date')) input.removeAttribute('data-reserve-date');

            let slotsStart = [];
            let slotsEnd = [];
            let slotStart = false;
            let slotStartTable = [];
            let isContinue = false;

            const maxDuration = options.rangeSlotsTimeEndDuration * 3600;

            for (const slot of slots) {
              if (!slotStart && !slot.is_free) continue;
              if (!slotStart) {
                slotStart = slot;
                slotStartTable = slot.tables_ids;
              }

              if (!slot.is_free) {
                isContinue = true;
              }

              if (!isContinue) {
                const result = checkArray(slotStartTable, slot.tables_ids);
                if (result.length <= 0) isContinue = true;
                slotStartTable = result;
              }

              if (!isContinue) {
                const diff = parseInt(slot.end_stamp) - parseInt(slotStart.start_stamp);
                if (diff > maxDuration) isContinue = true;
              }

              notBusy.push(slot);

              slotsStart.push(slot);
              if (!isContinue) slotsEnd.push(slot);
            }

            if (notBusy.length > 0) {
              input.setAttribute('data-table', JSON.stringify([slotStartTable[0]]));
              const [date, time] = slotStart.start_datetime.split(' ');
              input.setAttribute('data-reserve-date', date);
              const [hh, mm] = time.split(':');
              input.value = `${hh}:${mm}`;
            }

            const selectStartBlock = document.createElement('div');
            const selectStart = document.createElement('select');
            selectStart.setAttribute('name', 'reserve_start');
            const selectStartLabel = document.createElement('label');
            selectStartLabel.textContent = 'Время начала';
            selectStartBlock.appendChild(selectStartLabel);
            selectStartBlock.appendChild(selectStart);
            selectStart.innerHTML += `<option>${translate.noticeTime}</option>`;

            const selectEndBlock = document.createElement('div');
            const selectEnd = document.createElement('select');
            selectEnd.setAttribute('name', 'reserve_end');
            const selectEndLabel = document.createElement('label');
            selectEndLabel.textContent = 'Время окончания';
            selectEndBlock.appendChild(selectEndLabel);
            selectEndBlock.appendChild(selectEnd);
            selectEnd.innerHTML += `<option>${translate.noticeTime}</option>`;

            for (const slot of slotsStart) {
              selectStart.innerHTML += `<option data-tables="${JSON.stringify(slot.tables_ids)}" value="${slot.start_stamp}">${formatterDateTime(slot.start_datetime)}</option>`;
            }

            for (const slot of slotsEnd) {
              selectEnd.innerHTML += `<option value="${slot.end_stamp}">${formatterDateTime(slot.end_datetime)}</option>`;
            }

            selectStartBlock.classList.add('remarked-primary-widget__times-wrap-select');
            selectEndBlock.classList.add('remarked-primary-widget__times-wrap-select');
            remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').appendChild(selectStartBlock);
            remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').appendChild(selectEndBlock);

            selectStart.addEventListener('change', (e) => {
              console.log(e.target.value);

              const stamp = parseInt(e.target.value) + 5400;
              const option = selectStart.querySelector('option[value="'+e.target.value+'"]');
              slotStartTable = JSON.parse(option.getAttribute('data-tables'));
              slotsEnd = [];
              notBusy = [];

              for (const slot of slots) {
                if (slot.end_stamp === stamp) slotStart = slot;
                if (slot.end_stamp < stamp) continue;

                if (!slot.is_free) break;
                const result = checkArray(slotStartTable, slot.tables_ids);
                if (result.length <= 0) break;
                slotStartTable = result;


                const diff = parseInt(slot.end_stamp) - parseInt(e.target.value);
                if (diff > maxDuration) break;

                notBusy.push(slot);
                slotsEnd.push(slot);
              }

              if (notBusy.length <= 0) {
                remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').innerHTML = '<div class="remarked-messageBusy">' + options.messageBusy + '</div>';
              } else {
                input.setAttribute('data-table', JSON.stringify([slotStartTable[0]]));
                const [date, time] = slotStart.start_datetime.split(' ');
                input.setAttribute('data-reserve-date', date);
                const [hh, mm] = time.split(':');
                input.value = `${hh}:${mm}`;

                selectEnd.innerHTML = '';
                for (const slot of slotsEnd) {
                  selectEnd.innerHTML += `<option value="${slot.end_stamp}">${formatterDateTime(slot.end_datetime)}</option>`;
                }
              }

            });

          } else if (options.withRoomsTimes) {
            let bool = today.full == remarkedGetDays.reserve_date_period.from;
            let slots = remarkedXHRDays.response.slots;
            let rooms = remarkedXHRDays.response.rooms;

            const roomsRender = {};
            const pointTables = {};

            for (const key in rooms) {
              if (Object.hasOwnProperty.call(rooms, key)) {
                const room = rooms[key];
                if (options.excludeRooms.includes(key)) continue;
                const roomName = room.name;
                const roomTables = room.tables ? room.tables : {};

                if (Object.keys(roomTables).length) {
                  for (const id in roomTables) {
                    if (Object.hasOwnProperty.call(roomTables, id)) {
                      pointTables[id] = roomTables[id];
                    }
                  }
                }

                let guestsCountReq = remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty').value
                if (options.oneGuestOneTable) guestsCountReq = 1;

                let childrenCount = options.children ? remarkedPrimaryWidget.querySelector('#remarked-primary-widget__children-qty').value : 0;

                //Количество детей учитывается при выборе времени
                if (options.children) guestsCountReq = Number(guestsCountReq) + Number(childrenCount);

                const data = {
                  method: "GetSlots",
                  token: remarkedToken,
                  request_id: new Date().getTime(),
                  reserve_date_period: {
                    from: dateReplacer('.remarked-primary-widget__date-select'),
                    to: dateReplacer('.remarked-primary-widget__date-select')
                  },
                  guests_count: guestsCountReq,
                  with_rooms: false,
                  room_id: key,
                  session_id: options.session_id,
                }

                if (options.getSlotsDurationData) {
                  let guests = data.guests_count;
                  data.slot_duration = options.getSlotsDuration(guests);
                }

                const response = await fetch(options.optionalRemarkedServer, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                  body: JSON.stringify(data)
                });

                const result = await response.json();

                roomsRender[roomName] = {
                  name: roomName,
                  id: key,
                  slots: result.slots,
                  arrTime: [],
                  objTime: {},
                }
              }
            }

            for (const key in roomsRender) {
              if (Object.hasOwnProperty.call(roomsRender, key)) {
                const room = roomsRender[key];

                if (options.excludeRooms.includes(room.id)) continue;

                const slots = room.slots;

                slots.forEach((el, i) => {
                  const start_stamp = new Date(el.start_stamp * 1000);
                  let startDay = start_stamp.getDate();
                  if (startDay < 10) startDay = `0${startDay}`;
                  let startMonth = start_stamp.getMonth() + 1;
                  if (startMonth < 10) startMonth = `0${startMonth}`;
                  let startFullYear = start_stamp.getFullYear();

                  let startHour = start_stamp.getHours();
                  startHour = startHour < 10 ? '0' + startHour : startHour;
                  let startMinute = start_stamp.getMinutes();
                  startMinute = startMinute < 10 ? '0' + startMinute : startMinute;

                  let endHour = new Date(el.end_stamp * 1000).getHours();
                  endHour = endHour < 10 ? '0' + endHour : endHour;
                  let endMinute = new Date(el.end_stamp * 1000).getMinutes();
                  endMinute = endMinute < 10 ? '0' + endMinute : endMinute;

                  const reserveDate = el.start_datetime.split(' ')[0];

                  let startTime = el.start_datetime.split(' ')[1];
                  let [hhs, mms, sss] = startTime.split(':');
                  let startTimeFormat = hhs + ':' + mms;

                  let endTime = el.end_datetime.split(' ')[1];
                  let [hhe, mme, sse] = endTime.split(':');
                  const endTimeFormat = hhe + ':' + mme;

                  let text = startTimeFormat + ' — ' + endTimeFormat;

                  let boolAddData = true;

                  if (options.includeTime.length) {
                    if (!options.includeTime.includes(hhs + ':' + mms)) boolAddData = false;
                  }

                  if (options.excludeTimesRooms[room.id]) {
                  	if (options.excludeTimesRooms[room.id].includes(startHour + ':' + startMinute)) boolAddData = false;
                  }

                  if (options.includeTimesRooms[room.id]) {
                  	if (!(options.includeTimesRooms[room.id].includes(startHour + ':' + startMinute))) boolAddData = false;
                  }

                  if (options.newIncludeTimesRooms[room.id] && Object.keys(options.includeTimesRooms).length === 0) {
                    let startTime = el.start_datetime.split(' ')[1];
                    let [hhs, mms, sss] = startTime.split(':');

                    if (!(options.newIncludeTimesRooms[room.id].includes(hhs + ':' + mms))) boolAddData = false;
                  }

                  if (el.tables_ids.length && options.includeTables.length) {
                    const tablesIDs = [];
                    const slotTablesIDs = el.tables_ids;
                    for (const tableID of slotTablesIDs) {
                      if (options.includeTables.includes(tableID)) {
                        tablesIDs.push(tableID);
                      }
                    }

                    el.tables_ids = tablesIDs;
                    if (tablesIDs.length <= 0) el.is_free = false;
                  }

                  if (boolAddData) {
                    if (!room.arrTime.includes(el.start_stamp)) room.arrTime.push(el.start_stamp);

                    const data = {
                      textRange: text,
                      text: startTimeFormat,
                      reserveDate,
                      ...el,
                    }

                    if (el.tables_ids.length) {
                      let table = el.tables_ids[0];
                      try {
                        let count = 0;
                        let tableID = 0;
                        const activeTables = el.tables_ids;
                        activeTables.forEach((item) => {
                          const { capacity } = pointTables[item];
                          if (data) {
                            if (count && tableID) {
                              if (count > capacity) {
                                count = capacity;
                                tableID = item;
                              }
                            } else {
                              count = capacity;
                              tableID = item;
                            }
                          }
                        });
                        table = tableID ? tableID : table;
                      } catch (error) {
                        console.error(error);
                      }
                      data.tableActive = [table];

                      if (options.oneGuestOneTable) {
	                    let guestsCount = +remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty').value;
	                    data.tableActive = [];
	                    const tables = el.tables_ids;
	                    if (tables.length >= guestsCount) {
	                      for (let i = 0; i < guestsCount; i++) {
	                        data.tableActive.push(tables[i]);
	                      }
	                    } else {
	                      data.is_free = false;
	                    }
	                  }
                    }

                    if (!el.tables_ids.length && el.table_bundles) {
                      if (!Array.isArray(el.table_bundles)) {
                        if (Object.keys(el.table_bundles).length) {
                          const tableBundles = Object.values(el.table_bundles)
                          data.tableActive = tableBundles[0];
                        }
                      } else if (Array.isArray(el.table_bundles) && el.table_bundles.length) {

	                  		const tableBundles = el.table_bundles
	                      data.tableActive = tableBundles[0];
	                    }
                    }

                    if (room.objTime[el.start_stamp]) {
                      const duration = room.objTime[el.start_stamp].duration;
                      const is_free = room.objTime[el.start_stamp].is_free;
                      if (!is_free && el.is_free) {
                        room.objTime[el.start_stamp] = data;
                      } else if (el.is_free === true && is_free === true && (el.duration > duration)) {
                        room.objTime[el.start_stamp] = data;
                      }
                      //objTime[el.start_stamp].push(data)
                    } else {
                      room.objTime[el.start_stamp] = data;
                    }
                  }
                });
              }
            }

            remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').innerHTML = `
							<div class="remarked-primary-widget__times-tabs">
                ${options.hookBeforeRooms()}
								<div class="remarked-primary-widget__times-tabs-head"></div>
                ${options.hookAfterRooms()}
								<div class="remarked-primary-widget__times-tabs-body"></div>
							</div>
						`;

            let counter = 0;

            for (const key in roomsRender) {
              if (Object.hasOwnProperty.call(roomsRender, key)) {
                const element = roomsRender[key];

                if (options.excludeRooms.includes(element.id)) continue;

                const button = document.createElement('div');
                button.classList.add('remarked-primary-widget__times-tabs-button');
                button.setAttribute('id', 'remarked-primary-widget__times-tab-' + element.id);
                button.setAttribute('data-id', element.id);
                button.textContent = element.name;

                const container = document.createElement('div');
                container.classList.add('remarked-primary-widget__times-tabs-container');
                container.classList.add('remarked-primary-widget__times-tab-' + element.id);

                if (roomActiveId) {
                  if (roomActiveId === +element.id) {
                    button.classList.add('__active');
                    container.classList.add('__active');
                  }
                } else {
                  if (!counter) {
                    button.classList.add('__active');
                    container.classList.add('__active');
                  }
                }

                const arrTime = element.arrTime;
                const objTime = element.objTime;

                let messageNotReserve = true;
                if (arrTime.length) {
                  arrTime.sort((a, b) => a - b);

                  if(!options.useSelectForTimeSlots) {

                    arrTime.forEach((item, i) => {
                      const el = objTime[item];
                      let div = document.createElement('div');
                      div.classList.add('remarked-primary-widget__times-item');
                      div.setAttribute('data-temp', el.text);
                      div.setAttribute('data-open', el.textRange);
                      div.setAttribute('data-duration', +el.duration / 60);
                      div.setAttribute('data-reserve-date', el.reserveDate);
                      if (el.tableActive) {
                        div.setAttribute('data-table', JSON.stringify(el.tableActive));
                      }
                      if (options.oneGuestOneTable) {
                        div.setAttribute('data-free', '\n Свободно: ' + el.tables_ids.length);
                      }
                      div.textContent = el.text;

                      if (el.is_free) {
                        if (bool) {
                          if (dateNextHour < (el.start_stamp * 1000)) {
                            messageNotReserve = false;
                            container.append(div);
                            notBusy.push(el);
                            div.addEventListener('click', function () {
                              clickerTimeSlot(this, this.getAttribute('data-temp'));
                            })
                          } else {
                            div.classList.add('remarked-primary-widget__times-item--disabled');
                            if (options.showDisabledTime) {
                              container.append(div);
                            }
                          }
                        } else {
                          container.append(div);
                          messageNotReserve = false;
                          notBusy.push(el);
                          div.addEventListener('click', function () {
                            clickerTimeSlot(this, this.getAttribute('data-temp'));
                          })
                        }
                      } else {
                        div.classList.add('remarked-primary-widget__times-item--disabled');
                        if (options.showDisabledTime) {
                          container.append(div);
                        }
                      }
                    });
                  } else {

                    const selectTime = document.createElement('select');
                    selectTime.classList.add('remarked-primary-widget__time-slots-select');
                    selectTime.setAttribute('name', 'remarked-time-slot-' + element.id);

                    // Добавляем опции (включая disabled в зависимости от опций)
                    arrTime.forEach((item, i) => {
                      const el = objTime[item];
                      // Пропускаем disabled, если нужно
                      if (!el.is_free) {
                        if (!options.showDisabledTime) return;
                      } else if (bool && dateNextHour >= (el.start_stamp * 1000)) {
                        // если сегодня и время недоступно из-за ограничений — считаем disabled
                        if (!options.showDisabledTime) return;
                      }

                      const option = document.createElement('option');
                      option.textContent = el.text;
                      option.value = el.start_stamp;
                      option.dataset.temp = el.text;
                      option.dataset.open = el.textRange;
                      option.dataset.duration = +el.duration / 60;
                      option.dataset.reserveDate = el.reserveDate;
                      option.dataset.x = el.start_stamp;
                      option.dataset.x1 = el.start_datetime;
                      if (el.tableActive) option.setAttribute('data-table', JSON.stringify(el.tableActive));
                      if (options.oneGuestOneTable) option.textContent += `, Свободно: ${el.tables_ids.length}`;

                      // Помечаем disabled, если слот не свободен или недоступен по времени
                      if (!el.is_free) {
                        option.disabled = true;
                        option.classList.add('remarked-primary-widget__times-item--disabled');
                      } else if (bool && dateNextHour >= (el.start_stamp * 1000)) {
                        option.disabled = true;
                        option.classList.add('remarked-primary-widget__times-item--disabled');
                      } else {
                        // свободный слот
                        messageNotReserve = false;
                      }

                      selectTime.appendChild(option);
                    });

                    // Если нет ни одной опции (например все-filtered out) — сообщение
                    if (!selectTime.options.length) {
                      container.innerHTML = options.isBusyHallMessage;
                    } else {

                      const emptyOption = document.createElement('option');
                      emptyOption.textContent = translate.noticeTime;
                      selectTime.insertAdjacentElement('afterbegin', emptyOption);
                      selectTime.selectedIndex = 0;

                      container.appendChild(selectTime);
                      // add change listener — имитируем clickerTimeSlot
                      selectTime.addEventListener('change', function (e) {
                        const opt = this.options[this.selectedIndex];
                        if (!opt) return;
                        // имитируем поведение клика: вызываем clickerTimeSlot с элементом-заменителем
                        // Создаём временный объект с нужными методами (или можно найти соответствующий div)
                        const fakeDiv = document.createElement('div');
                        fakeDiv.setAttribute('data-temp', opt.dataset.temp || '');
                        fakeDiv.setAttribute('data-open', opt.dataset.open || '');
                        fakeDiv.setAttribute('data-duration', opt.dataset.duration || '');
                        fakeDiv.setAttribute('data-reserve-date', opt.dataset.reservedate || opt.dataset.reserveDate || '');
                        if (opt.getAttribute('data-table')) fakeDiv.setAttribute('data-table', opt.getAttribute('data-table'));
                        clickerTimeSlot(fakeDiv, fakeDiv.getAttribute('data-temp'));
                      });
                    }

                    // Добавляем в notBusy список — берем только свободные опции
                    for (let i = 0; i < selectTime.options.length; i++) {
                      const o = selectTime.options[i];
                      if (!o.disabled) {
                        const stamp = +o.value;
                        if (objTime[stamp]) notBusy.push(objTime[stamp]);
                      }
                    }
                  }

                }

                if (messageNotReserve) container.innerHTML = options.isBusyHallMessage;

                remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap .remarked-primary-widget__times-tabs-head').append(button);
                remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap .remarked-primary-widget__times-tabs-body').append(container);

                counter++;
              }
            }

            const tabsControls = remarkedPrimaryWidget.querySelectorAll('.remarked-primary-widget__times-tabs-button');
            for (var i = 0; i < tabsControls.length; i++) {
              tabsControls[i].addEventListener('click', function () {
                options.changeSelectedRoom(remarkedPrimaryWidget, this.getAttribute('data-id'), options);

                if (this.classList.contains('__active')) return;

                const tabPanelsWrapper = this.closest('.remarked-primary-widget__times-tabs').querySelector('.remarked-primary-widget__times-tabs-body');
                const id = this.getAttribute('id');

                if (tabPanelsWrapper.querySelector('.__active')) tabPanelsWrapper.querySelector('.__active').classList.remove('__active');
                if (this.closest('.remarked-primary-widget__times-tabs-head').querySelector('.__active')) this.closest('.remarked-primary-widget__times-tabs-head').querySelector('.__active').classList.remove('__active');

                this.classList.add('__active');
                tabPanelsWrapper.querySelector('.' + id).classList.add('__active');
              });
            }

          } else {
            let bool = today.full == remarkedGetDays.reserve_date_period.from;
            let slots = remarkedXHRDays.response.slots;

            let arrTime = [];
            let objTime = {};

            slots.forEach((el, i) => {
              const start_stamp = new Date(el.start_stamp * 1000);
              let startDay = start_stamp.getDate();
              if (startDay < 10) startDay = `0${startDay}`;
              let startMonth = start_stamp.getMonth() + 1;
              if (startMonth < 10) startMonth = `0${startMonth}`;
              let startFullYear = start_stamp.getFullYear();

              let startHour = start_stamp.getHours();
              startHour = startHour < 10 ? '0' + startHour : startHour;
              let startMinute = start_stamp.getMinutes();
              startMinute = startMinute < 10 ? '0' + startMinute : startMinute;

              let endHour = new Date(el.end_stamp * 1000).getHours();
              endHour = endHour < 10 ? '0' + endHour : endHour;
              let endMinute = new Date(el.end_stamp * 1000).getMinutes();
              endMinute = endMinute < 10 ? '0' + endMinute : endMinute;

              const reserveDate = el.start_datetime.split(' ')[0];

              let startTime = el.start_datetime.split(' ')[1];
              let [hhs, mms, sss] = startTime.split(':');
              let startTimeFormat = hhs + ':' + mms;

              let endTime = el.end_datetime.split(' ')[1];
              let [hhe, mme, sse] = endTime.split(':');
              const endTimeFormat = hhe + ':' + mme;

              let text = startTimeFormat + ' — ' + endTimeFormat;

              let boolAddData = true;

              if (options.includeTime.length) {
                if (!options.includeTime.includes(hhs + ':' + mms)) boolAddData = false;
              }

              if (el.tables_ids.length && options.includeTables.length) {
                const tablesIDs = [];
                const slotTablesIDs = el.tables_ids;
                for (const tableID of slotTablesIDs) {
                  if (options.includeTables.includes(tableID)) {
                    tablesIDs.push(tableID);
                  }
                }

                el.tables_ids = tablesIDs;
                if (tablesIDs.length <= 0) el.is_free = false;
              }

              if (boolAddData) {
                if (!arrTime.includes(el.start_stamp)) arrTime.push(el.start_stamp);

                const data = {
                  textRange: text,
                  text: startTimeFormat,
                  reserveDate,
                  ...el,
                }

                if (el.tables_ids.length) {
                  if (options.oneGuestOneTable) {
                    let guestsCount = +remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty').value;
                    data.tableActive = [];
                    const tables = el.tables_ids;
                    if (tables.length >= guestsCount) {
                      for (let i = 0; i < guestsCount; i++) {
                        data.tableActive.push(tables[i]);
                      }
                    } else {
                      data.is_free = false;
                    }
                  } else {
                    let table = el.tables_ids[0];
                    data.tableActive = [table];
                  }
                }

                if (!el.tables_ids.length && el.table_bundles) {
                  if (!Array.isArray(el.table_bundles)) {
                    if (Object.keys(el.table_bundles).length) {
                      const tableBundles = Object.values(el.table_bundles)
                      data.tableActive = tableBundles[0];
                    }
                  } else if (Array.isArray(el.table_bundles) && el.table_bundles.length) {
                		const tableBundles = el.table_bundles
                    data.tableActive = tableBundles[0];
                  }
                }

                if (objTime[el.start_stamp]) {
                  const duration = objTime[el.start_stamp].duration;
                  const is_free = objTime[el.start_stamp].is_free;
                  if (!is_free && el.is_free) {
                    objTime[el.start_stamp] = data;
                  } else if (el.is_free === true && is_free === true && (el.duration > duration)) {
                    objTime[el.start_stamp] = data;
                  }
                  //objTime[el.start_stamp].push(data)
                } else {
                  objTime[el.start_stamp] = data;
                }
              }
            });

            if (arrTime.length) {
              arrTime.sort((a, b) => a - b);

              if (!options.useSelectForTimeSlots) {

                arrTime.forEach((item, i) => {
                  const el = objTime[item];
                  let div = document.createElement('div');
                  div.classList.add('remarked-primary-widget__times-item');
                  if (options.alwaysShowTimeRange) div.classList.add('--col-2');
                  div.setAttribute('data-temp', el.text);
                  div.setAttribute('data-open', el.textRange);
                  div.setAttribute('data-duration', +el.duration / 60);
                  div.setAttribute('data-reserve-date', el.reserveDate);
                  div.setAttribute('data-x', el.start_stamp);
                  div.setAttribute('data-x1', el.start_datetime);
                  if (options.oneGuestOneTable) {
                    div.setAttribute('data-free', '\n Свободно: ' + el.tables_ids.length);
                  }
                  div.textContent = !options.alwaysShowTimeRange ? el.text : el.textRange;
                  if (el.tableActive) {
                    div.setAttribute('data-table', JSON.stringify(el.tableActive));
                  }

                  if (el.is_free) {
                    if (bool) {
                      if (dateNextHour < (el.start_stamp * 1000)) {
                        remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').append(div);
                        notBusy.push(el);
                        div.addEventListener('click', function () {
                          clickerTimeSlot(this, this.getAttribute('data-temp'));
                        })
                      } else {
                        div.classList.add('remarked-primary-widget__times-item--disabled');
                        if (options.showDisabledTime) {
                          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').append(div);
                        }
                      }
                    } else {
                      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').append(div);
                      notBusy.push(el);
                      div.addEventListener('click', function () {
                        clickerTimeSlot(this, this.getAttribute('data-temp'));
                      })
                    }
                  } else {
                    div.classList.add('remarked-primary-widget__times-item--disabled');
                    if (options.showDisabledTime) {
                      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').append(div);
                    }
                  }
                });
              } else {

                const selectTime = document.createElement('select');
                selectTime.classList.add('remarked-primary-widget__time-slots-select');
                selectTime.setAttribute('name', 'remarked-time-slot');

                arrTime.forEach((item, i) => {
                  const el = objTime[item];

                  if (!el.is_free) {
                    if (!options.showDisabledTime) return;
                  } else if (bool && dateNextHour >= (el.start_stamp * 1000)) {
                    if (!options.showDisabledTime) return;
                  }

                  const option = document.createElement('option');
                  option.textContent = el.text;
                  option.value = el.start_stamp;
                  option.dataset.temp = el.text;
                  option.dataset.open = el.textRange;
                  option.dataset.duration = +el.duration / 60;
                  option.dataset.reserveDate = el.reserveDate;
                  option.dataset.x = el.start_stamp;
                  option.dataset.x1 = el.start_datetime;
                  if (el.tableActive) option.setAttribute('data-table', JSON.stringify(el.tableActive));
                  if (options.oneGuestOneTable) option.textContent += `, Свободно: ${el.tables_ids.length}`;

                  if (!el.is_free) {
                    option.disabled = true;
                    option.classList.add('remarked-primary-widget__times-item--disabled');
                  } else if (bool && dateNextHour >= (el.start_stamp * 1000)) {
                    option.disabled = true;
                    option.classList.add('remarked-primary-widget__times-item--disabled');
                  } else {
                    notBusy.push(el);
                  }

                  selectTime.appendChild(option);
                });

                if (!selectTime.options.length) {
                  remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').innerHTML = options.isBusyHallMessage;
                } else {

                  const emptyOption = document.createElement('option');
                  emptyOption.textContent = translate.noticeTime;
                  selectTime.insertAdjacentElement('afterbegin', emptyOption);
                  selectTime.selectedIndex = 0;

                  remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').appendChild(selectTime);

                  selectTime.addEventListener('change', function (e) {
                    const opt = this.options[this.selectedIndex];
                    if (!opt) return;
                    const fakeDiv = document.createElement('div');
                    fakeDiv.setAttribute('data-temp', opt.dataset.temp || '');
                    fakeDiv.setAttribute('data-open', opt.dataset.open || '');
                    fakeDiv.setAttribute('data-duration', opt.dataset.duration || '');
                    fakeDiv.setAttribute('data-reserve-date', opt.dataset.reservedate || opt.dataset.reserveDate || '');
                    if (opt.getAttribute('data-table')) fakeDiv.setAttribute('data-table', opt.getAttribute('data-table'));
                    clickerTimeSlot(fakeDiv, fakeDiv.getAttribute('data-temp'));
                  });
                }

              }
            }
          }
        } else {
          let bool = today.full == remarkedGetDays.reserve_date;
          let time = remarkedXHRDays.response.times;
          time.forEach(function (el, i) {
            if (el.is_free) {
              let num = el.time.split('');
              if (num[num.length - 1] != 5 || (options.timesItemInterval)) {
                let div = document.createElement('div');
                div.classList.add('remarked-primary-widget__times-item');
                div.textContent = el.time;
                if (bool) {
                  if (dateNextHour < (el.timestamp * 1000)) {
                    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').append(div);
                    notBusy.push(el);
                    div.addEventListener('click', function () {
                      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__times-notice').style.opacity = 0;
                      if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item--active')) {
                        remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item--active').classList.remove('remarked-primary-widget__times-item--active');
                      }
                      this.classList.add('remarked-primary-widget__times-item--active');
                      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').value = this.textContent;
                    })
                  }
                } else {
                  remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').append(div);
                  notBusy.push(el);
                  div.addEventListener('click', function () {
                    remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__times-notice').style.opacity = 0;
                    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item--active')) {
                      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-item--active').classList.remove('remarked-primary-widget__times-item--active');
                    }
                    this.classList.add('remarked-primary-widget__times-item--active');
                    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').value = this.textContent;
                  })
                }
              }
            }
          });
        }

        if (notBusy.length == 0) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-wrap').innerHTML = '<div class="remarked-messageBusy">' + options.messageBusy + '</div>';
        } else {
          options.afterRenderSlots(remarkedPrimaryWidget, options);
        }
        endPreloader();
      }

      remarkedXHRDays.onerror = function() { // Добавляем обработчик ошибок для XHR
        endPreloader();
        console.error('XHR request failed in getTimes');
      };

      remarkedXHRDays.send(remarkedGetDaysJSON);
    } else {
      // Если options.time === false или remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').value === ''
      endPreloader(); // Гарантируем скрытие прелоадера
    }
  }

  document.querySelector('.remarked-primary-widget__title').addEventListener('click', function () {
    console.log(remarkedToken);
  });
  if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select')) {
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').addEventListener('change', function () {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').style.removeProperty('border-color');
      getToken(this.value);
      options.changeSelectPoints(remarkedPrimaryWidget, this.value, options);
    });
  }
  let calendar = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select');

  let htmlLang = document.querySelector('html').getAttribute('lang');
  let daysLang = (options.amLang && lang == 'ru-RU' && (htmlLang == 'am' || htmlLang == 'hy'))
    ? ['Կիր', 'Երկ', 'Երք', 'Չոր', 'Հնգ', 'Ուրբ', 'Շբթ']
    : lang == 'ru-RU'
      ? ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let daysMonths = (options.amLang && lang == 'ru-RU' && (htmlLang == 'am' || htmlLang == 'hy'))
    ? ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր']
    : lang == 'ru-RU'
      ? ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let overlayButtonText = lang == 'ru-RU' ? "Выбрать" : "Select";
  let overlayPlaceholderText = lang == 'ru-RU' ? "Введите нужный год" : "Enter year";

  options.pickerOptions = {
    formatter: (input, date, instance) => {
      let value = date;
      let d = value.getDate();
      let m = value.getMonth();
      m++;
      let yyyy = value.getFullYear();
      if (d < 10) {
        d = '0' + d;
      }
      if (m < 10) {
        m = '0' + m;
      }
      input.value = d + '/' + m + '/' + yyyy; // => '1/1/2099'
    },
    overlayButton: overlayButtonText,
    overlayPlaceholder: overlayPlaceholderText,
    minDate: new Date(options.minDate.yyyy, options.minDate.mm, options.minDate.dd),
    startDay: 1,
    //startDate: new Date(options.minDate.yyyy, options.minDate.mm, options.minDate.dd),
    maxDate: new Date(options.minDate.maxDate),
    customMonths: daysMonths,
    customDays: daysLang,
    disableYearOverlay: true,
    onSelect: (instance, input, date) => {
      const restaurantSelect = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select');
      if (restaurantSelect && !restaurantSelect.value && options.requiredSelect) {
        restaurantSelect.style.setProperty('border-color', 'red', 'important');
        restaurantSelect.scrollIntoView({behavior: 'smooth', block: 'center'});
        instance.dateSelected = undefined;
        remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-date"]').value = '';
        remarkedPrimaryWidget.querySelector('.qs-active').classList.remove('qs-active');
        return;
      }
      options.changeDateCalendarBefore(remarkedPrimaryWidget, input.value, options, dateReplacer);
      if (instance.dateSelected != undefined) {
        getTimes();
      } else {
        if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times--active')) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times--active').classList.remove('remarked-primary-widget__times--active');
        }
      }
      options.changeDateCalendar(remarkedPrimaryWidget, date, options);
    },
    disabler: options.customDisabledDate ? options.customDisabledDate : date => options.disableWeekDay.includes(date.getDay()),
  };

  if (options.defaultDate) {
    options.pickerOptions.dateSelected = new Date(options.defaultDate);
    //options.pickerOptions.startDate = options.defaultDate;
  }

  options.picker = datepicker(calendar, options.pickerOptions);

  remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').addEventListener('change', function () {
    // let today = options.minDate;
    // let date = this.value;
    // if (new Date(today) > new Date(date)) {
    //   dateBool = false;
    //   this.value = today;
    // }
    //console.log(this);
    getTimes();
  });

  let birthdayCalendar = remarkedPrimaryWidget.querySelector('.remarked-primary-widget-birthday');
  let birthDateInputInstance = null;

  if (options.birthDateInput) {
    birthDateInputInstance = maskDateRemarked(birthdayCalendar, options);
  } else {
    const birthdayPicker = datepicker(birthdayCalendar, {
      overlayButton: overlayButtonText,
      overlayPlaceholder: overlayPlaceholderText,
      startDay: 1,
      customMonths: daysMonths,
      customDays: daysLang,
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(2015, 0, 1),
      defaultView: 'overlay',
      formatter: (input, date, instance) => {
        let value = date;
        let d = value.getDate();
        let m = value.getMonth();
        m++;
        let yyyy = value.getFullYear();
        if (d < 10) {
          d = '0' + d;
        }
        if (m < 10) {
          m = '0' + m;
        }
        input.value = d + '/' + m + '/' + yyyy; // => '1/1/2099'
      },
    });
  }

  if (options.phoneCodeMask) {
    options._stateCodeMask = new phoneCodeMaskReMarked(remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-phone"]'), {
      selectedPhoneCodeCountry: options.selectedPhoneCodeCountry,
      selectedPhoneCodeValue: options.selectedPhoneCodeValue,
    });
  } else {
    function applyMask(digits, mask) {
      let result = '';
      let digitIndex = 0;

      for (let i = 0; i < mask.length; i++) {
        const m = mask[i];

        if (m === '#') {
          if (digitIndex >= digits.length) break;
          result += digits[digitIndex++];
        } else {
          if (digitIndex < digits.length) {
            result += m;
          }
        }
      }

      return result;
    }

    const PREFIX = '7';

    const defaultMask = options.phoneMask
      ? '+# (###) ###-####'
      : '';

    const mask = options.customMask || defaultMask;

    const input = remarkedPrimaryWidget.querySelector(
      'input[name="remarked-primary-widget-phone"]'
    );

    // === 1. При фокусе гарантируем наличие префикса ===
    input.addEventListener('focus', function () {
      if (!this.value) {
        const digits = PREFIX;
        this.value = applyMask(digits, mask);

        setTimeout(() => {
          this.setSelectionRange(this.value.length, this.value.length);
        });
      }
    });

    if (options.phoneMask) {
      // === 2. Блокируем удаление префикса ДО изменения ===
      input.addEventListener('beforeinput', function (e) {
        const start = this.selectionStart;

        // если пытаются удалить первый символ (префикс)
        if (
          (e.inputType === 'deleteContentBackward' ||
          e.inputType === 'deleteContentForward') &&
          start <= 2 // "+7"
        ) {
          e.preventDefault();
          this.setSelectionRange(this.value.length, this.value.length);
          return;
        }
      });
    }

    // === 3. Основная логика маски ===
    input.addEventListener('input', function (e) {
      let digits = e.target.value.replace(/\D/g, '');

      // Если маска с phoneMask — префикс обязателен
      if (options.phoneMask) {

        // если пользователь удалил всё — восстанавливаем только префикс
        if (!digits) {
          digits = PREFIX;
        }

        // если первый символ не 7 — принудительно заменяем
        if (digits[0] !== PREFIX) {
          digits = PREFIX + digits.slice(1);
        }
        e.target.value = applyMask(digits, mask);
      }
    });
  }

  let nameInput = remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-name"]');
  let lastNameInput = remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-lastname"]');
  let phoneInput = remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-phone"]');
  let emailInput = remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-email"]');
  let telegramUsernameInput = remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-telegram-username"]');
  let birthdayInput = remarkedPrimaryWidget.querySelector('input[name="remarked-primary-widget-birthday"]');
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit').addEventListener('click', function () {
    if (this.getAttribute('data-disabled') && JSON.parse(this.getAttribute('data-disabled'))) return false;
    this.setAttribute('data-disabled', 'true');
    let time = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input');
    let policy = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy-checkbox input');

    // if (options.eventsWidgetOptions?.currentTicketsInfo?.details && Object.keys(options.eventsWidgetOptions.currentTicketsInfo.details).length === 0) {
    //   const ticketSelector = remarkedPrimaryWidget.querySelector('.rm-ticket__container');
    //   ticketSelector.scrollIntoView({behavior: 'smooth', block: 'center'});

    //   const tickerSelectorHeader = remarkedPrimaryWidget.querySelector('.rm-ticket__header');
    //   tickerSelectorHeader.classList.add('rm-ticket__header--warning');

    //   console.log('билеты не выбраны!')

    //   this.setAttribute('data-disabled', 'false');
    //   return false;
     if (nameInput.value == "") {
      nameInput.style.borderColor = options.errorColor;
      nameInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = nameInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (options.lastName && lastNameInput.value == "" && !options.lastNameNotRequired) {
      lastNameInput.style.borderColor = options.errorColor;
      lastNameInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = lastNameInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (options.birthDate && !options.birthDateInput && birthdayInput.value == "" && !options.birthDateNotRequired) {
      birthdayInput.style.borderColor = options.errorColor;
      birthdayInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = birthdayInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (options.birthDateInput && (!options.birthDateNotRequired || (birthdayInput.value != '' && options.validateNotEmptyBirthdateInput)) && !birthDateInputInstance.isValid()) {
      birthdayInput.style.borderColor = options.errorColor;
      birthdayInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = birthdayInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (options.commentRequired && remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment textarea').value == "") {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment textarea').style.borderColor = options.errorColor;
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment textarea').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (phoneInput.value.length < 15 && !options.phoneCodeMask) {
      phoneInput.style.borderColor = options.errorColor;
      phoneInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = phoneInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (options.phoneCodeMask && !options._stateCodeMask.isValid()) {
      this.setAttribute('data-disabled', 'false');
      phoneInput.closest('.phoneCodeMaskReMarked').classList.add('is-invalid');
      phoneInput.scrollIntoView({ block: "center", behavior: "smooth" });
      return false;
    } else if (options.email && options.emailRequired && !EMAIL_REGEXP.test(emailInput.value)) {
      emailInput.style.borderColor = options.errorColor;
      emailInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = emailInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (options.telegramUsername && options.telegramUsernameRequired && !telegramUsernameInput.value) {
      telegramUsernameInput.style.borderColor = options.errorColor;
      telegramUsernameInput.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = telegramUsernameInput.closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').value == "") {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').style.borderColor = options.errorColor;
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      if (options.showErrorNoticeValidate) {
        const notice = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__date-select').closest('div').querySelector('.remarked-primary-widget__input-error-notice');
        if (notice) notice.style.display = 'block';
      }
      return false;
    } else if (time.value == "" && options.time) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-notice').style.opacity = '1';
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-notice').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (options.selectNoEmpty && options.selectAdd && remarkedPrimaryWidget.querySelector('#remarked-add-select').value == "") {
      remarkedPrimaryWidget.querySelector('#remarked-add-select').style.borderColor = options.errorColor;
      remarkedPrimaryWidget.querySelector('#remarked-add-select').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (options.secondSelectNoEmpty && options.secondSelectAdd && remarkedPrimaryWidget.querySelector('#remarked-second-add-select').value == "") {
      remarkedPrimaryWidget.querySelector('#remarked-second-add-select').style.borderColor = options.errorColor;
      remarkedPrimaryWidget.querySelector('#remarked-second-add-select').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (options.eventTagsRequired && options.eventTags && (eventTagsInstance.state.length == 0)) {
      remarkedPrimaryWidget.querySelector('.remarked-multiplay-select-input').style.setProperty("border-color", options.errorColor, "important");
      remarkedPrimaryWidget.querySelector('.remarked-multiplay-select-input').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (policy.checked == false) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy-text').style.borderBottom = `1px solid ${options.errorColor}`;
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy-text').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (options.extraPolicyCheckbox && !options.extraPolicyCheckboxNotRequired && !remarkedPrimaryWidget.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox input').checked) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__extraPolicyCheck-text').style.borderBottom = '1px solid red';
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__extraPolicyCheck-text').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (options.subcsriptionCheckbox && !options.subcsriptionCheckboxNotRequired && !remarkedPrimaryWidget.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox input').checked) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__subcsriptionCheckbox-text').style.borderBottom = '1px solid red';
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__subcsriptionCheckbox-text').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else if (options.multiplePolicyCheckboxes && options.multiplePolicyCheckboxes.length > 0) {
      const notCheckedPrivacy = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy-checkbox:not(.remarked-primary-widget__policy-checkbox--active)');
      if (notCheckedPrivacy) {
      notCheckedPrivacy.nextElementSibling.style.borderBottom = '1px solid red';
      notCheckedPrivacy.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
      }
    } else if (options.newMultiplePolicyCheckboxes && options.newMultiplePolicyCheckboxes.length > 0) {
      const notCheckedPrivacy = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__policy-checkbox:not(.remarked-primary-widget__policy-checkbox--active)');
      if (notCheckedPrivacy) {
      notCheckedPrivacy.nextElementSibling.style.borderBottom = '1px solid red';
      notCheckedPrivacy.scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
      }
    } if (options.requiredSelect && remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').selectedIndex === 0) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').style.borderBottom = '1px solid red';
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').scrollIntoView({ block: "center", behavior: "smooth" });
      this.setAttribute('data-disabled', 'false');
      return false;
    } else {

      if (options.customValidation) {
        const isSuccess = options.customValidation(remarkedPrimaryWidget, options);

        if (!isSuccess) {
          this.setAttribute('data-disabled', 'false');
          return false;
        }
      }

      sendReserveRemarked();
    }
  });

  let buttonOpen = document.querySelectorAll(options.button);

  if (options.button.includes('#')) {
    remarkedPrimaryWidgetWrap.setAttribute('data-id', `${options.button.match(/".*?"/gm).join(' ').replaceAll('"', '')}-modal`);
  }

  function openModalReserve(event) {
    if (remarkedPrimaryWidgetWrap.classList.contains('remarked-primary-widget--none')) {
      remarkedPrimaryWidgetWrap.classList.remove('remarked-primary-widget--none');
    }
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget--active');
    document.querySelector('html').style.overflowY = "hidden";
    options.CustomOpenFunction(remarkedPrimaryWidgetWrap, options);

    if (options.eventsWidget) {
      options.createEventsWidgetMarkup(event.target.dataset.eventOrder, remarkedPrimaryWidgetWrap, options, remarkedPrimaryWidgetReset)
    }
  }
  //console.log(buttonOpen);
  for (var i = 0; i < buttonOpen.length; i++) {
    // console.log(buttonOpen[i]);
    buttonOpen[i].addEventListener('click', openModalReserve);
  }

  remarkedPrimaryWidgetClose.addEventListener('click', function () {
    remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget--none');
    options.eventsWidgetCloseFunc(remarkedPrimaryWidgetWrap, options);
    setTimeout(function () {
      remarkedPrimaryWidgetWrap.classList.remove('remarked-primary-widget--active');
      remarkedPrimaryWidgetReset();
    }, 450);
    document.querySelector('html').style.overflowY = "auto";
    options.CustomCloseFunction(remarkedPrimaryWidget);
  });

  remarkedPrimaryWidgetWrap.addEventListener('click', function (e) {
    if (e.target.classList.contains('remarked-primary-widget--active')) {
      remarkedPrimaryWidgetClose.click();
    }
  });

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
  }

  let getUtmParameter = (sParam) => {
    let url = window.location.search.substring(1);
    let urlVariables = url.split('&');

    for (let i = 0; i < urlVariables.length; i++) {
      let variables = urlVariables[i].split('=');

      if (variables[0] === sParam) {
        return variables[1]
      }
    }

  };

  function sendReserveUTM() {
    let utm_source = getUtmParameter('utm_source') != undefined ? 'utm_source=' + getUtmParameter('utm_source') : '';
    let utm_medium = getUtmParameter('utm_medium') != undefined ? '&utm_medium=' + getUtmParameter('utm_medium') : '';
    let utm_campaign = getUtmParameter('utm_campaign') != undefined ? '&utm_campaign=' + getUtmParameter('utm_campaign') : '';
    let utm_content = getUtmParameter('utm_content') != undefined ? '&utm_content=' + getUtmParameter('utm_content') : '';
    let utm_term = getUtmParameter('utm_term') != undefined ? '&utm_term=' + getUtmParameter('utm_term') : '';

    let utm_roistat_visit = '';

    if (window.roistat) {
      if (window.roistat.visit) {
        utm_roistat_visit = '&roistat_visit=' + window.roistat.visit;
      }
    }

    let fakeUtm = utm_source + utm_medium + utm_campaign + utm_content + utm_term + utm_roistat_visit;
    let utm = getCookie('TILDAUTM') == '' ? fakeUtm : getCookie('TILDAUTM') + utm_roistat_visit.substr(1);
    return utm;
  }

  function sendReserveRemarked() {
    startPreloader();

    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    if (min < 16) {
      min = 15;
    } else if (min < 31) {
      min = 30;
    } else if (min < 46) {
      min = 45;
    } else if (min < 61) {
      min = '00';
      if (hours < 25) {
        ++hours;
      } else {
        hours = "00";
      }
    }
    let noTime = hours + ':' + min;
    let remarkedBodyRooms = {
      method: 'CreateReserve',
      token: remarkedToken,
      reserve: {
        name: nameInput.value,
        phone: phoneInput.value.replace(/[^+\d]/g, ''),
        date: dateReplacer('.remarked-primary-widget__date-select'),
        time: options.time ? remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').value : noTime,
        guests_count: remarkedPrimaryWidget.querySelector('#remarked-primary-widget__qty').value,
        comment: remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment textarea').value,
        utm: sendReserveUTM()
      },
      request_id: new Date().getTime(),
      session_id: options.session_id,
      site_url: window.location.href,
    };

    if (options.children) {
      remarkedBodyRooms.reserve.children_count = remarkedPrimaryWidget.querySelector('#remarked-primary-widget__children-qty').value
    }

    if (options.rangeSlotsTimeEnd) {
      const startTime = parseInt(remarkedPrimaryWidget.querySelector('[name="reserve_start"]').value);
      const endTime = parseInt(remarkedPrimaryWidget.querySelector('[name="reserve_end"]').value);
      remarkedBodyRooms.reserve.duration = (endTime - startTime) / 60;
    }

    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').hasAttribute('data-duration')) {
      remarkedBodyRooms.reserve.duration = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').getAttribute('data-duration');
    }

    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').hasAttribute('data-reserve-date')) {
      remarkedBodyRooms.reserve.date = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').getAttribute('data-reserve-date');
    }

    if (options.email) {
      remarkedBodyRooms.reserve.email = remarkedPrimaryWidget.querySelector('input[name=remarked-primary-widget-email]').value
    }
    if (options.telegramUsername) {
      remarkedBodyRooms.reserve.telegram_username = remarkedPrimaryWidget.querySelector('input[name=remarked-primary-widget-telegram-username]').value
    }
    if (options.lastName) {
      remarkedBodyRooms.reserve.surname = remarkedPrimaryWidget.querySelector('input[name=remarked-primary-widget-lastname]').value
    }
    if (options.birthDate) {
      remarkedBodyRooms.reserve.birthday = dateReplacer('.remarked-primary-widget-birthday');
    }
    if (options.addToWaitList) {
      remarkedBodyRooms.reserve.is_waiting_list = 1;
    }

    if (options.subcsriptionCheckbox) {
      remarkedBodyRooms.reserve.is_subcsription = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox input').checked;
    }

    if (Object.keys(options.selectAdd).length != 0) {
      let text = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment textarea').value;
      let name = remarkedPrimaryWidget.querySelector('#remarked-add-name').textContent;
      let value = remarkedPrimaryWidget.querySelector('#remarked-add-select').value;
      if (value != '' && value != null) {
        remarkedBodyRooms.reserve.comment = text + ' \n ' + name + ': ' + value;
      }
    }

    if (Object.keys(options.secondSelectAdd).length != 0) {
      let text = remarkedBodyRooms.reserve.comment || remarkedPrimaryWidget.querySelector('.remarked-primary-widget__comment textarea').value;
      let secondName = remarkedPrimaryWidget.querySelector('#remarked-second-add-name').textContent;
      let secondValue = remarkedPrimaryWidget.querySelector('#remarked-second-add-select').value;
      if (secondValue != '' && secondValue != null) {
          remarkedBodyRooms.reserve.comment = text + ' \n ' + secondName + ': ' + secondValue;
      }
  }

    if (options.customCommentText) {
      remarkedBodyRooms.reserve.comment += options.customCommentText + ' \n';
    }

    if (options.eventsWidget) {
      const {currentTicketsInfo} = options.eventsWidgetOptions;
      let eventsInfo = [];

      for (const ticketName in currentTicketsInfo.details) {
          const ticket = currentTicketsInfo.details[ticketName];
          if (ticket.quantity > 0) {
              eventsInfo.push(`Билет ${ticket.name} - ${ticket.quantity} ;\n`);
          }
      }
      eventsInfo.push(`Общая сумма: ${currentTicketsInfo.totalSum} ₽ \n`);

      remarkedBodyRooms.reserve.comment += eventsInfo.join('');
    }

    if (options.birthdayTable) {
      remarkedPrimaryWidget.querySelector('#remarked-primary-widget__birthdayTable-input').checked ? remarkedBodyRooms.reserve.comment += "\n Будет именинник" : '';
    }

    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').hasAttribute('data-table') && !options.blockedAutoLanding) {
      remarkedBodyRooms.reserve.table_ids = JSON.parse(remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').getAttribute('data-table'));
    }

    if (options.сhildСhair) {
      remarkedPrimaryWidget.querySelector('#remarked-primary-widget__сhildСhair-input').checked ? remarkedBodyRooms.reserve.comment += "\n Нужен детский стул" : '';
    }

    if (options.sendAfterMessage) {
      remarkedBodyRooms.reserve.message_type = remarkedPrimaryWidget.querySelector('input[name="sendAfterMessage"]:checked').value;
    }

    if (options.hallSelected) {
      let title;
      if (options.booking.length == 1) {
        title = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant--not div.remarked-primary-widget__restaurant-item').textContent;
      } else {
        let point = remarkedPrimaryWidget.querySelector('select.remarked-primary-widget__restaurant-select').value;
        title = remarkedPrimaryWidget.querySelector('select.remarked-primary-widget__restaurant-select').options[document.querySelector('select.remarked-primary-widget__restaurant-select').selectedIndex].textContent;
      }
      remarkedBodyRooms.reserve.comment += "\n Зал: " + title;
    }

    if (options.newHallSelected) {
      let hall = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-tabs-button.__active');
      if (hall) {
        remarkedBodyRooms.reserve.comment += "\n Зал: " + hall.textContent;
      } else {
        remarkedBodyRooms.reserve.comment += "";
      }

    }

    if (options.tags && !options.tagsButtons && tagsInstance instanceof remarkedMultiplaySelect) {
			if (tagsInstance.state.length != 0) {
				remarkedBodyRooms.reserve.guest_tags = tagsInstance.state;
			}
		}

		if (options.tags && options.tagsButtons) {
			const tagItems = remarkedPrimaryWidget.querySelectorAll('.remarked-tags-button-item--active');
			const tags = [];

			for (const tagItem of tagItems) {
				const id = parseInt(tagItem.getAttribute('data-id'));
				if (Number.isNaN(id) || id <= 0) continue;

				tags.push(id);
			}

			if (tags.length) {
				remarkedBodyRooms.reserve.guest_tags = tags;
			}
		}

    if (options.eventTags && eventTagsInstance instanceof remarkedMultiplaySelect) {
      if (eventTagsInstance.state.length != 0) {
        remarkedBodyRooms.reserve.eventTags = eventTagsInstance.state;
      }
    }

    if (options.checkboxs.length > 0) {
      let checkboxs = options.checkboxs;
      for (let i = 0; i < checkboxs.length; i++) {
        let item = checkboxs[i];
        let { name, value, id } = item;
        remarkedPrimaryWidget.querySelector('#remarked-primary-widget__' + id + '-input').checked ? remarkedBodyRooms.reserve.comment += "\n " + (value ? value : name) : '';
      }
    }

    if (options.inputs.length > 0) {
      let inputs = options.inputs;
      for (let i = 0; i < inputs.length; i++) {
        let item = inputs[i];
        let { name, POSTname, id } = item;
        const value = remarkedPrimaryWidget.querySelector('.remarked-primary-widget__' + id + ' input').value;
        if (value.length > 0) remarkedBodyRooms.reserve.comment += "\n " + (POSTname ? POSTname : name) + ': ' + value;
      }
    }

    if (options.getPaymentLink) {
      remarkedBodyRooms.getPaymentLink = 1;
    }

    if (options.utmSourceToReserveSource) {
    	try {
    		const utm_source = getUtmParameter('utm_source');
	    	if (!!utm_source) {
	    		remarkedBodyRooms.reserve.source = utm_source;
	    	} else {
	    		const tildaUTM = getCookie('TILDAUTM');
	    		if (tildaUTM) {
	    			const arrayUTM = tildaUTM.split('|||');
	    			for (var i = 0; i < arrayUTM.length; i++) {
	    				const utm = arrayUTM[i];
	    				if (!utm) continue;
	    				const [key, value] = utm.split('=');
	    				if (key === 'utm_source') {
	    					remarkedBodyRooms.reserve.source = value;
	    					break;
	    				}
	    			}
	    		}
	    	}
    	} catch(e) {
    		console.error(e);
    	}
    }

    if (options.utmMediumToReserveSource) {
    	try {
    		const utm_medium = getUtmParameter('utm_medium');
	    	if (!!utm_medium) {
	    		remarkedBodyRooms.reserve.source = utm_medium;
	    	} else {
	    		const tildaUTM = getCookie('TILDAUTM');
	    		if (tildaUTM) {
	    			const arrayUTM = tildaUTM.split('|||');
	    			for (var i = 0; i < arrayUTM.length; i++) {
	    				const utm = arrayUTM[i];
	    				if (!utm) continue;
	    				const [key, value] = utm.split('=');
	    				if (key === 'utm_medium') {
	    					remarkedBodyRooms.reserve.source = value;
	    					break;
	    				}
	    			}
	    		}
	    	}
    	} catch(e) {
    		console.log(e);
    	}
    }

    options.beforeSendReserves(remarkedBodyRooms, remarkedPrimaryWidget, remarkedPrimaryWidgetWrap);
    //console.log(remarkedBodyRooms)
    const remarkedXHRRoom = new XMLHttpRequest();
    //console.log(remarkedBodyRooms);
    let remarkedBodyRoomsJSON = JSON.stringify(remarkedBodyRooms);

    // отработка textSuccessFunction
    if (options.textSuccessWithDates) {
      const remarkedPrimaryWidgetSucces = document.querySelector('div.remarked-primary-widget__success');

      remarkedPrimaryWidgetSucces.innerHTML = `
      <div class="remarked-primary-widget__title">${translate.thanksTitle}</div>
      Вы забронировали стол на ${remarkedBodyRooms.reserve.date} в ${remarkedBodyRooms.reserve.time} на ${remarkedBodyRooms.reserve.guests_count} человек(а). Стол в вашем распоряжении на 2 часа. Бронь держится 15 минут, пожалуйста, не опаздывайте. До встречи в пиццерии!
      `;

      if(options.children) {
        remarkedPrimaryWidgetSucces.innerHTML = `
        <div class="remarked-primary-widget__title">${translate.thanksTitle}</div>
        Вы забронировали стол на ${remarkedBodyRooms.reserve.date} в ${remarkedBodyRooms.reserve.time} на ${remarkedBodyRooms.reserve.guests_count} человек(а) и ${remarkedBodyRooms.reserve.children_count} ребенка (детей). Стол в вашем распоряжении на 2 часа. Бронь держится 15 минут, пожалуйста, не опаздывайте. До встречи в пиццерии!
        `;
      }
    }

    if (options.useCustomTextSuccessFunction) {
      options.customTextSuccessFunction(remarkedPrimaryWidget, translate, remarkedBodyRooms.reserve);
    }

    remarkedXHRRoom.open('POST', remarkedReqUrl);

    remarkedXHRRoom.responseType = 'json';
    remarkedXHRRoom.setRequestHeader('Content-Type', 'application/json');

    remarkedXHRRoom.onload = function () {
      try {
        let localCode = remarkedXHRRoom.response.local_code ? remarkedXHRRoom.response.local_code : 0;
        endPreloader();
        if (remarkedXHRRoom.response.status == "error" && ['Tables are not free', 'Can not find or free table'].includes(remarkedXHRRoom.response.message)) {
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-notice').style.opacity = 1;
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-notice').textContent = "Выберите другое время";
          return false;
        }
        if (remarkedXHRRoom.response.status == "error" && remarkedXHRRoom.response.message == "Empty or wrong `reserve`.`phone` param") {
          phoneInput.style.borderColor = "red";
          phoneInput.scrollIntoView({ block: "center", behavior: "smooth" });
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit').setAttribute('data-disabled', 'false');
          return false;
        }
        if (remarkedXHRRoom.response.status == "error" && localCode == 1) {
          alert('Вы уже забронировали столик на сегодня, если вам нужно внести изменения в ваше бронирование, то свяжитесь с рестораном');
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit').setAttribute('data-disabled', 'false');
          return false;
        }
        if (remarkedXHRRoom.response.status == 'success') {
          if (remarkedXHRRoom?.response?.form_url) window.location.href = remarkedXHRRoom.response.form_url;
          remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget--success');
          options.successCreateReserve(remarkedPrimaryWidgetWrap, remarkedPrimaryWidgetReset);

          if (options.redirect) {
            setTimeout(function () {
              window.location.href = options.redirectLink;
            }, options.redirectTimeout);
          }
        }

        if (remarkedXHRRoom.response.status == 'error') {
          alert('Ошибка: ' + remarkedXHRRoom.response.message);
          remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit').setAttribute('data-disabled', 'false');
        }
      } catch (error) {
        console.error(error);
        endPreloader();
        alert('Попробуйте еще раз');
        //remarkedPrimaryWidgetWrap.classList.add('remarked-primary-widget--success');
      }

    }

    remarkedXHRRoom.send(remarkedBodyRoomsJSON);
  }

  function remarkedPrimaryWidgetReset() {
    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times').classList.contains('remarked-primary-widget__times--active')) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times').classList.remove('remarked-primary-widget__times--active');
    }
    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').value = "";
    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').hasAttribute('data-duration')) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').removeAttribute('data-duration');
    }
    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').hasAttribute('data-reserve-date')) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').removeAttribute('data-reserve-date');
    }
    if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').hasAttribute('data-table')) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__times-input').removeAttribute('data-table');
    }
    remarkedPrimaryWidgetWrap.classList.remove('remarked-primary-widget--success');
    nameInput.value = "";
    if (nameInput.getAttribute('style')) {
      nameInput.removeAttribute('style');
    }
    lastNameInput.value = "";
    if (lastNameInput.getAttribute('style')) {
      lastNameInput.removeAttribute('style');
    }
    phoneInput.value = "";
    if (phoneInput.getAttribute('style')) {
      phoneInput.removeAttribute('style');
    }
    emailInput.value = "";
    if (emailInput.getAttribute('style')) {
      emailInput.removeAttribute('style');
    }
    birthdayInput.value = "";
    if (birthdayInput.getAttribute('style')) {
      birthdayInput.removeAttribute('style');
    }
    remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__date-select').value = "";
    if (options.defaultDate) {
      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__date-select').value = options.defaultDate;
      getTimes();
    }
    if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__date-select').getAttribute('style')) {
      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__date-select').removeAttribute('style');
    }
    remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__comment textarea').value = "";
    remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__policy-checkbox input').checked = false;
    if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__policy-checkbox').classList.contains('remarked-primary-widget__policy-checkbox--active')) {
      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__policy-checkbox--active').classList.remove('remarked-primary-widget__policy-checkbox--active');
    }

    if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__policy-text').getAttribute('style')) {
      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__policy-text').removeAttribute('style');
    }

    if (options.extraPolicyCheckbox) {
      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox input').checked = false;
      if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox').classList.contains('remarked-primary-widget__extraPolicyCheck-checkbox--active')) {
        remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__extraPolicyCheck-checkbox--active').classList.remove('remarked-primary-widget__extraPolicyCheck-checkbox--active');
      }

      if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__extraPolicyCheck-text').getAttribute('style')) {
        remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__extraPolicyCheck-text').removeAttribute('style');
      }
    }

    if (options.subcsriptionCheckbox) {
      remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox input').checked = false;
      if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox').classList.contains('remarked-primary-widget__subcsriptionCheckbox-checkbox--active')) {
        remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__subcsriptionCheckbox-checkbox--active').classList.remove('remarked-primary-widget__subcsriptionCheckbox-checkbox--active');
      }

      if (remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__subcsriptionCheckbox-text').getAttribute('style')) {
        remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__subcsriptionCheckbox-text').removeAttribute('style');
      }
    }

    if (options.phoneCodeMask) {
      remarkedPrimaryWidgetWrap.querySelector('.phoneCodeMaskReMarked-input').value = '';
      const event = new Event('input');
      remarkedPrimaryWidgetWrap.querySelector('.phoneCodeMaskReMarked-input').dispatchEvent(event);
    }
    if (options.requiredSelect) {
      remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').value = "";

      if (remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').getAttribute('style')) {
        remarkedPrimaryWidget.querySelector('.remarked-primary-widget__restaurant-select').removeAttribute('style');
      }
    }

    if (options.resetAfterHeadText && remarkedPrimaryWidget.querySelector('.afterHeadTitleHtml')) {
      remarkedPrimaryWidget.querySelector('.afterHeadTitleHtml').innerHTML = '';
    }

    remarkedPrimaryWidget.querySelector('.remarked-primary-widget__submit').setAttribute('data-disabled', 'false');

    remarkedPrimaryWidgetWrap.querySelector('.remarked-primary-widget__times-notice').style.opacity = 0;

    if (isOpenWidget) {
      isOpenWidget = false;
      window.location.hash = '';
    }
  }


  const hash = location.hash;
  let isOpenWidget = false;
  if (hash) {
    const modal = document.querySelector(`.remarked-primary-widget__wrap[data-id="${hash}-modal"]`);
    if (modal) {
      if (modal.classList.contains('remarked-primary-widget--none')) {
        modal.classList.remove('remarked-primary-widget--none');
      }
      modal.classList.add('remarked-primary-widget--active');
      document.querySelector('html').style.overflowY = "hidden";
      isOpenWidget = true;
    }
  }

}


class remarkedMultiplaySelect {
  constructor(container, data, title, single = false, selectRequired = false) {
    this.data = data;
    this.container = container;
    this._state = {};
    this._idSelect = 'remarked-multiplay-' + Math.random().toString(36).substring(2);
    this.single = single;
    this.title = title || 'Теги';
    this.selectRequired = selectRequired;
  }

  reset() {
    this._state = {};
    const select = document.querySelector('#' + this._idSelect);
    select.querySelector('.remarked-multiplay-select-input').innerHTML = '';
    const dropdownActive = select.querySelectorAll('.remarked-multiplay-dropdown-item.active');
    for (var i = 0; i < dropdownActive.length; i++) dropdownActive[i].classList.remove('active');
  }

  get state() {
    return Object.values(this._state);
  }

  update(data) {
    if (!data) return;
    if (data.length == 0) return;
    if (!Array.isArray(data)) return;
    this.reset();
    const select = document.querySelector('#' + this._idSelect);
    select.remove();
    this.data = data;
    this.render();
  }

  render() {
    const self = this;
    const dropdownItem = [];
    this.data.forEach(item => {
      let element = document.createElement('div');
      element.classList.add('remarked-multiplay-dropdown-item');
      element.setAttribute('data-tags-id', item.id);
      element.setAttribute('data-tags-color', item.color);
      element.textContent = item.name;
      dropdownItem.push(element.outerHTML);
    });

    const multiplaySelect = document.createElement('div');
    multiplaySelect.classList.add('remarked-multiplay-select');
    multiplaySelect.setAttribute('id', this._idSelect);
    multiplaySelect.innerHTML = `
    		<label class="remarked-multiplay-select-title ${this.selectRequired ? '' : '__not-required'}">${this.title}</label>
    		<div class="remarked-multiplay-select-input"></div>
				<div class="remarked-multiplay-dropdown">
					<div class="remarked-multiplay-dropdown-wrapper">
						${dropdownItem.join('')}
					</div>
				</div>
    	`;

    document.addEventListener('click', (e) => {
      const withinBoundaries = e.composedPath().includes(multiplaySelect);
      if (!withinBoundaries) multiplaySelect.querySelector('.remarked-multiplay-dropdown').style.height = '0px';
    })

    multiplaySelect.addEventListener('click', function () { this.querySelector('.remarked-multiplay-dropdown').style.height = 'auto' });

    multiplaySelect.querySelector('.remarked-multiplay-dropdown-wrapper').addEventListener('click', function (e) {
      if (e.target.closest('.remarked-multiplay-dropdown-item')) {
        const element = e.target.closest('.remarked-multiplay-dropdown-item');
        const id = element.getAttribute('data-tags-id');
        if (!element.classList.contains('active')) {
          if (self.single === true) {
            document.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains('remarked-multiplay-dropdown-item')) {
                multiplaySelect.querySelector('.remarked-multiplay-dropdown').style.height = '0px';
              }
            });
          }
          if (self.single === true && Object.keys(self._state).length) {
            for (const key in self._state) {
              if (Object.hasOwnProperty.call(self._state, key)) {
                const element = self._state[key];
                multiplaySelect.querySelector('.remarked-multiplay-select-input .remarked-multiplay-select-input-item[data-tags-id="' + key + '"]').remove();
                delete self._state[key];
                if (multiplaySelect.querySelector('.remarked-multiplay-dropdown-item[data-tags-id="' + key + '"]').classList.contains('active')) {
                  multiplaySelect.querySelector('.remarked-multiplay-dropdown-item[data-tags-id="' + key + '"]').classList.remove('active');
                }
              }
            }
          }
          const item = document.createElement('div');
          item.classList.add('remarked-multiplay-select-input-item');
          item.setAttribute('data-tags-id', id);
          const color = element.getAttribute('data-tags-color');
          const name = element.textContent;
          item.innerHTML = `
	    				<span>${name}</span>
	    				<div class="remarked-multiplay-select-input-item-remove">
	    					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.5 3.5L3.5 10.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M3.5 3.5L10.5 10.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
	    				</div>
	    			`;
          element.classList.add('active');
          item.style.background = color;
          self._state[id] = +id;
          multiplaySelect.querySelector('.remarked-multiplay-select-input').append(item);
        } else {
          multiplaySelect.querySelector('.remarked-multiplay-select-input .remarked-multiplay-select-input-item[data-tags-id="' + id + '"]').remove();
          delete self._state[id];
          element.classList.remove('active');
        }
      }
    });

    multiplaySelect.querySelector('.remarked-multiplay-select-input').addEventListener('click', function (e) {
      if (e.target.closest('.remarked-multiplay-select-input-item-remove')) {
        const element = e.target.closest('.remarked-multiplay-select-input-item');
        const id = element.getAttribute('data-tags-id');
        element.remove();
        delete self._state[id];
        multiplaySelect.querySelector(`.remarked-multiplay-dropdown .active[data-tags-id="${id}"]`).classList.remove('active');
      }
    });

    this.container.append(multiplaySelect);
  }
}

class phoneCodeMaskReMarked {
  constructor(elem, options = {}) {
    this.input = elem;
    this.options = options;
    this.valid = false;
    this.init();
  }

    config = {
        ru: { code: "7",   mask: "(***) ***-**-**", flag: "ru" },
        by: { code: "375", mask: "(**) ***-**-**",  flag: "by" },
        kz: { code: "7",   mask: "(***) ***-**-**", flag: "kz" },
        ua: { code: "380", mask: "(**) ***-**-**",  flag: "ua" },
        uz: { code: "998", mask: "(**) ***-**-**",  flag: "uz" },

        am: { code: "374", mask: "(**) ******",  flag: "am" },


        us: { code: "1",   mask: "(***) ***-****",  flag: "us" },
        ca: { code: "1",   mask: "(***) ***-****",  flag: "ca" },

        gb: { code: "44",  mask: "**** ******",     flag: "gb" },
        ie: { code: "353", mask: "** *** ****",     flag: "ie" },

        de: { code: "49",  mask: "**** ********",   flag: "de" },
        fr: { code: "33",  mask: "* ** ** ** **",   flag: "fr" },
        it: { code: "39",  mask: "*** **** ***",    flag: "it" },
        es: { code: "34",  mask: "*** *** ***",     flag: "es" },
        pt: { code: "351", mask: "*** *** ***",     flag: "pt" },
        nl: { code: "31",  mask: "** *** ****",     flag: "nl" },
        be: { code: "32",  mask: "*** ** ** **",    flag: "be" },
        ch: { code: "41",  mask: "** *** ** **",    flag: "ch" },
        at: { code: "43",  mask: "*** ******",     flag: "at" },
        se: { code: "46",  mask: "** *** ** **",    flag: "se" },
        no: { code: "47",  mask: "** ** ** **",     flag: "no" },
        fi: { code: "358", mask: "** *** ****",     flag: "fi" },
        dk: { code: "45",  mask: "** ** ** **",     flag: "dk" },
        pl: { code: "48",  mask: "*** *** ***",     flag: "pl" },
        cz: { code: "420", mask: "*** *** ***",     flag: "cz" },
        sk: { code: "421", mask: "*** *** ***",     flag: "sk" },
        hu: { code: "36",  mask: "** *** ****",     flag: "hu" },
        ro: { code: "40",  mask: "*** *** ***",     flag: "ro" },
        bg: { code: "359", mask: "*** *** ***",     flag: "bg" },
        hr: { code: "385", mask: "** *** ***",      flag: "hr" },
        si: { code: "386", mask: "** *** ***",      flag: "si" },
        rs: { code: "381", mask: "** *** ****",     flag: "rs" },
        me: { code: "382", mask: "** *** ***",      flag: "me" },
        mk: { code: "389", mask: "** *** ***",      flag: "mk" },

        tr: { code: "90",  mask: "*** *** ****",    flag: "tr" },
        il: { code: "972", mask: "** *** ****",     flag: "il" },
        ae: { code: "971", mask: "** *** ****",     flag: "ae" },
        sa: { code: "966", mask: "** *** ****",     flag: "sa" },
        qa: { code: "974", mask: "*** ****",        flag: "qa" },
        kw: { code: "965", mask: "**** ****",       flag: "kw" },
        bh: { code: "973", mask: "**** ****",       flag: "bh" },
        om: { code: "968", mask: "**** ****",       flag: "om" },
        jo: { code: "962", mask: "* **** ****",     flag: "jo" },

        cn: { code: "86",  mask: "*** **** ****",   flag: "cn" },
        jp: { code: "81",  mask: "** **** ****",    flag: "jp" },
        kr: { code: "82",  mask: "** *** ****",     flag: "kr" },
        in: { code: "91",  mask: "***** *****",    flag: "in" },
        id: { code: "62",  mask: "*** *** ****",    flag: "id" },
        th: { code: "66",  mask: "** *** ****",     flag: "th" },
        vn: { code: "84",  mask: "** **** ****",    flag: "vn" },
        ph: { code: "63",  mask: "*** *** ****",    flag: "ph" },
        sg: { code: "65",  mask: "**** ****",       flag: "sg" },
        hk: { code: "852", mask: "**** ****",       flag: "hk" },

        au: { code: "61",  mask: "* **** ****",     flag: "au" },
        nz: { code: "64",  mask: "** *** ****",     flag: "nz" },

        br: { code: "55",  mask: "** ***** ****",  flag: "br" },
        mx: { code: "52",  mask: "*** *** ****",   flag: "mx" },
        cl: { code: "56",  mask: "* **** ****",     flag: "cl" },
        ar: { code: "54",  mask: "** **** ****",   flag: "ar" },
        uy: { code: "598", mask: "* *** ** **",     flag: "uy" },
        cy: { code: "357", mask: "*** *** **",     flag: "cy" },

        za: { code: "27",  mask: "** *** ****",     flag: "za" },
        eg: { code: "20",  mask: "*** *** ****",   flag: "eg" },
        ke: { code: "254", mask: "*** ******",     flag: "ke" },
    }

  init() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('phoneCodeMaskReMarked');

    this.wrap(this.input, wrapper);

    const select = document.createElement('select');
    this.select = select;
    select.classList.add('phoneCodeMaskReMarked-select');

    this.select.addEventListener('change', () => {
      const mask = this.select.options[this.select.selectedIndex];
      // console.log(mask);
      inputMask.setAttribute('data-mask', mask.getAttribute('data-mask'));
      //inputMask.value = '';

      this.updateTrigger();

      const event = new Event('input');
      inputMask.dispatchEvent(event);
    });

    const inputMask = document.createElement('input');
    inputMask.classList.add('phoneCodeMaskReMarked-input');

    let index = 0;
    for (const key in this.config) {
      if (Object.hasOwnProperty.call(this.config, key)) {
        const element = this.config[key];
        const option = document.createElement('option');
        option.setAttribute('value', key);
        option.setAttribute('data-mask', element.mask);
        option.setAttribute('data-dial-code', element.code);
        option.textContent = '+' + element.code;
        if ((!index && this.options.selectedPhoneCodeCountry === '' && this.options.selectedPhoneCodeValue === '') || option.value === this.options.selectedPhoneCodeCountry || option.dataset.dialCode === this.options.selectedPhoneCodeValue) {
          option.setAttribute('selected', 'selected');
          inputMask.setAttribute('data-mask', element.mask);
        }
        index++;
        select.append(option);
      }
    }

    wrapper.append(select);

    this.trigger = document.createElement('div');
    this.trigger.className = 'phoneCodeMaskReMarked-trigger';

    this.triggerFlag = document.createElement('div');
    this.triggerFlag.className = 'phoneCodeMaskReMarked-flag';

    this.triggerCode = document.createElement('span');
    this.triggerCode.className = 'phoneCodeMaskReMarked-code';

    const arrow = document.createElement('div');
    arrow.className = 'phoneCodeMaskReMarked-arrow';

    this.trigger.append(this.triggerFlag, arrow, this.triggerCode);
    wrapper.append(this.trigger);

    // Initialize searchable dropdown
    this.initSearchableDropdown(select, wrapper);

    const context = this;

    function maskHandler(e) {
      const el = e.target;
      const clearVal = el.dataset.phoneClear;
      const pattern = el.getAttribute('data-mask');
      const matrix = pattern;
      let i = 0;
      let def = matrix.replace(/\D/g, "");
      let val = e.target.value.replace(/\D/g, "");

      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[*\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });

      if (e.target.value.replace(/\D/g, "").length === matrix.match(/([\*\d])/g).length) {
        context.valid = true;
      } else {
        context.valid = false;
      }

      const selected = context.select.options[context.select.selectedIndex];
      context.input.value = selected.dataset.dialCode + e.target.value.replace(/\D/g, "");
    }

    inputMask.addEventListener('input', maskHandler);
    inputMask.addEventListener('blur', maskHandler);
    inputMask.addEventListener('focus', maskHandler);

    wrapper.append(inputMask);

    this.updateTrigger();
  }

  isValid() {
    return this.valid;
  }

  initSearchableDropdown(select, container) {
    this.createSearchElements(select, container);
    this.createDropdownOptions(select);
    this.bindEvents(select, container);
  }

  createSearchElements(select, container) {
    this.searchContainer = document.createElement('div');
    this.searchContainer.className = 'phoneCodeMaskReMarked-search-container';

    this.searchInput = document.createElement('input');
    this.searchInput.type = 'text';
    this.searchInput.className = 'phoneCodeMaskReMarked-search';
    this.searchInput.placeholder = 'Поиск';

    this.dropdown = document.createElement('div');
    this.dropdown.className = 'phoneCodeMaskReMarked-dropdown';

    this.searchContainer.appendChild(this.searchInput);
    container.appendChild(this.searchContainer);
    container.appendChild(this.dropdown);
  }

  createDropdownOptions(select) {
    this.originalOptions = Array.from(select.options);
    this.dropdownOptions = [];

    this.originalOptions.forEach(option => {
        const key = option.getAttribute('value');
        const cfg = this.config[key];

        const dropdownOption = document.createElement('div');
        dropdownOption.className = 'phoneCodeMaskReMarked-option';

        const flag = document.createElement('div');
        flag.className = 'phoneCodeMaskReMarked-flag';

        if (cfg && cfg.flag) {
            flag.style.backgroundImage = `url(https://remarked.ru/widget/new/js/flags/${cfg.flag}.svg)`;
        }

        const text = document.createElement('span');
        text.className = 'phoneCodeMaskReMarked-option-text';
        text.textContent = option.textContent;

        dropdownOption.append(flag, text);

        dropdownOption.setAttribute('data-value', option.value);
        // dropdownOption.setAttribute('data-key', key);

        dropdownOption.addEventListener('click', () => {
            select.value = dropdownOption.dataset.value;
            select.dispatchEvent(new Event('change'));
            this.hideDropdown();
        });

      this.dropdown.appendChild(dropdownOption);
      this.dropdownOptions.push(dropdownOption);
    });
  }

  bindEvents(select, container) {
    select.addEventListener('focus', () => {
      this.showDropdown();
    });

    select.addEventListener('change', () => {
      this.hideDropdown();
    });

    this.searchInput.addEventListener('input', (e) => {
      this.filterOptions(e.target.value);
    });

    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideDropdown();
        select.focus();
      }
    });

    this.hideSearchHandler = (e) => {
      if (!container.contains(e.target) && e.target !== select) {
        this.hideDropdown();
        document.removeEventListener('click', this.hideSearchHandler);
      }
    };

    this.trigger.addEventListener('click', () => {
      this.showDropdown();
    });

  }

  showDropdown() {
    this.searchContainer.style.display = 'block';
    this.dropdown.classList.add('visible');
    this.searchInput.focus();
    document.addEventListener('click', this.hideSearchHandler);
  }

  hideDropdown() {
    this.searchContainer.style.display = 'none';
    this.dropdown.classList.remove('visible');
    this.searchInput.value = '';
    this.filterOptions('');
  }

  filterOptions(searchText) {
    const searchLower = searchText.toLowerCase();
    this.dropdownOptions.forEach(option => {
      const optionText = option.textContent.toLowerCase();
      if (searchText === '' || optionText.includes(searchLower)) {
        option.classList.remove('hidden');
      } else {
        option.classList.add('hidden');
      }
    });
  }

  updateTrigger() {
    const selectedOption = this.select.options[this.select.selectedIndex];
    const key = selectedOption.getAttribute('value');
    const cfg = this.config[key];

    this.triggerCode.textContent = '+' + selectedOption.getAttribute('data-dial-code');

    if (cfg?.flag) {
      this.triggerFlag.style.backgroundImage =
        `url(https://remarked.ru/widget/new/js/flags/${cfg.flag}.svg)`;
    }
  }

  wrap(toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    toWrap.parentNode.insertBefore(wrapper, toWrap);
    return wrapper.appendChild(toWrap);
  };
}


function maskDateRemarked(elem, options = {}) {
  elem.addEventListener('input', function (e) {

      let cursorPos = e.target.selectionStart;
      let originalValue = e.target.value;

      let digits = originalValue.replace(/\D/g, '');

      if (digits.length > 8) digits = digits.substring(0, 8);

      let maskedValue = '';
      if (digits.length > 0) maskedValue = digits.substring(0, 2);
      if (digits.length >= 3) maskedValue += '.' + digits.substring(2, 4);
      if (digits.length >= 5) maskedValue += '.' + digits.substring(4, 8);

      e.target.value = maskedValue;

      let digitsBeforeCursor = 0;
      for (let i = 0; i < cursorPos; i++) {
          if (originalValue[i] && originalValue[i].match(/\d/)) {
              digitsBeforeCursor++;
          }
      }

      // Находим новую позицию курсора в отформатированном значении
      let newCursorPos = 0;
      let digitsCounted = 0;
      for (let i = 0; i < maskedValue.length && digitsCounted < digitsBeforeCursor; i++) {
          if (maskedValue[i].match(/\d/)) {
              digitsCounted++;
          }
          newCursorPos++;
      }

      if (maskedValue[newCursorPos] === '.' && digitsCounted === digitsBeforeCursor && digitsBeforeCursor > 0) {
          if ((digitsBeforeCursor === 2 && maskedValue.length >= 3) ||
              (digitsBeforeCursor === 4 && maskedValue.length >= 6)) {
              newCursorPos++;
          }
      }

      if (cursorPos === originalValue.length && maskedValue.length > originalValue.length) {
          if ((originalValue.replace(/\D/g, '').length === 2 && maskedValue.length === 3) ||
              (originalValue.replace(/\D/g, '').length === 4 && maskedValue.length === 6)
          ) {
              newCursorPos = maskedValue.length;
          }
      } else if (newCursorPos === 0 && digitsBeforeCursor > 0) {}

      if (digitsBeforeCursor === digits.length && digits.length > 0) newCursorPos = maskedValue.length;

      e.target.setSelectionRange(newCursorPos, newCursorPos);
  });

  function isValid() {
      const [dd, mm, yyyy] = elem.value.split('.');
      const format = `${yyyy}-${mm}-${dd}`;
      const instance = new Date(format);
      if (!!isNaN(instance)) return false;

      const instanceDay = instance.getDate();
      const instanceMonth = instance.getMonth() + 1;
      const instanceYear = instance.getFullYear();
      const instanceFormat = `${instanceYear}-${instanceMonth < 10 ? `0${instanceMonth}` : instanceMonth}-${instanceDay < 10 ? `0${instanceDay}` : instanceDay}`;

      if (instanceFormat !== format) return false;

      const instanceNowTimestamp = Date.now();
      const minTimestamp = instanceNowTimestamp - (options.minQtyYears * 365 * 86400 * 1000);
      const maxTimestamp = instanceNowTimestamp - (95 * 365 * 86400 * 1000);

      const instanceTimestamp = instance.getTime();
      return !!(instanceTimestamp > maxTimestamp && instanceTimestamp < minTimestamp);
  }

  return {
      isValid,
  }
}
