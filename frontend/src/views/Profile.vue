<template>
	<div class="heading">
		<img class="heading-img" src="@/assets/logorsg.jpg" alt="" />
		<span class="material-symbols-outlined logout">
			power_settings_new
		</span>
	</div>
	<div class="container-fluid">
		<div class="page-name">
			<h2 class="page-heading">My Profile</h2>
		</div>
		<div class="user-profile-img">
			<span class="material-symbols-outlined profile-pic">
				account_circle
			</span>
			<h2>Luka Benković</h2>
		</div>
		<div class="my-diaries">
			<h2 class="my-diaries-text">My diaries</h2>
		</div>
		<div class="card-container">
			<div class="card">
				<div class="card-heading">
					<h5 class="class-heading-text">TEST</h5>
					<span class="material-symbols-outlined delete">
						delete
					</span>
				</div>
				<div class="card-content">
					<p class="card-text">Hello Mirna</p>
				</div>
			</div>
		</div>
	</div>
	<nav-bar />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
	name: "ProfileUser",
	components: {
		NavBar,
	},
};
</script>
<style>
.heading {
	margin: 0;
	padding: 1vw 5vw 0 2vw;
	height: 7vh;
	background-color: #000;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.heading-img {
	height: 100%;
	width: auto;
	object-fit: contain;
	overflow: hidden;
}
.logout {
	color: red;
	scale: 1.5;
}
.container-fluid {
	height: calc(100vh - 7vh - 6vh);
	width: 100vw;
	background-color: black;
	margin: 0;
	padding: 0;
}
.page-name,
.my-diaries {
	width: 100%;
	padding-left: 2.25vw;
	padding-top: 1vw;
}
.page-heading {
	color: white;
	/* font-weight: bold; */
}
.profile-pic {
	font-size: 200px;
}
.user-profile-img {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.my-diaries-text {
	color: #d29433;
}
.card-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.card {
	width: 25vw;
	height: 15vh;
	background-color: white;
	padding: 1vw 2vw 1vw 2vw;
}
.card-heading {
	color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.delete {
	color: red;
}
.class-heading-text {
	display: inline;
}
.card-text {
	font-size: 0.8rem;
	color: black;
}
.card-content {
	width: 100%;
	margin-top: 1vw;
}
</style>
