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
                <a href="/contact" class="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors ml-4 shadow-md">
                    Contact Us
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
                    href="tel:+16784397037"
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

	<footer class="bg-gray-900 text-gray-300 py-16 mt-auto border-t-4 border-blue-800">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                
                <div class="flex flex-col">
                    <img 
                        src="/android-chrome-192x192.png" 
                        alt="TrueBase Logo" 
                        class="h-12 w-auto object-contain mb-6 self-start" 
                    />
                    <p class="text-sm leading-relaxed text-gray-400">
                        Delivering reliable, secure, and innovative managed IT solutions to help your business thrive in the digital age. Your trusted technology partner.
                    </p>
                </div>

                <div>
                    <h3 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="/" class="hover:text-blue-400 transition-colors text-sm flex items-center gap-2"><span class="text-blue-600">&rarr;</span> Home</a></li>
                        <li><a href="/services" class="hover:text-blue-400 transition-colors text-sm flex items-center gap-2"><span class="text-blue-600">&rarr;</span> Services</a></li>
                        <li><a href="/about" class="hover:text-blue-400 transition-colors text-sm flex items-center gap-2"><span class="text-blue-600">&rarr;</span> About Us</a></li>
                        <li><a href="/contact" class="hover:text-blue-400 transition-colors text-sm flex items-center gap-2"><span class="text-blue-600">&rarr;</span> Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Get In Touch</h3>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <a href="tel:+16784397037" class="hover:text-white transition-colors">(678) 439-7037</a>
                        </li>
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <a href="mailto:support@truebaseit.com" class="hover:text-white transition-colors">support@truebaseit.com</a>
                        </li>
                    </ul>
                </div>

                <!-- <div>
                    <h3 class="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Stay Connected</h3>
                    <p class="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest IT and cybersecurity insights.</p>
                    <form class="flex mb-6" on:submit|preventDefault>
                        <input type="email" placeholder="Email address" class="w-full bg-gray-800 text-sm text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500 rounded-l-md px-4 py-2" required>
                        <button type="submit" class="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors text-sm font-semibold">
                            Subscribe
                        </button>
                    </form>
                </div> -->

            </div>

            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} TrueBase Managed IT Services. All rights reserved.</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</div>
