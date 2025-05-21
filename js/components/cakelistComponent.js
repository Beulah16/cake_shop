import CakeCardComponent from "./cakeCardComponent.js"
export default {
    name: 'CakeListComponent',
    components: {
        CakeCardComponent
    },
    data() {
        return {
            cakes: [
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://t3.ftcdn.net/jpg/02/30/28/48/360_F_230284812_BWNoNU6T7gR0BUcUBaQQC4FCm4f1oooq.jpg'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/ZO/EK/AH/136766751/birthday-chocolate-cake-500x500-1--500x500.jpg'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://t3.ftcdn.net/jpg/06/14/35/44/360_F_614354408_T5LNFXAYmk3ePO3BC1YlR32L2BxwkCn9.jpg'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://t4.ftcdn.net/jpg/13/46/19/45/360_F_1346194558_ngo6EJbm32GmVIEsuYxdRrNSKwctVzbi.jpg'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://img.freepik.com/premium-photo/birthday-cake-white-background-high-resolution_1029679-26467.jpg'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://c.ndtvimg.com/2019-09/tvt2n58o_cake-decorating-_295x200_26_September_19.jpg'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://www.imagella.com/cdn/shop/files/3e63b22eb17f74f6c28d20842873bb3d_1cfd08ed-1ee2-4fe4-b063-0256b57155eb.jpg?v=1739858757&width=300'
                },
                {
                    name: 'Mud Cake White',
                    weight: '1.9kg',
                    price: 34,
                    image: 'https://www.imagella.com/cdn/shop/files/3e63b22eb17f74f6c28d20842873bb3d_1cfd08ed-1ee2-4fe4-b063-0256b57155eb.jpg?v=1739858757&width=300'
                }
            ]
        }
    },
    template: /* html */ `
    <main>
        <template v-for="(cake, index) in cakes" :key="index">
            <CakeCardComponent  :cake="cake"/>
        </template>
    </main>
    `
}