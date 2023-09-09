<script lang="ts">
	import { css } from "styled-system/css";
</script>

<svelte:head>
	<title>🚧 Page Under Maintenance</title>
	<meta
		name="description"
		content="This page is currently under maintenance. We're sorry; please check back again soon!"
	/>
</svelte:head>

<div
	class={css({
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "start",
		flexDirection: "column",
		p: "4rem",

		maxWidth: "600px",
		m: "0 auto",
	})}
>
	<h1 class={css({ pb: "1rem" })}>🚧 Page under maintenance</h1>
	<h2 class={css({ pb: "1rem" })}>
		🏗️ CSESoc's platform team is currently
		<span class={css({ color: "violet.300" })}>performing maintenance</span>.
	</h2>
	<h3>😰 We're sorry about the inconvenience; please check back again later!</h3>
</div>
