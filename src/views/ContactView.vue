<script setup>
import PageTitle from '@/components/PageTitle.vue'
import InputWithPlaceholder from '../components/InputWithPlaceholder.vue'
import { onMounted, ref } from 'vue'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')

onMounted(() => {
  emailjs.init(import.meta.env.VITE_EMAIL_JS_USER_ID)
})

function submit() {
  emailjs.send(
    import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    import.meta.env.VITE_EMAIL_JS_CONTACT_TEMPLATE_ID,
    { name: name.value, email: email.value, message: message.value },
    import.meta.env.VITE_EMAIL_JS_USER_ID
  ).then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

    name.value = ''
    email.value = ''
    message.value = ''
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
