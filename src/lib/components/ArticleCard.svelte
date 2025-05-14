<script lang="ts">
    type Props = {
        title: string;
        subtitle: string;
        content: string;
        author: string;
        imageSrc: string;
        href?: string;
    };

    let { 
        title, 
        subtitle, 
        content, 
        author, 
        imageSrc,
        href = "#" 
    }: Props = $props();
</script>

<a
    {href}
    class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 flex flex-col divide-y overflow-hidden border-[1px]"
>
    <header class="flex-none">
        <img src={imageSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt={title} />
    </header>
    <article class="flex flex-auto flex-col p-4">
        <div class="flex-none">
            <h2 class="h6">{subtitle}</h2>
            <h3 class="h3">{title}</h3>
        </div>
        <p class="flex-auto opacity-60">
            {content}
        </p>
    </article>
    <footer class="flex flex-none items-center justify-between gap-4 p-4">
        <small class="opacity-60">By {author}</small>
        <small class="opacity-60">On {new Date().toLocaleDateString()}</small>
    </footer>
</a>
