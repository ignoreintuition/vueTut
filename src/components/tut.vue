<template>
  <div class="tut">
    <h1>Grievances</h1>
    <ul>
      <li v-for='grievance in grievances'>
        {{grievance.text}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'tut',
  data () {
    return {
      grievances: [
        {text: 'Everyone Hates Me'},
        {text: 'The World is Against Me'},
        {text: 'My soul is damned for hell'}
      ]
    }
  }
}
</script>
