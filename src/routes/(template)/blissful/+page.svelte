<script lang="ts">
	import type { PageData } from './$types';
	import groom from '$lib/image/Konsep-A-8.jpg';
	import bride from '$lib/image/Konsep-A-9.jpg';
	import hero from '$lib/image/Konsep-A-4.jpg';
	import love_story from '$lib/image/Konsep-A-3.jpg';
	import konsep_c6 from '$lib/image/Konsep-C-6.jpg';
	import konsep_c4 from '$lib/image/Konsep-C-4.jpg';
	import konsep_c3 from '$lib/image/Konsep-C-3.jpg';
	import konsep_c2 from '$lib/image/Konsep-C-2.jpg';

	export let data: PageData;
</script>

<div class="flex flex-col justify-center items-center">
	<div
		class="flex overflow-hidden relative flex-col justify-center w-full h-screen text-2xl text-center text-white"
	>
		<img srcset={hero} class="object-cover absolute inset-0 w-full h-full object-center z-0" />
		<div class="flex relative flex-col justify-center px-5 py-8 max-md:max-w-full">
			<div class="mt-64 max-md:mt-10 max-md:max-w-full text-black">The Wedding of</div>
			<div class="mt-2 text-8xl text-orange-100 leading-[108px] max-md:max-w-full max-md:text-4xl">
				Aldi & Nanda
			</div>
			<div class="mt-6 text-3xl font-medium max-md:max-w-full text-black">26 April 2024</div>
			<img
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/d10ca5b8ea32fc3d3f57dff102297755e0ae8e208f1204f6eb2d59b2079a207a?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
				class="self-center mt-16 w-9 aspect-square max-md:mt-10 z-10"
			/>
			<div class="self-center mt-2 mb-48 font-medium leading-[92%] max-md:mb-10 text-black">
				Swipe up
			</div>
		</div>
	</div>

	<div
		class="flex flex-col justify-center items-center p-16 mt-12 max-w-full text-center text-black bg-zinc-300 w-[937px] max-md:px-5 max-md:mt-10"
	>
		<div class="text-5xl leading-10 max-md:text-4xl">Prayer Section</div>
		<div class="self-stretch mt-6 text-2xl leading-8 max-md:max-w-full">
			Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
			benar-benar terdapat tanda-tanda bagi kaum yang berpikir.
		</div>
		<div class="mt-6 text-xl leading-6">Q.S. Ar-Rum: Ayat 21</div>
	</div>

	<div class="flex flex-col px-16 mt-8 max-w-full text-center w-[939px] max-md:px-5">
		<div class="self-center text-5xl leading-10 text-black max-md:max-w-full max-md:text-4xl">
			Pasangan Mempelai
		</div>
		<div class="mt-8 text-2xl leading-8 text-black max-md:max-w-full">
			Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</div>
		<div class="flex flex-row gap-5 justify-center mt-8 max-md:flex-wrap max-md:max-w-full">
			<div
				class="flex flex-col self-stretch mx-auto w-full text-center max-w-[480px] text-neutral-700"
			>
				<div class="flex flex-col">
					<div class="w-full text-3xl">The Groom</div>
					<div class="mt-4 w-full text-xl font-medium leading-6">
						Thomas Aldi Adi Saputro, S.Kom
					</div>
					<div class="mt-1 w-full text-xs leading-6">
						Putra Pertama dari
						<br />
						Bapak Petrus Sunarto & Ibu Yuliana Sri Lestari
					</div>
				</div>
				<img
					loading="lazy"
					src={groom}
					class="mt-4 w-full rounded-full shadow-sm aspect-[0.65] object-cover"
				/>
			</div>
			<div class="text-4xl self-center">&</div>
			<div
				class="flex flex-col self-stretch mx-auto w-full text-center max-w-[480px] text-neutral-700"
			>
				<div class="flex flex-col">
					<div class="w-full text-3xl">The Bride</div>
					<div class="mt-4 w-full text-xl font-medium leading-6">
						Cecilia Nanda Puspita, Amd. Kep
					</div>
					<div class="mt-1 w-full text-xs leading-6">
						Putri Keempat dari
						<br />
						Bapak Sukino Bonefasius & Lucia Marvani
					</div>
				</div>
				<img
					loading="lazy"
					src={bride}
					class="mt-4 w-full rounded-full shadow-sm aspect-[0.65] object-cover"
				/>
			</div>
		</div>
	</div>
	<div
		class="flex flex-col p-16 mt-20 max-w-full bg-zinc-300 w-[940px] max-md:px-5 max-md:mt-10 rounded-3xl"
	>
		<div class="self-center text-5xl leading-10 text-center text-black max-md:text-4xl">
			Waktu & Tempat
		</div>
		<div class="mt-8 text-xl leading-7 text-center text-black max-md:max-w-full">
			Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah
			sewajarnya setiap upaya meraih cinta-Nya dilakukan dengan sukacita.
		</div>
		<div class="justify-center mt-8 max-md:max-w-full">
			<div class="flex flex-col gap-5 md:flex-row">
				<div class="flex flex-col py-8 text-center text-white rounded-3xl bg-stone-900">
					<div class="w-full text-4xl leading-10 text-amber-400">Pemberkatan</div>
					<div class="mt-12 w-full text-3xl leading-10">Sabtu</div>
					<div class="shrink-0 self-center mt-6 h-0.5 rounded-3xl bg-zinc-300 w-[201px]"></div>
					<div class="mt-6 w-full text-8xl leading-[103.68px]">27</div>
					<div class="shrink-0 self-center mt-6 h-0.5 rounded-3xl bg-zinc-300 w-[201px]"></div>
					<div class="mt-6 w-full text-2xl">April 2024</div>
					<div class="flex flex-col p-2 mt-8 w-full rounded-lg text-zinc-300">
						<div class="text-xl leading-8">Pukul 09.00 - 11.00 WIB</div>
						<div class="mt-4 text-base font-medium leading-8">
							Gereja Santo Yusuf Bandung Wonosari
						</div>
						<div class="mt-1 text-xs leading-6 text-orange-100">
							Jl. Wonosari-Yogya Km. 5,2, Kepil, Bandung, Kec. Playen, Kabupaten Gunung Kidul,
							Daerah Istimewa Yogyakarta
						</div>
					</div>
					<div
						class="justify-center items-center self-center px-4 py-2 mt-8 w-full text-sm font-medium leading-6 whitespace-nowrap bg-amber-400 max-w-[314px] rounded-[100px]"
					>
						Navigasi
					</div>
				</div>
				<div class="flex flex-col py-8 text-center text-white rounded-3xl bg-stone-900">
					<div class="w-full text-4xl leading-10 text-amber-400">Resepsi</div>
					<div class="mt-12 w-full text-3xl leading-10">Sabtu</div>
					<div class="shrink-0 self-center mt-6 h-0.5 rounded-3xl bg-zinc-300 w-[201px]"></div>
					<div class="mt-6 w-full text-8xl leading-[103.68px]">27</div>
					<div class="shrink-0 self-center mt-6 h-0.5 rounded-3xl bg-zinc-300 w-[201px]"></div>
					<div class="mt-6 w-full text-2xl">April 2024</div>
					<div class="flex flex-col p-2 mt-8 w-full rounded-lg text-zinc-300">
						<div class="text-xl leading-8">Pukul 11.00 - Selesai</div>
						<div class="mt-4 text-base font-medium leading-8">Kediaman Mempelai Wanita</div>
						<div class="mt-1 text-xs leading-6 text-orange-100">
							Jl. Wonosari-Yogya Km. 5,2, Kepil, Bandung, Kec. Playen, Kabupaten Gunung Kidul,
							Daerah Istimewa Yogyakarta
						</div>
					</div>
					<div
						class="justify-center items-center self-center px-4 py-2 mt-8 w-full text-sm font-medium leading-6 whitespace-nowrap bg-amber-400 max-w-[314px] rounded-[100px]"
					>
						Navigasi
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col mx-4 text-white mt-10">
		<div
			class="overflow-hidden relative flex-col justify-center px-12 py-20 text-4xl leading-10 text-center aspect-[1.7]"
		>
			<img
				loading="lazy"
				src={love_story}
				class="object-cover absolute inset-0 size-full rounded-t-3xl"
			/>
			Our Love Story
		</div>
		<div class="flex flex-col px-4 py-8 w-full text-center bg-stone-900">
			<div class="self-center text-3xl text-amber-400">Awal Bertemu</div>
			<div class="self-center mt-8 text-xl font-medium leading-6">Sabtu, 24 Oktober 2020</div>
			<div class="shrink-0 mt-2 h-px bg-stone-500 rounded-[100px]"></div>
			<div class="mt-2 text-base leading-6">
				Bertemu & berkenalan saat mengikuti kegiatan di sosial media OMK Gereja Santa Maria Regina.
				Kemudian saling bertukar nomor whatsapp
			</div>
		</div>
		<div class="flex flex-col px-4 py-8 w-full text-center bg-stone-900">
			<div class="self-center text-3xl text-amber-400">Tunangan</div>
			<div class="self-center mt-8 text-xl font-medium leading-6">Sabtu, 19 Agustus 2023</div>
			<div class="shrink-0 mt-2 h-px bg-stone-500 rounded-[100px]"></div>
			<div class="mt-2 text-base leading-6">
				Beberapa tahun saling mengenal satu sama lain, Kami memutuskan untuk bertunangan.
			</div>
		</div>
		<div class="flex flex-col px-4 py-8 w-full rounded-b-3xl bg-stone-900">
			<div class="self-center text-3xl text-center text-amber-400">Menikah</div>
			<div class="self-center mt-8 text-xl font-medium leading-6 text-center">
				Sabtu, 27 April 2024
			</div>
			<div class="shrink-0 mt-2 h-px bg-stone-500 rounded-[100px]"></div>
			<div class="mt-2 text-sm leading-6">
				Dengan doa & pertimbangan, kami berkomitmen untuk hidup sebagai pasangan Katolik yang setia
				dalam untung dan malang diwaktu sehat & sakit.
			</div>
		</div>
	</div>
	<div class="flex flex-col text-center w-5/6 bg-slate-200 rounded-3xl p-4 my-10">
		<div class="self-center text-4xl text-stone-900">Live Streaming</div>
		<div class="mt-6 text-black">
			Momen kebahagiaan prosesi Pernikahan akan kami tayangkan secara virtual melalui Instagram
			Live.
		</div>
		<div
			class="justify-center items-center px-4 py-2 mt-6 font-medium leading-6 text-white whitespace-nowrap bg-amber-400 rounded-xl"
		>
			Join
		</div>
	</div>

	<div class="flex flex-col justify-center">
		<div class="self-center text-4xl leading-10 text-center text-stone-900">Photo Gallery</div>
		<img
			loading="lazy"
			src={konsep_c2}
			class="mt-8 w-full object-cover aspect-video max-w-md self-center rounded-3xl"
		/>
		<div class="flex flex-col gap-4 mt-6 md:flex-row justify-center">
			<img
				loading="lazy"
				src={konsep_c3}
				class="shrink-0 max-w-full object-cover max-w-xs aspect-square rounded-3xl"
			/>
			<img
				loading="lazy"
				src={konsep_c4}
				class="shrink-0 max-w-full object-cover max-w-xs aspect-square rounded-3xl"
			/>
		</div>
		<img
			loading="lazy"
			src={konsep_c6}
			class="mt-8 w-full object-cover aspect-video max-w-md self-center rounded-3xl"
		/>
	</div>
</div>
