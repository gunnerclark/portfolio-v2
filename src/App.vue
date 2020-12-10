<template>
	<div class="app">
		<router-view />
	</div>
</template>

<script>
export default {
	created() {
		// sets the title of the site
		document.title = 'gunner clark';
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
}

*:focus {
	outline: none;
}

.app {
}

::-webkit-scrollbar {
	display: none;
}
</style>
