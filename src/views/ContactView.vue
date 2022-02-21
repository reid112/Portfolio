<script setup>
import PageTitle from '@/components/PageTitle.vue'
import InputWithPlaceholder from '../components/InputWithPlaceholder.vue'

let form = {
  name: '',
  email: '',
  note: '',
}

function submit() {
  
}
</script>

<template>
  <section
    id="contact"
    class="px-4 pb-24 bg-zinc-100"
  >
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
            v-model="form.name"
            input-name="name"
            input-type="text"
            placeholder="Name"
            :is-required="true"
          />
          <InputWithPlaceholder
            v-model="form.email"
            input-name="email"
            input-type="email"
            placeholder="Email"
            :is-required="true"
          />
          <InputWithPlaceholder
            v-model="form.note"
            input-name="note"
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
