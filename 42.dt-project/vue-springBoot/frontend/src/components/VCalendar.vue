<template>
    <div class="input-group">
        <v-date-picker  mode='range' v-model='selectedDate' show-caps>
            <!-- <input type="text" name="message" placeholder="Type Message ..." class="form-control"> -->
        </v-date-picker>
        <span class="input-group-btn">
            <button type="button" @click="calendarClick" class="btn btn-warning btn-flat">Search</button>
        </span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectedDate: {
        start: new Date(2018, 10, 1),
        end: new Date(2018, 10, 1)
      },
      sendDate: {
        start: '',
        end: ''
      }
    }
  },
  methods: {
    calendarClick () {
      this.sendDate.start = this.selectedDate.start.substr(0, 5)
      this.sendDate.end = this.selectedDate.end
      this.$bus.$emit('calendar-eventbus', this.sendDate)
    }
  },
  fliters: {
    calSubstr: function (string) {
      return string.substring(0, 5)
    }
  }
}
</script>
<style>
 input {
     font-size: 16px;
     /* border: 2px; */
     padding: 2px;
     padding-top: 0px;
     }
.input-group{
    position: right;
}     
.btn.btn-warning.btn-flat{
    padding: 4px 10px;
}
.input-group-btn>.btn{
    /* position: right; */
    right: 0px;
}
</style>
