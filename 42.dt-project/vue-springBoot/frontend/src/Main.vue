<template>
  <section class="content">
    <row>
      <div class="col-md-3">
        <div class="box">
          <!-- <div class="box-header with-border">
            <h3 class="box-title">Latest Orders</h3>
          </div> -->
          <div class="box-body">  
           <va-calendar></va-calendar>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="box">
          <div class="box-body">  
            <p class='text-center'>
              <strong>월별 반출입 현황</strong>
            </p>
            <va-chart
              :chart-config='barChartConfig'
            >
            </va-chart>
          </div> 
        </div>   
      </div>
      
      <div class="col-md-3">
        <div class="box">
          <div class="box-body">  
            <p class='text-center'>
              <strong>종류별 비율</strong>
            </p>
            <va-chart
              :chart-config='doughnutChartConfig'
            >
            </va-chart>
          </div>              
        </div>
      </div>

      <div class="col-md-3">
        <div class="box">
          <div class="box-body">  
            <p class='text-center'>
              <strong>오탐률</strong>
            </p>
            <va-chart
              :chart-config='doughnutChartConfig'
            >
            </va-chart>
          </div>              
        </div>
      </div>

    </row>
    <row>
      <div class="col-md-8">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">일자별리스트</h3>
          </div>
         <div class="box-body">
            <div class="table-responsive">
              <table class="table no-margin">
                <thead>
                <tr>
                  <th>일시</th>
                  <th>사업장</th>
                  <th>검출항목</th>
                  <th>항목수</th>
                  <th>경로</th>
                  <th>적중여부</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>2018/10/18 13:00:32</td>
                  <td>판교</td>
                  <td>노트북 가방</td>
                  <td> 1 </td>
                  <td> /image/20181018/pan/<br/>laptop/laptop.jpg </td>
                  <td> Y/N </td>
                </tr>
                
                 <tr>
                  <td>2018/10/18 13:00:32</td>
                  <td>판교</td>
                  <td>노트북 가방</td>
                  <td> 1 </td>
                  <td> /image/20181018/pan/<br/>laptop/laptop.jpg </td>
                  <td> Y/N </td>
                </tr>

                 <tr>
                  <td>2018/10/18 13:00:32</td>
                  <td>판교</td>
                  <td>노트북 가방</td>
                  <td> 1 </td>
                  <td> /image/20181018/pan/<br/>laptop/laptop.jpg </td>
                  <td> Y/N </td>
                </tr>
              
                 <tr>
                  <td>2018/10/18 13:00:32</td>
                  <td>판교</td>
                  <td>노트북 가방</td>
                  <td> 1 </td>
                  <td> /image/20181018/pan/<br/>laptop/laptop.jpg </td>
                  <td> Y/N </td>
                </tr>

                   <tr>
                  <td>2018/10/18 13:00:32</td>
                  <td>판교</td>
                  <td>노트북 가방</td>
                  <td> 1 </td>
                  <td> /image/20181018/pan/<br/>laptop/laptop.jpg </td>
                  <td> Y/N </td>
                </tr>

                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
          </div>
          <!-- /.box-body -->
        </div>  
      </div>
      <div class="col-md-4">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">미리보기</h3>
          </div>
         <div class="box-body">
          <img src="../static/img/photo1.png" class="img-responsive pad">
         </div>
        </div>  
      </div>
    </row>
  </section>
</template>

<script>
import VACalendar from 'widgets/VACalendar.vue'
import VAChart from 'components/VAChart'

export default {
  name: 'hello',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false,
      barChartConfig: {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      },
      doughnutChartConfig: {
        type: 'doughnut',
        data: {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ]
            }]
        },
        options: {
          animation: {
            animateScale: true
          }
        }
      }
    }
  },
  methods: {
    clickBtn () {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
    }
  },
  components: {
    'va-calendar': VACalendar,
    'va-chart': VAChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* img{
  height: 25%;
  width: 25%;
} */
</style>
