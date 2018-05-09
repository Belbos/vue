var Login = {
  template: `
    <div>
      Login Section
      <router-view>
<<<<<<< HEAD
        <form action="/" method="post">
          <div>
              <label for="account">E-mail : </label>
              <input type="email" id="account">
          </div>
          <div>
              <label for="password">Password : </label>
              <input type="password" id="password">
          </div>
        </form>
=======
        
>>>>>>> cff6e360a4ec07a324d821f771541dca6dee3186
      </router-view>
    </div>
  `,
};
var LoginForm = {
  template: `
    <form action="/" method="post">
      <div>
          <label for="account">E-mail : </label>
          <input type="email" id="account">
      </div>
      <div>
          <label for="password">Password : </label>
          <input type="password" id="password">
      </div>
    </form>
  `,
};
var List = {
  template: `
    <div>
      List Section
      <router-view></router-view>
    </div>
  `,
};
var ListItems = {
  template: `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  `,
};

var routes = [
  {
    path: '/login',
    component: Login,
    children: [
      { path: '', component: LoginForm }
    ]
  },
  {
    path: '/list',
    component: List,
    children: [
      { path: '', component: ListItems }
    ]
  }
];

var router = new VueRouter({
  routes
});

var app = new Vue({
  router
}).$mount('#app');
