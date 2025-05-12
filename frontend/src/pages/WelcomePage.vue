<template>
	<div class="flex flex-col min-h-screen bg-gray-50">
	  <!-- Header with company logo -->
	  <header class="bg-white shadow">
		<div class="container mx-auto px-4 py-4 flex justify-between items-center">
		  <div class="flex items-center">
			<div>
				<img src="https://phamos.eu/files/phamos-sun.png" alt="Phamos Logo" class="h-9 w-9  rounded-full">
			</div>
			<h1 class="ml-4 text-xl font-semibold text-gray-800">Employee Self Service</h1>
		  </div>
		  <div class="flex items-center">
			<span class="mr-4 text-gray-600">{{ currentUser.name }}</span>
			<Button 
			  icon
			  variant="ghost"
			  @click="toggleUserMenu"
			>
			  <Avatar
				:label="currentUser.name"
				size="md"
			  />
			</Button>
		  </div>
		</div>
	  </header>
  
	  <!-- Main content -->
	  <main class="flex-grow container mx-auto px-4 py-8">
		<!-- Welcome banner -->
		<div class="bg-[#2490EF] text-white rounded-lg shadow-md p-6 mb-8">
		  <h2 class="text-2xl font-bold mb-2">Welcome to Phamos Employee Self Service</h2>
		  <p class="text-lg">Your one-stop portal for all employee services and information</p>
		</div>
  
		<!-- Service categories -->
		<h3 class="text-xl font-semibold mb-4 text-gray-800">Services</h3>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		  <Card 
			v-for="(service, index) in services" 
			:key="index"
			class="p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 cursor-pointer border border-gray-100 hover:border-[#2490EF] hover:shadow-md"
			@click="$router.push(service.route)"
		  >
			<div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
			  <FeatherIcon :name="service.icon" class="w-6 h-6 text-[#2490EF]" />
			</div>
			<h4 class="text-lg font-medium mb-2 text-gray-800">{{ service.title }}</h4>
			<p class="text-gray-600 text-sm">{{ service.description }}</p>
		  </Card>
		</div>
	  </main>
  
	  <!-- Footer -->
	  <footer class="bg-gray-800 text-white py-6">
		<div class="container mx-auto px-4">
		  <div class="flex flex-col md:flex-row justify-between items-center">
			<div class="mb-4 md:mb-0">
			  <div class="text-lg font-bold mb-2">Phamos GmbH</div>
			  <p class="text-sm text-gray-400">© {{ new Date().getFullYear() }} All rights reserved</p>
			</div>
			<div class="flex space-x-6">
			  <a href="https://doku.phamos.eu/" target="_blank" class="text-gray-400 hover:text-[#2490EF]">Guideline</a>
			  <a href="#" class="text-gray-400 hover:text-[#2490EF]">Contact HR</a>
			</div>
		  </div>
		</div>
	  </footer>
	</div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { 
	FeatherIcon,
	Card,
	Button,
	Avatar
  } from 'frappe-ui'
  
  export default {
	name: 'WelcomePage',
	components: {
	  FeatherIcon,
	  Card,
	  Button,
	  Avatar
	},
	setup() {
	  const showUserMenu = ref(false)
	  
	  // In a real app, this would come from your authentication system
	  const currentUser = ref({
		name: 'John Doe',
		email: 'john.doe@phamos.com',
		role: 'Software Engineer'
	  })
  
	  const userInitials = computed(() => {
		return currentUser.value.name
		  .split(' ')
		  .map(word => word[0])
		  .join('')
		  .toUpperCase()
	  })
  
	  const services = ref([
		{
			title: 'Profile',
			description: 'View and update your personal information',
			icon: 'user',
			route: '#'
		},
		{
		  title: 'Projec Action Panel',
		  description: 'Your dashboard for project management',
		  icon: 'grid',
		  route: '#'
		},
		{
		  title: 'Leave Application',
		  description: 'Apply for leave and track your requests',
		  icon: 'calendar',
		  route: '#'
		},
		{
		  title: 'Team Calendar',
		  description: 'View team availability and schedule meetings',
		  icon: 'user',
		  route: '#'
		}
	  ])
  
	  const toggleUserMenu = () => {
		showUserMenu.value = !showUserMenu.value
	  }
  
	  return {
		currentUser,
		userInitials,
		services,
		showUserMenu,
		toggleUserMenu,
	  }
	}
  }
</script>