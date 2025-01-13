<script lang="ts">
    const data = [
        {
            title: "Socials",
            links: [
                 {
                    label: "GitHub",
                    href: "href"
                }
                ,{
                    label: "LinkedIn",
                    href: "href"
                },
                {
                    label: "DockerHub",
                    href: "href"
                }
            ]
        },
        {
            title: "University",
            links: [
                {
                    label: "CS140 Worksheets",
                    href: "href"
                },
                  {
                    label: "CS112 Worksheets",
                    href: "href"
                },
                { 
                    label: "CS111 Worksheets",
                    href: "href"
                }
            ]
        }
    ]
</script>

<svelte:head>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="description" content="Anav Chand | Links">
    <title>Anav Chand | Links</title>
</svelte:head>

<img class="rounded-full h-[200px] w-[200px] mx-auto" src="images/anav.jpg" alt="Anav Chand">

<h1 class="text-center text-5xl">Anav Chand</h1>

<p class="text-center">Hey, I am an aspiring DevOps engineer, self-taught web developer, first-year software engineering student, and award-winning peer mentor @ <a class="underline" href="https://usp.ac.fj">USP</a>.
</p>

{#each data as {title, links}}
    <h3 class="text-4xl">{title}</h3>
    <div class="border border-zinc-200 rounded-lg flex flex-col divide-y divide-zinc-200">
        {#each links as {label, href}}
                <a class="p-5" {href}>{label}</a>
        {/each}
    </div>
{/each}