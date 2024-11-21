<script lang="ts">
  import image from "assets/window-gray.jpg";
</script>

<section class="about-me mt-l">
  <div class="content-container default-margin">
    <img
      class="image"
      src={image}
      alt="About Me"
      style="max-width: 100%; height: auto; display: block; object-fit: cover; object-position: center;"
    />
    <div class="text">
      <p style="text-align: justify">
        over the first half of 2024, a lifetime of bad habits blew up, as i
        gambled away the trust that it took 20 years to build and lost millions.
        i exiled myself in shame, having lost friends, family, wealth, and
        reputation. and for that, i am infinitely grateful, because it allowed
        me to start becoming the person i’ve always wanted to be.
      </p>

      <p style="text-align: justify">
        what would you do if one day you woke up and realized you had no credit
        as a human being? that it didn’t matter where you went to school or
        where you worked, or what you did? that you suddenly became nobody, and
        couldn’t reference your past, because it had been completely erased? how
        quickly could you become “somebody” again?
      </p>
      <p style="text-align: justify">
        somewhere along the way, expectation leads us astray. gambling is the
        product of lies we tell ourselves, a false bridge between reality and
        perception. the thought that i was nearly 40 and had little resources,
        no hard skills, no job prospects, and nobody to lean on is terrifying.
        if i am to survive, it will be from the product of my creations, not the
        facade of my stories. want everything, have nothing; want nothing, have
        everything.
      </p>
      <p style="text-align: justify">
        i often think about those whose trust i betrayed. it is so painful that
        i can’t communicate the full depths of my heart to all those who
        believed in me. and i don’t expect to regain their trust overnight,
        because if i were in their shoes, i wouldn’t trust me either. but this I
        can say for sure: i am getting healthier, stronger, wiser, with each
        passing day. on the redemption arc, the paths ahead are infinite
      </p>
      <p style="text-align: justify">
        nothing is real if we can see the results in a day. because that’s not
        you, that’s the machine. real progress is the kind we can’t see,
        emanating from the non-negotiable routines we implement into our lives.
        enterpreneur's mind, athelete's body, artist's soul.
      </p>
      <p style="text-align: justify">let’s get it.</p>
    </div>
  </div>
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 3%;
    margin-top: 32px;
  }

  .image {
    width: 48.5%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 48.5%;
    text-align: left;
  }

  @media (max-width: 1068px) {
    .image {
      object-position: left center !important;
    }
  }

  @media (max-width: 600px) {
    .content-container {
      flex-direction: column;
      gap: 2rem;
    }

    .text,
    .image {
      width: 100%;
      max-width: 100%;
    }

    .image {
      height: auto;
    }

    p {
      max-width: 100%;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
  }

  p {
    margin-bottom: 1rem;
  }
</style>
