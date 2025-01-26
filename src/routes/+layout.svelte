<script lang="ts">
	import '../app.css';
	let { children } = $props();

    import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

</script>

<Sidebar>
	<SidebarWrapper>
	  <SidebarGroup>
		<SidebarDropdownWrapper label="Defender">
			<svelte:fragment slot="icon">
			  <CartSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			</svelte:fragment>
			<SidebarDropdownItem label="Advanced hunting" />
			<SidebarDropdownItem label="Email details" />
			<SidebarDropdownItem label="Export" />
		  </SidebarDropdownWrapper>

		<SidebarDropdownWrapper label="Zscaler">
		  <svelte:fragment slot="icon">
			<CartSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		  <SidebarDropdownItem label="URL Lookup" />
		  <SidebarDropdownItem label="URL Category Update" />
		  <SidebarDropdownItem label="Export" />
		</SidebarDropdownWrapper>
	  </SidebarGroup>
	</SidebarWrapper>
</Sidebar>

{@render children()}