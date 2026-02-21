<script lang="ts">
    let { project, onPlay } = $props<{
        project: any;
        onPlay: (src: string) => void;
    }>();
</script>

<div class="group relative bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-400/50 transition-all duration-500">
    <div class="relative aspect-video overflow-hidden">
        <img 
            src={project.thumbnail} 
            alt={project.title} 
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <button 
            onclick={() => onPlay(project.audioSrc)}
            class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
            <div class="w-16 h-16 text-yellow-400 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                <span class="text-2xl">▷</span>
            </div>
        </button>
    </div>

    <div class="p-6 backdrop-blur-[2px]">
        <div class="flex justify-between items-start mb-2">
            <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-yellow-400 font-bold">{project.genre}</span>
                <h3 class="text-xl font-bold text-white">{project.title}</h3>
            </div>
            <span class="text-xs font-mono text-zinc-500">{project.year}</span>
        </div>
        <p class="text-sm text-zinc-400 line-clamp-2 font-light leading-relaxed">
            {project.description}
        </p>
        <div class="mt-4 pt-4 border-t border-white/5 flex items-center text-[10px] text-zinc-500 uppercase tracking-widest">
            <span class="mr-2">Role:</span>
            <span class="text-zinc-300">{project.role}</span>
        </div>
    </div>
</div>
