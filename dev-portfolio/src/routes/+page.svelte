<script lang="ts">
  import {
    HeroSection,
    AboutMeSection,
    FocusAreas,
    Projects,
    Progress,
    Navigation
  } from "components";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { focusAreas, projects } = data;
</script>

<Navigation />
<HeroSection />
<AboutMeSection />
<FocusAreas {focusAreas} />
<Projects {projects} />

<Progress {focusAreas} />
