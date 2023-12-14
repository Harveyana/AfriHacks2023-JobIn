<template>
  
</template>
<script setup lang="ts">

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}
      
      const accordions = [
        {
          title: 'What is Vyre Africa?',
          description:
            "Vyre Africa is a platform that offers global secured multi-currency accounts for individuals and businesses across borders to instantly send, receive and swap fiats and crypto currencies seamlessly.",
        },
        {
          title: 'Why Vyre?',
          description:
            "We provide cross border banking,global remittance and instant assets exchange supporting major fiats and crypto currencies",
        },
        {
          title: 'How can I benefit from Vyre Africa?',
          description:
            "Vyre Africa offers the convenience of global secured multi-currency accounts, allowing individuals and businesses to conduct instant transactions, receive money globally, and swap between fiat and cryptocurrencies effortlessly. Additionally, Vyre Africa issues IBANs for fiat currency accounts, enhancing the versatility of your account",
        },
        {
          title: 'What currencies does Vyre Africa support?',
          description:
            "Vyre Africa supports multiple currencies, providing users with the flexibility to transact in various fiat and cryptocurrencies. Each fiat currency account comes with its own IBAN.",
        },
        {
          title: 'What is the unique feature of Vyre Africa?',
          description:
            "Vyre Africa stands out with its combination of global secured multi-currency accounts for fiats and crypto with the ability to generate quick payment links, offering users a versatile and inclusive financial solution.",
        },
        {
          title: 'How quickly can I receive money through payment links?',
          description:
            "The speed of receiving money through Vyre Africa's payment links depends on various factors, including the sender's location and chosen payment method. However, our platform is designed to facilitate swift transactions.",
        },
      ]
</script>

<style scoped>

</style>