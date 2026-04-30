<svelte:options immutable={true} />

<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import { cubicOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	export let main: HTMLElement;
	export let key: string;

	createEventDispatcher<{ scrolled: boolean }>();
</script>

<div class="app-content-p" bind:this={main}>
	{#key key}
		<div
			class="app-transition-wrapper"
			in:fly={{ x: -5, duration: 500, delay: 500, easing: cubicOut }}
			out:fly={{ x: -5, duration: 500, easing: cubicOut, opacity: 0 }}
		>
			<slot />
		</div>
	{/key}
</div>

<style>
	.app-transition-wrapper {
		isolation: isolate;
		padding-bottom: 2.1rem;
	}
</style>
