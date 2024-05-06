<script>
    
    import template1 from "$lib/image/template-1.png" 
    import template2 from "$lib/image/template-2.png" 
</script>

<!-- <div
  class="flex flex-col px-20 pt-8 mt-14 max-md:px-5 max-md:mt-10 max-md:max-w-full"
>
  <div
    class="text-4xl font-medium tracking-tight text-neutral-700 max-md:max-w-full"
  >
    Choose Your Templates
  </div>
  <div
    class="flex gap-5 justify-between pb-8 mt-8 w-full text-base border-b border-solid border-neutral-200 max-md:flex-wrap max-md:max-w-full"
  >
    <div class="flex gap-4 text-zinc-400 max-md:flex-wrap">
      <div
        class="justify-center px-8 py-4 text-white bg-violet-500 border-2 border-violet-500 border-solid rounded-[100px] max-md:px-5"
      >
        Theme 1
      </div>
      <div
        class="justify-center px-8 py-4 bg-white border-2 border-solid border-neutral-100 rounded-[100px] max-md:px-5"
      >
        Theme 2
      </div>
      <div
        class="justify-center px-8 py-4 bg-white border-2 border-solid border-neutral-100 rounded-[100px] max-md:px-5"
      >
        Theme 3
      </div>
      <div
        class="justify-center px-8 py-4 bg-white border-2 border-solid border-neutral-100 rounded-[100px] max-md:px-5"
      >
        Theme 4
      </div>
    </div>
    <div
      class="justify-center self-start px-8 py-4 font-bold text-violet-500 bg-white rounded-lg max-md:px-5"
    >
      See all templates
    </div>
  </div>
</div> -->

<div class="px-20 mt-8 max-md:px-5 max-md:max-w-full">
	<div
		class="flex flex-row gap-2 md:flex-wrap overflow-x-scroll md:overflow-hidden my-auto md:justify-center"
	>
		<div class="flex flex-col w-[90%] md:w-[48%] flex-shrink-0">
			<div
				class="flex flex-col grow px-8 py-6 w-full bg-white rounded-2xl border border-solid shadow-sm border-neutral-100 max-md:px-5 max-md:mt-8 max-md:max-w-full"
			>
				<div
					class="justify-center self-start px-3 py-2 text-sm text-amber-700 bg-orange-100 rounded border border-orange-300 border-solid"
				>
					Most popular
				</div>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full hidden md:block">
					Romantic Elegant
				</div>
				<!-- This div will be hidden on mobile screens -->
				<div class="hidden mt-2 text-base leading-6 text-neutral-500 max-md:max-w-full md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</div>
				<img
					src={template1}
					class="mt-4 w-full md:aspect-[2.13] aspect-square object-cover rounded-xl"
					alt="template-1"
				/>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full md:hidden">
					Romantic Elegant
				</div>
				<div class="flex gap-5 mt-4 max-md:flex-wrap">
					<div class="flex flex-1 gap-2 my-auto">
						<div class="my-auto text-2xl text-zinc-800">Rp 39.000</div>
						<div class="flex gap-2 px-1 text-base text-red-600">
							<div class="justify-center p-1.5 whitespace-nowrap bg-red-200 rounded">50%</div>
							<div class="justify-center my-auto">Rp 79.000</div>
						</div>
					</div>
					<div
						class="justify-center px-8 py-4 text-sm font-bold text-white bg-violet-500 rounded-[100px] max-md:px-5"
					>
						Preview Template
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-[90%] md:w-[48%] flex-shrink-0">
			<div
				class="flex flex-col grow px-8 py-6 w-full bg-white rounded-2xl border border-solid shadow-sm border-neutral-100 max-md:px-5 max-md:mt-8 max-md:max-w-full"
			>
				<div
					class="justify-center self-start px-3 py-2 text-sm text-amber-700 bg-orange-100 rounded border border-orange-300 border-solid"
				>
					Most popular
				</div>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full hidden md:block">
					Romantic Elegant
				</div>
				<!-- This div will be hidden on mobile screens -->
				<div class="hidden mt-2 text-base leading-6 text-neutral-500 max-md:max-w-full md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</div>
				<img
					src={template1}
					class="mt-4 w-full md:aspect-[2.13] aspect-square object-cover rounded-xl"
					alt="template-1"
				/>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full md:hidden">
					Romantic Elegant
				</div>
				<div class="flex gap-5 mt-4 max-md:flex-wrap">
					<div class="flex flex-1 gap-2 my-auto">
						<div class="my-auto text-2xl text-zinc-800">Rp 39.000</div>
						<div class="flex gap-2 px-1 text-base text-red-600">
							<div class="justify-center p-1.5 whitespace-nowrap bg-red-200 rounded">50%</div>
							<div class="justify-center my-auto">Rp 79.000</div>
						</div>
					</div>
					<div
						class="justify-center px-8 py-4 text-sm font-bold text-white bg-violet-500 rounded-[100px] max-md:px-5"
					>
						Preview Template
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-[90%] md:w-[48%] flex-shrink-0">
			<div
				class="flex flex-col grow px-8 py-6 w-full bg-white rounded-2xl border border-solid shadow-sm border-neutral-100 max-md:px-5 max-md:mt-8 max-md:max-w-full"
			>
				<div
					class="justify-center self-start px-3 py-2 text-sm text-amber-700 bg-orange-100 rounded border border-orange-300 border-solid"
				>
					Most popular
				</div>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full hidden md:block">
					Romantic Elegant
				</div>
				<!-- This div will be hidden on mobile screens -->
				<div class="hidden mt-2 text-base leading-6 text-neutral-500 max-md:max-w-full md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</div>
				<img
					src={template1}
					class="mt-4 w-full md:aspect-[2.13] aspect-square object-cover rounded-xl"
					alt="template-1"
				/>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full md:hidden">
					Romantic Elegant
				</div>
				<div class="flex gap-5 mt-4 max-md:flex-wrap">
					<div class="flex flex-1 gap-2 my-auto">
						<div class="my-auto text-2xl text-zinc-800">Rp 39.000</div>
						<div class="flex gap-2 px-1 text-base text-red-600">
							<div class="justify-center p-1.5 whitespace-nowrap bg-red-200 rounded">50%</div>
							<div class="justify-center my-auto">Rp 79.000</div>
						</div>
					</div>
					<div
						class="justify-center px-8 py-4 text-sm font-bold text-white bg-violet-500 rounded-[100px] max-md:px-5"
					>
						Preview Template
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-[90%] md:w-[48%] flex-shrink-0">
			<div
				class="flex flex-col grow px-8 py-6 w-full bg-white rounded-2xl border border-solid shadow-sm border-neutral-100 max-md:px-5 max-md:mt-8 max-md:max-w-full"
			>
				<div
					class="justify-center self-start px-3 py-2 text-sm text-amber-700 bg-orange-100 rounded border border-orange-300 border-solid"
				>
					Most popular
				</div>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full hidden md:block">
					Romantic Elegant
				</div>
				<!-- This div will be hidden on mobile screens -->
				<div class="hidden mt-2 text-base leading-6 text-neutral-500 max-md:max-w-full md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</div>
				<img
					src={template1}
					class="mt-4 w-full md:aspect-[2.13] aspect-square object-cover rounded-xl"
					alt="template-1"
				/>
				<div class="mt-4 text-2xl font-medium text-neutral-700 max-md:max-w-full md:hidden">
					Romantic Elegant
				</div>
				<div class="flex gap-5 mt-4 max-md:flex-wrap">
					<div class="flex flex-1 gap-2 my-auto">
						<div class="my-auto text-2xl text-zinc-800">Rp 39.000</div>
						<div class="flex gap-2 px-1 text-base text-red-600">
							<div class="justify-center p-1.5 whitespace-nowrap bg-red-200 rounded">50%</div>
							<div class="justify-center my-auto">Rp 79.000</div>
						</div>
					</div>
					<div
						class="justify-center px-8 py-4 text-sm font-bold text-white bg-violet-500 rounded-[100px] max-md:px-5"
					>
						Preview Template
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
