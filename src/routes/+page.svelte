<script lang="ts">
    import {quotes} from '$lib/quotes';
    import photo from '$lib/assets/Taaheer-Labbe.jpg?enhanced'
    import 'player.style/tailwind-audio';
    import music from '$lib/assets/Reject.wav'
    import Background from '$lib/components/Background.svelte'

    import { slide } from 'svelte/transition';


    let randomQuote = $state("");

    const lastIndexStr = sessionStorage.getItem('lastQuoteIndex');
    const lastIndex = lastIndexStr ? parseInt(lastIndexStr) : -1;

    let newIndex: number;
    do{
        newIndex = Math.floor(Math.random() * quotes.length)
    } while (newIndex === lastIndex && quotes.length > 1);

    sessionStorage.setItem('lastQuoteIndex', newIndex.toString());
    randomQuote = quotes[newIndex]
    
  const notes = [
    { icon: '♩', file: 'Close-Grand-40.wav' },
    { icon: '♪', file: 'Close-Grand-50.wav' },
    { icon: '♫', file: 'Close-Grand-60.wav' },
    { icon: '♬', file: 'Close-Grand-70.wav' }
  ];

    function playNote(filename: string) {
    // Note: Place your .wav files in the /static folder
    const audio = new Audio(`/${filename}`);
    audio.currentTime = 0; // Reset if clicked rapidly
    audio.play().catch(err => console.error("Playback blocked:", err));
  }


    const socials = [
        { href: "mailto:taaheerlabbe@gmail.com", icon: "📧", label: "Email", value: "taaheerlabbe@gmail.com" },
        { href: "https://linkedin.com/in/taaheer-labbe", icon: "💼", label: "LinkedIn", value: "taaheer-labbe" },
        { href: "https://www.youtube.com/@TaaheerLabbe", icon: "🎥", label: "YouTube", value: "@TaaheerLabbe" },
        { href: "https://taaheer.github.io", icon: "🎼", label: "Website", value: "taaheer.github.io" }
    ];

  let isPlayerVisible = $state(false);
  let audioPlayer = $state<HTMLAudioElement>();

  function handleListen() {
    isPlayerVisible = true;
    // Timeout ensures the element exists in DOM before calling play()
    setTimeout(() => {
      audioPlayer?.play();
    }, 50);
  }

  function handleClose() {
    audioPlayer?.pause();
    isPlayerVisible = false;
  }

</script>

{#if isPlayerVisible}
  <div 
    transition:slide={{ axis: 'y', duration: 400 }}
    class="fixed bottom-0 left-0 w-full z-50 bg-black/90 border-t border-white/10 backdrop-blur-md"
  >
    <div class="relative max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] py-[clamp(0.5rem,2vw,1.5rem)]">
      <!-- Close Button -->
      <button 
        onclick={handleClose}
        class="absolute -top-10 right-4 p-2 bg-yellow-300 rounded-full text-black hover:bg-white transition-colors shadow-lg"
        aria-label="Close Player"
      >
        <svg xmlns="http://www.w3.org" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <media-theme-tailwind-audio
        style="--media-primary-color: transparent; --media-secondary-color: transparent; --media-accent-color: oklch(85.2% 0.199 91.936); width: 100%;"
      >
        <audio
          bind:this={audioPlayer}
          slot="media"
        src="{music}"
          playsinline
          crossorigin="anonymous"
        ></audio>
      </media-theme-tailwind-audio>
    </div>
  </div>

{/if}







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
                    onclick={handleListen}
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
                        Music is more than just beat and harmony. Just like Writing and Acting, it's about telling a story—a story that words can't <span class="text-white font-normal">describe</span>, but with music, you can feel it.
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
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[clamp(0.7rem,1.5vw,0.8rem)] font-mono mb-8 uppercase tracking-widest">
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

        <!-- Fluid Contact Grid: Gap scales from 0.75rem to 1.5rem -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(0.75rem,2vw,1.5rem)] mb-16">
            {#each socials as item}
            <a href={item.href} target="_blank" class="flex items-center justify-between p-[clamp(1rem,3vw,1.5rem)] bg-zinc-900/50 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all group">
                <div class="flex items-center gap-4">
                    <span class="text-[clamp(1.25rem,2.5vw,1.75rem)]">{item.icon}</span>
                    <span class="font-bold tracking-tight text-[clamp(0.9rem,2vw,1.1rem)]">{item.label}</span>
                </div>
                <span class="text-[clamp(0.6rem,1.5vw,0.75rem)] opacity-50 group-hover:opacity-100 italic truncate ml-4">
                    {item.value}
                </span>
            </a>
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


<style>
    /* Optional: Smooth font smoothing for dark backgrounds */
    :global(body) {
        -webkit-font-smoothing: antialiased;
    }
</style>
