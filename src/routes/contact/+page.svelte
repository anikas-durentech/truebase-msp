<script>
    import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    import { circOut } from 'svelte/easing';

    let isLoaded = false;
    let isSubmitting = false;
    let isSent = false;

    onMount(() => {
        isLoaded = true;
    });

    /**
     * @param {SubmitEvent} event
     */
    async function handleSubmit(event) {
        event.preventDefault();
        isSubmitting = true;

        if (!(event.target instanceof HTMLFormElement)) return;

        const formData = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                isSent = true;
            } else {
                const data = await response.json();
                alert(data.errors ? data.errors.map((/** @type {{ message: any; }} */ e) => e.message).join(", ") : "Submission failed. Please try again.");
            }
        } catch (error) {
            alert("There was an error submitting your form. Please try again.");
        } finally {
            isSubmitting = false;
        }
    }
</script>

<svelte:head>
    <title>Contact Us | TrueBase Managed IT Services</title>
    <meta name="description" content="Get in touch with TrueBase for reliable managed IT services and cybersecurity solutions." />
</svelte:head>

<section class="py-20 bg-gray-50 min-h-screen overflow-hidden">
    {#if isLoaded}
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="text-center mb-16">
                <h1 
                    class="font-heading text-4xl md:text-5xl font-bold text-blue-900 mb-4"
                    in:fly={{ y: 30, duration: 800, delay: 100, easing: circOut }}
                >
                    Get in Touch
                </h1>
                <p 
                    class="font-sans text-xl text-gray-600 max-w-2xl mx-auto"
                    in:fly={{ y: 30, duration: 800, delay: 200, easing: circOut }}
                >
                    Ready to secure and optimize your IT infrastructure? Fill out the form below or reach out to us directly.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                
                <div 
                    class="p-8 md:p-12 min-h-125 flex flex-col justify-center"
                    in:fly={{ x: -50, duration: 800, delay: 300, easing: circOut }}
                >
                    {#if isSent}
                        <div in:fade={{ duration: 400 }} class="text-center">
                            <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 class="font-heading text-3xl font-bold text-blue-900 mb-4">Message Sent!</h2>
                            <p class="text-gray-600 text-lg">Thank you for reaching out. We've received your message and will get back to you shortly.</p>
                        </div>
                    {:else}
                        <h2 class="font-heading text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                        
                        <form 
                            on:submit={handleSubmit} 
                            action="https://formspree.io/f/meerzave" 
                            method="POST" 
                            class="space-y-6"
                        >
                            <div>
                                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John Doe">
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="john@example.com">
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" placeholder="How can we help your business?"></textarea>
                            </div>

                            <div class="group">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-md group-hover:-translate-y-1 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    {/if}
                </div>

                <div 
                    class="bg-blue-900 text-white p-8 md:p-12 flex flex-col justify-center"
                    in:fly={{ x: 50, duration: 800, delay: 400, easing: circOut }}
                >
                    <h2 class="font-heading text-2xl font-bold mb-8 text-blue-100">Contact Information</h2>
                    
                    <div class="space-y-8">
                        <div class="flex items-start gap-4" in:fly={{ x: 20, opacity: 0, duration: 600, delay: 600, easing: circOut }}>
                            <div class="bg-blue-800 p-3 rounded-full text-blue-300 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-blue-200 text-sm tracking-wider uppercase mb-1">Phone</h3>
                                <a href="tel:+1234567890" class="text-xl font-bold hover:text-blue-300 transition-colors">+1 (234) 567-890</a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4" in:fly={{ x: 20, opacity: 0, duration: 600, delay: 700, easing: circOut }}>
                            <div class="bg-blue-800 p-3 rounded-full text-blue-300 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div class="min-w-0">
                                <h3 class="font-semibold text-blue-200 text-sm tracking-wider uppercase mb-1">Email</h3>
                                <a href="mailto:support@truebaseit.com" target="_blank" rel="noopener noreferrer" class="text-base sm:text-lg md:text-xl font-bold hover:text-blue-300 transition-colors">
                                    support@truebaseit.com
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4" in:fly={{ x: 20, opacity: 0, duration: 600, delay: 800, easing: circOut }}>
                            <div class="bg-blue-800 p-3 rounded-full text-blue-300 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-blue-200 text-sm tracking-wider uppercase mb-1">Business Hours</h3>
                                <p class="text-lg">Monday - Friday<br/>8:00 AM - 6:00 PM EST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</section>