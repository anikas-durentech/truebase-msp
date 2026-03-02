<script lang="ts">
	import './layout.css';
</script>

<div class="min-height-screen flex flex-col font-sans text-gray-900">
	<header class="bg-white shadow-small sticky top-0 z-50">
		<div class="container mx-auto padding-x-4 padding-y-4 flex justify-between items-center">
			<a href="/" class="flex items-center gap-4">
				<span class="font-heading font-bold text-2xl text-blue-900">TrueBase</span>
			</a>

			<nav class="hidden medium:flex gap-8 font-semibold">
				<a href="/" class="hover:text-blue-600 transition-colors">Home</a>
				<a href="/services" class="hover:text-blue-600 transition-colors">Services</a>
				<a href="/about" class="hover:text-blue-600 transition-colors">About</a>
			</nav>

			<a href="tel:+1234567890" class="bg-blue-800 text-white padding-x-6 padding-y-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
				Call Us
			</a>
		</div>
	</header>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="bg-gray-900 text-white padding-y-8 text-center mt-auto">
		<p>&copy; 2026 TrueBase Managed IT Services. All rights reserved.</p>
	</footer>
</div>
