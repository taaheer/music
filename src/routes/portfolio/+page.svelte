<script lang="ts">
    import Background from '$lib/components/Background.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import AudioPlayer from '$lib/components/AudioPlayer.svelte';
    import { projects } from '$lib/constants/projects';

    let activeFilter = $state("All");
    let currentAudio = $state("");
    let isPlayerVisible = $state(false);

    const genres = $derived([...new Set(projects.map(p => p.genre))]);

    const filters = $derived(["All", ...genres]);

    // Filtered list based on state
    let filteredProjects = $derived(
        activeFilter === "All" 
            ? projects 
            : projects.filter(p => p.genre.includes(activeFilter))
    );

    function handlePlay(src: string) {
        currentAudio = src;
        isPlayerVisible = true;
    }
</script>

<div class="bg-black min-h-screen text-white">
    <AudioPlayer bind:isVisible={isPlayerVisible} src={currentAudio} />

    <Background>
    <header class="py-24 border-b border-white/5">
            <div class="max-w-6xl mx-auto px-6">
                <h1 class="text-[clamp(3rem,10vw,7rem)] font-black italic tracking-tighter leading-[0.8] mb-8">
                    The <span class="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">Showcase.</span>
                </h1>

                <div class="flex flex-wrap gap-4 mt-12">
                    {#each filters as filter}
                        <button 
                            onclick={() => activeFilter = filter}
                            class="px-6 py-2 rounded-full border text-xs tracking-widest uppercase transition-all
                            {activeFilter === filter ? 'bg-yellow-400 border-yellow-400 text-black font-bold' : 'border-white/10 text-zinc-500 hover:border-white/40 backdrop-blur-[2px]'}"
                        >
                            {filter}
                        </button>
                    {/each}
                </div>
            </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-20 backdrop-blur-[2px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each filteredProjects as project (project.title)}
                <ProjectCard {project} onPlay={handlePlay} />
            {/each}
        </div>
    </main>
    
    
    <section class="py-32 text-center border-t border-white/5">
        <h2 class="text-3xl font-bold mb-6">Inspired by what you hear?</h2>
        <a href="/contact" class="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-400 transition-colors">
            Start a New Project
        </a>
    </section>
</Background>
</div>
