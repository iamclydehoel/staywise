/**
 * bookblock.js v2.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-preserve3d-addtest-prefixed-setclasses-teststyles !*/
!(function(e, n, t) {
	function r(e, n) {
		return typeof e === n
	}
	function o() {
		var e, n, t, o, s, i, a
		for (var l in S)
			if (S.hasOwnProperty(l)) {
				if (
					((e = []),
					(n = S[l]),
					n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
				)
					for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase())
				for (o = r(n.fn, 'function') ? n.fn() : n.fn, s = 0; s < e.length; s++)
					(i = e[s]),
						(a = i.split('.')),
						1 === a.length
							? (Modernizr[a[0]] = o)
							: (!Modernizr[a[0]] ||
									Modernizr[a[0]] instanceof Boolean ||
									(Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
							  (Modernizr[a[0]][a[1]] = o)),
						_.push((o ? '' : 'no-') + a.join('-'))
			}
	}
	function s(e) {
		var n = b.className,
			t = Modernizr._config.classPrefix || ''
		if ((T && (n = n.baseVal), Modernizr._config.enableJSClass)) {
			var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)')
			n = n.replace(r, '$1' + t + 'js$2')
		}
		Modernizr._config.enableClasses &&
			((n += ' ' + t + e.join(' ' + t)), T ? (b.className.baseVal = n) : (b.className = n))
	}
	function i(e, n) {
		if ('object' == typeof e) for (var t in e) x(e, t) && i(t, e[t])
		else {
			e = e.toLowerCase()
			var r = e.split('.'),
				o = Modernizr[r[0]]
			if ((2 == r.length && (o = o[r[1]]), 'undefined' != typeof o)) return Modernizr
			;(n = 'function' == typeof n ? n() : n),
				1 == r.length
					? (Modernizr[r[0]] = n)
					: (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
					  (Modernizr[r[0]][r[1]] = n)),
				s([(n && 0 != n ? '' : 'no-') + r.join('-')]),
				Modernizr._trigger(e, n)
		}
		return Modernizr
	}
	function a(e) {
		return e
			.replace(/([a-z])-([a-z])/g, function(e, n, t) {
				return n + t.toUpperCase()
			})
			.replace(/^-/, '')
	}
	function l() {
		return 'function' != typeof n.createElement
			? n.createElement(arguments[0])
			: T
			? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
			: n.createElement.apply(n, arguments)
	}
	function f() {
		var e = n.body
		return e || ((e = l(T ? 'svg' : 'body')), (e.fake = !0)), e
	}
	function u(e, t, r, o) {
		var s,
			i,
			a,
			u,
			d = 'modernizr',
			p = l('div'),
			c = f()
		if (parseInt(r, 10)) for (; r--; ) (a = l('div')), (a.id = o ? o[r] : d + (r + 1)), p.appendChild(a)
		return (
			(s = l('style')),
			(s.type = 'text/css'),
			(s.id = 's' + d),
			(c.fake ? c : p).appendChild(s),
			c.appendChild(p),
			s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(n.createTextNode(e)),
			(p.id = d),
			c.fake &&
				((c.style.background = ''),
				(c.style.overflow = 'hidden'),
				(u = b.style.overflow),
				(b.style.overflow = 'hidden'),
				b.appendChild(c)),
			(i = t(p, e)),
			c.fake ? (c.parentNode.removeChild(c), (b.style.overflow = u), b.offsetHeight) : p.parentNode.removeChild(p),
			!!i
		)
	}
	function d(e, n) {
		return !!~('' + e).indexOf(n)
	}
	function p(e, n) {
		return function() {
			return e.apply(n, arguments)
		}
	}
	function c(e, n, t) {
		var o
		for (var s in e) if (e[s] in n) return t === !1 ? e[s] : ((o = n[e[s]]), r(o, 'function') ? p(o, t || n) : o)
		return !1
	}
	function h(e) {
		return e
			.replace(/([A-Z])/g, function(e, n) {
				return '-' + n.toLowerCase()
			})
			.replace(/^ms-/, '-ms-')
	}
	function m(n, t, r) {
		var o
		if ('getComputedStyle' in e) {
			o = getComputedStyle.call(e, n, t)
			var s = e.console
			if (null !== o) r && (o = o.getPropertyValue(r))
			else if (s) {
				var i = s.error ? 'error' : 'log'
				s[i].call(s, 'getComputedStyle returning null, its possible modernizr test results are inaccurate')
			}
		} else o = !t && n.currentStyle && n.currentStyle[r]
		return o
	}
	function g(n, r) {
		var o = n.length
		if ('CSS' in e && 'supports' in e.CSS) {
			for (; o--; ) if (e.CSS.supports(h(n[o]), r)) return !0
			return !1
		}
		if ('CSSSupportsRule' in e) {
			for (var s = []; o--; ) s.push('(' + h(n[o]) + ':' + r + ')')
			return (
				(s = s.join(' or ')),
				u('@supports (' + s + ') { #modernizr { position: absolute; } }', function(e) {
					return 'absolute' == m(e, null, 'position')
				})
			)
		}
		return t
	}
	function v(e, n, o, s) {
		function i() {
			u && (delete A.style, delete A.modElem)
		}
		if (((s = r(s, 'undefined') ? !1 : s), !r(o, 'undefined'))) {
			var f = g(e, o)
			if (!r(f, 'undefined')) return f
		}
		for (var u, p, c, h, m, v = ['modernizr', 'tspan', 'samp']; !A.style && v.length; )
			(u = !0), (A.modElem = l(v.shift())), (A.style = A.modElem.style)
		for (c = e.length, p = 0; c > p; p++)
			if (((h = e[p]), (m = A.style[h]), d(h, '-') && (h = a(h)), A.style[h] !== t)) {
				if (s || r(o, 'undefined')) return i(), 'pfx' == n ? h : !0
				try {
					A.style[h] = o
				} catch (y) {}
				if (A.style[h] != m) return i(), 'pfx' == n ? h : !0
			}
		return i(), !1
	}
	function y(e, n, t, o, s) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			a = (e + ' ' + j.join(i + ' ') + i).split(' ')
		return r(n, 'string') || r(n, 'undefined')
			? v(a, n, o, s)
			: ((a = (e + ' ' + N.join(i + ' ') + i).split(' ')), c(a, n, t))
	}
	function C(e, n, r) {
		return y(e, t, t, n, r)
	}
	var _ = [],
		S = [],
		w = {
			_version: '3.6.0',
			_config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
			_q: [],
			on: function(e, n) {
				var t = this
				setTimeout(function() {
					n(t[e])
				}, 0)
			},
			addTest: function(e, n, t) {
				S.push({ name: e, fn: n, options: t })
			},
			addAsyncTest: function(e) {
				S.push({ name: null, fn: e })
			},
		},
		Modernizr = function() {}
	;(Modernizr.prototype = w), (Modernizr = new Modernizr())
	var x,
		b = n.documentElement,
		T = 'svg' === b.nodeName.toLowerCase()
	!(function() {
		var e = {}.hasOwnProperty
		x =
			r(e, 'undefined') || r(e.call, 'undefined')
				? function(e, n) {
						return n in e && r(e.constructor.prototype[n], 'undefined')
				  }
				: function(n, t) {
						return e.call(n, t)
				  }
	})(),
		(w._l = {}),
		(w.on = function(e, n) {
			this._l[e] || (this._l[e] = []),
				this._l[e].push(n),
				Modernizr.hasOwnProperty(e) &&
					setTimeout(function() {
						Modernizr._trigger(e, Modernizr[e])
					}, 0)
		}),
		(w._trigger = function(e, n) {
			if (this._l[e]) {
				var t = this._l[e]
				setTimeout(function() {
					var e, r
					for (e = 0; e < t.length; e++) (r = t[e])(n)
				}, 0),
					delete this._l[e]
			}
		}),
		Modernizr._q.push(function() {
			w.addTest = i
		})
	var P = 'CSS' in e && 'supports' in e.CSS,
		E = 'supportsCSS' in e
	Modernizr.addTest('supports', P || E),
		Modernizr.addTest('preserve3d', function() {
			var n,
				t,
				r = e.CSS,
				o = !1
			return r && r.supports && r.supports('(transform-style: preserve-3d)')
				? !0
				: ((n = l('a')),
				  (t = l('a')),
				  (n.style.cssText =
						'display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);'),
				  (t.style.cssText =
						'display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);'),
				  n.appendChild(t),
				  b.appendChild(n),
				  (o = t.getBoundingClientRect()),
				  b.removeChild(n),
				  (o = o.width && o.width < 4))
		})
	var z = ((w.testStyles = u), 'Moz O ms Webkit'),
		j = w._config.usePrefixes ? z.split(' ') : []
	w._cssomPrefixes = j
	var k = function(n) {
		var r,
			o = prefixes.length,
			s = e.CSSRule
		if ('undefined' == typeof s) return t
		if (!n) return !1
		if (((n = n.replace(/^@/, '')), (r = n.replace(/-/g, '_').toUpperCase() + '_RULE'), r in s)) return '@' + n
		for (var i = 0; o > i; i++) {
			var a = prefixes[i],
				l = a.toUpperCase() + '_' + r
			if (l in s) return '@-' + a.toLowerCase() + '-' + n
		}
		return !1
	}
	w.atRule = k
	var N = w._config.usePrefixes ? z.toLowerCase().split(' ') : []
	w._domPrefixes = N
	var O = { elem: l('modernizr') }
	Modernizr._q.push(function() {
		delete O.elem
	})
	var A = { style: O.elem.style }
	Modernizr._q.unshift(function() {
		delete A.style
	}),
		(w.testAllProps = y)
	w.prefixed = function(e, n, t) {
		return 0 === e.indexOf('@') ? k(e) : (-1 != e.indexOf('-') && (e = a(e)), n ? y(e, n, t) : y(e, 'pfx'))
	}
	;(w.testAllProps = C),
		Modernizr.addTest('csstransforms', function() {
			return -1 === navigator.userAgent.indexOf('Android 2.') && C('transform', 'scale(1)', !0)
		}),
		Modernizr.addTest('csstransforms3d', function() {
			return !!C('perspective', '1px', !0)
		}),
		Modernizr.addTest('csstransitions', C('transition', 'all', !0)),
		o(),
		s(_),
		delete w.addTest,
		delete w.addAsyncTest
	for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]()
	e.Modernizr = Modernizr
})(window, document)

!(function(window) {
	'use strict'

	// global
	var document = window.document
	var Modernizr = window.Modernizr

	// https://gist.github.com/edankwan/4389601
	Modernizr.addTest('csstransformspreserve3d', function() {
		var prop = Modernizr.prefixed('transformStyle')
		var val = 'preserve-3d'
		var computedStyle
		if (!prop) return false

		prop = prop
			.replace(/([A-Z])/g, function(str, m1) {
				return '-' + m1.toLowerCase()
			})
			.replace(/^ms-/, '-ms-')

		Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function(el, rule) {
			computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : ''
		})

		return computedStyle === val
	})

	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key]
			}
		}
		return a
	}

	function BookBlock(el, options) {
		this.el = el
		this.options = extend(this.defaults, options)
		this._init()
	}

	BookBlock.prototype = {
		defaults: {
			// page to start on
			startPage: 1,
			// vertical or horizontal flip
			orientation: 'vertical',
			// ltr (left to right) or rtl (right to left)
			direction: 'ltr',
			// speed for the flip transition in ms
			speed: 1000,
			// easing for the flip transition
			easing: 'ease-in-out',
			// if set to true, both the flipping page and the sides will have an overlay to simulate shadows
			shadows: true,
			// opacity value for the "shadow" on both sides (when the flipping page is over it)
			// value : 0.1 - 1
			shadowSides: 0.2,
			// opacity value for the "shadow" on the flipping page (while it is flipping)
			// value : 0.1 - 1
			shadowFlip: 0.1,
			// if we should show the first item after reaching the end
			circular: false,
			// if we want to specify a selector that triggers the next() function. example: ´#bb-nav-next´
			nextEl: '',
			// if we want to specify a selector that triggers the prev() function
			prevEl: '',
			// autoplay. If true it overwrites the circular option to true
			autoplay: false,
			// time (ms) between page switch, if autoplay is true
			interval: 3000,
			// 3d perspective
			perspective: 1200,
			// callback after the flip transition
			// old is the index of the previous item
			// page is the current item´s index
			// isLimit is true if the current page is the last one (or the first one)
			onEndFlip: function(old, page, isLimit) {
				return false
			},
			// callback before the flip transition
			// page is the current item´s index
			onBeforeFlip: function(page) {
				return false
			},

			// Add by BruceCzK
			itemSelector: '.bb-item',
			hasCover: true,
		},
		_init: function() {
			// orientation class
			this.el.className += ' bb-' + this.options.orientation
			this.el.style.perspective = this.options.perspective + 'px'
			// items
			this.items = Array.prototype.slice.call(this.el.querySelectorAll(this.options.itemSelector))
			// total items
			this.itemsCount = this.items.length
			// current item´s index
			if (this.options.startPage > 0 && this.options.startPage <= this.itemsCount) {
				this.currentIdx = this.options.startPage - 1
			} else {
				this.currentIdx = 0
			}
			// previous item´s index
			this.previous = -1
			// show first item
			this.current = this.items[this.currentIdx]
			this.current.style.display = 'block'
			// get width of this.el
			// this will be necessary to create the flipping layout
			this.elWidth = this.el.offsetWidth

			if (this.options.hasCover && this.currentIdx === 0) {
				this.el.style.transform = 'translateX(-25%)'
			}

			var transEndEventNames = {
				WebkitTransition: 'webkitTransitionEnd',
				MozTransition: 'transitionend',
				OTransition: 'oTransitionEnd',
				msTransition: 'MSTransitionEnd',
				transition: 'transitionend',
			}
			this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')]
			// support css 3d transforms && css transitions && Modernizr.csstransformspreserve3d
			this.support = Modernizr.csstransitions && Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d
			// initialize/bind some events
			this._initEvents()
			// start slideshow
			if (this.options.autoplay) {
				this.options.circular = true
				this._startSlideshow()
			}
		},
		_initEvents: function() {
			var self = this

			if (this.options.nextEl !== '') {
				document.querySelector(this.options.nextEl).addEventListener('click', function() {
					self._action('next')
					return false
				})
				document.querySelector(this.options.nextEl).addEventListener('touchstart', function() {
					self._action('next')
					return false
				})
			}

			if (this.options.prevEl !== '') {
				document.querySelector(this.options.prevEl).addEventListener('click', function() {
					self._action('prev')
					return false
				})
				document.querySelector(this.options.prevEl).addEventListener('touchstart', function() {
					self._action('prev')
					return false
				})
			}

			window.addEventListener('resize', function() {
				self._resizeHandler()
			})
		},
		_action: function(dir, page) {
			this._stopSlideshow()
			this._navigate(dir, page)
		},
		_navigate: function(dir, page) {
			if (this.isAnimating) {
				return false
			}

			// callback trigger
			this.options.onBeforeFlip(this.currentIdx)

			this.isAnimating = true
			// update current value
			this.current = this.items[this.currentIdx]

			if (page !== undefined) {
				this.currentIdx = page
			} else if (
				(dir === 'next' && this.options.direction === 'ltr') ||
				(dir === 'prev' && this.options.direction === 'rtl')
			) {
				if (!this.options.circular && this.currentIdx === this.itemsCount - 1) {
					this.end = true
				} else {
					this.previous = this.currentIdx
					this.currentIdx = this.currentIdx < this.itemsCount - 1 ? this.currentIdx + 1 : 0
				}
			} else if (
				(dir === 'prev' && this.options.direction === 'ltr') ||
				(dir === 'next' && this.options.direction === 'rtl')
			) {
				if (!this.options.circular && this.currentIdx === 0) {
					this.end = true
				} else {
					this.previous = this.currentIdx
					this.currentIdx = this.currentIdx > 0 ? this.currentIdx - 1 : this.itemsCount - 1
				}
			}

			this.nextItem = !this.options.circular && this.end ? this.current : this.items[this.currentIdx]

			this.items.forEach(function(el, i) {
				el.style.display = 'none'
			})
			if (!this.support) {
				this._layoutNoSupport(dir)
			} else {
				this._layout(dir)
			}
		},
		_layoutNoSupport: function(dir) {
			this.nextItem.style.display = 'block'
			this.end = false
			this.isAnimating = false
			var isLimit =
				(dir === 'next' && this.currentIdx === this.itemsCount - 1) || (dir === 'prev' && this.currentIdx === 0)
			// callback trigger
			this.options.onEndFlip(this.previous, this.currentIdx, isLimit)
		},
		// creates the necessary layout for the 3d structure and triggers the transitions
		_layout: function(dir) {
			var self = this,
				// basic structure: 1 element for the left side.
				s_left = this._addSide('left', dir),
				// 1 element for the flipping/middle page
				s_middle = this._addSide('middle', dir),
				// 1 element for the right side
				s_right = this._addSide('right', dir),
				// overlays
				o_left = s_left.querySelector('div.bb-overlay'),
				o_middle_f = s_middle.querySelector('div.bb-front').querySelector('div.bb-flipoverlay'),
				o_middle_b = s_middle.querySelector('div.bb-back').querySelector('div.bb-flipoverlay'),
				o_right = s_right.querySelector('div.bb-overlay'),
				speed = this.end ? 400 : this.options.speed

			var fChild = this.items[0]
			this.el.insertBefore(s_left, fChild)
			this.el.insertBefore(s_middle, fChild)
			this.el.insertBefore(s_right, fChild)
			s_left.style.zIndex = 102
			s_middle.style.zIndex = 103
			s_right.style.zIndex = 101

			s_middle.style.transitionDuration = speed + 'ms'
			s_middle.style.transitionTimingFunction = this.options.easing

			if (this.options.hasCover) {
				this.el.style.transitionDuration = speed / 2 + 'ms'
				if (self.currentIdx === 0) {
					self.el.style.transform = 'translateX(-25%)'
				} else {
					self.el.style.transform = 'translateX(0)'
				}
			}

			s_middle.addEventListener(this.transEndEventName, function(event) {
				if ((' ' + event.target.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' bb-page ') > -1) {
					Array.prototype.slice.call(self.el.querySelectorAll('.bb-page')).forEach(function(el, i) {
						self.el.removeChild(el)
					})
					self.nextItem.style.display = 'block'
					self.end = false
					self.isAnimating = false
					var isLimit =
						(dir === 'next' && self.currentIdx === self.itemsCount - 1) || (dir === 'prev' && self.currentIdx === 0)
					// callback trigger
					self.options.onEndFlip(self.previous, self.currentIdx, isLimit)
				}
			})

			if (dir === 'prev') {
				s_middle.className += ' bb-flip-initial'
			}

			// overlays
			if (this.options.shadows && !this.end) {
				if (dir === 'next') {
					o_middle_f.style.transition = 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
					o_middle_b.style.transition =
						'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
					o_middle_b.style.opacity = this.options.shadowFlip
					o_left.style.transition =
						'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
					o_right.style.transition = 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
					o_right.style.opacity = this.options.shadowSides
				} else if (dir === 'prev') {
					o_middle_f.style.transition =
						'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
					o_middle_f.style.opacity = this.options.shadowFlip
					o_middle_b.style.transition = 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
					o_left.style.transition = 'opacity ' + this.options.speed / 2 + 'ms ' + 'linear'
					o_left.style.opacity = this.options.shadowSides
					o_right.style.transition =
						'opacity ' + this.options.speed / 2 + 'ms ' + 'linear' + ' ' + this.options.speed / 2 + 'ms'
				}
			}

			setTimeout(function() {
				// first && last pages lift slightly up when we can't go further
				s_middle.className += self.end ? ' bb-flip-' + dir + '-end' : ' bb-flip-' + dir

				// overlays
				if (self.options.shadows && !self.end) {
					o_middle_f.style.opacity = dir === 'next' ? self.options.shadowFlip : 0
					o_middle_b.style.opacity = dir === 'next' ? 0 : self.options.shadowFlip
					o_left.style.opacity = dir === 'next' ? self.options.shadowSides : 0
					o_right.style.opacity = dir === 'next' ? 0 : self.options.shadowSides
				}
			}, 25)
		},
		// adds the necessary sides (bb-page) to the layout
		_addSide: function(side, dir) {
			var sideEl = document.createElement('div')
			sideEl.className = 'bb-page'

			switch (side) {
				case 'left':
					/*
						<div class="bb-page" style="z-index:102;">
						<div class="bb-back">
						<div class="bb-outer">
						<div class="bb-content">
						<div class="bb-inner">
						dir==='next' ? [content of current page] : [content of next page]
						</div>
						</div>
						<div class="bb-overlay"></div>
						</div>
						</div>
						</div>
						*/
					var inner = dir === 'next' ? this.current.innerHTML : this.nextItem.innerHTML
					sideEl.innerHTML =
						'<div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' +
						inner +
						'</div></div><div class="bb-overlay"></div></div></div>'
					break
				case 'middle':
					/*
						<div class="bb-page" style="z-index:103;">
						<div class="bb-front">
						<div class="bb-outer">
						<div class="bb-content">
						<div class="bb-inner">
						dir==='next' ? [content of current page] : [content of next page]
						</div>
						</div>
						<div class="bb-flipoverlay"></div>
						</div>
						</div>
						<div class="bb-back">
						<div class="bb-outer">
						<div class="bb-content">
						<div class="bb-inner">
						dir==='next' ? [content of next page] : [content of current page]
						</div>
						</div>
						<div class="bb-flipoverlay"></div>
						</div>
						</div>
						</div>
						*/
					var frontinner = dir === 'next' ? this.current.innerHTML : this.nextItem.innerHTML
					var backinner = dir === 'next' ? this.nextItem.innerHTML : this.current.innerHTML
					sideEl.innerHTML =
						'<div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' +
						frontinner +
						'</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:' +
						this.elWidth +
						'px"><div class="bb-inner">' +
						backinner +
						'</div></div><div class="bb-flipoverlay"></div></div></div>'
					break
				case 'right':
					/*
						<div class="bb-page" style="z-index:101;">
						<div class="bb-front">
						<div class="bb-outer">
						<div class="bb-content">
						<div class="bb-inner">
						dir==='next' ? [content of next page] : [content of current page]
						</div>
						</div>
						<div class="bb-overlay"></div>
						</div>
						</div>
						</div>
						*/
					var inner = dir === 'next' ? this.nextItem.innerHTML : this.current.innerHTML
					sideEl.innerHTML =
						'<div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' +
						inner +
						'</div></div><div class="bb-overlay"></div></div></div>'
					break
			}

			return sideEl
		},
		_startSlideshow: function() {
			var self = this
			this.slideshow = setTimeout(function() {
				self._navigate('next')
				if (self.options.autoplay) {
					self._startSlideshow()
				}
			}, this.options.interval)
		},
		_stopSlideshow: function() {
			if (this.options.autoplay) {
				clearTimeout(this.slideshow)
				this.options.autoplay = false
			}
		},
		// public method: flips next
		next: function() {
			this._action(this.options.direction === 'ltr' ? 'next' : 'prev')
		},
		// public method: flips back
		prev: function() {
			this._action(this.options.direction === 'ltr' ? 'prev' : 'next')
		},
		// public method: goes to a specific page
		jump: function(page) {
			page -= 1

			if (page === this.currentIdx || page >= this.itemsCount || page < 0) {
				return false
			}
			var dir
			if (this.options.direction === 'ltr') {
				dir = page > this.currentIdx ? 'next' : 'prev'
			} else {
				dir = page > this.currentIdx ? 'prev' : 'next'
			}
			this._action(dir, page)
		},
		// public method: goes to the last page
		last: function() {
			this.jump(this.itemsCount)
		},
		// public method: goes to the first page
		first: function() {
			this.jump(1)
		},
		// taken from https://github.com/desandro/vanilla-masonry/blob/master/masonry.js by David DeSandro
		// original debounce by John Hann
		// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
		_resizeHandler: function() {
			var self = this

			function delayed() {
				self._resize()
				self._resizeTimeout = null
			}

			if (this._resizeTimeout) {
				clearTimeout(this._resizeTimeout)
			}
			this._resizeTimeout = setTimeout(delayed, 50)
		},
		_resize: function() {
			// update width value
			this.elWidth = this.el.offsetWidth
		},
		// public method: check if isAnimating is true
		isActive: function() {
			return this.isAnimating
		},
		// public method: dynamically adds new elements
		// call this method after inserting new "bb-item" elements inside the BookBlock
		update: function() {
			var currentItem = this.items[this.currentIdx]
			this.items = Array.prototype.slice.call(this.el.querySelectorAll('.bb-item'))
			this.itemsCount = this.items.length
			this.currentIdx = this.items.indexOf(currentItem)
		},
		destroy: function() {
			if (this.options.autoplay) {
				this._stopSlideshow()
			}
			this.el.className = this.el.className.replace(
				new RegExp('(^|\\s+)' + 'bb-' + this.options.orientation + '(\\s+|$)'),
				' '
			)
			this.items.forEach(function(el, i) {
				el.style.display = 'block'
			})

			if (this.options.nextEl !== '') {
				this.options.nextEl.removeEventListener('click')
				this.options.nextEl.removeEventListener('touchstart')
			}

			if (this.options.prevEl !== '') {
				this.options.prevEl.removeEventListener('click')
				this.options.prevEl.removeEventListener('touchstart')
			}

			window.removeEventListener('debouncedresize')
		},
	}

	// add to global namespace
	window.BookBlock = BookBlock
	if (typeof module !== 'undefined') {
		module.exports = BookBlock
	}
})(window)
