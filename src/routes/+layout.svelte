<script lang="ts">
	import './layout.css';
    import { slide } from 'svelte/transition';

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
    ];

    let isMobileMenuOpen = false;

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }

    $: if (typeof document !== 'undefined') {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
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

			<nav class="hidden md:flex gap-8 font-semibold text-lg items-center">
                {#each navLinks as link}
                    <a href={link.href} class="hover:text-blue-600 transition-colors">{link.name}</a>
                {/each}
                <a href="tel:+1234567890" class="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors ml-4 shadow-md">
                    Call Us
                </a>
            </nav>

            <button
                class="md:hidden relative z-50 p-2 text-gray-800 hover:text-blue-600 focus:outline-none"
                on:click={toggleMobileMenu}
                aria-label="Toggle Menu"
            >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {#if isMobileMenuOpen}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    {/if}
                </svg>
            </button>
		</div>
	</header>

    {#if isMobileMenuOpen}
        <div
            class="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-6 md:hidden"
            transition:slide={{ duration: 300 }}
        >
            <nav class="flex flex-col gap-6 font-semibold text-2xl text-center">
                {#each navLinks as link}
                    <a
                        href={link.href}
                        class="hover:text-blue-600 transition-colors py-2"
                        on:click={closeMobileMenu}
                    >
                        {link.name}
                    </a>
                {/each}
                <a
                    href="tel:+1234567890"
                    class="mt-8 bg-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md w-full"
                    on:click={closeMobileMenu}
                >
                    Call Us Today
                </a>
            </nav>
        </div>
    {/if}

	<main class="grow">
		<slot />
	</main>

	<footer class="bg-gray-900 text-white padding-y-8 text-center mt-auto">
		<p>&copy; 2026 TrueBase Managed IT Services. All rights reserved.</p>
	</footer>
</div>
