import { convertCurrency } from "../../utils/convert-currency";

export const getProducts = (products) => {
    return products.map((product, index) => `
${index + 1}. ${product.title}
   Jumlah: ${product.adet}
   Harga: ${convertCurrency(product.price)}
   Subtotal: ${convertCurrency(product.price * product.adet)}`
    ).join('\n');
};

export const getAddress = (address) => {
    return `Nama: ${address.name}
No. Telepon: ${address.phone}
Alamat:
${address.street}, ${address.district}, ${address.city}, ${address.province}, ${address.postalCode}`
}

export const createWhatsappMessage = (products, total, address) => {
    const currentDate = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Memastikan semua field alamat ada sebelum ditampilkan
    const fullAddress = [
        address.street,
        address.district && `Kecamatan ${address.district}`,
        address.city && `Kota/Kabupaten ${address.city}`,
        address.province && `Provinsi ${address.province}`,
        address.postalCode && `Kode Pos: ${address.postalCode}`
    ].filter(Boolean).join('\n');

    return `Selamat siang,

Saya ingin membeli produk dengan detail sebagai berikut:
${getProducts(products)}

Total Pembayaran: ${convertCurrency(total)}

Informasi Pengiriman:
Nama: ${address.name}
No. Telepon: ${address.phone}
Alamat:
${fullAddress}

Tanggal Pemesanan: ${currentDate}

Mohon diproses pesanan saya.
Terima kasih.`;
};