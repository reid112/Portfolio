<script setup>
import PageTitle from '@/components/PageTitle.vue'
import InputWithPlaceholder from '../components/InputWithPlaceholder.vue'
import { onMounted, ref } from 'vue'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')
const messageSent = ref(false)
const messageError = ref(false)

onMounted(() => {
  emailjs.init(import.meta.env.VITE_EMAIL_JS_USER_ID)
})

function submit() {
  clearMessageBanner()
  
  emailjs.send(
    import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    import.meta.env.VITE_EMAIL_JS_CONTACT_TEMPLATE_ID,
    { name: name.value, email: email.value, message: message.value },
    import.meta.env.VITE_EMAIL_JS_USER_ID
  ).then(() => {
    name.value = ''
    email.value = ''
    message.value = ''

    messageSent.value = true
    setTimeout(clearMessageBanner, 5000)
  })
  .catch(() => {
    setTimeout(clearMessageBanner, 5000)
  })
}

function clearMessageBanner() {
  messageSent.value = false
  messageError.value = false
}
</script>

<template>
  <section class="px-4 pb-24 bg-zinc-100">
    <div class="container mx-auto">
      <PageTitle
        background-title="Contact"
        foreground-title="Get In Touch"
      />
      <div>
        <form
          class="space-y-6 text-center"
          action="#"
          @submit.prevent="submit"
        >
          <InputWithPlaceholder
            v-model="name"
            input-name="name"
            input-type="text"
            placeholder="Name"
            :is-required="true"
          />
          <InputWithPlaceholder
            v-model="email"
            input-name="email"
            input-type="email"
            placeholder="Email"
            :is-required="true"
          />
          <InputWithPlaceholder
            v-model="message"
            input-name="message"
            input-type="textarea"
            placeholder="Tell us more..."
            :is-required="true"
          />
          <div v-if="messageSent">
            <span class="px-24 py-1 font-bold bg-green-400 rounded">Message Sent!</span>
          </div>
          <div v-else-if="messageError">
            <span class="px-24 py-1 font-bold bg-red-400 rounded text-zinc-100">Oops, something went wrong.</span> 
          </div>
          <button
            class="btn btn-primary"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
