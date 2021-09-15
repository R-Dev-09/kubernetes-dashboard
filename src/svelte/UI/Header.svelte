<script lang=ts>
  export let label: string;
</script>

<div class=header>
  <span>{label}</span>
  <!-- <Search/> -->
</div>

<style lang=scss>
  .header {
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    -webkit-app-region: drag;

    span {
      line-height: 2rem;
    }
  }
</style>