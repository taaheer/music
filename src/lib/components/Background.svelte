<script lang="ts">
  import type { Snippet } from 'svelte';

  // Svelte 5: Use $props() to accept children and optional symbols
  let { 
    children, 
    symbols = ['♩', '♪', '♫', '♬', '♭', '♮', '♯', '𝄞', '𝄢'] 
  } = $props<{ children: Snippet, symbols?: string[] }>();

  // Generate 25 floating notes
  let notes = $state(
    Array.from({ length: 25 }).map(() => ({
      char: symbols[Math.floor(Math.random() * symbols.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 40 - 20,
      opacity: Math.random() * 0.6 + 0.1
    }))
  );
</script>

<div class="relative min-h-screen w-full overflow-hidden bg-[#030303]">
  <!-- Floating Background Layer -->
  <div class="absolute inset-0 z-0 pointer-events-none">
    {#each notes as n}
      <div 
        class="absolute font-serif text-yellow-600 float-note select-none"
        style="
          top: {n.top}%; 
          left: {n.left}%; 
          font-size: {n.size}px; 
          opacity: {n.opacity}; 
          animation-duration: {n.duration}s; 
          animation-delay: {n.delay}s;
        "
      >
        {n.char}
      </div>
    {/each}
  </div>

  <!-- Page Content Layer -->
  <main class="relative z-10">
    {@render children?.()}
  </main>
</div>

<style>
  @keyframes floatDrift {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-200px) rotate(10deg); opacity: 0; }
  }
  
  .float-note { 
    animation: floatDrift infinite linear; 
    will-change: transform, opacity;
  }
</style>
