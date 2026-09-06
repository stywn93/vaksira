export default function FormBabyProfile() {
  return (
    <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2"

                    alt="logo"/>
                Vaksira &mdash; <em>Vaksin Reminder Assistant</em>
            </a>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Buat Profil Bayi
                    </h1>
                    <form className="space-y-4 md:space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Row 1: Nama Ibu | Tanggal Lahir Bayi */}
                            <div>
                                <label htmlFor="namaIbu"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Ibu</label>
                                <input type="text" name="namaIbu" id="namaIbu"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Masukkan nama ibu"
                                />
                            </div>

                            <div>
                                <label htmlFor="tanggalLahirBayi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal lahir bayi</label>
                                <input type="date" name="tanggalLahirBayi" id="tanggalLahirBayi"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            {/* Full width: Jenis Kelamin Bayi (radio group) */}
                            <div className="md:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis kelamin bayi</label>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center">
                                        <input type="radio" name="jenisKelaminBayi" id="jenisKelaminBayi"
                                            className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="jenisKelaminBayi" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Laki-laki</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="jenisKelaminBayi" id="jenisKelaminBayi2"
                                            className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="jenisKelaminBayi2" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Perempuan</label>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Kabupaten | Kecamatan */}
                            <div>
                                <label htmlFor="kabupaten"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kabupaten</label>
                                <select name="kabupaten" id="kabupaten"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">Pilih kabupaten</option>
                                    <option value="kabupaten1">Kabupaten 1</option>
                                    <option value="kabupaten2">Kabupaten 2</option>
                                    <option value="kabupaten3">Kabupaten 3</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="kecamatan"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kecamatan</label>
                                <select name="kecamatan" id="kecamatan"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">Pilih kecamatan</option>
                                    <option value="kecamatan1">Kecamatan 1</option>
                                    <option value="kecamatan2">Kecamatan 2</option>
                                    <option value="kecamatan3">Kecamatan 3</option>
                                </select>
                            </div>

                            {/* Row 3: Desa | Nomor Whatsapp */}
                            <div>
                                <label htmlFor="desa"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desa</label>
                                <select name="desa" id="desa"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">Pilih desa</option>
                                    <option value="desa1">Desa 1</option>
                                    <option value="desa2">Desa 2</option>
                                    <option value="desa3">Desa 3</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="nomorWhatsapp"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Whatsapp</label>
                                <input type="text" name="nomorWhatsapp" id="nomorWhatsapp"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Masukkan nomor whatsapp"
                                />
                            </div>

                            {/* Full width: Email */}
                            <div className="md:col-span-2">
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Masukkan email"
                                />
                            </div>

                        </div>

                        <div className="flex justify-end">
                            <a href="#"
                            className="text-sm font-medium text-indigo-600 dark:text-indigo-100 hover:underline ">Sudah pernah buat? Klik di sini</a>
                        </div>
                        <button type="submit"
                                className="cursor-pointer w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                            Simpan & Generate
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
