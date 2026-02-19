<script lang="ts">
    import {quotes} from '$lib/quotes';
    import { fade } from 'svelte/transition';
    import photo from '$lib/assets/Taaheer-Labbe.jpg?enhanced'
    import { resolve } from '$app/paths';

    let randomQuote = $state("");

    const lastIndexStr = sessionStorage.getItem('lastQuoteIndex');
    const lastIndex = lastIndexStr ? parseInt(lastIndexStr) : -1;

    let newIndex: number;
    do{
        newIndex = Math.floor(Math.random() * quotes.length)
    } while (newIndex === lastIndex && quotes.length > 1);

    sessionStorage.setItem('lastQuoteIndex', newIndex.toString());
    randomQuote = quotes[newIndex]

</script>

<header class="relative overflow-hidden bg-black">
    <!-- Pulsing Background Glow (Rhythmic) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse"></div>

    <section class="relative mx-auto w-full h-screen flex flex-col items-center justify-center px-5">
        <div class="mx-auto max-w-4xl text-center">    
            <!-- Musical Decoration -->
            <span class="text-3xl mb-4 block text-yellow-300/50">♩ &nbsp; ♪ &nbsp; ♫ &nbsp; ♬</span>
            
            <h1 class="mb-6 pb-2 text-4xl font-extrabold md:text-7xl tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500">
                “{randomQuote}”
            </h1>
            
            <p class="text-gray-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light italic">
                &#x1D11E; Resonance of wisdom in every note.&#119074; 
            </p>

            <div>
                <a href="portfolio" class="group relative inline-flex items-center gap-3 rounded-full bg-yellow-300 px-10 py-4 text-center font-bold text-black transition-all hover:bg-white hover:scale-105 active:scale-95">
                    <!-- Unicode Eighth Note -->
                    <span class="text-2xl leading-none group-hover:animate-ping">&#x266B;</span>
                    <span>Listen Now</span>
                </a>
            </div>
        </div>
    </section>
</header>

<section id="about" class="relative bg-[#0a0a0a] py-24 text-white overflow-hidden">

    <div class="relative mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <!-- Visual Column -->
        <div class="relative group">
            <div class="relative bg-black border border-white/10 p-8 rounded-2xl aspect-square flex flex-col items-center justify-center">
                <enhanced:img src={photo} class="rounded-2xl" alt="Taaheer Labbe"/>
            </div>
        </div>

        <!-- Content Column -->
        <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4 text-yellow-300">
                <span class="text-2xl">&#x1D106;</span> <!-- Left Repeat Sign -->
                <h2 class="text-3xl md:text-4xl font-bold tracking-tight">Taaheer Labbe</h2>
                <span class="text-2xl">&#x1D107;</span> <!-- Right Repeat Sign -->
            </div>

            <!-- Double Barline Dividers for text structure -->
            <div class="space-y-4 text-gray-300 text-lg leading-relaxed font-light">
                <p>
                    <span class="text-yellow-300/60 mr-2">&#x1D101;</span> <!-- Double Barline -->
                    Writing may define a story, Acting might shows the emotions, but without music, it will be just random noise.
                </p>
                <p>
                    <span class="text-yellow-300/60 mr-2">&#x1D101;</span>
                    Music is more than just beat and harmony, Just like Writing and Acting, Its about telling a story, story that words can't descript, but with music can you feel it.
                </p>
            </div>
        </div>
    </div>
</section>


<section id="contact-session" class="relative bg-black py-24 text-white border-t border-white/5">
    <div class="relative mx-auto max-w-4xl px-6 text-center">
        <!-- Play Status -->
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-mono mb-8 uppercase tracking-widest">
            <span class="text-sm">&#x23F5;</span> <!-- Play Symbol -->
            Ready to Collaborate
        </div>

        <h2 class="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">Just send a message.</h2>
        <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Ready to start a new project? Reach out through any of my channels below to discuss production, mixing, or collaboration.
        </p>

        <!-- The Contact Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <!-- Email -->
            <a href="mailto:taaheerlabbe@gmail.com" class="flex items-center justify-between p-6 bg-zinc-900/50 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all group">
                <div class="flex items-center gap-4">
                    <span class="text-2xl">&#x1F4E7;</span>
                    <span class="font-bold tracking-tight">Email</span>
                </div>
                <span class="text-xs opacity-50 group-hover:opacity-100 italic">taaheerlabbe@gmail.com</span>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/taaheer-labbe" target="_blank" class="flex items-center justify-between p-6 bg-zinc-900/50 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all group">
                <div class="flex items-center gap-4">
                    <span class="text-2xl" title="LinkedIn">&#x1F4BC;</span>
                    <span class="font-bold tracking-tight">LinkedIn</span>
                </div>
                <span class="text-xs opacity-50 group-hover:opacity-100 italic">taaheer-labbe</span>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@TaaheerLabbe" target="_blank" class="flex items-center justify-between p-6 bg-zinc-900/50 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all group">
                <div class="flex items-center gap-4">
                    <span class="text-2xl" title="YouTube">&#x1F3A5;</span>
                    <span class="font-bold tracking-tight">YouTube</span>
                </div>
                <span class="text-xs opacity-50 group-hover:opacity-100 italic">@TaaheerLabb</span>
            </a>

            <!-- Personal Website -->
            <a href="{resolve('/')}" target="_blank" class="flex items-center justify-between p-6 bg-zinc-900/50 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all group">
                <div class="flex items-center gap-4">
                    <span class="text-2xl" title="Website">&#x1F3BC;</span> <!-- Musical Score Symbol -->
                    <span class="font-bold tracking-tight">Website</span>
                </div>
                <span class="text-xs opacity-50 group-hover:opacity-100 italic">taaheer.github.io</span>
            </a>
        </div>

        <div class="flex flex-col items-center gap-4">
            <div class="w-px h-20 bg-linear-to-b from-yellow-400 to-transparent"></div>
            <span class="text-xs uppercase tracking-[0.5em] text-zinc-600">Fine</span>
        </div>
    </div>
</section>


<style>
    /* Optional: Smooth font smoothing for dark backgrounds */
    :global(body) {
        -webkit-font-smoothing: antialiased;
    }
</style>
