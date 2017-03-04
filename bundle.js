/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classicgame = __webpack_require__(1);

	var _classicgame2 = _interopRequireDefault(_classicgame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(18);

	// ClassicGame variables and setup
	var classicGame = new _classicgame2.default();
	var game = classicGame.create('Some new text will pop up here when you start the game');
	document.querySelector('#classic-wrapper').appendChild(game);

	// Modal stuff
	var modal = document.getElementById('classic-info-modal');
	var clscBtn = document.querySelector('#classic-instructions i.fa');
	var close = document.getElementsByClassName('close')[0];
	close.addEventListener('click', function (ev) {
	  modal.style.display = 'none';
	});
	clscBtn.addEventListener('click', function (ev) {
	  modal.style.display = 'block';
	}, false);
	window.addEventListener('click', function (ev) {
	  if (ev.target === modal) {
	    modal.style.display = 'none';
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loremHipsum = __webpack_require__(2);

	var _loremHipsum2 = _interopRequireDefault(_loremHipsum);

	var _timrjs = __webpack_require__(4);

	var _timrjs2 = _interopRequireDefault(_timrjs);

	var _field = __webpack_require__(14);

	var _field2 = _interopRequireDefault(_field);

	var _indext = __webpack_require__(15);

	var _indext2 = _interopRequireDefault(_indext);

	var _keycoder = __webpack_require__(16);

	var keycoder = _interopRequireWildcard(_keycoder);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(17);

	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);

	    this.PLAYING = 1;
	    this.PAUSED = 2;
	    this.FINISHED = 3;
	    this.RESET = 4;

	    this.clock = 0;
	    this.timer = new _timrjs2.default(0);
	    this.errors = 0;

	    this.state = this.FINISHED;
	  }

	  _createClass(_class, [{
	    key: 'create',
	    value: function create(text) {
	      this.message = text;

	      this.parent = document.createElement('div');
	      this.parent.id = 'classic-app';
	      this.parent.className = 'border';

	      this.error = document.createElement('p');
	      this.error.id = 'classic-error';
	      this.error.className = 'error white-border';
	      this.error.style.display = 'none';

	      this.playButton = document.createElement('i');
	      this.playButton.id = 'classic-play-button';
	      this.playButton.className = 'underline-magic play-button fa fa-play';
	      this.playButton.setAttribute('aria-hidden', 'true');
	      this.playButton.setAttribute('title', 'Play the game');

	      this.repeatButton = document.createElement('i');
	      this.repeatButton.id = 'classic-repeat-button';
	      this.repeatButton.className = 'underline-magic play-button fa fa-repeat';
	      this.repeatButton.setAttribute('aria-hidden', 'true');
	      this.repeatButton.setAttribute('title', 'Restart');

	      this.time = document.createElement('p');
	      this.time.id = 'classic-clock';
	      this.time.textContent = '00:00';

	      this.prompt = document.createElement('p');
	      this.prompt.textContent = 'Ready?';

	      this.status = document.createElement('div');
	      this.status.id = 'classic-status';

	      this.text = document.createElement('p');
	      this.text.id = 'classic-text';
	      this.text.className = 'fine white-border';

	      this.typed = document.createElement('span');
	      this.typed.id = 'classic-typed';

	      this.untyped = document.createElement('span');
	      this.untyped.id = 'classic-untyped';
	      this.untyped.textContent = text;

	      this.recentScoresTable = document.createElement('table');
	      this.recentScoresTable.className = 'border';

	      this.recentScoreHeader = document.createElement('tr');
	      var recentScoreTH = document.createElement('th');
	      recentScoreTH.textContent = 'Recent Scores';
	      this.recentScoreHeader.appendChild(recentScoreTH);

	      this.index = new _indext2.default(this.typed, this.untyped, text);

	      this.errorField = new _field2.default(this.error);
	      this.buildParent();
	      this.addListeners();
	      return this.parent;
	    }
	  }, {
	    key: 'buildParent',
	    value: function buildParent() {
	      this.status.appendChild(this.playButton);
	      this.status.appendChild(this.repeatButton);
	      this.status.appendChild(this.prompt);
	      this.status.appendChild(this.time);

	      this.text.appendChild(this.typed);
	      this.text.appendChild(this.untyped);

	      this.recentScoresTable.appendChild(this.recentScoreHeader);

	      this.parent.appendChild(this.status);
	      this.parent.appendChild(this.text);
	      this.parent.appendChild(this.error);
	      this.parent.appendChild(this.recentScoresTable);
	    }
	  }, {
	    key: 'setText',
	    value: function setText(text) {
	      this.message = text;
	      this.untyped.textContent = text;
	    }
	  }, {
	    key: 'makeText',
	    value: function makeText() {
	      return (0, _loremHipsum2.default)().replace(/\s+/g, ' ');
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      if (this.state === this.RESET) {
	        return;
	      }
	      this.state = this.RESET;

	      this.errors = 0;
	      this.setText(this.makeText());
	      this.untyped.textContent = this.message;
	      this.typed.textContent = '';
	      this.index.reset(this.message);
	      this.errorField.clear();
	      this.text.classList.remove('error');
	      this.setErrorVisibile(false);
	      this.prompt.textContent = 'Type!';
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      if (!(this.state === this.PAUSED || this.state === this.RESET)) {
	        return;
	      }
	      this.state = this.PLAYING;

	      this.timer.start();
	      this.playButton.classList.remove('fa-play');
	      this.playButton.classList.add('fa-pause');
	      this.playButton.setAttribute('title', 'Pause');
	      this.untyped.setAttribute('tabindex', '0');
	      this.untyped.focus();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      if (!(this.state === this.PLAYING)) {
	        return;
	      }
	      this.state = this.PAUSED;

	      this.prompt.textContent = 'Paused';
	      this.playButton.classList.remove('fa-pause');
	      this.playButton.classList.add('fa-play');
	      this.playButton.setAttribute('title', 'Play');
	      this.timer.pause();
	      // By removing the 'tabindex' property, the untyped element can not have typing focus
	      if (this.untyped.hasAttribute('tabindex')) {
	        this.untyped.removeAttribute('tabindex');
	      }
	    }
	  }, {
	    key: 'finish',
	    value: function finish() {
	      if (!(this.state === this.PLAYING || this.state === this.RESET)) {
	        return;
	      }
	      this.state = this.FINISHED;

	      this.prompt.textContent = 'You finished with a speed of ' + this.wpm() + ' WPM and and accuracy of ' + this.accuracy() + '%';
	      this.playButton.classList.remove('fa-pause');
	      if (this.wpm() && this.typed.textContent.length === this.message.length) this.addRecentScore();
	      this.playButton.classList.add('fa-play');
	      this.timer.stop();
	      this.text.classList.remove('error');
	      // By removing the 'tabindex' property, the untyped element can not have typing focus
	      if (this.untyped.hasAttribute('tabindex')) {
	        this.untyped.removeAttribute('tabindex');
	      }
	      this.untyped.blur();
	    }
	  }, {
	    key: 'addListeners',
	    value: function addListeners(onEnd) {
	      var _this = this;

	      // Click listeners for the buttons
	      this.playButton.addEventListener('click', function (e) {
	        switch (_this.state) {
	          case _this.FINISHED:
	            _this.reset();
	            _this.play();
	            break;
	          case _this.PAUSED:
	            _this.play();
	            break;
	          case _this.PLAYING:
	            _this.pause();
	            break;
	          default:
	            break;
	        }
	      });
	      this.repeatButton.addEventListener('click', function (e) {
	        _this.finish();
	        _this.reset();
	        _this.play();
	      });

	      // Enter to start a new game
	      window.addEventListener('keyup', function (e) {
	        if (e.key === 'Enter') {
	          if (_this.state === _this.PAUSED) {
	            _this.play();
	          } else {
	            _this.finish();
	            _this.reset();
	            _this.play();
	          }
	        }
	      });

	      // The timer's ticker
	      this.timer.ticker(function (formattedTime, percentDone) {
	        _this.currentTime = percentDone;
	        _this.time.textContent = formattedTime;
	        _this.prompt.textContent = _this.wpm() + ' WPM ' + _this.accuracy() + '% Accuracy';
	      });

	      // Key watcher
	      this.untyped.addEventListener('keydown', function (e) {
	        e.preventDefault();
	        if (e.keyCode === 8 || e.keyCode === 46) {
	          _this.deleteLetter();
	        } else {
	          _this.keyPressed(keycoder.eventToCharacter(e));
	        }
	      });
	    }
	  }, {
	    key: 'keyPressed',
	    value: function keyPressed(char) {
	      var _this2 = this;

	      if (!char) {
	        return;
	      }

	      var correctKey = function correctKey() {
	        _this2.setErrorVisibile(false);
	        _this2.index.increase();
	        // If we have reached the end
	        if (_this2.index.index === _this2.message.length) {
	          _this2.finish();
	          return;
	        }
	      };
	      var wrongKey = function wrongKey() {
	        _this2.setErrorVisibile(true);
	        _this2.text.classList.add('error');
	        if (char === ' ') {
	          char = '·';
	        }
	        _this2.errors += 1;
	        _this2.errorField.addChar(char);
	      };

	      if (char === this.index.currentChar() && this.errorField.isEmpty()) {
	        correctKey();
	      } else {
	        wrongKey();
	      }
	    }
	  }, {
	    key: 'wpm',
	    value: function wpm() {
	      return Math.round(this.typed.textContent.split(' ').length * 60 / this.currentTime);
	    }
	  }, {
	    key: 'accuracy',
	    value: function accuracy() {
	      var acc = 100 - Math.round(this.errors / (this.typed.textContent.length + 1) * 100);
	      return acc < 0 ? 0 : acc;
	    }
	  }, {
	    key: 'addRecentScore',
	    value: function addRecentScore() {
	      var recentScore = document.createElement('tr');
	      var recentScoreTD = document.createElement('td');

	      recentScoreTD.innerHTML = '<b>' + this.wpm() + ' WPM ' + '</b>' + this.accuracy() + '% Accuracy';
	      recentScore.appendChild(recentScoreTD);

	      var firstScore = this.recentScoresTable.getElementsByTagName('tr')[1];
	      this.recentScoresTable.insertBefore(recentScore, firstScore);
	    }
	  }, {
	    key: 'setErrorVisibile',
	    value: function setErrorVisibile(visible) {
	      if (visible && this.error.style.display !== 'flex') {
	        this.error.style.display = 'flex';
	      } else if (!visible && this.error.style.display !== 'none') {
	        this.error.style.display = 'none';
	      }
	    }
	  }, {
	    key: 'deleteLetter',
	    value: function deleteLetter() {
	      // Delete char from error only if it has letters in it
	      if (!this.errorField.isEmpty()) {
	        this.errorField.removeChar();
	        if (this.errorField.isEmpty()) {
	          this.setErrorVisibile(false);
	          this.text.classList.remove('error');
	          this.text.classList.add('fine');
	        }
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var generator = function() {
	    var options = (arguments.length) ? arguments[0] : {},
	        count = options.count || 1,
	        units = options.units || 'sentences',
	        sentenceLowerBound = options.sentenceLowerBound || 5,
	        sentenceUpperBound = options.sentenceUpperBound || 15,
	        paragraphLowerBound = options.paragraphLowerBound || 3,
	        paragraphUpperBound = options.paragraphUpperBound || 7,
	        format = options.format || 'plain',
	        words = options.words || __webpack_require__(3).words,
	        random = options.random || Math.random;

	    units = simplePluralize(units.toLowerCase());

	    var randomInteger = function(min, max) {
	        return Math.floor(random() * (max - min + 1) + min);
	    };

	    var randomWord = function(words) {
	        return words[randomInteger(0, words.length - 1)];
	    };

	    var randomSentence = function(words, lowerBound, upperBound) {
	        var sentence = '',
	            bounds = {
	                min: 0,
	                max: randomInteger(lowerBound, upperBound)
	            };

	        while (bounds.min < bounds.max) {
	            sentence = sentence + ' ' + randomWord(words);
	            bounds.min = bounds.min + 1;
	        }

	        if (sentence.length) {
	            sentence = sentence.slice(1);
	            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
	        }

	        return sentence;
	    };

	    var randomParagraph = function(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
	        var paragraph = '',
	            bounds = {
	                min: 0,
	                max: randomInteger(lowerBound, upperBound)
	            };

	        while (bounds.min < bounds.max) {
	            paragraph = paragraph + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
	            bounds.min = bounds.min + 1;
	        }

	        if (paragraph.length) {
	            paragraph = paragraph.slice(2);
	            paragraph = paragraph + '.';
	        }

	        return paragraph;
	    }

	    var iter = 0,
	        bounds = {
	            min: 0,
	            max: count
	        },
	        string = '',
	        prefix = '',
	        suffix = "\r\n";

	    if (format == 'html') {
	        prefix = '<p>';
	        suffix = '</p>';
	    }

	    while (bounds.min < bounds.max) {
	        switch (units.toLowerCase()) {
	            case 'words':
	                string = string + ' ' + randomWord(words);
	                break;
	            case 'sentences':
	                string = string + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
	                break;
	            case 'paragraphs':
	                string = string + prefix + randomParagraph(words, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound) + suffix;
	                break;
	        }
	        bounds.min = bounds.min + 1;
	    }

	    if (string.length) {
	        var pos = 0;

	        if (string.indexOf('. ') == 0) {
	            pos = 2;
	        } else if (string.indexOf('.') == 0 || string.indexOf(' ') == 0) {
	            pos = 1;
	        }

	        string = string.slice(pos);

	        if (units == 'sentences') {
	            string = string + '.';
	        }
	    }

	    return string;
	};

	function simplePluralize(string) {
	    if (string.indexOf('s', string.length - 1) === -1) {
	        return string + 's';
	    }
	    return string;
	}

	module.exports = generator;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var dictionary = {
	    words: [
	        "+1",
	        "3 wolf moon",
	        "8-bit",
	        "90's",
	        "actually",
	        "aesthetic",
	        "American Apparel",
	        "art party",
	        "artisan",
	        "asymmetrical",
	        "Austin",
	        "authentic",
	        "banh mi",
	        "banjo",
	        "Banksy",
	        "beard",
	        "before they sold out",
	        "bespoke",
	        "bicycle rights",
	        "biodiesel",
	        "bitters",
	        "blog",
	        "Blue Bottle",
	        "Brooklyn",
	        "brunch",
	        "Bushwick",
	        "butcher",
	        "cardigan",
	        "Carles",
	        "chambray",
	        "chia",
	        "chillwave",
	        "church-key",
	        "cliche",
	        "cornhole",
	        "Cosby sweater",
	        "craft beer",
	        "cray",
	        "cred",
	        "crucifix",
	        "deep v",
	        "direct trade ",
	        "disrupt",
	        "distillery",
	        "DIY",
	        "dreamcatcher",
	        "drinking vinegar",
	        "Echo Park",
	        "ennui",
	        "ethical",
	        "ethnic",
	        "Etsy",
	        "fanny pack",
	        "farm-to-table",
	        "fashion axe",
	        "fingerstache",
	        "fixie",
	        "flannel",
	        "flexitarian",
	        "food truck",
	        "forage",
	        "four loko",
	        "freegan",
	        "gastropub",
	        "gentrify",
	        "gluten-free",
	        "Godard",
	        "hashtag",
	        "hella",
	        "Helvetica",
	        "High Life",
	        "hoodie",
	        "Intelligentsia",
	        "iPhone",
	        "irony",
	        "jean shorts",
	        "kale chips",
	        "keffiyeh",
	        "keytar",
	        "Kickstarter",
	        "kitsch",
	        "kogi",
	        "leggings",
	        "letterpress",
	        "literally",
	        "lo-fi",
	        "locavore",
	        "lomo",
	        "Marfa",
	        "master cleanse",
	        "McSweeney's",
	        "meggings",
	        "meh",
	        "messenger bag",
	        "mixtape",
	        "mlkshk",
	        "mumblecore",
	        "mustache",
	        "narwhal",
	        "Neutra",
	        "next level",
	        "normcore",
	        "occupy",
	        "Odd Future",
	        "organic",
	        "paleo",
	        "PBR",
	        "PBR&B",
	        "photo booth",
	        "pickled",
	        "Pinterest",
	        "Pitchfork",
	        "plaid",
	        "polaroid",
	        "pop-up",
	        "pork belly",
	        "Portland",
	        "post-ironic",
	        "pour-over",
	        "pug",
	        "put a bird on it",
	        "quinoa",
	        "raw denim",
	        "readymade",
	        "retro",
	        "roof party",
	        "salvia",
	        "sartorial",
	        "scenester",
	        "Schlitz",
	        "seitan",
	        "selfies",
	        "selvage",
	        "semiotics",
	        "shabby chic",
	        "Shoreditch",
	        "single-origin coffee",
	        "skateboard",
	        "slow-carb",
	        "small batch",
	        "squid",
	        "sriracha",
	        "street art",
	        "stumptown",
	        "sustainable",
	        "swag",
	        "synth",
	        "tattooed",
	        "Thundercats",
	        "tofu",
	        "Tonx",
	        "tote bag",
	        "tousled",
	        "Truffaut",
	        "trust fund",
	        "try-hard",
	        "Tumblr",
	        "twee",
	        "typewriter",
	        "ugh",
	        "umami",
	        "vegan",
	        "VHS",
	        "Vice",
	        "vinyl",
	        "viral",
	        "wayfarers",
	        "Wes Anderson",
	        "whatever",
	        "Williamsburg",
	        "wolf",
	        "XOXO",
	        "YOLO",
	        "you probably haven't heard of them",
	        "yr"
	    ]
	};

	module.exports = dictionary;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectAssign = __webpack_require__(5);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _validate = __webpack_require__(6);

	var _validate2 = _interopRequireDefault(_validate);

	var _formatTime = __webpack_require__(9);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	var _timeToSeconds = __webpack_require__(7);

	var _timeToSeconds2 = _interopRequireDefault(_timeToSeconds);

	var _correctFormat = __webpack_require__(8);

	var _correctFormat2 = _interopRequireDefault(_correctFormat);

	var _createStore = __webpack_require__(11);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _Timr = __webpack_require__(12);

	var _Timr2 = _interopRequireDefault(_Timr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = (0, _objectAssign2.default)(
	/**
	 * @description Creates a new Timr object.
	 *
	 * @param {String|Number} startTime - The starting time for the timr object.
	 * @param {Object} [options] - Options to customise the timer.
	 *
	 * @return {Object} A new Timr object.
	 */
	function (startTime, options) {
	  return new _Timr2.default(startTime, options);
	},

	// Exposed helper methods.
	{
	  validate: _validate2.default,
	  formatTime: _formatTime2.default,
	  timeToSeconds: _timeToSeconds2.default,
	  correctFormat: _correctFormat2.default,
	  createStore: _createStore2.default
	});

	module.exports = init;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = validate;

	var _timeToSeconds = __webpack_require__(7);

	var _timeToSeconds2 = _interopRequireDefault(_timeToSeconds);

	var _correctFormat = __webpack_require__(8);

	var _correctFormat2 = _interopRequireDefault(_correctFormat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Validates the provded time
	 *
	 * Additionally, if a pattern is provided, 25h / 25m, than
	 * it is converted here before being passed to timeToSeconds.
	 *
	 * @param {String|Number} time - The time to be checked
	 *
	 * @throws If the provided time is neither a number nor a string.
	 * @throws If the provided time is a negative number.
	 * @throws If the provided time is not in the correct format.
	 * @throws If the provided time in seconds is over 999:59:59.
	 *
	 * @returns {Number} - The original number or the converted number if
	 * a time string was provided.
	 */
	function validate(time) {
	  var newTime = time;

	  if (/^\d+[mh]$/i.test(newTime)) {
	    newTime = newTime.replace(/^(\d+)m$/i, '$1:00');
	    newTime = newTime.replace(/^(\d+)h$/i, '$1:00:00');
	  }

	  if (!(!isNaN(newTime) && newTime !== Infinity && newTime !== -Infinity && typeof newTime === 'number' || typeof newTime === 'string')) {
	    throw new Error('Expected time to be a string or number, instead got: ' + (
	    // Passes correct type, including null, NaN and Infinity
	    typeof newTime === 'number' || newTime === null ? newTime : typeof newTime === 'undefined' ? 'undefined' : _typeof(newTime)));
	  }

	  if (!(isNaN(Number(newTime)) || Number(newTime) >= 0)) {
	    throw new Error('Time cannot be a negative number, got: ' + newTime);
	  }

	  if (!(0, _correctFormat2.default)(newTime)) {
	    throw new Error('Expected time to be in (hh:mm:ss) format, instead got: ' + newTime);
	  }

	  if ((0, _timeToSeconds2.default)(newTime) > 3599999) {
	    throw new Error('Sorry, we don\'t support any time over 999:59:59.');
	  }

	  return (0, _timeToSeconds2.default)(newTime);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = timeToSeconds;
	/**
	 * @description Converts time format (HH:MM:SS) into seconds.
	 *
	 * Automatically rounds the returned number to avoid errors
	 * with floating point values.
	 *
	 * @param {String|Number} time - The time to be converted.
	 * If a number is provided it will simply return that number.
	 *
	 * @return {Number} - The time in seconds.
	 */
	function timeToSeconds(time) {
	  if (typeof time === 'number' && !isNaN(time)) {
	    return Math.round(time);
	  }

	  return Math.round(time.split(':').reduce(function (prev, curr, index, arr) {
	    if (arr.length === 3) {
	      if (index === 0) {
	        return prev + Number(curr) * 60 * 60;
	      }
	      if (index === 1) {
	        return prev + Number(curr) * 60;
	      }
	    }

	    if (arr.length === 2) {
	      if (index === 0) {
	        return prev + Number(curr) * 60;
	      }
	    }

	    return prev + Number(curr);
	  }, 0));
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = correctFormat;
	/**
	 * @description Checks the provided time for correct formatting.
	 * See incorrectFormat-test.js for examples of correct and incorrect formatting.
	 *
	 * @param {String} time - The provided time string.
	 *
	 * @returns {Boolean} True if format is correct, false otherwise.
	 */

	function correctFormat(time) {
	  var newTime = time;

	  if (typeof newTime === 'number') {
	    return true;
	  }

	  if (typeof newTime !== 'string') {
	    return false;
	  }

	  newTime = newTime.split(':');

	  // No more than 3 units (hh:mm:ss) and every unit is a number and is not a negative number.
	  return newTime.length <= 3 && newTime.every(function (el) {
	    return !isNaN(Number(el)) && Number(el) >= 0;
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatTime;

	var _buildOptions2 = __webpack_require__(10);

	var _buildOptions3 = _interopRequireDefault(_buildOptions2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Converts seconds to time format.
	 *
	 * @param {Number} seconds - The seconds to convert.
	 * @param {Object} [options] - The options to build the string.
	 *
	 * @return {String} The formatted time.
	 */
	function formatTime(seconds, options) {
	  var _buildOptions = (0, _buildOptions3.default)(options);

	  var outputFormat = _buildOptions.outputFormat;
	  var formatType = _buildOptions.formatType;
	  var separator = _buildOptions.separator;

	  /**
	   * @description Creates a timestring.
	   * Created inside formatTime to have access to separator argument,
	   *
	   * @param {Array} [...args] - All arguments to be processed
	   *
	   * @return {String} The compiled time string.
	   */

	  var createTimeString = function createTimeString() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return args.filter(function (value) {
	      return value !== false;
	    }).map(function (value) {
	      return value < 10 ? '0' + value : value;
	    }).join(separator);
	  };

	  if (formatType === 's') {
	    return '' + seconds;
	  }

	  var minutes = seconds / 60;

	  if (minutes >= 1 && /[hm]/i.test(formatType)) {
	    var hours = minutes / 60;
	    minutes = Math.floor(minutes);

	    if (hours >= 1 && /[h]/i.test(formatType)) {
	      hours = Math.floor(hours);

	      return createTimeString(hours, minutes - hours * 60, seconds - minutes * 60);
	    }

	    return createTimeString(/HH:MM:SS/i.test(outputFormat) && 0, minutes, seconds - minutes * 60);
	  }

	  return createTimeString(/HH:MM:SS/i.test(outputFormat) && 0, /MM:SS/i.test(outputFormat) && 0, seconds);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = buildOptions;

	var _objectAssign = __webpack_require__(5);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Builds an options object from default and custom options.
	 *
	 * @param {Object} [newOptions] - Optional custom options.
	 * @param {Object} [oldOptions] - Optional previous options.
	 *
	 * @throws If any option is invalid.
	 *
	 * @return {Object} Compiled options from default and custom.
	 */
	function buildOptions(newOptions, oldOptions) {
	  if (newOptions) {
	    var separator = newOptions.separator;
	    var outputFormat = newOptions.outputFormat;
	    var formatType = newOptions.formatType;

	    // Error checking for separator.

	    if (separator) {
	      if (typeof separator !== 'string') {
	        throw new Error('Expected separator to be a string, instead got: ' + (typeof separator === 'undefined' ? 'undefined' : _typeof(separator)));
	      }
	    }

	    // Error checking for outputFormat.
	    if (outputFormat) {
	      if (!/^(hh:)?(mm:)?ss$/i.test(outputFormat)) {
	        throw new Error('Expected outputFormat to be: hh:mm:ss, mm:ss (default) or ss; instead got: ' + outputFormat);
	      }
	    }

	    // Error checking for formatType.
	    if (formatType) {
	      if (!/^[hms]$/i.test(formatType)) {
	        throw new Error('Expected formatType to be: h, m or s; instead got: ' + formatType);
	      }
	    }
	  }

	  return (0, _objectAssign2.default)(oldOptions || { formatType: 'h', outputFormat: 'mm:ss', separator: ':' }, newOptions);
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createStore;

	var _Timr = __webpack_require__(12);

	var _Timr2 = _interopRequireDefault(_Timr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Flattens arrays to their base values
	 * Example: [[1], 2, [[[3]]]] - [1, 2, 3]
	 *
	 * @param {Array} The array to flatten
	 *
	 * @return {Array} The flattened array
	 */
	function flattenArray(arr) {
	  return arr.reduce(function (prev, curr) {
	    if (Array.isArray(curr)) {
	      return prev.concat(flattenArray(curr));
	    }

	    return prev.concat(curr);
	  }, []);
	}

	/**
	 * @description Creates a store that can store multiple timr objects
	 * and perform functions on all of them.
	 *
	 * @param {Array} [args] - Optional timers to start the store with.
	 * Can be any type, but will get filtered down to only timr objects.
	 *
	 * @return {Object} Returns a store object with methods.
	 */
	function createStore() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  // Array to store all timrs.
	  // Filters out non timr objects and timrs that exist in another store.
	  var timrs = flattenArray(args).filter(function (item) {
	    return item instanceof _Timr2.default;
	  }).filter(function (timr) {
	    return typeof timr.removeFromStore !== 'function';
	  });

	  var removeFromStore = function removeFromStore(timr) {
	    if (timr instanceof _Timr2.default) {
	      timrs = timrs.filter(function (x) {
	        return x !== timr;
	      });
	      /* eslint-disable no-param-reassign */
	      timr.removeFromStore = null;
	    }
	  };

	  // Provides each Timr with the ability to remove itself from the store.
	  timrs.forEach(function (timr) {
	    timr.removeFromStore = function () {
	      removeFromStore(timr);
	    };
	  });

	  return {
	    /**
	     * @description Adds the provided timr to the store.
	     *
	     * @param {Object} timr - A timr object.
	     *
	     * @throws If the provided timr is not a Timr object.
	     * @throws If the provided timr is already in a store.
	     *
	     * @return {Object} The provided timr object.
	     */
	    add: function add(timr) {
	      if (timr instanceof _Timr2.default && typeof timr.removeFromStore !== 'function') {
	        timrs.push(timr);

	        timr.removeFromStore = function () {
	          removeFromStore(timr);
	        };
	        /* eslint-disable no-param-reassign */
	      } else {
	        throw new Error('Unable to add to store; provided argument is either already in a store ' + 'or not a timr object.');
	      }

	      return timr;
	    },

	    // Methods associated with all Timrs.
	    getAll: function getAll() {
	      return timrs;
	    },
	    startAll: function startAll() {
	      return timrs.forEach(function (timr) {
	        return timr.start();
	      });
	    },
	    pauseAll: function pauseAll() {
	      return timrs.forEach(function (timr) {
	        return timr.pause();
	      });
	    },
	    stopAll: function stopAll() {
	      return timrs.forEach(function (timr) {
	        return timr.stop();
	      });
	    },
	    isRunning: function isRunning() {
	      return timrs.filter(function (timr) {
	        return timr.isRunning();
	      });
	    },
	    removeFromStore: removeFromStore,
	    destroyAll: function destroyAll() {
	      timrs.forEach(function (timr) {
	        return timr.destroy();
	      });
	      timrs = [];
	    }
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _objectAssign = __webpack_require__(5);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _EventEmitter = __webpack_require__(13);

	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

	var _buildOptions = __webpack_require__(10);

	var _buildOptions2 = _interopRequireDefault(_buildOptions);

	var _validate = __webpack_require__(6);

	var _validate2 = _interopRequireDefault(_validate);

	var _formatTime2 = __webpack_require__(9);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Creates a Timr.
	 *
	 * @param {String|Number} startTime - The starting time for the timr object.
	 * @param {Object} [options] - Options to customise the timer.
	 *
	 * @throws If the provided startTime is neither a number or a string,
	 * or, incorrect format.
	 */
	function Timr(startTime, options) {
	  _EventEmitter2.default.call(this);

	  this.timer = null;
	  this.running = false;
	  this.startTime = (0, _validate2.default)(startTime);
	  this.currentTime = this.startTime;
	  this.changeOptions(options);
	}

	/**
	 * @description Countdown function.
	 * Bound to a setInterval when start() is called.
	 */
	Timr.countdown = function countdown() {
	  this.currentTime -= 1;

	  this.emit('ticker', this.formatTime(), this.percentDone(), this.currentTime, this.startTime, this);

	  if (this.currentTime <= 0) {
	    this.stop();
	    this.emit('finish', this);
	  }
	};

	/**
	 * @description Stopwatch function.
	 * Bound to a setInterval when start() is called.
	 */
	Timr.stopwatch = function stopwatch() {
	  this.currentTime += 1;

	  this.emit('ticker', this.formatTime(), this.currentTime, this);

	  if (this.currentTime > 3599999) {
	    this.stop();
	    this.emit('finish', this);
	  }
	};

	Timr.prototype = (0, _objectAssign2.default)(Object.create(_EventEmitter2.default.prototype), {

	  constructor: Timr,

	  /**
	   * @description Starts the timr.
	   *
	   * @param {Number} [delay] - Optional delay in ms to start the timer
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  start: function start(delay) {
	    var _this = this;

	    /* eslint-disable no-console */
	    if (this.running && typeof console !== 'undefined' && typeof console.warn === 'function') {
	      console.warn('Timer already running', this);
	    } else {
	      /* eslint-disable no-console */
	      var startFn = function startFn() {
	        _this.running = true;

	        _this.timer = _this.startTime > 0 ? setInterval(Timr.countdown.bind(_this), 1000) : setInterval(Timr.stopwatch.bind(_this), 1000);
	      };

	      if (delay) {
	        this.delayTimer = setTimeout(startFn, delay);
	      } else {
	        startFn();
	      }
	    }

	    return this;
	  },


	  /**
	   * @description Pauses the timr.
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  pause: function pause() {
	    this.clear();

	    return this;
	  },


	  /**
	   * @description Stops the timr.
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  stop: function stop() {
	    this.clear();

	    this.currentTime = this.startTime;

	    return this;
	  },


	  /**
	   * @description Clears the timr.
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  clear: function clear() {
	    clearInterval(this.timer);
	    clearTimeout(this.delayTimer);

	    this.running = false;

	    return this;
	  },


	  /**
	   * @description Destroys the timr,
	   * clearing the interval, removing all event listeners and removing,
	   * from the store (if it's in one).
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  destroy: function destroy() {
	    this.clear().removeAllListeners();

	    // removeFromStore is added when the timr is added to a store,
	    // so need to check if it's in a store before removing it.
	    if (typeof this.removeFromStore === 'function') {
	      this.removeFromStore();
	    }

	    return this;
	  },


	  /**
	   * @description The ticker method is called every second
	   * the timer ticks down.
	   *
	   * As Timr inherits from EventEmitter, this can be called
	   * multiple times with different functions and each one will
	   * be called when the event is emitted.
	   *
	   * @throws If the argument is not of type function.
	   *
	   * @param {Function} fn - Function to be called every second.
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  ticker: function ticker(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expected ticker to be a function, instead got: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
	    }

	    this.on('ticker', fn);

	    return this;
	  },


	  /**
	   * @description The finish method is called once when the
	   * timer finishes.
	   *
	   * As Timr inherits from EventEmitter, this can be called
	   * multiple times with different functions and each one will
	   * be called when the event is emitted.
	   *
	   * @throws If the argument is not of type function.
	   *
	   * @param {Function} fn - Function to be called when finished.
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  finish: function finish(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expected finish to be a function, instead got: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
	    }

	    this.on('finish', fn);

	    return this;
	  },


	  /**
	   * @description Converts seconds to time format.
	   * This is provided to the ticker method as the first argument.
	   *
	   * @param {String} [time=currentTime] - option do format the startTime
	   *
	   * @return {String} The formatted time.
	   */
	  formatTime: function formatTime() {
	    var time = arguments.length <= 0 || arguments[0] === undefined ? 'currentTime' : arguments[0];

	    return (0, _formatTime3.default)(this[time], this.options);
	  },


	  /**
	   * @description Returns the time elapsed in percent.
	   * This is provided to the ticker method as the second argument.
	   *
	   * @return {Number} Time elapsed in percent.
	   */
	  percentDone: function percentDone() {
	    return 100 - Math.round(this.currentTime / this.startTime * 100);
	  },


	  /**
	   * @description Creates / changes options for a Timr.
	   * Merges with existing or default options.
	   *
	   * @param {Object} options - The options to create / change.
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  changeOptions: function changeOptions(options) {
	    this.options = (0, _buildOptions2.default)(options, this.options);

	    return this;
	  },


	  /**
	   * @description Sets new startTime after Timr has been created.
	   * Will clear currentTime and reset to new startTime.
	   *
	   * @param {String|Number} startTime - The new start time.
	   *
	   * @throws If the starttime is invalid.
	   *
	   * @return {String} Returns the formatted startTime.
	   */
	  setStartTime: function setStartTime(startTime) {
	    this.clear();

	    this.startTime = this.currentTime = (0, _validate2.default)(startTime);

	    return this.formatTime();
	  },


	  /**
	   * @description Gets the Timrs startTime.
	   *
	   * @return {Number} Start time in seconds.
	   */
	  getStartTime: function getStartTime() {
	    return this.startTime;
	  },


	  /**
	   * @description Gets the Timrs currentTime.
	   *
	   * @return {Number} Current time in seconds.
	   */
	  getCurrentTime: function getCurrentTime() {
	    return this.currentTime;
	  },


	  /**
	   * @description Gets the Timrs running value.
	   *
	   * @return {Boolean} True if running, false if not.
	   */
	  isRunning: function isRunning() {
	    return this.running;
	  }
	});

	exports.default = Timr;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description Creates an EventEmitter.
	 *
	 * This is a super slimmed down version of nodes EventEmitter.
	 *
	 * This is only intended for internal use, as there is
	 * no real error checking.
	 */
	function EventEmitter() {
	  this.events = {};
	}

	EventEmitter.prototype = {

	  constructor: EventEmitter,

	  /**
	   * @description Registers a listener to an event array.
	   *
	   * @param {String} event - The event to attach to.
	   * @param {Function} listener - The event listener.
	   */
	  on: function on(event, listener) {
	    if (!this.events[event]) {
	      this.events[event] = [];
	    }

	    this.events[event].push(listener);
	  },


	  /**
	   * @description Emits an event, calling all listeners store
	   * against the provided event.
	   *
	   * @param {String} event - The event to emit.
	   */
	  emit: function emit(event) {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (this.events[event]) {
	      this.events[event].forEach(function (listener) {
	        listener.apply(_this, args);
	      });
	    }
	  },


	  /**
	   * @description Removes all listeners.
	   */
	  removeAllListeners: function removeAllListeners() {
	    this.events = {};
	  }
	};

	exports.default = EventEmitter;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// field.js
	// What
	// A wrapper for elements with ease-of-functions for acting like a FILO structure

	var _class = function () {
	  function _class(el) {
	    var defaultText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	    _classCallCheck(this, _class);

	    this.el = el;
	    this.defaultText = defaultText;
	  }

	  _createClass(_class, [{
	    key: 'addChar',
	    value: function addChar(char) {
	      if (char === ' ') {
	        char = ' ';
	      }
	      this.el.textContent = this.el.textContent + char;
	    }
	  }, {
	    key: 'removeChar',
	    value: function removeChar(char) {
	      this.el.textContent = this.el.textContent.slice(0, -1);
	      this.safeRemove();
	    }
	  }, {
	    key: 'firstChar',
	    value: function firstChar() {
	      return this.el.textContent.substring(0, 1);
	    }
	  }, {
	    key: 'removeFirstChar',
	    value: function removeFirstChar() {
	      this.el.textContent = this.el.textContent.substr(1);
	      this.safeRemove();
	    }
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.el.textContent.length <= 0;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.el.textContent = '';
	    }
	  }, {
	    key: 'safeRemove',
	    value: function safeRemove() {
	      if (!this.el.textContent.length) {
	        this.el.textContent = this.defaultText;
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _field = __webpack_require__(14);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// indext.js
	// What
	// A module for blocks of text with assigned indexes and class schemes for differentiation of what has been moved through and what has not

	var _class = function () {
	  // constructor
	  // Params
	  // done: an element, usually a span, describing what has been moved through or completed
	  // undone: an element, usually a span, describing what is left to move through or complete
	  function _class(done, undone, text) {
	    _classCallCheck(this, _class);

	    this.text = text;
	    this.undone = new _field2.default(undone);
	    this.index = 0;
	    this.done = new _field2.default(done);
	  }
	  // increase
	  // Params
	  // none
	  // What
	  // increases the index in the text by one, moving one character from the undone to the done


	  _createClass(_class, [{
	    key: 'increase',
	    value: function increase() {
	      this.index++;
	      // Move first char from undone to done to increase highlight by one
	      var char = this.undone.firstChar();
	      this.undone.removeFirstChar();
	      this.done.addChar(char);
	    }
	    // decrease
	    // Params
	    // none
	    // What
	    // decreases the index in the text, the opposite of increase

	  }, {
	    key: 'decrease',
	    value: function decrease() {
	      this.index--;
	      // TODO Decrease highlight by one
	    }
	    // currentChar
	    // Params
	    // none
	    // What
	    // returns the currently pending character, found at the index position

	  }, {
	    key: 'currentChar',
	    value: function currentChar() {
	      return this.text.charAt(this.index);
	    }
	  }, {
	    key: 'mark',
	    value: function mark() {}
	  }, {
	    key: 'reset',
	    value: function reset(newText) {
	      this.text = newText;
	      this.undone.textContent = this.text;
	      this.done.textContent = '';
	      this.index = 0;
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {
	    {
	        function exportModule(name, moduleObj) {
	            if (typeof module === 'object' && typeof module.exports === 'object') {
	                module.exports = moduleObj;
	            } else if (true) {
	                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                    return moduleObj;
	                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	            } else {
	                var global = typeof window === 'undefined' ? this : window;
	                global[name] = moduleObj;
	            }
	        }
	        var Util = new function () {
	            this.clone = function (object) {
	                return JSON.parse(JSON.stringify(object));
	            };
	            this.isUndefined = function (value) {
	                return typeof value === 'undefined';
	            };
	            this.whenUndefined = function (value, defaultVal) {
	                return this.isUndefined(value) ? defaultVal : value;
	            };
	        }();
	        var KeyData = [
	            {
	                char: '0',
	                shift: ')',
	                ie: 48,
	                ascii: {
	                    norm: 48,
	                    shift: 41
	                }
	            },
	            {
	                char: '1',
	                shift: '!',
	                ie: 49,
	                ascii: {
	                    norm: 49,
	                    shift: 33
	                }
	            },
	            {
	                char: '2',
	                shift: '@',
	                ie: 50,
	                ascii: {
	                    norm: 50,
	                    shift: 64
	                }
	            },
	            {
	                char: '3',
	                shift: '#',
	                ie: 51,
	                ascii: {
	                    norm: 51,
	                    shift: 35
	                }
	            },
	            {
	                char: '4',
	                shift: '$',
	                ie: 52,
	                ascii: {
	                    norm: 52,
	                    shift: 36
	                }
	            },
	            {
	                char: '5',
	                shift: '%',
	                ie: 53,
	                ascii: {
	                    norm: 53,
	                    shift: 37
	                }
	            },
	            {
	                char: '6',
	                shift: '^',
	                ie: 54,
	                ascii: {
	                    norm: 54,
	                    shift: 94
	                }
	            },
	            {
	                char: '7',
	                shift: '&',
	                ie: 55,
	                ascii: {
	                    norm: 55,
	                    shift: 38
	                }
	            },
	            {
	                char: '8',
	                shift: '*',
	                ie: 56,
	                ascii: {
	                    norm: 56,
	                    shift: 42
	                }
	            },
	            {
	                char: '9',
	                shift: '(',
	                ie: 57,
	                ascii: {
	                    norm: 57,
	                    shift: 40
	                }
	            },
	            {
	                char: 'a',
	                shift: 'A',
	                ie: 65,
	                ascii: {
	                    norm: 97,
	                    shift: 65
	                }
	            },
	            {
	                char: 'b',
	                shift: 'B',
	                ie: 66,
	                ascii: {
	                    norm: 98,
	                    shift: 66
	                }
	            },
	            {
	                char: 'c',
	                shift: 'C',
	                ie: 67,
	                ascii: {
	                    norm: 99,
	                    shift: 67
	                }
	            },
	            {
	                char: 'd',
	                shift: 'D',
	                ie: 68,
	                ascii: {
	                    norm: 100,
	                    shift: 68
	                }
	            },
	            {
	                char: 'e',
	                shift: 'E',
	                ie: 69,
	                ascii: {
	                    norm: 101,
	                    shift: 69
	                }
	            },
	            {
	                char: 'f',
	                shift: 'F',
	                ie: 70,
	                ascii: {
	                    norm: 102,
	                    shift: 70
	                }
	            },
	            {
	                char: 'g',
	                shift: 'G',
	                ie: 71,
	                ascii: {
	                    norm: 103,
	                    shift: 71
	                }
	            },
	            {
	                char: 'h',
	                shift: 'H',
	                ie: 72,
	                ascii: {
	                    norm: 104,
	                    shift: 72
	                }
	            },
	            {
	                char: 'i',
	                shift: 'I',
	                ie: 73,
	                ascii: {
	                    norm: 105,
	                    shift: 73
	                }
	            },
	            {
	                char: 'j',
	                shift: 'J',
	                ie: 74,
	                ascii: {
	                    norm: 106,
	                    shift: 74
	                }
	            },
	            {
	                char: 'k',
	                shift: 'K',
	                ie: 75,
	                ascii: {
	                    norm: 107,
	                    shift: 75
	                }
	            },
	            {
	                char: 'l',
	                shift: 'L',
	                ie: 76,
	                ascii: {
	                    norm: 108,
	                    shift: 76
	                }
	            },
	            {
	                char: 'm',
	                shift: 'M',
	                ie: 77,
	                ascii: {
	                    norm: 109,
	                    shift: 77
	                }
	            },
	            {
	                char: 'n',
	                shift: 'N',
	                ie: 78,
	                ascii: {
	                    norm: 110,
	                    shift: 78
	                }
	            },
	            {
	                char: 'o',
	                shift: 'O',
	                ie: 79,
	                ascii: {
	                    norm: 111,
	                    shift: 79
	                }
	            },
	            {
	                char: 'p',
	                shift: 'P',
	                ie: 80,
	                ascii: {
	                    norm: 112,
	                    shift: 80
	                }
	            },
	            {
	                char: 'q',
	                shift: 'Q',
	                ie: 81,
	                ascii: {
	                    norm: 113,
	                    shift: 81
	                }
	            },
	            {
	                char: 'r',
	                shift: 'R',
	                ie: 82,
	                ascii: {
	                    norm: 114,
	                    shift: 82
	                }
	            },
	            {
	                char: 's',
	                shift: 'S',
	                ie: 83,
	                ascii: {
	                    norm: 115,
	                    shift: 83
	                }
	            },
	            {
	                char: 't',
	                shift: 'T',
	                ie: 84,
	                ascii: {
	                    norm: 116,
	                    shift: 84
	                }
	            },
	            {
	                char: 'u',
	                shift: 'U',
	                ie: 85,
	                ascii: {
	                    norm: 117,
	                    shift: 85
	                }
	            },
	            {
	                char: 'v',
	                shift: 'V',
	                ie: 86,
	                ascii: {
	                    norm: 118,
	                    shift: 86
	                }
	            },
	            {
	                char: 'w',
	                shift: 'W',
	                ie: 87,
	                ascii: {
	                    norm: 119,
	                    shift: 87
	                }
	            },
	            {
	                char: 'x',
	                shift: 'X',
	                ie: 88,
	                ascii: {
	                    norm: 120,
	                    shift: 88
	                }
	            },
	            {
	                char: 'y',
	                shift: 'Y',
	                ie: 89,
	                ascii: {
	                    norm: 121,
	                    shift: 89
	                }
	            },
	            {
	                char: 'z',
	                shift: 'Z',
	                ie: 90,
	                ascii: {
	                    norm: 122,
	                    shift: 90
	                }
	            },
	            {
	                char: ' ',
	                names: ['SPACE_BAR'],
	                ie: 32,
	                ascii: { norm: 32 }
	            },
	            {
	                char: ';',
	                shift: ':',
	                ie: 186,
	                moz: 59,
	                ascii: {
	                    norm: 59,
	                    shift: 58
	                }
	            },
	            {
	                char: '=',
	                shift: '+',
	                ie: 187,
	                moz: 61,
	                ascii: {
	                    norm: 61,
	                    shift: 43
	                }
	            },
	            {
	                char: ',',
	                shift: '<',
	                ie: 188,
	                ascii: {
	                    norm: 44,
	                    shift: 60
	                }
	            },
	            {
	                char: '-',
	                shift: '_',
	                ie: 189,
	                moz: 173,
	                ascii: {
	                    norm: 45,
	                    shift: 95
	                }
	            },
	            {
	                char: '.',
	                shift: '>',
	                ie: 190,
	                ascii: {
	                    norm: 46,
	                    shift: 62
	                }
	            },
	            {
	                char: '/',
	                shift: '?',
	                ie: 191,
	                ascii: {
	                    norm: 47,
	                    shift: 63
	                }
	            },
	            {
	                char: '`',
	                shift: '~',
	                ie: 192,
	                ascii: {
	                    norm: 96,
	                    shift: 126
	                }
	            },
	            {
	                char: '[',
	                shift: '{',
	                ie: 219,
	                ascii: {
	                    norm: 91,
	                    shift: 123
	                }
	            },
	            {
	                char: '\\',
	                shift: '|',
	                ie: 220,
	                ascii: {
	                    norm: 92,
	                    shift: 124
	                }
	            },
	            {
	                char: ']',
	                shift: '}',
	                ie: 221,
	                ascii: {
	                    norm: 93,
	                    shift: 125
	                }
	            },
	            {
	                char: '\'',
	                shift: '"',
	                ie: 222,
	                ascii: {
	                    norm: 39,
	                    shift: 34
	                }
	            },
	            {
	                names: ['F1'],
	                ie: 112
	            },
	            {
	                names: ['F2'],
	                ie: 113
	            },
	            {
	                names: ['F3'],
	                ie: 114
	            },
	            {
	                names: ['F4'],
	                ie: 115
	            },
	            {
	                names: ['F5'],
	                ie: 116
	            },
	            {
	                names: ['F6'],
	                ie: 117
	            },
	            {
	                names: ['F7'],
	                ie: 118
	            },
	            {
	                names: ['F8'],
	                ie: 119
	            },
	            {
	                names: ['F9'],
	                ie: 120
	            },
	            {
	                names: ['F10'],
	                ie: 121
	            },
	            {
	                names: ['F11'],
	                ie: 122
	            },
	            {
	                names: ['F12'],
	                ie: 123
	            },
	            {
	                char: '0',
	                names: ['NUMPAD_0'],
	                ie: 96,
	                ascii: { norm: 48 }
	            },
	            {
	                char: '1',
	                names: ['NUMPAD_1'],
	                ie: 97,
	                ascii: { norm: 49 }
	            },
	            {
	                char: '2',
	                names: ['NUMPAD_2'],
	                ie: 98,
	                ascii: { norm: 50 }
	            },
	            {
	                char: '3',
	                names: ['NUMPAD_3'],
	                ie: 99,
	                ascii: { norm: 51 }
	            },
	            {
	                char: '4',
	                names: ['NUMPAD_4'],
	                ie: 100,
	                ascii: { norm: 52 }
	            },
	            {
	                char: '5',
	                names: ['NUMPAD_5'],
	                ie: 101,
	                ascii: { norm: 53 }
	            },
	            {
	                char: '6',
	                names: ['NUMPAD_6'],
	                ie: 102,
	                ascii: { norm: 54 }
	            },
	            {
	                char: '7',
	                names: ['NUMPAD_7'],
	                ie: 103,
	                ascii: { norm: 55 }
	            },
	            {
	                char: '8',
	                names: ['NUMPAD_8'],
	                ie: 104,
	                ascii: { norm: 56 }
	            },
	            {
	                char: '9',
	                names: ['NUMPAD_9'],
	                ie: 105,
	                ascii: { norm: 57 }
	            },
	            {
	                char: '*',
	                names: ['NUMPAD_MULTIPLY'],
	                ie: 106,
	                ascii: { norm: 42 }
	            },
	            {
	                char: '+',
	                names: ['NUMPAD_PLUS'],
	                ie: 107,
	                ascii: { norm: 43 }
	            },
	            {
	                char: '-',
	                names: ['NUMPAD_MINUS'],
	                ie: 109,
	                ascii: { norm: 45 }
	            },
	            {
	                char: '.',
	                names: ['NUMPAD_DECIMAL'],
	                ie: 110,
	                ascii: { norm: 46 }
	            },
	            {
	                char: '/',
	                names: ['NUMPAD_DIVIDE'],
	                ie: 111,
	                ascii: { norm: 47 }
	            },
	            {
	                names: [
	                    'NUMPAD_MIDDLE',
	                    'MAC_NUM_LOCK'
	                ],
	                ie: 12
	            },
	            {
	                names: ['BACKSPACE'],
	                ie: 8
	            },
	            {
	                names: ['TAB'],
	                ie: 9
	            },
	            {
	                names: ['ENTER'],
	                ie: 13,
	                ascii: { norm: 13 }
	            },
	            {
	                names: ['SHIFT'],
	                ie: 16
	            },
	            {
	                names: ['CONTROL'],
	                ie: 17
	            },
	            {
	                names: ['ALT'],
	                ie: 18
	            },
	            {
	                names: [
	                    'PAUSE',
	                    'BREAK'
	                ],
	                ie: 19
	            },
	            {
	                names: ['CAPS_LOCK'],
	                ie: 20
	            },
	            {
	                names: ['ESCAPE'],
	                ie: 27
	            },
	            {
	                names: [
	                    'WINDOWS',
	                    'COMMAND'
	                ],
	                ie: 91,
	                moz: 224
	            },
	            {
	                names: ['OPTION'],
	                ie: 93,
	                ascii: { norm: 16 }
	            },
	            {
	                names: ['PRINT_SCREEN'],
	                ie: 124,
	                moz: 44
	            },
	            {
	                names: ['NUM_LOCK'],
	                ie: 144
	            },
	            {
	                names: ['SCROLL_LOCK'],
	                ie: 145
	            },
	            {
	                names: ['PAGE_UP'],
	                ie: 33
	            },
	            {
	                names: ['PAGE_DOWN'],
	                ie: 34
	            },
	            {
	                names: ['END'],
	                ie: 35
	            },
	            {
	                names: ['HOME'],
	                ie: 36
	            },
	            {
	                names: ['LEFT_ARROW'],
	                ie: 37
	            },
	            {
	                names: ['UP_ARROW'],
	                ie: 38
	            },
	            {
	                names: ['RIGHT_ARROW'],
	                ie: 39
	            },
	            {
	                names: ['DOWN_ARROW'],
	                ie: 40
	            },
	            {
	                names: ['INSERT'],
	                ie: 45
	            },
	            {
	                names: ['DELETE'],
	                ie: 46
	            }
	        ];
	        var KeyConstructor = function (Util) {
	            /**
	   * A representation of a keyboard key. This class cannot be instantiated manually. All instances are generated by the Keycoder module.
	   * @Class Key
	   * @internal
	   * @property {string[]} names - Names that the key is called. Ex. "BACKSPACE", "INSERT"
	   * @property {number} keyCode.ie - IE key code
	   * @property {number} keyCode.mozilla - Mozillia key code
	   * @property {string|null} character - Key character
	   * @property {number|null} charCode - ASCII character code
	   * @property {string|null} shift.character Key shift character
	   * @property {number|null} shift.charCode Shift ASCII character code
	   */
	            var Key = function (keyData) {
	                this.shift = {};
	                this.names = Util.clone(Util.whenUndefined(keyData.names, []));
	                this.character = Util.whenUndefined(keyData.char, null);
	                this.shift.character = Util.whenUndefined(keyData.shift, Util.whenUndefined(keyData.char, null));
	                this.keyCode = {
	                    ie: keyData.ie,
	                    mozilla: Util.whenUndefined(keyData.moz, keyData.ie)
	                };
	                this.charCode = null;
	                this.shift.charCode = null;
	                if (!Util.isUndefined(keyData.ascii)) {
	                    this.charCode = Util.whenUndefined(keyData.ascii.norm, null);
	                    this.shift.charCode = Util.whenUndefined(keyData.ascii.shift, Util.whenUndefined(keyData.ascii.norm, null));
	                }
	            };
	            /**
	   * @memberof Key
	   * @returns {boolean} If the key is a printable character
	   */
	            Key.prototype.isPrintableCharacter = function () {
	                return this.character !== null;
	            };
	            /**
	   * @memberof Key
	   * @returns {boolean} If the key has a character code
	   */
	            Key.prototype.hasCharCode = function () {
	                return this.charCode !== null;
	            };
	            /**
	   * @memberof Key
	   * @returns {boolean} If the key's character and shift character are different
	   */
	            Key.prototype.hasDistinctShiftCharacter = function () {
	                return this.character !== this.shift.character;
	            };
	            /**
	   * @memberof Key
	   * @param {Key|number} other - A Key object or key code
	   * @returns {boolean} True if the key and the compared key/code are the same key
	   */
	            Key.prototype.equals = function (other) {
	                if (typeof other === 'object') {
	                    return this.keyCode.ie === other.keyCode.ie;
	                } else {
	                    return this.keyCode.ie === other || this.keyCode.mozilla === other;
	                }
	            };
	            return Key;
	        }(Util);
	        /**
	 * @module Keycoder
	 */
	        exportModule('Keycoder', new function (Util, Key, keyData) {
	            var keyCodeToKeyMap = null;
	            var asciiCodeToKeyMap = null;
	            var characterToKeyMap = null;
	            /**
	   * An object containing references to all named keys.
	   *
	   * @type {object}
	   * @property {Key} BACKSPACE
	   * @property {Key} TAB
	   * @property {Key} ENTER
	   * @property {Key} SHIFT
	   * @property {Key} CONTROL
	   * @property {Key} ALT
	   * @property {Key} PAUSE
	   * @property {Key} BREAK
	   * @property {Key} CAPS_LOCK
	   * @property {Key} ESCAPE
	   * @property {Key} WINDOWS
	   * @property {Key} COMMAND
	   * @property {Key} OPTION
	   * @property {Key} PRINT_SCREEN
	   * @property {Key} NUM_LOCK
	   * @property {Key} MAC_NUM_LOCK
	   * @property {Key} SCROLL_LOCK
	   * @property {Key} PAGE_UP
	   * @property {Key} PAGE_DOWN
	   * @property {Key} END
	   * @property {Key} HOME
	   * @property {Key} LEFT_ARROW
	   * @property {Key} UP_ARROW
	   * @property {Key} RIGHT_ARROW
	   * @property {Key} DOWN_ARROW
	   * @property {Key} INSERT
	   * @property {Key} DELETE
	   * @property {Key} NUMPAD_0
	   * @property {Key} NUMPAD_1
	   * @property {Key} NUMPAD_2
	   * @property {Key} NUMPAD_3
	   * @property {Key} NUMPAD_4
	   * @property {Key} NUMPAD_5
	   * @property {Key} NUMPAD_6
	   * @property {Key} NUMPAD_7
	   * @property {Key} NUMPAD_8
	   * @property {Key} NUMPAD_9
	   * @property {Key} NUMPAD_MULTIPLY
	   * @property {Key} NUMPAD_PLUS
	   * @property {Key} NUMPAD_MINUS
	   * @property {Key} NUMPAD_DECIMAL
	   * @property {Key} NUMPAD_DIVIDE
	   * @property {Key} NUMPAD_MIDDLE
	   */
	            this.key = {};
	            var self = this;
	            keyData.forEach(function (key) {
	                if (!Util.isUndefined(key.names)) {
	                    key.names.forEach(function (name) {
	                        self.key[name] = new Key(key);
	                    });
	                }
	            });
	            this._getKeyFromMap = function (code, map) {
	                var keyData = map[code];
	                if (Util.isUndefined(keyData)) {
	                    return null;
	                } else {
	                    return new Key(keyData);
	                }
	            };
	            this._initializeKeyCodeToKeyMap = function () {
	                keyCodeToKeyMap = [];
	                keyData.forEach(function (key) {
	                    // No matching IE and Mozilla key codes refer to different physical keys so a single map approach will not result in
	                    // any codes being overwritten in the map
	                    keyCodeToKeyMap[key.ie] = key;
	                    if (!Util.isUndefined(key.moz)) {
	                        keyCodeToKeyMap[key.moz] = key;
	                    }
	                });
	            };
	            this._initializeAsciiCodeToKeyMap = function () {
	                asciiCodeToKeyMap = [];
	                keyData.forEach(function (key) {
	                    if (!Util.isUndefined(key.ascii)) {
	                        if (Util.isUndefined(asciiCodeToKeyMap[key.ascii.norm])) {
	                            asciiCodeToKeyMap[key.ascii.norm] = key;
	                        }
	                        if (!Util.isUndefined(key.ascii.shift)) {
	                            if (Util.isUndefined(asciiCodeToKeyMap[key.ascii.shift])) {
	                                asciiCodeToKeyMap[key.ascii.shift] = key;
	                            }
	                        }
	                    }
	                });
	            };
	            this._initializeCharacterToKeyMap = function () {
	                characterToKeyMap = {};
	                keyData.forEach(function (key) {
	                    // Order matters when inserting to the character map. Sometime two keys have the same character value.
	                    // The more commonly used keys are put higher in the key list so they are looked up rather than less used keys.
	                    if (!Util.isUndefined(key.char) && Util.isUndefined(characterToKeyMap[key.char])) {
	                        characterToKeyMap[key.char] = key;
	                    }
	                    // Shift values should never override regular value in the map. If this was not the case num pad 1 could overwrite
	                    // the number row 1 in the map. Since keys like numpad 1 are less commonly used we don't want to do this.
	                    if (!Util.isUndefined(key.shift) && Util.isUndefined(characterToKeyMap[key.shift])) {
	                        characterToKeyMap[key.shift] = key;
	                    }
	                });
	            };
	            /**
	   * @param {number} keyCode - An IE or Mozilla key code
	   * @param {boolean} shift - The shift key state. A value of true indicates it is pressed, false that it is not
	   * @returns {string|null} The character for the keycode and shift state. Null if the key is not a printable character.
	   */
	            this.toCharacter = function (keyCode, shift) {
	                var key = this.fromKeyCode(keyCode);
	                if (key === null) {
	                    return null;
	                }
	                return shift ? key.shift.character : key.character;
	            };
	            /**
	   * @param {number} charCode - An ASCII character code
	   * @returns {string|null} Returns the character for the character code. Null if the key is not a printable character.
	   */
	            this.charCodeToCharacter = function (charCode) {
	                var key = this.fromCharCode(charCode);
	                if (key === null) {
	                    return null;
	                }
	                return key.charCode === charCode ? key.character : key.shift.character;
	            };
	            /**
	   * @param {number} event - A keydown, keyup, or keypress event object
	   * @returns {string|null} - The character pressed in the key event. Null if the key pressed is not a printable character, or the event is not a key event.
	   */
	            this.eventToCharacter = function (event) {
	                var key = this.fromEvent(event);
	                if (key === null) {
	                    return null;
	                }
	                return event.shiftKey ? key.shift.character : key.character;
	            };
	            /**
	   * @param {string} character
	   * @returns {Key|null} A Key object. Null if no key is associated with the provided code.
	   */
	            this.fromCharacter = function (character) {
	                if (characterToKeyMap === null) {
	                    this._initializeCharacterToKeyMap();
	                }
	                return this._getKeyFromMap(character, characterToKeyMap);
	            };
	            /**
	   * @param {number} keyCode - A IE or Mozilla key code
	   * @returns {Key|null} A Key object. Null if no key is associated with the provided code.
	   */
	            this.fromKeyCode = function (keyCode) {
	                if (keyCodeToKeyMap === null) {
	                    this._initializeKeyCodeToKeyMap();
	                }
	                return this._getKeyFromMap(keyCode, keyCodeToKeyMap);
	            };
	            /**
	   * Maps an ASCII character code to a Key object
	   * @param {number} charCode - An ASCII character code
	   * @returns {Key|null} A Key object. Null if no key is associated with the provided code.
	   */
	            this.fromCharCode = function (charCode) {
	                if (asciiCodeToKeyMap === null) {
	                    this._initializeAsciiCodeToKeyMap();
	                }
	                return this._getKeyFromMap(charCode, asciiCodeToKeyMap);
	            };
	            /**
	   * Maps a keypress, keydown, or keyup event object to a key
	   * @param {object} event - A keydown, keyup, or keypress event object
	   * @returns {Key|null} A Key object. Null if no key was pressed in the provided event.
	   */
	            this.fromEvent = function (event) {
	                var key = null;
	                if (event.type === 'keydown' || event.type === 'keyup') {
	                    key = this.fromKeyCode(event.keyCode);
	                } else if (event.type === 'keypress') {
	                    key = this.fromCharCode(event.charCode);
	                }
	                return key;
	            };
	            /**
	   * @returns {Key[]} An array of Key objects for all keys
	   */
	            this.allKeys = function () {
	                var keys = [];
	                keyData.forEach(function (key) {
	                    keys.push(new Key(key));
	                });
	                return keys;
	            };
	        }(Util, KeyConstructor, KeyData));
	    }
	}());

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!../../css-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports


	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(21) + ");\n  src: url(" + __webpack_require__(22) + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__(23) + ") format('woff2'), url(" + __webpack_require__(24) + ") format('woff'), url(" + __webpack_require__(25) + ") format('truetype'), url(" + __webpack_require__(26) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./fonts/674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./fonts/674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./fonts/af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./fonts/fee66e712a8a08eef5805a46892932ad.woff";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./fonts/b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./fonts/912ec66d7572ff821749319396470bde.svg";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);