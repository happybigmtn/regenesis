<script lang="ts">
  import { SectionHeadline } from "components";
  import type { PortableTextBlock } from "@portabletext/types";

  interface Project {
    codename: string;
    objective: string;
    slug: {
      current: string;
    };
    imageUrl: string;
    dateStarted: string;
    objectives: PortableTextBlock[];
    stack: string[];
  }

  interface ProjectsProps {
    projects: Project[];
  }

  let { projects }: ProjectsProps = $props();
</script>

<section class="projects default-margin mt-l">
  <div class="content-container default-margin">
    <SectionHeadline sectionName="projects">projects</SectionHeadline>
    <div class="projects-grid">
      {#each projects as project}
        <article class="project-card">
          {#if project.imageUrl}
            <img
              class="project-image"
              src={project.imageUrl}
              alt={project.codename}
            />
          {/if}
          <div class="project-content">
            <h3 class="project-title">{project.codename}</h3>
            <p class="project-objective">{project.objective}</p>
            <div class="project-meta">
              <span class="project-date"
                >📅 Started: {new Date(
                  project.dateStarted
                ).toLocaleDateString()}</span
              >
              <div class="project-stack">
                {#each project.stack as tech}
                  <span class="tech-tag">{tech}</span>
                {/each}
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .content-container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .project-card {
    background: var(--color-background-secondary);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-title {
    font-size: var(--font-size-large);
    margin: 0 0 0.5rem 0;
  }

  .project-objective {
    font-size: var(--font-size-base);
    margin: 0 0 1rem 0;
    color: var(--color-text-secondary);
  }

  .project-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: var(--font-size-small);
  }

  .project-date {
    color: var(--color-text-secondary);
  }

  .project-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: var(--color-accent);
    color: var(--color-text);
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: var(--font-size-small);
  }
</style>
