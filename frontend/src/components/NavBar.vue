<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<router-link to="/home" class="navbar-brand">
				<span class="mdi mdi-home"></span>
			</router-link>
			<router-link to="/bmi" class="navbar-brand">
				<span class="mdi mdi-chart-box"></span>
			</router-link>
			<router-link to="/diary" class="navbar-brand">
				<span class="mdi mdi-application-edit-outline"></span>
			</router-link>
			<router-link to="/profile" class="navbar-brand">
				<span class="mdi mdi-account"></span>
			</router-link>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
};
</script>

<style scoped>
.navbar {
	background-color: #d29433;
	height: 6vh;
}

.navbar-brand {
	font-size: 28px;
}

.mdi:hover {
	color: #d29433;
}
.mdi {
	margin: 0 30px 0 30px;
}
.container {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
