<script lang=ts>
	export let name: string;

	let chrome: string = null;
	let node: string = null;
	let electron: string = null;

	globalThis.api.send('requestSystemInfo', null);
	globalThis.api.receive('getSystemInfo', data => {
		chrome = data.chrome;
		node = data.node;
		electron = data.electron;
	});
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href='https://svelte.dev/tutorial'>Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div>
    We are using Node.js <span class=version>{node}</span>,
    Chromium <span class=version>{chrome}</span>,
    and Electron <span class=version>{electron}</span>.
	</div>
</main>

<style lang=scss>
	main {
		overflow-y: auto;
		text-align: center;
		max-width: 240px;

		.version {
			color: #ff3e00;
		}

		h1 {
			color: #ff3e00;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>