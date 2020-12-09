<template>
	<div class="app">
		<router-view />
	</div>
</template>

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
