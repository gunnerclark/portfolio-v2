<template>
	<div class="component-catch">
		<div id="intro-scroll" class="intro">
			<div class="txt-intro">
				Hello! My name is Gunner Clark and I'm a front-end web
				developer.
				<br />
				I build and design websites and web apps that focus on
				performance and future maintainability.
				<br />
				When I'm not building websites and web apps, I'm developing both
				virtual and augmented reality applications aimed to improve user
				productivity and QOL.
			</div>
			<div class="img-intro">
				<img class="img-intro" src="../assets/about-img/Profile.jpg" />
			</div>
			<!-- <div class="img-bg"></div> -->
			<div class="ico-intro-left">
				<fa-icon :icon="['fas', 'angle-double-down']" />
			</div>
			<div class="ico-intro-right">
				<fa-icon :icon="['fas', 'angle-double-down']" />
			</div>
			<!-- <div class="arrow-garden-left">
                <fa-icon :icon="['fas', 'reply']" rotation="180"/>
            </div>
            <div class="arrow-garden-right">
                <fa-icon :icon="['fas', 'reply']" flip="vertical"/>
            </div> -->
		</div>
		<div class="garden-skills">
			<div class="garden">
				<div class="txt-garden">
					I also post random thoughts as well as updates for pending
					projects here in my virtual garden:
				</div>
				<div class="img-catch">
					<a
						href="https://garden.gunnerclark.dev/"
						target="_blank"
						title="virtual garden"
					>
						<img
							class="img-garden"
							src="../assets/project-ico/GardenLarge.png"
						/>
					</a>
				</div>
				<!-- <div class="img-garden"></div> -->
			</div>
			<div class="skills">
				<!-- EITHER (skill / toolbox) OR (recent digital garden / blog posts) -->
				<div class="txt-skills">
					And finally, this is my current toolbox:
				</div>
				<div class="ico-bg">
					<div class="ico-skills">
						<div class="skill-1-3">
							<fa-icon
								class="html"
								:icon="['fab', 'html5']"
								title="HTML"
							/>
							<fa-icon
								class="css"
								:icon="['fab', 'css3']"
								title="CSS"
							/>
							<fa-icon
								class="js"
								:icon="['fab', 'js']"
								title="JavaScript and TypeScript"
							/>
						</div>
						<div class="skill-4-5">
							<fa-icon
								class="vue"
								:icon="['fab', 'vuejs']"
								title="VueJS with VueX"
							/>
							<img
								class="firebase"
								src="../assets/project-ico/firebase.png"
								title="Google Firebase"
							/>
							<fa-icon
								class="node"
								:icon="['fab', 'node-js']"
								title="NodeJS"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			webDevDesc:
				"My name is Gunner Clark, and I'm front-end web developer. I build and design websites and web apps that focus on performance and future maintainability.",
			ARDesc:
				"When I'm not web developing, I'm developing both virtual and augmented reality applications aimed to improve user productivity and QOL.",
			garden:
				'I also post random thoughts as well as updates for my pending projects in my virtual garden.',
		};
	},
	methods: {
		scrollTo() {
			const element = document.getElementById('intro-scroll');
			// scroll to element
			element.scrollIntoView({ behavior: 'smooth' });
		},
	},
};
</script>

<style scoped>
.component-catch {
	display: flex;
	flex-direction: column;
	height: auto;
	overflow: scroll;
	background-color: var(--inv-color);
}

.intro {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background: var(--inv-color);
	border-bottom-right-radius: 25px;
	border-bottom-left-radius: 25px;
	position: relative;
	/* border: 1px solid red; */
}

/* .intro:hover .ico-intro-left,
.intro:hover .ico-intro-right {
    opacity: 20%;
} */

.txt-intro {
	height: 85vh;
	width: 50vw;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 22px;
	line-height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
}

.img-intro {
	z-index: 1;
	width: 20vw;
	height: 20vw;
	border-radius: 100%;
	margin: auto;
	margin-left: 0;
	/* width: 21vw;
	height: 21vw;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background: var(--color);
	margin: auto; */
}

.img-intro img {
	width: 20vw;
	height: 20vw;
	border-radius: 100%;
	filter: brightness(100%) contrast(150%);
	margin: auto;
}

.img-bg {
	z-index: 0;
	position: absolute;
	right: 10vw;
	width: 20vw;
	height: 20vw;
	border-radius: 100%;
	background: var(--color);
	filter: blur(45px);
	opacity: 25%;
}

.ico-intro-left {
	font-size: 45px;
	position: absolute;
	top: 90vh;
	left: calc((100vw - 90px) / 3);
	color: var(--inv-color);
	opacity: 15%;
	transition: opacity 0.3s ease-in-out;
}

.ico-intro-right {
	font-size: 45px;
	position: absolute;
	top: 90vh;
	right: calc((100vw - 90px) / 3);
	color: var(--inv-color);
	opacity: 15%;
	transition: opacity 0.3s ease-in-out;
}

.garden {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 42.5vh;
	background: var(--color);
	color: var(--inv-color);
	/* border: 1px solid blue; */
}

.txt-garden {
	width: 100vw;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 22px;
	line-height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	margin-top: 15vh;
	/* border: 1px solid blue; */
}

.img-catch {
	width: 100vw;
	/* uncertain of this height */
	height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: 1px solid red; */
}

.img-garden {
	width: 15vh;
	height: 15vh;
	border-radius: 100%;
	filter: grayscale(100%) contrast(125%);
	/* background: var(--inv-color); */
	cursor: pointer;
	transition: background 0.1s ease-in-out, width 0.1s ease-in-out,
		height 0.1s ease-in-out, filter 0.1s ease-in-out;
	/* border: 1px solid green; */
}

.img-garden:hover {
	width: 16vh;
	height: 16vh;
	filter: grayscale(0%) contrast(100%);
	/* background: var(--accent-color); */
}

.img-garden:active {
	width: 14vh;
	height: 14vh;
	filter: hue-rotate(245deg);
	/* background: var(--accent-color); */
}

/* .arrow-garden-left {
    font-size: 80px;
    color: var(--inv-color);
    opacity: 10%;
    position: absolute;
    top: 110vh;
    left: 40vw;
}

.arrow-garden-right {
    font-size: 80px;
    color: var(--inv-color);
    opacity: 10%;
    position: absolute;
    top: 110vh;
    right: 40vw;
} */

.skills {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 42.5vh;
	background: var(--color);
	color: var(--inv-color);
	/* border: 1px solid purple; */
}

.txt-skills {
	margin: auto;
	width: 60vw;
	height: 10vh;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 50%;
	/* margin-bottom: 0; */
	/* border: 1px solid purple; */
}

.ico-bg {
	background: var(--inv-color);
	opacity: 25%;
	height: 32.5vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.ico-skills {
	width: 60vw;
	font-size: 60px;
	/* line-height: 52px; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: calc(((15vh - 7vh) / 2) + 7vh);
}

.html,
.css,
.js,
.vue,
.node {
	cursor: pointer;
	color: var(--color);
	margin: auto;
}

.firebase {
	cursor: pointer;
	margin: auto;
	width: 60px;
	height: 60px;
	filter: grayscale(100%) brightness(75%) contrast(125%);
}

.html {
	margin-left: 0;
}

.node {
	margin-right: 0;
}

.skill-1-3 {
	display: flex;
	justify-content: center;
	width: auto;
}

.skill-4-5 {
	display: flex;
	justify-content: center;
	width: auto;
}

.html {
	margin-left: auto;
}

.node {
	margin-right: auto;
}

.html,
.css,
.js,
.vue,
.node,
.firebase {
	cursor: pointer;
	color: var(--color);
	margin-left: 2vw;
	margin-right: 2vw;
}

/* .html:hover {
	color: rgb(255, 60, 0);
}
.css:hover {
	color: rgb(59, 79, 255);
}
.js:hover {
	color: rgb(251, 255, 0);
}
.vue:hover {
	color: rgb(0, 255, 0);
}
.node:hover {
	color: rgb(3, 95, 0);
} */
.html:hover,
.css:hover,
.js:hover,
.vue:hover,
.node:hover {
	color: var(--accent-color);
}
.firebase:hover {
	filter: grayscale(0%);
}

/* threshold for notes-v2 */
@media only screen and (max-width: 1024px) {
	.intro {
		flex-direction: column;
		height: 100vh;
		/* height: 92.5vh; */
	}

	.txt-intro {
		margin-top: 15vh;
		height: auto;
		align-items: center;
		font-size: 20px;
		line-height: 42px;
		width: 90vw;
		margin-bottom: 0;
		/* border: 1px solid red; */
	}

	.img-intro {
		width: 15vh;
		height: 15vh;
		margin: auto;
		margin-top: 2.5vh;
		margin-bottom: 15vh;
	}

	.img-intro img {
		width: 15vh;
		height: 15vh;
	}

	.ico-intro-left {
		position: absolute;
		/* top: 50vh; */
		/* left: calc((100vw - 26vh) / 4); */
		color: var(--color);
	}

	.ico-intro-right {
		position: absolute;
		/* top: 67.5vh;
		right: calc((100vw - 26vh) / 4); */
		color: var(--color);
	}

	.garden-skills {
		height: 52.5vh;
		width: 100vw;
		/* border: 1px solid orange; */
	}

	.garden {
		/* border: 1px solid red; */
	}

	.txt-garden {
		font-size: 20px;
		line-height: 36px;
		height: auto;
		width: 90vw;
		margin-top: 6.5vh;
		/* margin-top: 0;
		margin-bottom: 0; */
		/* border: 1px solid blue; */
	}

	.img-catch {
		height: calc(15.5vh + 10vh - 9vh);
		width: 15vh;
		margin: auto;
		/* border: 1px solid green; */
	}

	.img-garden {
		height: 15vh;
		width: 15vh;
		filter: contrast(100%);
		margin: auto;
	}

	.img-garden:hover {
		width: 15vh;
		height: 15vh;
		filter: contrast(100%);
		/* background: var(--accent-color); */
	}

	.img-garden:active {
		width: 14vh;
		height: 14vh;
		filter: hue-rotate(245deg);
		/* background: var(--accent-color); */
	}

	.txt-skills {
		font-size: 20px;
		width: 90vw;
		/* border: 1px solid rgb(121, 121, 0); */
	}

	.ico-skills {
		width: 100vw;
		flex-direction: column;
	}

	.skill-1-3 {
		display: flex;
		justify-content: center;
		width: 100vw;
	}

	.skill-4-5 {
		display: flex;
		justify-content: center;
		width: 100vw;
	}

	.html {
		margin-left: auto;
	}

	.node {
		margin-right: auto;
	}

	.html,
	.css,
	.js,
	.vue,
	.node,
	.firebase {
		cursor: pointer;
		color: var(--color);
		margin-left: 5vw;
		margin-right: 5vw;
	}

	.html,
	.css,
	.js {
		margin-bottom: 5vw;
	}
}
</style>
