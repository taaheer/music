<script lang="ts">
    import {quotes} from '$lib/quotes';
    import {getRandomQuote} from '$lib/utils/quotes'
    import photo from '$lib/assets/Taaheer-Labbe.jpg?enhanced'
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import { socials } from '$lib/constants/socials';
    import SocialLinks from '$lib/components/SocialLinks.svelte';
    import music from '$lib/assets/Reject.wav'
    import Background from '$lib/components/Background.svelte'

    import note40 from '$lib/assets/Close-Grand-40.wav';
    import note50 from '$lib/assets/Close-Grand-50.wav';
    import note60 from '$lib/assets/Close-Grand-60.wav';
    import note70 from '$lib/assets/Close-Grand-70.wav';

    const notes = [
        { icon: '♩', file: note40 },
        { icon: '♪', file: note50 },
        { icon: '♫', file: note60 },
        { icon: '♬', file: note70 }
    ];

    let randomQuote = $state("");
    let isPlayerVisible = $state(false);


    $effect(() => {
        randomQuote = getRandomQuote(quotes);
    })
    

    function playNote(filename: string) {
    // Note: Place your .wav files in the /static folder
    const audio = new Audio(filename);
    audio.currentTime = 0; // Reset if clicked rapidly
    audio.play().catch(err => console.error("Playback blocked:", err));
  }



</script>

<AudioPlayer bind:isVisible={isPlayerVisible} src={music}/>

<header class="relative overflow-hidden bg-black">
<Background>
    <section class="relative mx-auto w-full h-screen flex flex-col items-center justify-center px-5">
        <div class="mx-auto max-w-4xl text-center">    
            <!-- Musical Decoration -->
        <span class="text-[clamp(1.5rem,5vw,3.5rem)] mb-4 flex justify-around text-yellow-400 space-x-[clamp(0.5rem,2vw,2rem)]">
        {#each notes as { icon, file }}
            <button 
            type="button"
            onclick={() => playNote(file)}
            class="inline-block transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer focus:outline-none"
            >
            {icon}
            </button>
        {/each}
        </span>

            <h1 class="mb-6 pb-2 text-[clamp(2.25rem,6vw,5rem)] font-extrabold md:text-7xl tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 leading-[1.1]">
                “{randomQuote}”
            </h1>
            
            <p class="text-gray-400 mb-10 max-w-2xl mx-auto text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed font-light italic">
                &#x1D11E; Resonance of wisdom in every note.&#119074; 
            </p>
            <div>
                <!-- Update link to button to prevent page jump and trigger handleListen -->
                <button 
                    onclick={() => isPlayerVisible = true}
                    class="group relative inline-flex items-center gap-3 rounded-full bg-yellow-300 px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.75rem,1.5vw,1rem)] text-center font-bold text-black transition-all hover:bg-white hover:scale-105 active:scale-95"
                >
                    <span class="text-2xl leading-none group-hover:animate-ping">&#x266B;</span>
                    <span class="text-[clamp(0.875rem,1.2vw,1.125rem)]">Listen Now</span>
                </button>
            </div>            
        </div>
    </section>
</Background>
</header>

<section id="about" class="relative bg-[#0a0a0a] py-[clamp(4rem,8vw,8rem)] text-white overflow-hidden">

    <div class="relative mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">
        <!-- Visual Column -->
        <div class="relative group">
            <div class="relative bg-black border border-white/10 p-[clamp(1rem,3vw,2rem)] rounded-2xl aspect-square flex flex-col items-center justify-center">
                <enhanced:img src={photo} class="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Taaheer Labbe"/>
            </div>
        </div>

        <!-- Content Column -->
        <div class="flex flex-col gap-[clamp(1rem,3vw,2rem)]">
            <div class="flex items-center gap-[clamp(0.5rem,2vw,1rem)] text-yellow-300">
                <span class="text-[clamp(1.25rem,3vw,2rem)]">&#x1D106;</span> <!-- Left Repeat Sign -->
                <h2 class="text-[clamp(1.875rem,5vw,3rem)] font-bold tracking-tight">Taaheer Labbe</h2>
                <span class="text-[clamp(1.25rem,3vw,2rem)]">&#x1D107;</span> <!-- Right Repeat Sign -->
            </div>

            <!-- Double Barline Dividers for text structure -->
            <div class="space-y-[clamp(1rem,2vw,1.5rem)] text-gray-300 text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed font-light">
                <p class="flex items-start">
                    <span class="text-yellow-300/60 mr-3 text-[clamp(1.1rem,2vw,1.4rem)] mt-1">&#x1D101;</span>
                    <span>
                        Writing may define a story, Acting might <span class="text-white font-normal">show</span> the emotions, but without music, it will be just random noise.
                    </span>
                </p>
                <p class="flex items-start">
                    <span class="text-yellow-300/60 mr-3 text-[clamp(1.1rem,2vw,1.4rem)] mt-1">&#x1D101;</span>
                    <span>
                        Music is more than just beat and harmony. Just like Writing and Acting, it's about telling a story, a story that words can't <span class="text-white font-normal">describe</span>, but with music, you can feel it.
                    </span>
                </p>
            </div>

        </div>
    </div>
</section>


<!-- Fluid Vertical Padding: py-[clamp(4rem,10vw,8rem)] -->
<section id="contact-session" class="relative bg-black py-[clamp(4rem,10vw,8rem)] text-white border-t border-white/5">
<Background>
    <div class="relative mx-auto max-w-4xl px-6 text-center">
        <!-- Play Status -->
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[clamp(0.7rem,1.5vw,0.8rem)] font-mono mb-8 uppercase tracking-widest backdrop-blur-[2px]">
            <span class="text-[clamp(0.8rem,2vw,1rem)]">&#x23F5;</span> 
            Ready to Collaborate
        </div>

        <!-- Fluid Large Heading: Min 2.5rem, Max 5rem -->
        <h2 class="text-[clamp(2.5rem,8vw,5rem)] font-black mb-6 italic tracking-tighter leading-[0.9]">
            Just send a message.
        </h2>
        
        <p class="text-gray-400 text-[clamp(1rem,2vw,1.25rem)] mb-12 max-w-2xl mx-auto font-light">
            Ready to start a new project? Reach out through any of my channels below to discuss production, mixing, or collaboration.
        </p>


        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each socials as social}
            <SocialLinks {...social} />
        {/each}
        </div>
        

        <!-- Footer Decoration -->
        <div class="flex flex-col items-center gap-4">
            <div class="w-px h-[clamp(3rem,8vw,5rem)] bg-linear-to-b from-yellow-400 to-transparent"></div>
            <span class="text-[clamp(0.6rem,1.5vw,0.7rem)] uppercase tracking-[0.5em] text-zinc-600">Fine</span>
        </div>
    </div>
</Background>
</section>


