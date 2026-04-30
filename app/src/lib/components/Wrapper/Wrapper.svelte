<svelte:options immutable={true} />

<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let main: HTMLElement;
	// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
	export let key: string;

	createEventDispatcher<{ scrolled: boolean }>();
</script>

<div class="app-content-p" bind:this={main}>
	<div class="app-transition-wrapper">
		<slot />
	</div>
</div>

<style>
	.app-transition-wrapper {
		isolation: isolate;
		padding-bottom: 2.1rem;
	}
</style>
