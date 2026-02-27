<script lang="ts">
    import { slide } from "svelte/transition";
    import 'player.style/tailwind-audio';

    let {isVisible = $bindable(false), src} = $props<{isVisible: Boolean; src: string;}>();

    let audioPlayer = $state<HTMLAudioElement>();

    $effect(() => {
        if (isVisible && audioPlayer && src) {
            audioPlayer.load(); 
            audioPlayer.play().catch(err => console.error("Playback blocked:", err));
        } else if (!isVisible && audioPlayer) {
            audioPlayer.pause();
        }
    });

    function close(){
        isVisible = false;
    }
</script>

{#if isVisible}
    <div transition:slide={{axis: 'y', duration: 400}} class="fixed bottom-0 left-0 w-full z-50 bg-black/90 border-t border-white/10 backdrop-blur-md">
        <div class="relative max-w-7xl mx-auto px-6 py-4">
            <button onclick={close} class="absolute -top-10 right-4 p-2 bg-yellow-300 rounded-full text-black hover:bg-white transition-colors shadow-lg" aria-label="Close Player">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <media-theme-tailwind-audio style="--media-primary-color: transparent; --media-secondary-color: transparent; --media-accent-color: oklch(85.2% 0.199 91.936); width: 100%;">
                <audio
                    bind:this={audioPlayer}
                    slot="media"
                    {src}
                    playsinline
                    crossorigin="anonymous"
                    ></audio>
            </media-theme-tailwind-audio>
        </div>
    </div>
{/if}
