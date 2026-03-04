<script lang="ts">
	import './layout.css';
</script>

<div class="min-h-screen flex flex-col font-sans text-gray-900">
    <header class="bg-white shadow-md sticky top-0 z-50 py-6">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <a href="/" class="relative h-16 w-64 flex items-center shrink-0 z-10">
                <img 
                    src="/logo.png" 
                    alt="TrueBase Logo" 
                    class="absolute top-1/2 left-0 -translate-y-1/2 h-48 w-auto object-contain pointer-events-none max-w-none" 
                />
            </a>

			<nav class="flex gap-8 font-semibold text-lg items-center">
                <a href="/" class="hover:text-blue-600 transition-colors">Home</a>
                <a href="/services" class="hover:text-blue-600 transition-colors">Services</a>
                <a href="/about" class="hover:text-blue-600 transition-colors">About</a>
                <a href="tel:+1234567890" class="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors ml-4 shadow-md">
                    Call Us
                </a>
            </nav>
		</div>
	</header>

	<main class="grow">
		<slot />
	</main>

	<footer class="bg-gray-900 text-white padding-y-8 text-center mt-auto">
		<p>&copy; 2026 TrueBase Managed IT Services. All rights reserved.</p>
	</footer>
</div>
