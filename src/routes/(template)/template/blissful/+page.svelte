<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col justify-center items-center">
	<div
		class="flex overflow-hidden relative flex-col justify-center self-stretch px-px w-full text-2xl text-center text-white min-h-[1024px] max-md:max-w-full"
	>
		<img
			loading="lazy"
			srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7e59d5dec03e34ec7fdfabbef49f10e152c17d5a8cf9016fa25d258ff0cdc?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
			class="object-cover absolute inset-0 size-full"
		/>
		<div class="flex relative flex-col justify-center px-5 py-8 max-md:max-w-full">
			<div class="mt-64 max-md:mt-10 max-md:max-w-full text-black">The Wedding of</div>
			<div class="mt-2 text-8xl text-orange-100 leading-[108px] max-md:max-w-full max-md:text-4xl">
				Aldi & Nanda
			</div>
			<div class="mt-6 text-3xl font-medium max-md:max-w-full text-black">26 April 2024</div>
			<img
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/d10ca5b8ea32fc3d3f57dff102297755e0ae8e208f1204f6eb2d59b2079a207a?apiKey=198bd7cf5c914c4daac64d257a0217fd&"
				class="self-center mt-16 w-9 aspect-square max-md:mt-10"
			/>
			<div class="self-center mt-2 mb-48 font-medium leading-[92%] max-md:mb-10 text-black">Swipe up</div>
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
		<div class="flex flex-col gap-5 justify-center mt-8 max-md:flex-wrap max-md:max-w-full">
			<div class="flex flex-col flex-1 justify-between bg-zinc-300">
				<div class="self-center text-base leading-10 text-black">Groom’s photo</div>
				<div
					class="justify-center items-center px-16 py-4 mt-80 text-xl leading-7 text-white bg-black bg-opacity-30 max-md:px-5 max-md:mt-10"
				>
					Groom’s name
					<br />
					Putra pertama dari Bapak (Nama) & Ibu (Nama)
				</div>
			</div>
			<div class="my-auto text-8xl text-black leading-[103.68px] max-md:text-4xl">&</div>
			<div class="flex flex-col flex-1 justify-between bg-zinc-300">
				<div class="self-center text-base leading-10 text-black">Bride’s photo</div>
				<div
					class="justify-center items-center px-16 py-4 mt-80 text-xl leading-7 text-white bg-black bg-opacity-30 max-md:px-5 max-md:mt-10"
				>
					Bride’s name
					<br />
					Putri pertama dari Bapak (Nama) & Ibu (Nama)
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex flex-col items-center p-16 mt-20 max-w-full text-center text-black bg-zinc-300 w-[940px] max-md:px-5 max-md:mt-10"
	>
		<div class="text-2xl leading-8">Hitung Mundur</div>
		<div class="mt-2 text-5xl leading-[56.16px] max-md:text-4xl">Hari Bahagia Kami</div>
		<div class="mt-8 text-3xl">Sabtu, 30 Desember 20XX</div>
		<div class="flex gap-5 justify-between mt-8 max-w-full text-3xl whitespace-nowrap w-[318px]">
			<div>7</div>
			<div>16</div>
			<div>59</div>
			<div>32</div>
		</div>
		<div
			class="flex justify-center items-center self-stretch px-16 mt-1 text-base leading-6 whitespace-nowrap max-md:px-5 max-md:max-w-full"
		>
			<div class="flex gap-5 justify-between">
				<div>Day</div>
				<div>Hour</div>
				<div>Minute</div>
				<div>Second</div>
			</div>
		</div>
		<div class="self-stretch mt-8 text-xl leading-8 max-md:max-w-full">
			Bergabunglah bersama Kami menyaksikan sekaligus merayakan terbentuknya ikatan suci ini. Kami
			ingin Anda menjadi bagian dari hari istimewa kami.
		</div>
		<div
			class="justify-center px-8 py-4 mt-8 text-base font-medium leading-6 bg-white rounded max-md:px-5"
		>
			Simpan tanggalnya
		</div>
	</div>
	<div class="flex flex-col p-16 mt-20 max-w-full bg-zinc-300 w-[940px] max-md:px-5 max-md:mt-10">
		<div class="self-center text-5xl leading-10 text-center text-black max-md:text-4xl">
			Waktu & Tempat
		</div>
		<div class="mt-8 text-xl leading-7 text-center text-black max-md:max-w-full">
			Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah
			sewajarnya setiap upaya meraih cinta-Nya dilakukan dengan sukacita.
		</div>
		<div class="justify-center mt-8 max-md:max-w-full">
			<div class="flex gap-5 max-md:flex-col max-md:gap-0">
				<div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="flex flex-col grow px-4 py-8 w-full text-center text-black bg-white max-md:mt-8"
					>
						<div class="text-4xl leading-10">Akad</div>
						<div class="mt-8 text-2xl leading-6">Date (DD-MM-YYY)</div>
						<div class="mt-8 text-3xl leading-10">Nama Gedung/Lokasi/Hotel</div>
						<div class="mt-4 text-xl leading-6">Alamat lengkap</div>
						<div
							class="justify-center self-center px-8 py-4 mt-8 text-base font-medium leading-6 text-white rounded bg-neutral-500 max-md:px-5"
						>
							Lihat lokasi
						</div>
					</div>
				</div>
				<div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="flex flex-col grow px-4 py-8 w-full text-center text-black bg-white max-md:mt-8"
					>
						<div class="text-4xl leading-10">Resepsi</div>
						<div class="mt-8 text-2xl leading-6">Date (DD-MM-YYY)</div>
						<div class="mt-8 text-3xl leading-10">Nama Gedung/Lokasi/Hotel</div>
						<div class="mt-4 text-xl leading-6">Alamat lengkap</div>
						<div
							class="justify-center self-center px-8 py-4 mt-8 text-base font-medium leading-6 text-white rounded bg-neutral-500 max-md:px-5"
						>
							Lihat lokasi
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex flex-col p-16 mt-20 max-w-full leading-6 text-center text-black bg-zinc-300 w-[940px] max-md:px-5 max-md:mt-10"
	>
		<div class="shrink-0 bg-neutral-400 h-[373px] max-md:max-w-full"></div>
		<div class="self-center mt-8 text-5xl leading-10 max-md:text-4xl">Live Streaming</div>
		<div class="mt-8 text-xl max-md:max-w-full">
			Jika anda berhalangan hadir namun tetap ingin menjadi bagian dari hari berbahagia kami,
			bergabunglah melalui siaran langsung kami.
		</div>
		<div
			class="flex gap-5 justify-center mt-8 text-sm font-medium text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full"
		>
			<div class="flex-1 justify-center items-center px-4 py-2 rounded bg-neutral-500 max-md:px-5">
				Zoom
			</div>
			<div class="flex-1 justify-center items-center px-4 py-2 rounded bg-neutral-500 max-md:px-5">
				Instagram
			</div>
			<div class="flex-1 justify-center items-center px-4 py-2 rounded bg-neutral-500 max-md:px-5">
				Youtube
			</div>
		</div>
	</div>
	<div
		class="flex flex-col justify-center items-center p-16 mt-28 max-w-full text-black w-[940px] max-md:px-5 max-md:mt-10"
	>
		<div
			class="justify-center items-center self-stretch px-16 pt-52 pb-44 text-base leading-10 text-center bg-zinc-300 max-md:px-5 max-md:py-10 max-md:max-w-full"
		>
			Foto pasangan
		</div>
		<div class="mt-8 text-3xl text-center">Sebuah Kisah</div>
		<div class="mt-2 text-5xl text-center leading-[56.16px] max-md:text-4xl">Perjalanan Cinta</div>
		<div class="self-stretch mt-8 text-xl leading-6 text-center max-md:max-w-full">
			Menikah bukan perlombaan, bukan soal cepat atau lambat. Tetapi, siapa yang siap mengemban
			amanah yang besar.
		</div>
		<div
			class="flex flex-col justify-center p-8 mt-8 max-w-full bg-neutral-200 w-[600px] max-md:px-5"
		>
			<div class="text-xl leading-6 text-center max-md:max-w-full">Maret 20XX</div>
			<div class="mt-4 text-4xl leading-10 text-center max-md:max-w-full">Awal bertemu</div>
			<div class="mt-4 text-base leading-6 max-md:max-w-full">
				Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</div>
		</div>
		<div
			class="flex flex-col justify-center p-8 mt-8 max-w-full bg-neutral-200 w-[600px] max-md:px-5"
		>
			<div class="text-xl leading-6 text-center max-md:max-w-full">Maret 20XX</div>
			<div class="mt-4 text-3xl text-center max-md:max-w-full">Menjalin Hubungan</div>
			<div class="mt-4 text-base leading-6 max-md:max-w-full">
				Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</div>
		</div>
		<div
			class="flex flex-col justify-center p-8 mt-8 max-w-full bg-neutral-200 w-[600px] max-md:px-5"
		>
			<div class="text-xl leading-6 text-center max-md:max-w-full">Maret 20XX</div>
			<div class="mt-4 text-3xl text-center max-md:max-w-full">Bertunangan</div>
			<div class="mt-4 text-base leading-6 max-md:max-w-full">
				Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</div>
		</div>
		<div
			class="flex flex-col justify-center p-8 mt-8 max-w-full bg-neutral-200 w-[600px] max-md:px-5"
		>
			<div class="text-xl leading-6 text-center max-md:max-w-full">Maret 20XX</div>
			<div class="mt-4 text-3xl text-center max-md:max-w-full">Hari Pernikahan</div>
			<div class="mt-4 text-base leading-6 max-md:max-w-full">
				Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</div>
		</div>
	</div>
	<div class="box-border flex relative flex-col shrink-0">
		<div class="mt-36 text-5xl leading-10 text-center text-black max-md:mt-10 max-md:text-4xl">
			Photo Gallery
		</div>
		<div class="shrink-0 mt-8 max-w-full bg-zinc-300 h-[454px] w-[940px]"></div>
		<div class="mt-8 max-w-full w-[940px]">
			<div class="flex gap-5 max-md:flex-col max-md:gap-0">
				<div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
				<div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
			</div>
		</div>
		<div class="shrink-0 mt-8 max-w-full bg-zinc-300 h-[454px] w-[940px]"></div>
		<div class="mt-8 max-w-full w-[940px]">
			<div class="flex gap-5 max-md:flex-col max-md:gap-0">
				<div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
				<div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
			</div>
		</div>
		<div class="shrink-0 mt-8 max-w-full bg-zinc-300 h-[454px] w-[940px]"></div>
		<div class="mt-8 max-w-full w-[940px]">
			<div class="flex gap-5 max-md:flex-col max-md:gap-0">
				<div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
				<div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
			</div>
		</div>
		<div class="shrink-0 mt-8 max-w-full bg-zinc-300 h-[454px] w-[940px]"></div>
		<div class="mt-8 max-w-full w-[940px]">
			<div class="flex gap-5 max-md:flex-col max-md:gap-0">
				<div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
				<div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
					<div
						class="shrink-0 mx-auto max-w-full bg-zinc-300 h-[454px] w-[454px] max-md:mt-8"
					></div>
				</div>
			</div>
		</div>
	</div>
</div>
