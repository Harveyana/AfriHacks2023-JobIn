<template>
    
            <!-- MID LEVEL PLAN -->

          <div class="w-full h-fit space-y-4 lg:space-y-0 lg:h-full p-5 sm:p-3 bg-white dark:bg-[#12171d]  flex flex-col items-start justify-between rounded-2xl">
              <img
                
                src='~/assets/img/tag3.svg'
                class="w-14 mb-2"
                alt=""
              />

              <div class="flex space-y-1 flex-col items-start justify-start">
                <h1 class="text-xl dark:text-white extraboldCabinet"
                >
                 Mid-Level
                </h1>
                <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="text-sm cabinet text-gray-500 paragraph">
                  Covers for competitive jobs
                </p>
              </div>

              <!-- <h1 class="text-lg extraboldCabinet"
                >
                <span class="text-sm cabinet text-gray-500 paragraph mx-1">Unique resumes/cover letters daily</span>
              </h1> -->

              <div class="flex flex-col space-y-2">
                <h1 class="text-lg dark:text-white extraboldCabinet "
                  >
                  7,000 NGN <span class="text-sm  cabinet text-gray-500 paragraph">/ month(save up to 45%)</span>
                </h1>

                <h1 class="text-lg text-gray-500 line-through extraboldCabinet "
                  >
                  15,000 NGN
                </h1>
              </div>
              

              <baseButton
               @click="pay()"
               class="border-2 hover:bg-black hover:text-white mt-3 border-black w-full px-6 py-3 my-9 lg:my-12 bg-white text-black flex items-center justify-center"
              >
                <span>Upgrade Plan</span>
              </baseButton>

          </div>


            
  </template>
  <script setup lang="ts">
  import axios from 'axios';
  import {useFlutterwave} from "flutterwave-vue3"
  // import { doc, onSnapshot,setDoc } from "firebase/firestore"
  // import { FIREBASE_DB,FIREBASE_AUTH } from '../firebaseConfig';
  import { v4 as uuidv4 } from 'uuid';

  const route = useRoute()
  const state = useGlobalState()
  // const transactRef = computed(() => route.query.tx_ref)

  type transaction = {
    amount:number,
    charge_response_code:number,
    charge_response_message:string,
    charged_amount:number,
    created_at:string,
    currency:string,
    customer:{name:string;email:string;phone_number:string},
    flw_ref:string,
    redirectstatus:any,
    transaction_id:number,
    tx_ref:string
  }

  const verifyTransaction = async(transaction:transaction)=>{
    const response = await axios.post(`https://jobroutes-backend.onrender.com/api/payment/verify`, 
    transaction, 
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data)
  }

  // watch(transactRef, async (newRef, oldId) => {
  //    console.log(newRef,route.query.transaction_id)
  // })
  
  const pay = ()=>{
    useFlutterwave({
      amount: 7000,//amount
      callback(data: any): void {
        console.log(data)
        verifyTransaction(data)
      },
      country: "NG",
      currency: "NGN",
      customer: {email: state.user.value?.email, name:state.user.value?.displayName, phone_number: state.user.value?.phoneNumber},
      customizations: {description: "Payment for Midlevel", logo: "https://firebasestorage.googleapis.com/v0/b/jobroute-58c44.appspot.com/o/JobRoutes%20logo%20SVG%201%20(2).png?alt=media&token=a668b178-01ac-40ba-ac16-41873c9b549d", title: "JobRoutes"},
      meta: {
        userId: state.user.value?.uid,
        plan: "Midlevel"
      },
      onclose(): void {
        
      },
      payment_options:  "card",
      public_key: "FLWPUBK_TEST-c373233a35acdec88f919011bb4ca51e-X",
      redirect_url: '',
      tx_ref: uuidv4()
    })
  }
  </script>

  <style scoped>
  h1,.cabinet {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }



</style>