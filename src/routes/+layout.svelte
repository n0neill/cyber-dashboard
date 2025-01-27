<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
	import { DarkMode } from 'flowbite-svelte';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	import UilCloudShield from '~icons/uil/cloud-shield';
	import FluentLaptopShield16Regular from '~icons/fluent/laptop-shield-16-regular'

</script>
<style>
	:root {
		/* --navbar-bg-color: #ffffff;  Light mode navbar background */
		--border-color: #185ce3; /* Light mode navbar border */
		/*--sidebar-bg-color: #253c53; /* Light mode sidebar background */
	}
	.dark-mode-container {
		position: fixed;
		top: 1rem; /* Adjust the top position as needed */
		right: 1rem; /* Adjust the right position as needed */
		z-index: 1000; /* Ensure it's above other content */

	}
  /* Navbar styling */
	.navbar-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100; /* Ensure navbar is above the sidebar */
		border-bottom: 3px solid var(--border-color); /* Solid border */
	}
	/* Sidebar container styling */
	.sidebar-container {
		position: fixed;
		top: 64px; /* Height of the navbar */
		left: 0;
		height: calc(100vh - 64px); /* Full height minus navbar height */
		width: 250px; /* Adjust width as needed */
		background-color: var(--sidebar-bg-color); /* Use a CSS variable for easy theming */
		border-right: 3px solid var(--border-color); /* Bold border */
		overflow-y: auto; /* Add scroll if content overflows */
		z-index: 99; /* Ensure sidebar is below the navbar */
	}
	/* Content container styling */
	.content-container {
		margin-left: 245px; /* Same as sidebar width */
		margin-top: 64px; /* Same as navbar height */
		padding: 1rem; /* Add some padding */
		width: calc(100% - 250px); /* Adjust width to account for sidebar */
		height: calc(100vh - 64px); /* Adjust height to account for navbar */
		overflow-y: auto; /* Add scroll if content overflows */
	}
</style>

<div class="navbar-container">
	<Navbar>
		<NavBrand href="/">
		  <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
		  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CDRT App</span>
		</NavBrand>
		<NavHamburger />
		<NavUl >
		  <NavLi href="/">Home</NavLi>
		  <NavLi href="/">Guides</NavLi>
		  <NavLi class="cursor-pointer">
			Dropdown<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
		  </NavLi>
		  <Dropdown class="w-44 z-20">
			<DropdownItem href="/">Dashboard</DropdownItem>
			<DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
			<DropdownItem href="/">Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/">Sign out</DropdownItem>
		  </Dropdown>
		</NavUl>
	  </Navbar>
</div>

<div class="dark-mode-container"> 
	<DarkMode />
</div>

<!-- Sidebar container -->
<div class="sidebar-container">
<Sidebar>
	<SidebarWrapper>
	  <SidebarGroup>
		<SidebarDropdownWrapper label="Defender">
			<svelte:fragment slot="icon">
				<FluentLaptopShield16Regular class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			</svelte:fragment>
			<SidebarDropdownItem label="Advanced hunting" />
			<SidebarDropdownItem label="Email details" />
			<SidebarDropdownItem label="Export" />
		  </SidebarDropdownWrapper>

		<SidebarDropdownWrapper label="Zscaler">
		  <svelte:fragment slot="icon">
			<UilCloudShield class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
		  </svelte:fragment>
		  <SidebarDropdownItem label="URL Lookup" />
		  <SidebarDropdownItem label="URL Category Update" />
		  <SidebarDropdownItem label="Export" />
		</SidebarDropdownWrapper>
	  </SidebarGroup>
	</SidebarWrapper>
</Sidebar>
</div>

<!-- Content Container -->
<div class="content-container"> 
	{@render children()}
</div>