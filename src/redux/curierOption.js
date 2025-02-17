// import jne from '../../public/images/curier/jne.png'
// import jnt from '../../public/images/curier/J&T.jpg'
// import cepat from '../../public/images/curier/sicepat.jpg'

export const courierOptions = [
    {
        name: 'JNE Express',
        logo: '../../public/images/curier/jne.png',  // Changed from '/images/LogoKridhasari.png' to jne
        description: 'Layanan pengiriman terpercaya dengan jangkauan luas di seluruh Indonesia',
        estimatedTime: '2-3 hari kerja',
        services: ['Reguler', 'YES', 'OKE']
    },
    {
        name: 'J&T Express',
        logo: '../../public/images/curier/J&T.jpg',  // Changed from '/images/LogoKridhasari.png' to jnt
        description: 'Pengiriman cepat dengan tracking real-time dan layanan door-to-door',
        estimatedTime: '2-4 hari kerja',
        services: ['Ekonomi', 'Reguler', 'Express']
    },
    {
        name: 'Si Cepat Express',
        logo: '../../public/images/curier/sicepat.jpg',  // Changed from '/images/LogoKridhasari.png' to cepat
        description: 'Solusi pengiriman express dengan harga terjangkau',
        estimatedTime: '1-3 hari kerja',
        services: ['BEST', 'REG', 'GOKIL']
    }
]