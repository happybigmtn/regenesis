<script lang="ts">
  import { SectionHeadline } from "components";

  interface Resource {
    title: string;
    description?: string;
    instructor?: string[];
    url?: string;
    startDate?: string;
    endDate?: string;
    status: "not_started" | "in_progress" | "completed";
    review?: string;
    rating?: number;
  }

  interface FocusArea {
    category: string;
    description: string;
    resources: Resource[];
  }

  interface ProgressProps {
    focusAreas: FocusArea[];
  }

  let { focusAreas }: ProgressProps = $props();

  const completedResources = $derived(
    focusAreas
      ?.flatMap(
        (area) =>
          area.resources
            ?.filter((resource) => resource.status === "completed")
            ?.map((resource) => ({
              ...resource,
              category: area.category,
            })) ?? []
      )
      ?.sort((a, b) => {
        if (!a.endDate || !b.endDate) return 0;
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
      }) ?? []
  );
</script>

<section class="progress default-margin mt-l">
  <div class="content-container default-margin">
    <SectionHeadline sectionName="progress">progress</SectionHeadline>
    <div class="completed-resources">
      {#each completedResources as resource}
        <div class="resource-card">
          <div class="resource-header">
            <span class="category-tag">{resource.category}</span>
            <span class="completion-date">
              {#if resource.endDate}
                Completed: {new Date(resource.endDate).toLocaleDateString()}
              {/if}
            </span>
          </div>
          <h3 class="resource-title">{resource.title}</h3>
          {#if resource.description}
            <p class="resource-description">{resource.description}</p>
          {/if}
          <div class="resource-meta">
            {#if resource.instructor?.length}
              <span class="instructor">👨‍🏫 {resource.instructor.join(", ")}</span
              >
            {/if}
            {#if resource.rating}
              <span class="rating">⭐ {resource.rating}/10</span>
            {/if}
            {#if resource.url}
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                class="resource-link"
              >
                🔗 View Resource
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .content-container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .completed-resources {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .resource-card {
    background: var(--color-background-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .resource-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .category-tag {
    background: var(--color-background-primary);
    color: var(--color-text-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.8rem;
  }

  .completion-date {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
  }

  .resource-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-text-primary);
  }

  .resource-description {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }

  .resource-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }

  .instructor,
  .rating {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }

  .resource-link {
    text-decoration: none;
    color: var(--color-text-primary);
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
</style>
