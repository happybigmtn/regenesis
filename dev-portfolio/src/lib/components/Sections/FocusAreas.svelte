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

  interface FocusAreasProps {
    focusAreas: FocusArea[];
  }

  let { focusAreas }: FocusAreasProps = $props();

  const getStatusEmoji = (status: Resource["status"]) => {
    const statusMap = {
      not_started: "🔴",
      in_progress: "🟡",
      completed: "🟢",
    } as const;
    return statusMap[status];
  };
</script>

<section class="focus-areas default-margin mt-l">
  <div class="content-container default-margin">
    <SectionHeadline sectionName="focus-areas">learning</SectionHeadline>
    <div class="focus-areas-container">
      {#each focusAreas as area}
        <div class="focus-area">
          <h3 class="category">{area.category}</h3>
          <p class="description">{area.description}</p>

          {#if area.resources?.length > 0}
            <div class="resources">
              <h4>Resources</h4>
              <ul class="resources-list">
                {#each area.resources.filter((r) => r.status !== "completed") as resource}
                  <li class="resource">
                    <div class="resource-header">
                      <span class="resource-title">
                        {getStatusEmoji(resource.status)}
                        {resource.title}
                      </span>
                      {#if resource.url}
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="resource-link"
                        >
                          🔗
                        </a>
                      {/if}
                    </div>

                    {#if resource.description}
                      <p class="resource-description">{resource.description}</p>
                    {/if}

                    <div class="resource-meta">
                      {#if resource.instructor?.length}
                        <span class="instructor"
                          >👨‍🏫 {resource.instructor.join(", ")}</span
                        >
                      {/if}
                      {#if resource.rating}
                        <span class="rating">⭐ {resource.rating}/10</span>
                      {/if}
                      {#if resource.startDate}
                        <span class="dates">
                          📅 {resource.startDate}
                          {#if resource.endDate}
                            - {resource.endDate}
                          {/if}
                        </span>
                      {/if}
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
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

  .focus-areas-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .focus-area {
    background: var(--color-background-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .category {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-text-primary);
  }

  .description {
    color: var(--color-text-secondary);
    margin-bottom: 1.5rem;
  }

  .resources h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
  }

  .resources-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .resource {
    background: var(--color-background-primary);
    border-radius: 6px;
    padding: 1rem;
  }

  .resource-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .resource-title {
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .resource-link {
    text-decoration: none;
    color: var(--color-text-primary);
  }

  .resource-description {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
  }

  .resource-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }

  .instructor,
  .rating,
  .dates {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
</style>
