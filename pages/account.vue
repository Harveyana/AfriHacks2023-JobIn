<template>
  
</template>
<script setup lang="ts">
 definePageMeta({
  middleware: [
    'auth',
    // Add in more middleware here
  ]
 });
import {ref} from 'vue'

const visible = ref(false)

const openDialog = ()=>{
  visible.value = true
}

     const steps = [
        {
          img: 'sign-up.png',
          title: 'Sign Up',
          description:
            'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
        },
        {
          img: 'fund.png',
          title: 'Fund',
          description:
            'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
        },
        {
          img: 'buy-crypto.png',
          title: 'Buy Crypto',
          description:
            'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
        },
      ]
</script>

<style scoped>

</style>