<script lang="ts">
  import { onMount } from 'svelte';
  import { cleanDefenderData } from '$lib/api/utils';
  import testdata from '$lib/data/testdata.json';

  let cleanedData: any[] = [];

  onMount(() => {
    console.log('Raw JSON Data:', testdata); // Debug: Log raw JSON data
    cleanedData = cleanDefenderData(testdata);
    console.log('Cleaned Data:', cleanedData); // Debug: Log cleaned data
  });
</script>

<div class=content-container>
<h1>Test Defender Data Cleaning</h1>

{#if cleanedData.length > 0}
  <ul>
    {#each cleanedData as email}
      <li>
        <strong>{email.Subject}</strong> - {email.SenderIPv4}
        <p>SHA256 Hashes: {email.SHA256.join(', ')}</p>
        <small>Date: {email.Timestamp}</small>
      </li>
    {/each}
  </ul>
{:else}
  <p>No data to display.</p>
{/if}
</div>