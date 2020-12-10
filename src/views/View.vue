<template>
	<div id="view" class="view">
		<div :class="toggleBtn">
			<button @click="toggleMode()">
				<div class="ico-toggle">
					<fa-icon :icon="['fas', 'adjust']" />
				</div>
			</button>
		</div>
		<div id="return-btn" :class="returnBtn">
			<button
				@click="
					scrollTo('nav-page'),
						toggleTitle(true),
						toggleReturn(false),
						aboutClass(false),
						projectsClass(true)
				"
			>
				<div class="ico-return">
					<fa-icon :icon="['fas', 'chevron-up']" />
				</div>
			</button>
		</div>
		<div
			id="nav-page"
			class="nav-page-top"
			@click="scrollTo('nav-page'), toggleTitle(true)"
		></div>
		<div id="name-title" class="name-title">
			<div @click="toggleTitle(false)">
				<div class="title">
					<div v-if="windowInnerWidth">
						{{ firstTitle }}
					</div>
					<div v-else>
						{{ fullTitle }}
					</div>
				</div>
			</div>
		</div>
		<div
			id="nav-btns"
			:class="navBtns"
			@click="projectsBtnsToggle(false), toggleContact(false)"
		>
			<button
				id="nav-about"
				@click="
					scrollTo('about'),
						toggleReturn(true),
						aboutClass(true),
						projectsClass(true),
						scrollAbout()
				"
			>
				<div v-if="windowInnerWidth">
					<fa-icon :icon="['fas', 'info-circle']" />
				</div>
				<div v-else>
					about
				</div>
			</button>
			<button
				id="nav-projects"
				@click="
					scrollTo('projects'),
						toggleReturn(true),
						aboutClass(false),
						projectsClass(false),
						projectsScroll(),
						projectsBtnsToggle(false)
				"
			>
				<div v-if="windowInnerWidth">
					<fa-icon :icon="['fas', 'folder']" />
				</div>
				<div v-else>
					works
				</div>
			</button>
			<button
				id="nav-contact"
				@click="
					scrollTo('contact'),
						toggleReturn(true),
						aboutClass(false),
						projectsClass(true)
				"
			>
				<div v-if="windowInnerWidth">
					<fa-icon :icon="['far', 'address-card']" />
				</div>
				<div v-else>
					contact
				</div>
			</button>
		</div>
		<div
			class="nav-page-bottom"
			@click="scrollTo('nav-page'), toggleTitle(true)"
		></div>
		<div id="components" class="components">
			<about id="about" class="about"></about>
			<projects id="projects" class="projects"></projects>
			<contact id="contact" class="contact"></contact>
		</div>
	</div>
</template>

<script>
import store from '../store/index';
import about from '../components/About';
import projects from '../components/Projects';
import contact from '../components/Contact';

export default {
	data() {
		return {
			mode: false,
			selected: 'nav-page',
			returnBtn: 'return-btn',
			toggleBtn: 'toggle-mode',
			navBtns: 'nav-btns',
		};
	},
	components: {
		about,
		projects,
		contact,
	},
	methods: {
		scrollTo(id) {
			const element = document.getElementById(id);
			// scroll to element
			element.scrollIntoView({ behavior: 'smooth' });
			const elements = ['about', 'projects', 'contact'];
			for (let i = 0; i < elements.length; i++) {
				this.selected = 'nav-' + id;
				if (elements[i] === id) {
					const elementName = 'nav-' + id;
					document.getElementById(elementName).style.color =
						store.state.accentColor;
				} else {
					const elementName = 'nav-' + elements[i];
					if (this.selected === 'nav-projects') {
						document.getElementById(elementName).style.color =
							store.state.cssInvColor;
					} else {
						document.getElementById(elementName).style.color =
							store.state.cssColor;
					}
				}
			}
			if (id === 'nav-page') {
				this.selected = id;
			}
		},

		toggleTitle(boolean) {
			// the opacity transition is 0.3s === 300ms
			if (boolean) {
				document.getElementById('nav-btns').style.opacity = '0';
				setTimeout(() => {
					document.getElementById('nav-btns').style.display = 'none';
					document.getElementById('name-title').style.display =
						'flex';
				}, 300);
				setTimeout(() => {
					document.getElementById('name-title').style.opacity = '1';
				}, 350);
			} else {
				document.getElementById('name-title').style.opacity = '0';
				setTimeout(() => {
					document.getElementById('name-title').style.display =
						'none';
					document.getElementById('nav-btns').style.display = 'flex';
				}, 300);
				setTimeout(() => {
					document.getElementById('nav-btns').style.opacity = '1';
				}, 350);
			}
		},

		toggleReturn(boolean) {
			if (boolean) {
				setTimeout(() => {
					document.getElementById('return-btn').style.display =
						'flex';
				}, 300);
				setTimeout(() => {
					document.getElementById('return-btn').style.opacity = '1';
				}, 350);
			} else {
				document.getElementById('return-btn').style.opacity = '0';
				setTimeout(() => {
					document.getElementById('return-btn').style.display =
						'none';
				}, 300);
			}
		},

		toggleMode() {
			this.mode = !this.mode;
			const root = document.styleSheets[1].rules[0].style;
			if (!this.mode) {
				root.setProperty('--color', 'white');
				store.state.cssColor = 'white';
				root.setProperty('--inv-color', 'black');
				store.state.cssInvColor = 'black';
				store.state.bgProject = 'bg-project';
			} else {
				root.setProperty('--color', 'black');
				store.state.cssColor = 'black';
				root.setProperty('--inv-color', 'white');
				store.state.cssInvColor = 'white';
				store.state.bgProject = 'bg-project-inv';
			}
			const elements = ['nav-about', 'nav-projects', 'nav-contact'];
			for (let i = 0; i < elements.length; i++) {
				if (elements[i] === this.selected) {
					const elementName = elements[i];
					document.getElementById(elementName).style.color =
						store.state.accentColor;
				} else {
					const elementName = elements[i];
					if (this.selected === 'nav-projects') {
						document.getElementById(elementName).style.color =
							store.state.cssInvColor;
					} else {
						document.getElementById(elementName).style.color =
							store.state.cssColor;
					}
				}
			}
		},

		aboutClass(boolean) {
			// included "window.innerWidth < 1024" to allow for "height: auto" in the css of mobile about page
			if (boolean && window.innerWidth > 1024) {
				this.returnBtn = 'return-btn-inv';
				this.toggleBtn = 'toggle-mode-inv';
			} else {
				this.returnBtn = 'return-btn';
				this.toggleBtn = 'toggle-mode';
			}
		},

		scrollAbout() {
			about.methods.scrollTo();
		},

		projectsClass(boolean) {
			if (boolean) {
				this.navBtns = 'nav-btns';
			} else {
				this.navBtns = 'nav-btns-inv';
			}
		},

		projectsScroll() {
			projects.methods.scrollTo();
		},

		projectsBtnsToggle(boolean) {
			projects.methods.toggleBtns(boolean);
		},

		toggleContact(boolean) {
			contact.methods.toggleContact(boolean);
		},
	},
	computed: {
		fullTitle() {
			return store.state.fullTitle;
		},
		firstTitle() {
			return store.state.firstTitle;
		},
		windowInnerWidth() {
			if (window.innerWidth < 1024) {
				return true;
			} else {
				return false;
			}
		},
	},
	mounted() {
		// styleSheets[1], not styleSheets[0] due to font awesome icons
		const root = document.styleSheets[1].rules[0].style;
		root.setProperty('--color', 'white');
		root.setProperty('--inv-color', 'black');
		// root.setProperty('--accent-color', '#e91d63');
		root.setProperty('--accent-color', store.state.accentColor);
		root.setProperty('--bg-url', 'none');

		// fixes window to last element you were focused on when window is resized
		if (window.screen.width > 900) {
			window.addEventListener('resize', () => {
				if (this.selected === 'nav-page') {
					this.scrollTo('nav-page');
				} else if (this.selected === 'nav-' + 'about') {
					this.scrollTo('about');
					this.scrollAbout();
				} else if (this.selected === 'nav-' + 'projects') {
					this.scrollTo('projects');
				} else if (this.selected === 'nav-' + 'contact') {
					this.scrollTo('contact');
				}
			});
		}

		if (window.innerWidth <= 1024) {
			const navBtns = document.getElementById('nav-btns');
			navBtns.style.bottom = '0';
			// navBtns.style.position = 'absolute';
		}
	},
};
</script>

<style scoped>
.view {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background: var(--inv-color);
	color: var(--color);
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
}

.nav-page-top {
	height: 42.5vh;
	width: 100vw;
}

.nav-btns {
	/* height: 10vh; */
	z-index: 2;
	height: 15vh;
	display: none;
	justify-content: center;
	align-items: center;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	/* border: 1px solid red; */
}

.nav-btns button {
	border: none;
	padding: 0.5em 0.75em;
	border-radius: 0.5em;
	background: transparent;
	color: var(--color);
	margin: calc((15vh - 2em) / 4);
	font-size: 30px;
	letter-spacing: 0.2em;
	cursor: pointer;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
}

.nav-btns button:hover {
	background: var(--color);
	color: var(--inv-color) !important;
}

/* START NAV INV */

.nav-btns-inv {
	/* height: 10vh; */
	height: 15vh;
	display: none;
	justify-content: center;
	align-items: center;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	/* z-index for projects vue; custom background */
	z-index: 2;
	/* border: 1px solid red; */
}

.nav-btns-inv button {
	border: none;
	padding: 0.5em 0.75em;
	border-radius: 0.5em;
	background: transparent;
	color: var(--inv-color);
	margin: calc((15vh - 2em) / 4);
	font-size: 30px;
	letter-spacing: 0.2em;
	cursor: pointer;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
}

.nav-btns-inv button:hover {
	background: var(--inv-color);
	color: var(--color) !important;
}

/* END NAV INV */

.name-title {
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	transition: opacity 0.3s ease-in-out;
	/* border: 1px solid rgb(81, 255, 0); */
}

.intro {
	display: none;
	font-size: 60px;
	letter-spacing: 0.2em;
}

.title {
	/* text-align: center; */
	transition: all 0.3s ease-in-out, font-size 0.1s ease-in-out;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 80px;
	letter-spacing: 0.2em;
	background: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
	background-size: 500% 500%;
	background-repeat: no-repeat;
	background-position: center;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: gradient 10s ease infinite;
	cursor: pointer;
	/* border: 1px solid rgb(40, 128, 0); */
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.title:hover {
	font-size: 85px;
	background: transparent;
	-webkit-text-fill-color: var(--accent-color);
}

.title:active {
	font-size: 75px;
	-webkit-text-fill-color: var(--color);
}

.nav-page-bottom {
	height: 42.5vh;
	width: 100vw;
}

.return-btn {
	z-index: 2;
	width: 7.25vh;
	position: absolute;
	/* bottom: 3.5vh; */
	bottom: calc((15vh - 7vh) / 2);
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	display: none;
	justify-content: center;
	align-items: center;
	text-align: center;
	opacity: 0;
	transition: opacity 0.3s ease-in-out, width 0.1s ease-in-out;
	/* z-index for projects vue; custom background */
	z-index: 2;
}

.return-btn button {
	border: none;
	height: 7vh;
	width: 7vh;
	cursor: pointer;
	border-radius: 0.5em;
	background: var(--accent-color);
	color: var(--color);
	font-size: 24px;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out,
		height 0.1s ease-in-out, width 0.1s ease-in-out,
		font-size 0.1s ease-in-out;
}

.return-btn button:hover {
	background: var(--color);
	color: var(--inv-color);
	height: 7.25vh;
	width: 7.25vh;
	font-size: 25px;
}

.return-btn button:active {
	color: var(--accent-color);
	height: 6.75vh;
	width: 6.75vh;
	font-size: 23px;
}

/* START RETURN INV */

.return-btn-inv {
	z-index: 2;
	width: 7.25vh;
	position: absolute;
	/* bottom: 3.5vh; */
	bottom: calc((15vh - 7vh) / 2);
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	display: none;
	justify-content: center;
	align-items: center;
	text-align: center;
	opacity: 0;
	transition: opacity 0.3s ease-in-out, width 0.1s ease-in-out;
}

.return-btn-inv button {
	border: none;
	height: 7vh;
	width: 7vh;
	cursor: pointer;
	border-radius: 0.5em;
	background: var(--accent-color);
	color: var(--inv-color);
	font-size: 24px;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out,
		height 0.1s ease-in-out, width 0.1s ease-in-out,
		font-size 0.1s ease-in-out;
}

.return-btn-inv button:hover {
	background: var(--inv-color);
	color: var(--color);
	height: 7.25vh;
	width: 7.25vh;
	font-size: 25px;
}

.return-btn-inv button:active {
	color: var(--accent-color);
	height: 6.75vh;
	width: 6.75vh;
	font-size: 23px;
}

/* END RETURN INV */

.toggle-mode {
	/* height / width was causing page to be higher than 100vh & scrollable */
	width: 10vh;
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 1;
	/* z-index for projects vue; custom background */
	z-index: 2;
}

.toggle-mode button {
	border: none;
	padding: 0.5em 0.5em;
	border-radius: 0.5em;
	background: transparent;
	color: var(--color);
	opacity: 0.3;
	font-size: 30px;
	cursor: pointer;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out,
		opacity 0.3s ease-in-out, font-size 0.1s ease-in-out;
}

.toggle-mode button:hover {
	font-size: 32px;
	opacity: 1;
	color: var(--color);
}

.toggle-mode button:active {
	font-size: 28px;
}

/* START TOGGLE INV */

.toggle-mode-inv {
	/* height / width was causing page to be higher than 100vh & scrollable */
	width: 10vh;
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 1;
}

.toggle-mode-inv button {
	border: none;
	padding: 0.5em 0.5em;
	border-radius: 0.5em;
	background: transparent;
	color: var(--inv-color);
	opacity: 0.3;
	font-size: 30px;
	cursor: pointer;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out,
		opacity 0.3s ease-in-out, font-size 0.1s ease-in-out;
}

.toggle-mode-inv button:hover {
	font-size: 32px;
	opacity: 1;
	color: var(--inv-color);
}

.toggle-mode-inv button:active {
	font-size: 28px;
}

/* END TOGGLE INV */

.nav,
.about,
.projects,
.contact {
	height: 100vh;
	width: 100vw;
	/* border: 1px solid blue; */
}

.about {
	background: var(--color);
}

.projects {
	z-index: 1;
}

/* in practice many designers convert pixels to ems, largely because ems afford better zooming; 1em === 16px */
@media (min-width: 320px) {
	/* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
	/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
	/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
	/* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
	/* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
	/* hi-res laptops and desktops */
}
/* threshold for notes-v2 */
@media only screen and (max-width: 1024px) {
	.title {
		text-align: center;
		font-size: 70px;
	}

	.title:hover {
		font-size: 70px;
		background: transparent;
	}

	.title:active {
		font-size: 65px;
		-webkit-text-fill-color: var(--accent-color);
	}

	.nav-btns {
		display: flex;
		/* flex-direction: column; */
		/* border: 1px solid red; */
	}

	.nav-btns button:hover {
		background: transparent;
		color: var(--accent-color) !important;
	}

	.nav-btns-inv {
		display: flex;
		/* flex-direction: column; */
	}

	.nav-btns-inv button:hover {
		background: transparent;
		color: var(--accent-color) !important;
	}

	.return-btn {
		z-index: 2;
		width: 7.25vh;
		position: absolute;
		/* bottom: 3.5vh; */
		bottom: calc((15vh - 7vh) / 2);
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		display: none;
		justify-content: center;
		align-items: center;
		text-align: center;
		opacity: 0;
		transition: opacity 0.3s ease-in-out, width 0.1s ease-in-out;
		/* z-index for projects vue; custom background */
		z-index: 2;
	}

	/* START RETURN INV */
	.return-btn-inv {
		z-index: 2;
		width: 7.25vh;
		position: absolute;
		/* bottom: 3.5vh; */
		bottom: calc((15vh - 7vh) / 2);
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		display: none;
		justify-content: center;
		align-items: center;
		text-align: center;
		opacity: 0;
		transition: opacity 0.3s ease-in-out, width 0.1s ease-in-out;
	}

	.toggle-mode {
		/* height / width was causing page to be higher than 100vh & scrollable */
		width: 10vh;
		height: 10vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
		/* z-index for projects vue; custom background */
		z-index: 2;
	}

	.toggle-mode button {
		color: var(--color);
		font-size: 30px;
	}

	.toggle-mode button:hover {
		color: var(--color);
		opacity: 0.3;
		font-size: 30px;
	}

	.toggle-mode button:active {
		color: var(--color);
		opacity: 0.3;
		font-size: 30px;
	}

	/* START TOGGLE INV */

	.toggle-mode-inv button {
		color: var(--inv-color);
		opacity: 0.3;
		font-size: 30px;
	}

	.toggle-mode-inv button:hover {
		color: var(--inv-color);
		opacity: 0.3;
		font-size: 30px;
	}

	.toggle-mode-inv button:active {
		color: var(--inv-color);
		opacity: 0.3;
		font-size: 30px;
	}

	/* on click change nav btns to- align-items: flex-end; display: absolute -with icons or letters */
}
</style>
