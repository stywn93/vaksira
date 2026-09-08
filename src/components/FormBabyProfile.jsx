import logoUrl from "../../public/favicon.svg"
import { Toaster } from "react-hot-toast"
import { useWilayah } from "../libs/hooks/useWilayah.js"
import { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function FormBabyProfile({ onSubmit, onRecaptchaChange, recaptchaKey }) {
    const recaptchaRef = useRef(null)

    const {
        provinces, districts, subdistricts, villages,
        province, district, subdistrict, village,
        handleProvinceChange, handleDistrictChange, handleSubdistrictChange, setVillage,
    } = useWilayah()

  return (
    <section>
        <Toaster position="top-center" />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <img className="w-8 h-8 mr-2" src={logoUrl} alt="logo"/>
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                Vaksira &mdash; <em>Vaksin Reminder Assistant</em>
            </a>
            <div
                className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md md:max-w-2xl xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Buat Profil Bayi
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Row 1: Nama Ibu | Tanggal Lahir Bayi */}
                            <div>
                                <label htmlFor="namaIbu"
                                    className="block mb-2 text-sm font-medium text-gray-900">Nama Ibu</label>
                                <input type="text" name="namaIbu" id="namaIbu"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                    placeholder="Masukkan nama ibu"
                                    required=""
                                />
                            </div>

                            <div>
                                <label htmlFor="tanggalLahirBayi"
                                    className="block mb-2 text-sm font-medium text-gray-900">Tanggal lahir bayi</label>
                                <input type="date" name="tanggalLahirBayi" id="tanggalLahirBayi"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                />
                            </div>

                            {/* Full width: Jenis Kelamin Bayi (radio group) */}
                            <div className="md:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Jenis kelamin bayi</label>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center">
                                        <input type="radio" name="jenisKelaminBayi" value="L" id="jenisKelaminBayi"
                                            className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2"
                                        />
                                        <label htmlFor="jenisKelaminBayi" className="ml-2 text-sm font-medium text-gray-900">Laki-laki</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="jenisKelaminBayi" value="P" id="jenisKelaminBayi2"
                                            className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2"
                                        />
                                        <label htmlFor="jenisKelaminBayi2" className="ml-2 text-sm font-medium text-gray-900">Perempuan</label>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Provinsi | Kabupaten */}
                            <div>
                                <label htmlFor="provinsi"
                                    className="block mb-2 text-sm font-medium text-gray-900">Provinsi</label>
                                <select name="provinsi" id="provinsi" value={province} onChange={handleProvinceChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                >
                                    <option value="">Pilih provinsi</option>
                                    {provinces.map((region) => <option key={region.code} value={region.code}>{region.name}</option>)}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="kabupaten"
                                    className="block mb-2 text-sm font-medium text-gray-900">Kabupaten</label>
                                <select name="kabupaten" id="kabupaten" value={district} onChange={handleDistrictChange} disabled={!province}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                >
                                    <option value="">Pilih kabupaten</option>
                                    {districts.map((region) => <option key={region.code} value={region.code}>{region.name}</option>)}
                                </select>
                            </div>

                            {/* Row 3: Kecamatan | Desa */}
                            <div>
                                <label htmlFor="kecamatan"
                                    className="block mb-2 text-sm font-medium text-gray-900">Kecamatan</label>
                                <select name="kecamatan" id="kecamatan" value={subdistrict} onChange={handleSubdistrictChange} disabled={!district}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                >
                                    <option value="">Pilih kecamatan</option>
                                    {subdistricts.map((region) => <option key={region.code} value={region.code}>{region.name}</option>)}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="desa"
                                    className="block mb-2 text-sm font-medium text-gray-900">Desa</label>
                                <select name="desa" id="desa" value={village} onChange={(event) => setVillage(event.target.value)} disabled={!subdistrict}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                >
                                    <option value="">Pilih desa</option>
                                    {villages.map((region) => <option key={region.code} value={region.code}>{region.name}</option>)}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="nomorWhatsapp"
                                    className="block mb-2 text-sm font-medium text-gray-900">Nomor Whatsapp</label>
                                <input type="text" name="nomorWhatsapp" id="nomorWhatsapp"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                    placeholder="Masukkan nomor whatsapp"
                                />
                            </div>

                            {/* Full width: Email */}

                            <div>
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                    placeholder="Masukkan email"
                                />
                            </div>

                            <ReCAPTCHA
                                key={recaptchaKey}
                                ref={recaptchaRef}
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // or process.env.REACT_APP_...
                                onChange={onRecaptchaChange}
                            />

                        </div>

                        {/* <div className="flex justify-end">
                            <Link to="/immunization-schedule"
                            className="text-sm font-medium text-indigo-600 hover:underline">Sudah pernah buat? Klik di sini</Link>
                        </div> */}
                        <button type="submit"
                                className="cursor-pointer w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed">
                            Simpan & Generate
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
