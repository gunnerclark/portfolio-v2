<template>
	<div id="component-catch" class="component-catch">
		<div class="project-upper"></div>
		<div id="project-lower" class="project-lower">
			<div id="project-preview" class="project-preview">
				<div v-for="(project, index) in projects" :key="index">
					<div :id="'btn' + index" class="project-btns">
						<!-- @click="toggleBtns(false, index)" -->
						<div class="btn-bg" @click="toggleBtns(false)"></div>
						<div v-if="project.github.length > 0">
							<a
								class="btn-project"
								:href="project.github"
								target="_blank"
							>
								<button class="ico-github">
									<fa-icon :icon="['fab', 'github']" />
								</button>
								<div class="name-github">github</div>
							</a>
						</div>
						<div v-if="project.host.length > 0">
							<a
								class="btn-project"
								:href="project.host"
								target="_blank"
							>
								<button class="ico-host">
									<img
										class="img-garden"
										src="../assets/project-ico/PortfolioLarge.png"
									/>
								</button>
								<div class="name-host">host</div>
							</a>
						</div>
						<div v-if="project.garden.length > 0">
							<a
								class="btn-project"
								:href="project.garden"
								target="_blank"
							>
								<button class="ico-garden">
									<img
										class="img-garden"
										src="../assets/project-ico/GardenLarge.png"
									/>
								</button>
								<div class="name-garden">garden</div>
							</a>
						</div>
					</div>
					<div
						:id="'project' + index"
						class="project-item"
						@mouseover="changeBackground(true, index)"
						@mouseleave="changeBackground(false, index)"
						@click="toggleBtns(true, index)"
					>
						<div class="project-catch">
							<div class="project-title">
								{{ projects[index].title }}
							</div>
							<div class="project-desc">
								{{ projects[index].desc }}
							</div>
						</div>
						<!-- <div class="project-btns">
							<button class="btn-github">
								<fa-icon
									class="btn-ico"
									:icon="['fab', 'github']"
								/>
								<div class="btn-name">github</div>
							</button>
							<button class="btn-host">
								<fa-icon
									class="btn-ico"
									:icon="['fab', 'github']"
								/>
								<div class="btn-name">host</div>
							</button>
							<button class="btn-garden">
								<fa-icon
									class="btn-ico"
									:icon="['fab', 'github']"
								/>
								<div class="btn-name">garden</div>
							</button>
						</div> -->
					</div>
				</div>
				<div class="project-item-buffer"></div>
			</div>
		</div>
		<div
			:class="bgProject"
			:style="{
				'background-image': `${bgIMG}`,
			}"
		></div>
		<!-- filter:
					'grayscale(100%) contrast(500%) blur(5px) invert(' +
					`${invert}` +
					')', -->
		<div class="project-lower-catch" @click="toggleBtns(false)"></div>
	</div>
</template>

<script>
import store from '../store/index';

export default {
	data() {
		return {
			projects: store.state.projects,
			projectTitle: '',
			bgIMG: 'none',
			tempIndex: '',
		};
	},
	methods: {
		test() {
			console.log('working');
		},

		changeBackground(boolean, index) {
			if (boolean) {
				this.bgIMG =
					'url(' +
					require(`../assets/project-bg/${this.projects[index].img}`) +
					')';
			} else {
				this.bgIMG = 'none';
			}
		},

		scrollTo() {
			//** incomplete, needs to scroll to id "project0" of id "project-preview"
			/*
			console.log('scroll pls');
			const top = window.innerHeight * 0.15;
			const wrap = document.getElementById('project-preview');
			const topItem = document.getElementById('project0');
			setTimeout(() => {
				wrap.scroll(0);
			}, 800);
			*/
			// // console.log(top);
			// const element = document.getElementById('project0');
			// // console.log(element);
			// // scroll to element
			// // element.focus();
			// // element.scrollTo({
			// // 	top: top,
			// // 	behavior: 'smooth',
			// // });
			// const myElement = document.getElementById('project0');
			// const topPos = myElement.offsetTop;
			// document.getElementById('test-id').scrollTop = 0;
		},

		toggleBtns(boolean, index) {
			// btn# and project# are the id(s)
			const btnID = 'btn' + index;
			const projectID = 'project' + index;
			if (this.tempIndex !== index && this.tempIndex !== '') {
				const tempBtnID = 'btn' + this.tempIndex;
				const tempProjectID = 'project' + this.tempIndex;
				document.getElementById(tempProjectID).style.pointerEvents =
					'auto';
				document.getElementById(tempProjectID).style.opacity = '100%';
				document.getElementById(tempBtnID).style.pointerEvents = 'none';
				document.getElementById(tempBtnID).style.opacity = '0%';
			}
			if (boolean) {
				document.getElementById(projectID).style.pointerEvents = 'none';
				document.getElementById(projectID).style.opacity = '20%';
				document.getElementById(btnID).style.pointerEvents = 'auto';
				document.getElementById(btnID).style.opacity = '100%';
				this.tempIndex = index;
			} else {
				for (let i = 0; i < store.state.projects.length; i++) {
					const allBtnID = 'btn' + i.toString();
					const allProjectID = 'project' + i.toString();
					document.getElementById(allProjectID).style.pointerEvents =
						'auto';
					document.getElementById(allProjectID).style.opacity =
						'100%';
					document.getElementById(allBtnID).style.pointerEvents =
						'none';
					document.getElementById(allBtnID).style.opacity = '0%';
				}
			}
		},
	},

	computed: {
		bgProject() {
			return store.getters.bgProject;
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
	position: relative;
	z-index: 1;
}

.project-upper {
	height: 15vh;
	width: 100vw;
	background-color: var(--color);
	border-bottom-right-radius: 25px;
	border-bottom-left-radius: 25px;
	z-index: 1;
}

.project-lower {
	height: auto;
	overflow: scroll;
	height: 85vh;
	width: 80vw;
	margin: auto;
	z-index: 1;
}

.project-lower-catch {
	/* purpose is to close buttons on click */
	position: absolute;
	bottom: 0;
	height: 85vh;
	width: 100vw;
}

.project-preview {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	height: auto;
	width: 80vw;
	color: var(--color);
	background: transparent;
	overflow: scroll;
}

.project-item {
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 30vh;
	width: 80vw;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;
	/* border: 1px solid red; */
}

.project-item-buffer {
	height: 15vh;
	width: 80vw;
}

.project-catch {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	margin: auto;
	margin-right: 0;
	transition: width 0.2s ease-in-out;
	/* border: 1px solid green; */
}

/* .project-item:hover .project-btns {
	visibility: visible;
	opacity: 100%;
	width: 45vw;
} */

.project-title {
	width: 80vw;
	margin: auto;
	margin-right: 0;
	margin-bottom: 0;
	font-size: 64px;
	font-weight: bold;
	transition: color 0.15s ease-in-out, padding 0.2s ease-in-out,
		font-size 0.15s ease-in-out, opacity 0.15s ease-in-out,
		text-shadow 0.15s ease-in-out;
}

.project-desc {
	width: 80vw;
	margin: auto;
	margin-right: 0;
	margin-top: 0;
	font-size: 18px;
	color: var(--accent-color);
	transition: color 0.15s ease-in-out, padding 0.2s ease-in-out,
		font-size 0.15s ease-in-out, opacity 0.15s ease-in-out,
		text-shadow 0.15s ease-in-out;
}

.project-item:hover .project-title,
.project-item:hover .project-desc {
	/* changing title & desc rather than item to prevent jittering on left side */
	/* width: 30vw; */
	padding-left: 5vw;
}

.project-item:active .project-title {
	color: var(--accent-color);
}
.project-item:active .project-desc {
	color: var(--color);
}

.project-btns {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	pointer-events: none;
	opacity: 0%;
	height: 30vh;
	width: 80vw;
	transition: opacity 0.2s ease-in-out;
	/* border: 1px solid blue; */
}

.btn-bg {
	position: absolute;
	/* z-index so to toggle btn elements */
	z-index: 0;
	height: 30vh;
	width: 80vw;
}

.btn-project {
	/* z-index so icons can be hovered */
	z-index: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 160px;
	transition: height 0.3s ease-in-out;
	/* border: 1px solid red; */
}

.ico-github,
.ico-host,
.ico-garden {
	/* z-index so btn-bg can toggle btn elements */
	z-index: 1;
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border: none;
	background: transparent;
	color: var(--color);
	font-size: 65px;
	height: 60px;
	width: 60px;
	transition: width 0.15s ease-in-out, font-size 0.1s ease-in-out,
		color 0.1s ease-in-out;
	/* border: 1px solid green; */
}

.ico-host img {
	height: 60px;
	width: 60px;
	filter: contrast(105%);
	/* filter: grayscale(100%) brightness(75%) contrast(300%); */
	transition: width 0.15s ease-in-out, height 0.1s ease-in-out,
		filter 0.15s ease-in-out;
}

.ico-garden img {
	height: 60px;
	width: 60px;
	filter: brightness(85%) contrast(120%);
	/* filter: grayscale(100%) brightness(80%) contrast(300%); */
	transition: width 0.15s ease-in-out, height 0.1s ease-in-out,
		filter 0.15s ease-in-out;
}

.name-github,
.name-host,
.name-garden {
	position: absolute;
	opacity: 0%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: var(--color);
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 26px;
	height: 60px;
	width: 60px;
	cursor: pointer;
	transition: width 0.15s ease-in-out, padding 0.2s ease-in-out,
		opacity 0.15s ease-in-out, color 0.1s ease-in-out,
		font-size 0.15s ease-in-out;
	/* border: 1px solid green; */
}

.btn-project:hover .ico-github,
.btn-project:hover .ico-host,
.btn-project:hover .ico-garden {
	width: 160px;
}

.btn-project:hover .ico-host img,
.btn-project:hover .ico-garden img {
	/* filter: grayscale(0%) brightness(100%); */
}

.btn-project:active .ico-github,
.btn-project:active .ico-host,
.btn-project:active .ico-garden {
	color: var(--accent-color);
	font-size: 60px;
}

.btn-project:hover .name-github,
.btn-project:hover .name-host,
.btn-project:hover .name-garden {
	color: var(--color);
	width: 160px;
	padding-left: 72px;
	opacity: 100%;
}

.btn-project:active .name-github {
	color: var(--accent-color);
}
.btn-project:active .name-host {
	color: var(--accent-color);
}
.btn-project:active .name-garden {
	color: var(--accent-color);
	filter: hue-rotate(115deg) brightness(75%);
}

.btn-project:active .ico-host img,
.btn-project:active .ico-garden img {
	height: 55px;
	width: 55px;
}
/* .ico-github:hover,
.ico-host:hover,
.ico-garden:hover {
	color: var(--accent-color);
	font-size: 63px;
}

.ico-github:active,
.ico-host:active,
.ico-garden:active {
}
*/

/*
.project-btns {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	visibility: hidden;
	opacity: 0%;
	width: 40vw;
	transition: width 0.2s ease-in-out, opacity 0.3s ease-in-out;
	border: 1px solid blue;
}

.project-btns button {
	border: none;
	background: transparent;
	color: var(--color);
	height: 60px;
	width: auto;
	cursor: pointer;
	font-size: 60px;
	transition: width 0.2s ease-in-out;
	border: 1px solid yellow;
	margin: auto;
}

.btn-github {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.btn-name {
	font-size: 24px;
	width: 0vw;
	transition: width 0.2s ease-in-out, opacity 0.3s ease-in-out;
}

.btn-github .btn-name {
	width: 0vw;
	visibility: hidden;
	opacity: 0%;
}

.btn-github:hover .btn-name {
	width: 8vw;
	visibility: visible;
	opacity: 100%;
}
.btn-github {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.btn-github .btn-name {
	width: 0vw;
	visibility: hidden;
	opacity: 0%;
}

.btn-github:hover .btn-name {
	width: 8vw;
	visibility: visible;
	opacity: 100%;
}

.btn-host {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.btn-host .btn-name {
	width: 0vw;
	visibility: hidden;
	opacity: 0%;
}

.btn-host:hover .btn-name {
	width: 8vw;
	visibility: visible;
	opacity: 100%;
}

.btn-garden {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.btn-garden .btn-name {
	width: 0vw;
	visibility: hidden;
	opacity: 0%;
}

.btn-garden:hover .btn-name {
	width: 8vw;
	visibility: visible;
	opacity: 100%;
} */
.bg-project {
	position: absolute;
	top: 15vh;
	height: 85vh;
	width: 100vw;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	pointer-events: none;
	z-index: 0;
	filter: grayscale(100%) contrast(500%) blur(5px) invert(0%);
	/* filter: grayscale(100%) contrast(500%) blur(5px); */
	/* box-shadow: 0 0 150px 25px var(--inv-color) inset; */
	opacity: 25%;
	transition: background-image 0.3s ease-in-out;
}

.bg-project-inv {
	position: absolute;
	top: 15vh;
	height: 85vh;
	width: 100vw;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	pointer-events: none;
	z-index: 0;
	filter: grayscale(100%) contrast(500%) blur(5px) invert(100%);
	/* filter: grayscale(100%) contrast(500%) blur(5px); */
	/* box-shadow: 0 0 150px 25px var(--inv-color) inset; */
	opacity: 25%;
	transition: background-image 0.3s ease-in-out;
}

/* threshold for notes-v2 */
@media only screen and (max-width: 1024px) {
	.project-lower,
	.project-lower-catch,
	.project-preview,
	.project-item,
	.project-btns,
	.btn-bg {
		width: 100vw;
	}

	.project-title {
		width: 100vw;
		font-size: 48px;
		padding-left: 5vw;
	}

	.project-desc {
		width: 100vw;
		font-size: 16px;
		padding-left: 5vw;
	}

	.project-item:hover .project-title,
	.project-item:hover .project-desc {
		padding-left: 10vw;
	}

	.project-item:active .project-title {
		color: var(--accent-color);
	}
	.project-item:active .project-desc {
		color: var(--color);
	}

	.btn-project {
		/* z-index so icons can be hovered */
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		transition: height 0.3s ease-in-out;
		margin: 5vw;
	}

	.ico-github,
	.ico-host,
	.ico-garden {
		/* z-index so btn-bg can toggle btn elements */
		z-index: 1;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background: transparent;
		color: var(--color);
		font-size: 60px;
		height: 60px;
		width: 60px;
		transition: width 0.15s ease-in-out, font-size 0.1s ease-in-out,
			color 0.1s ease-in-out;
	}

	.ico-host img {
		height: 60px;
		width: 60px;
		filter: contrast(105%);
		/* filter: grayscale(100%) brightness(75%) contrast(300%); */
		transition: width 0.15s ease-in-out, height 0.1s ease-in-out,
			filter 0.15s ease-in-out;
	}

	.ico-garden img {
		height: 60px;
		width: 60px;
		filter: brightness(85%) contrast(120%);
		/* filter: grayscale(100%) brightness(80%) contrast(300%); */
		transition: width 0.15s ease-in-out, height 0.1s ease-in-out,
			filter 0.15s ease-in-out;
	}

	.name-github,
	.name-host,
	.name-garden {
		position: absolute;
		opacity: 0%;
		display: none;
		justify-content: flex-start;
		align-items: center;
		color: var(--color);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 24px;
		height: 60px;
		width: 60px;
		cursor: pointer;
		transition: width 0.15s ease-in-out, padding 0.2s ease-in-out,
			opacity 0.15s ease-in-out, color 0.1s ease-in-out,
			font-size 0.15s ease-in-out;
		border: 1px solid green;
	}

	.btn-project:hover .ico-github,
	.btn-project:hover .ico-host,
	.btn-project:hover .ico-garden {
		width: 60px;
	}

	.btn-project:active .ico-github,
	.btn-project:active .ico-host,
	.btn-project:active .ico-garden {
		color: var(--accent-color);
		font-size: 60px;
	}

	.btn-project:hover .name-github,
	.btn-project:hover .name-host,
	.btn-project:hover .name-garden {
		color: var(--accent-color);
		width: 160px;
		padding-left: 72px;
		opacity: 100%;
	}
}
</style>
