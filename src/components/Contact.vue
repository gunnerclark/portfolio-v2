<template>
	<div class="component-catch">
		<div class="nav-catch"></div>
		<div class="upper-contact">
			<div class="txt-contact">
				Have any questions?
			</div>
			<div v-if="windowInnerWidth">
				<div id="btn-contact" @click="toggleContact(true)">
					<button id="btn-overlay">
						get in touch
					</button>
					<a
						href="mailto:contact@gunnerclark.dev?subject=Contact"
						target="_blank"
						title="mailTo: contact@gunnerclark.dev"
					>
						<button id="btn-mailTo">
							<fa-icon :icon="['fas', 'envelope']" />
						</button>
					</a>
					<a title="copy 'contact@gunnerclark.dev' to clipboard">
						<button id="btn-copy" @click="copyToClipboard()">
							<fa-icon :icon="['fas', 'copy']" />
						</button>
					</a>
				</div>
			</div>
			<div v-else>
				<div class="btn-contact">
					<button class="btn-overlay">get in touch</button>
					<a
						href="mailto:contact@gunnerclark.dev?subject=Contact"
						target="_blank"
						title="mailTo: contact@gunnerclark.dev"
						class="btn-mailTo"
					>
						<button class="btn-mailTo">
							<fa-icon :icon="['fas', 'envelope']" />
						</button>
					</a>
					<a
						title="copy 'contact@gunnerclark.dev' to clipboard"
						class="btn-copy"
					>
						<button class="btn-copy" @click="copyToClipboard()">
							<fa-icon :icon="['fas', 'copy']" />
						</button>
					</a>
				</div>
			</div>
		</div>
		<div class="contact-upper-catch" @click="toggleContact(false)"></div>
		<div class="lower-contact" @click="toggleContact(false)">
			<div class="bg-links"></div>
			<div class="ico-links">
				<div class="github-container">
					<a href="https://github.com/gunnerclark" target="_blank">
						<fa-icon
							class="github"
							title="github"
							:icon="['fab', 'github']"
						/>
					</a>
				</div>
				<div class="garden-container">
					<a
						href="https://garden.gunnerclark.dev/"
						target="_blank"
						title="virtual garden"
						:class="imgGarden"
					>
						<img
							class="garden"
							src="../assets/project-ico/GardenLarge.png"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '../store/index';

export default {
	data() {
		return {};
	},
	methods: {
		async copyToClipboard() {
			try {
				const contact = 'contact@gunnerclark.dev';
				await navigator.clipboard.writeText(contact);
				alert("Copied 'contact@gunnerclark.dev' to clipboard");
			} catch {
				alert('An error occurred');
			}
		},
		toggleContact(boolean) {
			if (window.innerWidth <= 1024) {
				if (boolean) {
					document.getElementById('btn-overlay').style.height =
						'200px';
					// document.getElementById('btn-overlay').style.opacity = '0%';

					document.getElementById('btn-contact').style.height =
						'200px';
					document.getElementById('btn-contact').style.visibility =
						'hidden';

					document.getElementById('btn-mailTo').style.opacity =
						'100%';
					document.getElementById('btn-copy').style.opacity = '100%';
					document.getElementById('btn-mailTo').style.height =
						'100px';
					document.getElementById('btn-copy').style.height = '100px';
					document.getElementById('btn-mailTo').style.visibility =
						'visible';
					document.getElementById('btn-copy').style.visibility =
						'visible';
				} else {
					document.getElementById('btn-mailTo').style.height = '50px';
					document.getElementById('btn-copy').style.height = '50px';
					// document.getElementById('btn-mailTo').style.opacity = '0%';
					// document.getElementById('btn-copy').style.opacity = '0%';
					document.getElementById('btn-mailTo').style.visibility =
						'hidden';
					document.getElementById('btn-copy').style.visibility =
						'hidden';

					document.getElementById('btn-contact').style.height =
						'100px';
					document.getElementById('btn-contact').style.visibility =
						'visible';

					document.getElementById('btn-overlay').style.height =
						'100px';
					document.getElementById('btn-overlay').style.opacity =
						'100%';
				}
			}
		},
	},

	computed: {
		imgGarden() {
			if (store.state.cssColor === 'white') {
				return 'img-garden-inv';
			} else {
				return 'img-garden';
			}
		},
		windowInnerWidth() {
			if (window.innerWidth <= 1024) {
				return true;
			} else {
				return false;
			}
		},
	},
};
</script>

<style scoped>
.component-catch {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}

.nav-catch {
	/* to keep the elements centered realtive to the navbar rather than page top */
	height: 15vh;
}

.upper-contact {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 52.5vh;
	width: 100vw;
}

.lower-contact {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 32.5vh;
	width: 100vw;
	/* opacity: 25%;
	background: var(--color);
	color: var(--inv-color); */
	/* border: 1px solid green; */
}

.bg-links {
	z-index: 0;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 32.5vh;
	width: 100vw;
	opacity: 25%;
	background: var(--color);
	color: var(--inv-color);
}

.txt-contact {
	width: 100vw;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 26px;
	line-height: 52px;
	/* none instead of flex to hide element */
	display: none;
	justify-content: center;
	align-items: center;
	margin-bottom: 0.75em;
	/* border: 1px solid red; */
}

/* .btn-contact {
	/* center button to stack text on top of it
	/* height: calc(26.25vh + 58px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid blue;
} */

.btn-contact {
	z-index: 1;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	background: var(--color);
	color: var(--inv-color);
	font-size: 32px;
	height: 100px;
	width: 350px;
	border-radius: 0.5em;
	cursor: pointer;
	transition: color 0.3s ease-in-out, background 0.15s ease-in-out,
		font-size 0.1s ease-in-out, margin-top 0.1s ease-in-out,
		height 0.2s ease-in-out, width 0.1s ease-in-out;
	/* margin-top: 2px; */
}

.btn-overlay {
	position: absolute;
	pointer-events: none;
	border: none;
	background: var(--color);
	color: var(--accent-color);
	font-size: 32px;
	height: 100px;
	width: 350px;
	border-radius: 0.5em;
	transition: opacity 0.15s ease-in-out, height 0.15s ease-in-out;
}

.btn-mailTo,
.btn-copy {
	visibility: hidden;
	opacity: 0%;
	border: none;
	background: var(--color);
	color: var(--inv-color);
	font-size: 34px;
	height: 50px;
	width: 350px;
	cursor: pointer;
	transition: color 0.15s ease-in-out, background 0.15s ease-in-out,
		font-size 0.1s ease-in-out, height 0.15s ease-in-out,
		width 0.15s ease-in-out, opacity 0.2s ease-in-out,
		margin 0.15s ease-in-out;
	/* border: 1px solid red; */
}

.btn-mailTo {
	border-top-left-radius: 0.5em;
	border-top-right-radius: 0.5em;
	margin-top: 0;
}
.btn-copy {
	border-bottom-left-radius: 0.5em;
	border-bottom-right-radius: 0.5em;
}

.btn-contact:hover {
	/* margin-top: 0; */
	/* font-size: 34px; */
	height: 200px;
	background: transparent;
}

.btn-contact:hover .btn-overlay {
	height: 200px;
	opacity: 0%;
}

.btn-contact:hover .btn-mailTo,
.btn-contact:hover .btn-copy {
	height: 100px;
}

.btn-contact:active {
	/* margin-top: 4px; */
	background: transparent;
	color: var(--inv-color);
	font-size: 32px;
}

.btn-mailTo:hover,
.btn-copy:hover {
	background: var(--color);
	color: var(--accent-color);
}

.btn-contact:hover .btn-mailTo,
.btn-contact:hover .btn-copy {
	visibility: visible;
	opacity: 100%;
}

.btn-mailTo:active {
	font-size: 32px;
	height: 95px;
	width: 340px;
	background: var(--accent-color);
	color: var(--inv-color);
	margin-top: 5px;
}

.btn-copy:active {
	font-size: 32px;
	height: 95px;
	width: 340px;
	background: var(--accent-color);
	color: var(--inv-color);
	margin-bottom: 5px;
}

.ico-links {
	z-index: 1;
	width: 20vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: calc(((15vh - 7vh) / 2) + 7vh);
}

.github-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 65px;
	width: 65px;
}

.github {
	font-size: 60px;
	cursor: pointer;
	color: var(--inv-color);
	transition: color 0.15s ease-in-out, font-size 0.1s ease-in-out;
}

.github:hover {
	color: var(--color);
	font-size: 64px;
}

.github:active {
	color: var(--accent-color);
	font-size: 60px;
}

.garden-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 65px;
	width: 65px;
}

.img-garden {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 60px;
	border-radius: 100%;
	filter: grayscale(100%) brightness(145%);
	cursor: pointer;
	transition: background 0.2s ease-in-out, width 0.1s ease-in-out,
		height 0.1s ease-in-out, filter 0.2s ease-in-out;
}

.img-garden:hover {
	filter: grayscale(0%);
	/* background: var(--accent-color); */
}

.img-garden:active {
	filter: hue-rotate(245deg);
	/* background: var(--accent-color); */
}

.img-garden-inv {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 60px;
	border-radius: 100%;
	filter: grayscale(100%) brightness(145%) invert();
	cursor: pointer;
	transition: background 0.2s ease-in-out, width 0.1s ease-in-out,
		height 0.1s ease-in-out, filter 0.2s ease-in-out;
}

.img-garden-inv:hover {
	filter: grayscale(0%);
	/* background: var(--accent-color); */
}

.img-garden-inv:active {
	filter: hue-rotate(245deg);
	/* background: var(--accent-color); */
}

.garden {
	height: 60px;
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: height 0.1s ease-in-out, width 0.1s ease-in-out,
		filter 0.2s ease-in-out;
}

.garden:hover {
	height: 62px;
	width: 62px;
}

.garden:active {
	height: 58px;
	width: 58px;
}

.contact-upper-catch {
	/* purpose is to close buttons on click */
	z-index: 0;
	bottom: 32.5vh;
	position: absolute;
	height: 52.5vh;
	width: 100vw;
}

/* threshold for notes-v2 */
@media only screen and (max-width: 1024px) {
	#btn-contact {
		z-index: 1;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: none;
		background: var(--color);
		color: var(--inv-color);
		font-size: 32px;
		height: 100px;
		width: 350px;
		border-radius: 0.5em;
		cursor: pointer;
		transition: color 0.3s ease-in-out, background 0.15s ease-in-out,
			font-size 0.1s ease-in-out, margin-top 0.1s ease-in-out,
			height 0.2s ease-in-out, width 0.1s ease-in-out;
		/* margin-top: 2px; */
	}

	#btn-overlay {
		position: absolute;
		/* pointer-events: none; */
		border: none;
		background: var(--color);
		color: var(--accent-color);
		font-size: 32px;
		height: 100px;
		width: 350px;
		border-radius: 0.5em;
		transition: opacity 0.3s ease-in-out, height 0.15s ease-in-out;
	}

	#btn-mailTo,
	#btn-copy {
		border: none;
		background: var(--color);
		color: var(--accent-color);
		font-size: 34px;
		width: 350px;
		cursor: pointer;
		transition: color 0.15s ease-in-out, background 0.15s ease-in-out,
			font-size 0.1s ease-in-out, height 0.15s ease-in-out,
			width 0.15s ease-in-out, opacity 0.3s ease-in-out,
			margin 0.15s ease-in-out;
	}

	#btn-mailTo {
		height: 50px;
		border-top-left-radius: 0.5em;
		border-top-right-radius: 0.5em;
		margin-top: 0;
	}
	#btn-copy {
		height: 50px;
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
	}

	#btn-mailTo:active {
		font-size: 32px;
		height: 95px;
		width: 340px;
		background: var(--accent-color);
		color: var(--inv-color);
		margin-top: 5px;
	}

	#btn-copy:active {
		font-size: 32px;
		height: 95px;
		width: 340px;
		background: var(--accent-color);
		color: var(--inv-color);
		margin-bottom: 5px;
	}

	.ico-links {
		width: 50vw;
	}

	.github-container,
	.garden-container {
		margin-left: auto;
	}

	.github-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		height: 65px;
		width: 65px;
	}

	.github {
		font-size: 60px;
		cursor: pointer;
		color: var(--inv-color);
		transition: color 0.15s ease-in-out, font-size 0.1s ease-in-out;
	}

	.github:hover {
		color: var(--inv-color);
		font-size: 60px;
	}

	.github:active {
		color: var(--accent-color);
		font-size: 58px;
	}

	.garden-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		height: 65px;
		width: 65px;
	}

	.img-garden {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		width: 60px;
		border-radius: 100%;
		filter: grayscale(100%) brightness(145%);
		cursor: pointer;
		transition: background 0.2s ease-in-out, width 0.1s ease-in-out,
			height 0.1s ease-in-out, filter 0.2s ease-in-out;
	}

	.img-garden:hover {
		filter: grayscale(100%) brightness(145%);
	}

	.img-garden:active {
		filter: grayscale(0%);
	}

	.img-garden-inv {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		width: 60px;
		border-radius: 100%;
		filter: grayscale(100%) brightness(145%) invert();
		cursor: pointer;
		transition: background 0.2s ease-in-out, width 0.1s ease-in-out,
			height 0.1s ease-in-out, filter 0.2s ease-in-out;
	}

	.img-garden-inv:hover {
		filter: grayscale(100%) brightness(145%) invert();
	}

	.img-garden-inv:active {
		filter: grayscale(0%);
	}

	.garden {
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: height 0.1s ease-in-out, width 0.1s ease-in-out,
			filter 0.2s ease-in-out;
	}

	.garden:hover {
		height: 60px;
		width: 60px;
	}

	.garden:active {
		height: 58px;
		width: 58px;
	}
}
</style>
